import React from "react";
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
    buttons: {
        flex: 7,
        alignItems: 'center'
    },
    total: {
        fontSize: 50,
        marginTop: 50,
    }
});

const buttons =['30分', '60分', '90分', '120分', '150分'];
const buttons2 =['180分', '210分', '240分', '270分', '300分'];

const Time = (date: { navigation: { navigate: (arg0: string) => void; }; }) => (
    <View style={styles.container}>
        <View style={styles.image}>
            <Image
            source={require('../public/image/テーブル席.jpg')}
            style={{ width: 400, height: 400}}
            />
            <Text style={styles.seattext}>テーブル席(１～２人)</Text>
        </View>
        <View style={styles.buttons}>
            <ButtonGroup
            buttons={buttons}
            containerStyle={{height: 100}}
            />
            <ButtonGroup
            buttons={buttons2}
            containerStyle={{height: 100}}
            />
            <Text　style={styles.total}>合計金額円</Text>
            <Button
            titleStyle={{
                color: "white",
                fontSize: 50,
            }}
            buttonStyle={{
                height: 110,
                width: 400,
                marginTop: 50,
                borderRadius: 20,
            }}
            title="お会計へ"
            onPress={() => {
                date.navigation.navigate("お会計");
            }}
        />
        </View>
    </View>
);

export default Time;