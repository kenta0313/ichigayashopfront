import React, { useCallback, useEffect, useState } from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { ButtonGroup } from 'react-native-elements';
import Backbutton from "../../components/Backbutton";
import Movebutton from "../../components/Movebutton";

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
    button :{
        marginLeft:100
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

interface arg1props {
    total: number;
    seattype: string;
    time: string;
    nowtime: string;
    untiltime: string;
    xuntilhour: number;
}
const buttons =['30分', '60分', '90分', '120分', '150分','180分', '210分', '240分', '1日'];
const image = require('../../public/image/個室席.jpg');

export default function Private (date: { navigation: { navigate: (arg0: string, arg1?: arg1props | undefined) => void; }; }) {
    const [time, setTime] = useState<number>();
    const PlessTime = useCallback(
        (index) => {
            setTime(index);
        },
        [],
    );

    const [total, setTotal] = useState(0);
    useEffect(() => {
        if((time !== undefined)){
            if(time === 8){
                return setTotal(2500);
            }else {
                return setTotal(((time + 1) * 300));
            }
        }
    })
    const aboutnow = new Date(Math.ceil(new Date().getTime()/1000/60/5)*1000*60*5);
    const hour = aboutnow.getHours().toString().padStart(2, '0');
    const minutes = aboutnow.getMinutes().toString().padStart(2, '0');
    const nowtime = `${hour}:${minutes}`;
    const until = new Date(aboutnow.getTime());
    if(time !== undefined){
        until.setMinutes(until.getMinutes() + (time + 1) * 30);
    }
    const xuntilhour = until.getHours();
    const untilhour = until.getHours().toString().padStart(2, '0');
    const untilminutes = until.getMinutes().toString().padStart(2, '0');
    const untiltime = `${untilhour}:${untilminutes}`;

    return(
    <View style={styles.container}>
        <View style={styles.image}>
            <Image
                source={image}
                style={{ width: 400, height: 300}}
            />
            <Text style={styles.seattext}>個室席(１人)</Text>
            <Backbutton
                onPress={() => {
                    date.navigation.navigate("席を選ぶ");
                }}
            />
        </View>
        <View style={styles.form}>
                <Text style={styles.formtitle}>時間</Text>
                <ButtonGroup
                    buttons={buttons}
                    containerStyle={styles.buttongroup}
                    selectedIndex={time}
                    onPress={PlessTime}
                />
            {time !== undefined &&
                <Text style={styles.total}>合計金額{total}円(税込)</Text>
            }

            {time !== undefined ?
                <Movebutton
                    style={styles.button}
                    title="お会計へ"
                    onPress={() => {
                        date.navigation.navigate("お会計",
                            {
                                total: total,
                                seattype: "個室席",
                                nowtime: nowtime,
                                untiltime: untiltime,
                                time: buttons[time],
                                xuntilhour: xuntilhour
                            }
                        );
                    }}
                />:
                <Movebutton
                    disabled
                    style={styles.button}
                    title="お会計へ"
                />
            }
        </View>
    </View>
)};
