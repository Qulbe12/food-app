import React from 'react';
import {
    Box,
    Button,
    Center,
    Divider,
    FormControl,
    Heading,
    HStack,
    Icon,
    Input,
    Link, ScrollView,
    Text,
    VStack
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const SignIn = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={()=>{
                        navigation.navigate("User Info" as never)
                    }}>
                        Sign in
                    </Button>
                    <Divider />
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="logo-google" />} mt="2" colorScheme="indigo">
                        Sign in with Google
                    </Button>
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="logo-apple" />} mt="2" colorScheme="indigo">
                        Sign in with Apple
                    </Button>
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="md-logo-facebook" />} mt="2" colorScheme="indigo">
                        Sign in with Facebook
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link onPress={()=>{
                            navigation.navigate("SignUp" as never)
                        }} _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
        </ScrollView>
    );
};

export default SignIn;
