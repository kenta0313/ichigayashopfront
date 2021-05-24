import React, { useState } from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Button, Card } from 'react-native-elements';


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

const image = require('../public/image/テーブル席.jpg');

export default function Seat (date: { navigation: { navigate: (arg0: string) => void; };}) {
    return(
    <View style={styles.container}>
        <View style={styles.tableseat}>
            <Card>
                <Card.Title style={styles.cardtitle}>テーブル席（1～2人）</Card.Title>
                <Image
                    source={image}
                    style={{ width: 400, height: 400}}
                />
                <Text　style={styles.cardtitle}>600円(税込)/時間</Text>
                <Button
                titleStyle={{
                    color: "white",
                    fontSize: 50,
                }}
                buttonStyle={{
                    height: 110,
                    width: 400,
                    marginTop: 10,
                    borderRadius: 20,
                }}
                title="テーブル席"
                onPress={() => {
                    date.navigation.navigate("時間を選択");
                }}
            />
            </Card>
        </View>
        <View style={styles.privateseat}>
        <Card>
                <Card.Title style={styles.cardtitle}>個室席（1人）</Card.Title>
                <Image
                    source={image}
                    style={{ width: 400, height: 400}}
                />
                <Text　style={styles.cardtitle}>600円(税込)/時間</Text>
                <Button
                titleStyle={{
                    color: "white",
                    fontSize: 50,
                }}
                buttonStyle={{
                    height: 110,
                    width: 400,
                    marginTop: 10,
                    borderRadius: 20,
                }}
                title="個室席"
                onPress={() => {
                    date.navigation.navigate("時間を選択");
                }}
            />
            </Card>
        </View>
    </View>
)};
