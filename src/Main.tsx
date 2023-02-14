import React from 'react';
import SignIn from "./account/signIn";
import { createStackNavigator } from "@react-navigation/stack";
import UserAddress from "./account/UserAddress";
import UserInfo from "./account/UserInfo";
import UserCardInfo from "./account/UserCarsdInfo";

const Main = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName={"Sign in"}>
    <Stack.Screen name="Sign in" options={{title: "Sign In", headerTitleAlign: "center"}} component={SignIn}/>
    <Stack.Screen name="User Address" options={{title: "User Address", headerTitleAlign: "center"}} component={UserAddress}/>
    <Stack.Screen name="User Info" options={{title: "User Info", headerTitleAlign: "center"}} component={UserInfo}/>
    <Stack.Screen name="User's Card Info" options={{title: "User's Card Info", headerTitleAlign: "center"}} component={UserCardInfo}/>
        </Stack.Navigator>
    );
};

export default Main;
