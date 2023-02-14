import {NativeBaseProvider} from "native-base";
import Main from "./src/Main";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Main/>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}


