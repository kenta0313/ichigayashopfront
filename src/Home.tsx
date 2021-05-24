import React from "react";
import {StyleSheet, View, Text } from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    title : {
        fontSize: 80,
        marginTop:150,
    },
    image: {
        width: "100%",
        height: "100%",
    }
});


export default function Home (date: { navigation: { navigate: (arg0: string) => void; }; }) {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>いらっしゃいませ！</Text>
        <Button
            titleStyle={{
                color: "white",
                fontSize: 50,
            }}
            buttonStyle={{
                height: 110,
                width: 400,
                marginTop: 40,
                borderRadius: 20,
            }}
            title="席を選ぶ"
            onPress={() => {
                date.navigation.navigate("席を選ぶ");
            }}
        />
    </View>
)};