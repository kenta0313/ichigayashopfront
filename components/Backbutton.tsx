import React from "react";
import {GestureResponderEvent} from "react-native";
import { Button } from 'react-native-elements';

interface Backbuttonprops {
    onPress: ((event: GestureResponderEvent) => void) | undefined ;
}

export default function Backbutton(props: Backbuttonprops) {
    return (
        <Button
                title="戻る"
                titleStyle={{
                    color: "white",
                    fontSize: 50,
                }}
                buttonStyle={{
                    height: 110,
                    width: 260,
                    borderRadius: 20,
                    backgroundColor: "#ff5622"

                }}
                onPress={props.onPress}
            />
    )
}