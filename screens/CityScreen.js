// Hassan Mir
import React from "react";
import { View, Text, Image, Button, StyleSheet, Linking } from "react-native";

const CityScreen = ({ city, link }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{city}</Text>
        <Image
            source={city === "Calgary" ? require("../assets/calgary.jpg") : require("../assets/edmonton.jpg")}
            style={styles.image}
        />
        <Button title="Go to City Page" onPress={() => Linking.openURL(link)} />
        <Text style={styles.info}>
            {city === "Calgary"
                ? "The Stampede and Rocky Mountain views have become symbols that define the city of Calgary."
                : "Edmonton gains notoriety from its extensive river valley as well as its massive shopping center."}
        </Text>
    </View>

    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold" },
    image: { width: 300, height: 200, marginVertical: 20 },
    info: { fontSize: 16, textAlign: "center", marginTop: 10 },
});

export default CityScreen;
