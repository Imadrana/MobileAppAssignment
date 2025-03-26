import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../supabase";

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async () => {
        if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email.");
            return;
        }

        if (password.length < 8) {
            Alert.alert("Error", "Password must be at least 8 characters long.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        if (data.user) {
            await supabase.from("user_details").insert([
                { UUID: data.user.id, first_name: firstName, last_name: lastName, email },
            ]);
            navigation.navigate("SignInScreen");
        }
    };

    return (
        <View>
            <Text>Sign Up</Text>
            <TextInput placeholder="First Name" onChangeText={setFirstName} />
            <TextInput placeholder="Last Name" onChangeText={setLastName} />
            <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
            {error && <Text>{error}</Text>}
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;
