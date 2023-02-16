import React from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, View, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";

const UserInfo = () => {

    const navigation = useNavigation()

    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Give your credentials
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>First Name</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Last Name</FormControl.Label>
                        <Input />
                    </FormControl><FormControl>
                    <FormControl.Label>Email Address</FormControl.Label>
                    <Input />
                </FormControl><FormControl>
                    <FormControl.Label>Birthday</FormControl.Label>
                    <Input />
                </FormControl><FormControl>
                    <FormControl.Label>Screen Name</FormControl.Label>
                    <Input />
                </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={()=>{
                        navigation.navigate("User Address" as never)
                    }}>
                        Next
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default UserInfo;
