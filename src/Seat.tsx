import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Card } from 'react-native-elements';
import Movebutton from "../components/Movebutton";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
    },
    tableseat: {
        flex: 1,
        alignItems: "center",
        width: "50%"
    },
    privateseat: {
        flex: 1,
        alignItems: "center",
    },
    cardtitle: {
        fontSize: 40,
        textAlign: "center"
    }
});

const table = require('../public/image/テーブル席.jpg');
const privateimage = require('../public/image/個室席.jpg');

export default function Seat (date: { navigation: { navigate: (arg0: string) => void; };}) {
    return(
    <View style={styles.container}>
        <View style={styles.tableseat}>
            <Card>
                <Card.Title style={styles.cardtitle}>テーブル席</Card.Title>
                <Image
                    source={table}
                    style={{ width: 400, height: 300}}
                />
                <Text style={styles.cardtitle}>30分 300(税込)/人</Text>
                <Movebutton
                    title="テーブル席"
                    onPress={() => {
                        date.navigation.navigate("テーブル席");
                    }}
                />
            </Card>
        </View>
        <View style={styles.privateseat}>
        <Card>
                <Card.Title style={styles.cardtitle}>個室席</Card.Title>
                <Image
                    source={privateimage}
                    style={{ width: 400, height: 300}}
                />
                <Text　style={styles.cardtitle}>30分 300円(税込)/人</Text>
                <Movebutton
                    title="個室席"
                    onPress={() => {
                        date.navigation.navigate("個室席");
                    }}
                />
            </Card>
        </View>
    </View>
)};
