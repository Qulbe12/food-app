import React from 'react';
import {Box, Button, Center, Divider, FormControl, Heading, HStack, Icon, Input, Link, Text, VStack} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const SignUp = () => {

    const navigation = useNavigation()

    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign up here!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={()=>{
                        navigation.navigate("User Info" as never)
                    }}>
                        Sign ip
                    </Button>
                    <Divider />
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="logo-google" />} mt="2" colorScheme="indigo">
                        Sign up with Google
                    </Button>
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="logo-apple" />} mt="2" colorScheme="indigo">
                        Sign up with Apple
                    </Button>
                    <Button variant="subtle"  startIcon={<Icon as={Ionicons} name="md-logo-facebook" />} mt="2" colorScheme="indigo">
                        Sign up with Facebook
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Already have an account.{" "}
                        </Text>
                        <Link onPress={()=>{
                            navigation.navigate("Sign in" as never)
                        }} _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Sign in
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignUp;
