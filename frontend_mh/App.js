import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View, Alert } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import useLinking from "./navigation/useLinking";
import HomeScreen from "./screens/HomeScreen";
import LandingPage from "./screens/Landingpage";

import RegisteredContextProvider from "./contexts/RegisterContext";

import { notify, initnotify, getToken } from "expo-push-notification-helper";
import { newChannel } from "expo-push-notification-helper";

function tokenOperator() {
  initnotify().then(async (data) => {
    if (data) {
      await getToken();
      console.log(await getToken());
      console.log("token is working so far");
    } else {
      Alert.alert("please grant this app notification permission in settings.");
    }
  });

  async function PNotification() {
    let userID = await getToken();
    console.log("working so far" + (await getToken()));
    const token = await userID;

    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "accept-encoding": "gzip, deflate",
        host: "exp.host",
      },
      body: JSON.stringify({
        to: token,
        title: "Meal Things",
        body: "Time to reenergise those electrolytes",
        largeIcon: "../assets/images/newLogo.png",
        priority: "high",
        sound: "default",
        channelId: "default",
      }),
    })
      .then((response) => response.json())

      .catch((error) => {
        console.log(error);
      });
  }
  setInterval(PNotification, 30000);

  async function RNotification() {
    let userID = await getToken();
    console.log("working so far" + (await getToken()));
    const token = await userID;

    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "accept-encoding": "gzip, deflate",
        host: "exp.host",
      },
      body: JSON.stringify({
        to: token,
        title: "Meal Things",
        body: "Time for a run",
        priority: "high",
        sound: "default",
        channelId: "default",
      }),
    })
      .then((response) => response.json())

      .catch((error) => {
        console.log(error);
      });
  }
  setInterval(RNotification, 1200000);
}
tokenOperator();
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ title: "LandingPage" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
