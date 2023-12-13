import React from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box>
      <Flex
        bg={"#edf2f7 "}
        justifyContent={"space-between"}
        flexDirection={"row"}
        padding={"20px"}
      >
        <Text fontSize={"20px"}>Hotels</Text>
        <Flex>
          <Image
            borderRadius="full"
            boxSize="45px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Button ml={"30px"} colorScheme="blue" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
