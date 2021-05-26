import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Seat from "./src/Seat";
import Home from "./src/Home";
import Accounting from "./src/Accounting";
import Private from "./src/seattype/Private";
import Table from "./src/seattype/Table";



//createStackNavigatorを初期化
const Stack = createStackNavigator();

//遷移画面の登録
const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
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
            <Stack.Screen name="テーブル席" component={Table} />
            <Stack.Screen name="個室席" component={Private} />
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