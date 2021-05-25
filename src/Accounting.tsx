import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Movebutton from "../components/Movebutton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    title : {
        fontSize: 80,
        marginTop:150
    },



});

export default function Accounting (date: { navigation: { navigate: (arg0: string) => void; }; }) {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>合計金額600円</Text>
        <Movebutton
            title="ホームへ"
            onPress={() => {
                date.navigation.navigate("Home");
            }}
        />
    </View>
)};