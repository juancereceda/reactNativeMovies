import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../components/Search/Search";
import Detail from "../components/Detail/Detailed";
import Home from "../components/Home/Home";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookmark from "../components/Bookmark/Bookmark";
import Watched from "../components/Watched/Watched";
import HomeIcon from "../assets/home.png";
import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Redirect } from "react-router-dom";

const Tab = createBottomTabNavigator();

const SearchStack = createStackNavigator();
const WatchedStack = createStackNavigator();
const BookmarkStack = createStackNavigator();

const optionStyles = {
  headerStyle: {
    backgroundColor: "#343a40",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={optionStyles}
      />
      <SearchStack.Screen
        name="Detail"
        component={Detail}
        options={optionStyles}
      />
    </SearchStack.Navigator>
  );
}

function WatchedStackScreen() {
  return (
    <WatchedStack.Navigator>
      <WatchedStack.Screen
        name="Watched"
        component={Watched}
        options={optionStyles}
      />
      <WatchedStack.Screen
        name="Detail"
        component={Detail}
        options={optionStyles}
      />
    </WatchedStack.Navigator>
  );
}

function BookmarkStackScreen() {
  return (
    <BookmarkStack.Navigator>
      <BookmarkStack.Screen
        name="Bookmark"
        component={Bookmark}
        options={optionStyles}
      />
      <BookmarkStack.Screen
        name="Detail"
        component={Detail}
        options={optionStyles}
      />
    </BookmarkStack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Watched") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmark" : "bookmark";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ffc947",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#343a40",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Watched" component={WatchedStackScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkStackScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
