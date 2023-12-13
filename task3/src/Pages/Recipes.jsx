import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  const [search, setSearch] = useState("");

  const [cusType, setCusType] = useState("Indian");

  const getData = async (search, cusType) => {
    if (search === "") {
      let res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=0ff2a7c5&app_key=aaf4638ba88fd4fe323009e0cb4e5150&cuisineType=${cusType}&from=0&to=5`
      );

      let data = await res.json();
      setRecipe(data);
    } else {
      let res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=4f78c8d8&app_key=66b268191c2f1491bafcd8291482ff4e&cuisineType=${cusType}&q=${search}&from=0&to=5`
      );
      let data = await res.json();
      setRecipe(data);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    getData(search, cusType);
  }, [search, cusType]);

  console.log("Recipe", recipe);

  return (
    <Box>
      <br />
      <Center>
        <Heading color={"#4285f4"}>Recipes</Heading>
      </Center>
      <br />
      <Box
        display={"flex"}
        flexDirection={{ base: "row", sm: "column", md: "row", lg: "row" }}
        justifyContent={"flex-end"}
        alignContent={"center"}
        alignItems={"center"}
        w="95%"
        m={"auto"}
        gap={"10"}
      >
        <Box>
          <Input
            type="text"
            placeholder="Search Recipe"
            htmlSize={{ base: "50", sm: "30", md: "40", lg: "50" }}
            width="auto"
            bg={"white"}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              Cuisine Type: {cusType}
            </MenuButton>
            <MenuList onClick={(e) => setCusType(e.target.value)}>
              <MenuItem value={"Indian"}>Indian</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
              <MenuItem value={"French"}>French</MenuItem>
              <MenuItem value={"Mexican"}>Mexican</MenuItem>
              <MenuItem value={"Asian"}>Asian</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{
            base: "flex-end",
            lg: "flex-end",
            sm: "center",
            md: "center",
          }}
          alignContent={"center"}
          alignItems={"center"}
          w="95%"
          gap={"10"}
        >
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
        </Box>
      </Box>

      <br />
      <Box
        w="95%"
        margin={"auto"}
        display={"grid"}
        gridTemplateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="30px"
      >
        {recipe &&
          recipe.hits &&
          recipe.hits?.map((el, i) => <RecipeCard key={i} el={el} />)}
      </Box>
    </Box>
  );
};

export default Recipes;
