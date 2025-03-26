import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../supabase"; // Import Supabase client

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            Alert.alert("Error", "Password must be at least 8 characters long.");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            Alert.alert("Error", "Invalid email or password.");
        } else {
            navigation.navigate("Welcome"); // Redirect to Welcome Screen
        }
    };

    return (
        <View>
            <Text>Sign In</Text>
            <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
            <Button title="Sign In" onPress={handleLogin} />
            <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
    );
};

export default SignInScreen;
