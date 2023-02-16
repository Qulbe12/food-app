import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const UserAddress = () => {
  const navigation = useNavigation();

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Give your address details
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Street Number</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Street Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>City</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Country</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => {
              navigation.navigate("User's Card Info" as never);
            }}
          >
            Next
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default UserAddress;
