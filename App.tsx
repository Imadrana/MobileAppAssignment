import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen"; // Import SignUpScreen
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
