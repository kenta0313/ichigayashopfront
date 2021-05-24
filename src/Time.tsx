import React, { useState } from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Button, ButtonGroup } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        marginTop: 40,
    },
    seattext: {
        fontSize: 30,
        marginBottom: 20
    },
    image: {
        flex: 5,
        alignItems: 'center'
    },
    form: {
        flex: 7,
    },
    formtitle: {
        fontSize: 40,
        marginLeft: 30,
        marginBottom: 10
    },
    buttongroup: {
        height: 100,
        marginBottom: 20
    },
    total: {
        fontSize: 50,
        marginTop: 10,
        textAlign: "center"
    }
});
const numbers = ['1人', '2人']
const buttons =['30分', '60分', '90分', '120分', '150分','180分', '210分', '240分', '270分', '300分', '1日'];
const image = require('../public/image/テーブル席.jpg');

export default function Time (date: { navigation: { navigate: (arg0: string) => void; }; }) {
    const [number, setNumber] = useState(null);
    const [time, setTime] = useState(null);
    const [total, setTotal] = useState(0);

    return(
    <View style={styles.container}>
        <View style={styles.image}>
            <Image
                source={image}
                style={{ width: 400, height: 400}}
            />
            <Text style={styles.seattext}>テーブル席(１～２人)</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.formtitle}>人数</Text>
            <ButtonGroup
                buttons={numbers}
                containerStyle={styles.buttongroup}
                selectedIndex={number}
                onPress={index => setNumber(index)}
            />
            {number !== null &&
            <>
                <Text style={styles.formtitle}>時間</Text>
                <ButtonGroup
                    buttons={buttons}
                    containerStyle={styles.buttongroup}
                    selectedIndex={time}
                    onPress={index => setTime(index)}
                />
            </>
            }
            {time !== null &&
                <Text style={styles.total}>合計金額600円(税込み)</Text>
            }

            {(number !== null) && (time !== null) ?
                <Button
                    titleStyle={{
                        color: "white",
                        fontSize: 50,
                    }}
                    buttonStyle={{
                        height: 110,
                        width: 400,
                        marginTop: 30,
                        borderRadius: 20,
                    }}
                    title="お会計へ"
                    onPress={() => {
                        date.navigation.navigate("お会計");
                    }}
                />:
                <Button
                    disabled
                    titleStyle={{
                        color: "white",
                        fontSize: 50,
                    }}
                    buttonStyle={{
                        height: 110,
                        width: 400,
                        marginTop: 30,
                        borderRadius: 20,
                    }}
                    title="お会計へ"
                />
            }
        </View>
    </View>
)};