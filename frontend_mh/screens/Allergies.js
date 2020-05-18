import React from "react";

import Allergies from "../components/Allergies";

export default function AllergiesScreen({ navigation, route }) {
  const { data } = route.params;

  function onSubmit(preferences) {
    data["food_prefs_exc"] = preferences;
    console.log("data in allergies", data);
    navigation.navigate("Preferences", { data });
  }

  return (
    <Allergies onSubmit={onSubmit} onBackClick={() => navigation.goBack()} />
  );
}
