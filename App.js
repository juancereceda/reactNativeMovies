import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./store/store";
import LoadingScreen from "./components/Loading/LoadingView";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
//navigation poptotop => manda al primero en la call stack

export default function App() {
  const [loading, setLoading] = useState(true);
  console.disableYellowBox = true;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer initialRouteName="Home">
          <Tabs />
        </NavigationContainer>
      )}
    </Provider>
  );
}
