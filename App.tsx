import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Seat from "./src/Seat";
import Home from "./src/Home";
import Time from "./src/Time";
import Accounting from "./src/Accounting";



//createStackNavigatorを初期化
const Stack = createStackNavigator();

//遷移画面の登録
const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"　//最初の画面
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#69b076",
                    height: 100
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 60                },
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="席を選ぶ" component={Seat} />
            <Stack.Screen name="時間を選択" component={Time} />
            <Stack.Screen name="お会計" component={Accounting} />
        </Stack.Navigator>
    );
};

//NavigationContainerで囲む必要があるためfunctionalコンポーネントを使用
export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}