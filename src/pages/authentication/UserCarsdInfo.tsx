import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const UserCardInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
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
            Give your Debit/Credit card credentials
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name On Card</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Card Number</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Expiry Date</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>CCV</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Currency Card Is Billed</FormControl.Label>
              <Input />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => {
                navigation.navigate("Sign in" as never);
              }}
            >
              Next
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default UserCardInfo;
