/*FK*/
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CityScreen from "./CityScreen";

const Tab = createBottomTabNavigator();

const WelcomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calgary">
        {() => (
          <CityScreen city="Calgary" link="https://www.calgary.ca/home.html" />
        )}
      </Tab.Screen>
      <Tab.Screen name="Edmonton">
        {() => <CityScreen city="Edmonton" link="https://www.edmonton.ca/" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default WelcomeScreen;
