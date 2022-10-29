import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>This is home</Text>
            <StatusBar style="dark" />
            <Button
                onPress={() => {
                    navigation.navigate("SecondScreen");
                }}
                title={"Second Screen"}
            />
        </SafeAreaView>
    );
};

export default Home;
