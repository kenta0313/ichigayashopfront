import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Movebutton from "../components/Movebutton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    title: {
        fontSize: 70,
        marginTop:150
    },
    total: {
        fontSize: 80,
        marginTop: 20
    }
});

export default function Accounting (date: { navigation: { navigate: (arg0: string) => void; }; route: { params: { total: number; seattype: string }; } }) {
    const {total} = date.route.params;
    const {seattype} = date.route.params;

    return(
    <View style={styles.container}>
        <Text  style={styles.title}>{seattype}</Text>
        <Text style={styles.total}>合計金額{total}円</Text>
        <Movebutton
            title="ホームへ"
            onPress={() => {
                date.navigation.navigate("Home");
            }}
        />
    </View>
)};