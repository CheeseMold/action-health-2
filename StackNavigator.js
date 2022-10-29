import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import Second from "./app/screens/Second";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SecondScreen" component={Second} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
