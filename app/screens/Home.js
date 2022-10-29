import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/colorEffect.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-main.png")}
                />

                {/* <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 40,
                        color: "#06283D",
                    }}
                >
                    ActionHealth
                </Text> */}
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.loginContainer}>
                    <Button
                        title={"Entrar"}
                        color={"000"}
                        style={styles.loginButton}
                        onPress={() => {
                            navigation.navigate("SecondScreen");
                        }}
                    />
                </View>
                <View style={styles.registerContainer}>
                    <Button
                        title={"Criar Conta"}
                        color={"#000"}
                        style={styles.registerButton}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        borderRadius: 20,
        width: 150,
        height: 70,
        backgroundColor: "#1D1CE5",
        margin: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    registerContainer: {
        borderRadius: 20,
        width: 150,
        height: 70,
        backgroundColor: "#7978FF",
        margin: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    logo: {
        width: 150,
        height: 150,
        position: "absolute",
        top: 70,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    buttonContainer: {},
    registerButton: {
        alignSelf: "center",
    },
    loginButton: {
        alignSelf: "center",
    },
});

export default Home;
