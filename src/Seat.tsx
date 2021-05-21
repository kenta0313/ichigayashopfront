import React, { useState } from "react";
import {StyleSheet, View, Text, Modal, Alert, Pressable} from "react-native";
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const Seat = (date: { navigation: { navigate: (arg0: string) => void; }; }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
    <View style={styles.container}>
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
            title="テーブル席"
            onPress={() => {
                date.navigation.navigate("時間を選択");
            }}
        />
    </View>
)};

export default Seat;