import React from 'react';
import SignIn from "./account/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import UserAddress from "./account/UserAddress";
import UserInfo from "./account/UserInfo";
import UserCardInfo from "./account/UserCarsdInfo";
import SignUp from "./account/SignUp";

const Main = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName={"Sign in"}>
    <Stack.Screen name="Sign in" options={{title: "Sign In", headerTitleAlign: "center"}} component={SignIn}/>
    <Stack.Screen name="User Address" options={{title: "User Address", headerTitleAlign: "center"}} component={UserAddress}/>
    <Stack.Screen name="User Info" options={{title: "User Info", headerTitleAlign: "center"}} component={UserInfo}/>
    <Stack.Screen name="User's Card Info" options={{title: "User's Card Info", headerTitleAlign: "center"}} component={UserCardInfo}/>
    <Stack.Screen name="SignUp" options={{title: "Sign Up", headerTitleAlign: "center"}} component={SignUp}/>
        </Stack.Navigator>
    );
};

export default Main;
