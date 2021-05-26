import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Button } from 'react-native-elements';

interface Movebuttonprops {
    style?: StyleProp<ViewStyle>;
    disabled?: boolean | undefined;
    title: string;
    onPress?: () => void;
}

export default function Movebutton(props: Movebuttonprops) {
    return (
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
            title={props.title}
            onPress={props.onPress}
            disabled={props.disabled}
            style={props.style}
        />
    )
}