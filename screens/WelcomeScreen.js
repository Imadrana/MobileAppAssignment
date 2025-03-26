import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CityScreen from "./CityScreen";
import { supabase } from "../supabase"; // Import Supabase

const Tab = createBottomTabNavigator();

const WelcomeScreen = ({ navigation }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigation.navigate("SignInScreen"); // Redirect to Sign-in page after logout
    };

    return (
        <View style={{ flex: 1 }}>
            {user ? <Text>Welcome, {user.email}!</Text> : <Text>Loading user info...</Text>}
            <Button title="Sign Out" onPress={handleSignOut} />

            <Tab.Navigator>
                <Tab.Screen name="Calgary">
                    {() => <CityScreen city="Calgary" link="https://www.calgary.ca/home.html" />}
                </Tab.Screen>
                <Tab.Screen name="Edmonton">
                    {() => <CityScreen city="Edmonton" link="https://www.edmonton.ca/" />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default WelcomeScreen;
