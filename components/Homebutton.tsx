import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Button } from 'react-native-elements';

interface Movebuttonprops {
    style?: StyleProp<ViewStyle>;
    disabled?: boolean | undefined;
    title: string;
    onPress?: () => void;
}

export default function Homebutton(props: Movebuttonprops) {
    return (
        <Button
            titleStyle={{
                color: "white",
                fontSize: 50,
            }}
            buttonStyle={{
                height: 70,
                width: 250,
                marginTop: 170,
                borderRadius: 20,
                marginRight: 760
            }}
            title={props.title}
            onPress={props.onPress}
            disabled={props.disabled}
            style={props.style}
        />
    )
}