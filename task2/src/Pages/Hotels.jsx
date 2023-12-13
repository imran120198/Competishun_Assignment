import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, useToast, Input, Heading } from "@chakra-ui/react";
import Cards from "../Components/Cards";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const toast = useToast();
  const nav = useNavigate();
  const fetchData = async () => {
    try {
      let res = await fetch("https://json-server-zzk4.onrender.com/hotels");
      let data1 = await res.json();
      setHotels(data1);
    } catch (err) {
      console.log("err:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <Heading mb={"30px"}>Hotels App</Heading>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={5}
        justifyContent={"center"}
        alignItems={"baseline"}
        w={"90%"}
        m={"auto"}
      >
        <Input
          w={"60%"}
          value={search}
          onChange={handleSearchChange}
          placeholder="Search hotels..."
          mb={4}
        />
        <Button onClick={handleLogout} colorScheme="red">
          Logout
        </Button>
      </Box>
      <Box
        w="95%"
        margin={"auto"}
        display={"grid"}
        gridTemplateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="30px"
      >
        {filteredHotels.map((hotel, index) => (
          <Cards key={index} el={hotel} />
        ))}
      </Box>
    </div>
  );
};

export default Hotels;
