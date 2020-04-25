import React, { useState } from "react";

import pois from "../../data/digbethPois";
import usePoiFilter from "../../utils/hooks/usePoiFilter";

const PoiContext = React.createContext();

const PoiContextProvider = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState({
    categories: ["Building", "Market", "Event", "Culture", "FoodDrink"],
    nameSearch: ""
  });
  const [filteredPois, setFilteredPois] = useState(
    usePoiFilter(pois, searchTerms)
  );
  const [directionsData, setDirectionData] = useState(null);
  const [searching, setSearch] = useState(false);

  const setSearchAndFilter = newSearchTerms => {
    setSearchTerms(prevState => ({ ...prevState, ...newSearchTerms }));
    setFilteredPois(usePoiFilter(pois, newSearchTerms));
  };

  const setDestination = destination => {
    setDirectionData(prevProps => {
      if (
        prevProps &&
        destination &&
        prevProps.latitude === destination.latitude
      ) {
        return null;
      }
      return destination;
    });
  };

  const setSearching = () => setSearch(!searching);

  return (
    <PoiContext.Provider
      value={[
        {
          pois: pois,
          filteredPois: filteredPois,
          searchTerms: searchTerms,
          directionsData: directionsData,
          searching: searching
        },
        { setSearchAndFilter, setDestination, setSearching }
      ]}
    >
      {children}
    </PoiContext.Provider>
  );
};

export { PoiContext, PoiContextProvider };