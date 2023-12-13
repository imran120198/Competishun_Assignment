import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <Center>
        <Box className={styles.navbar}>
          <Button variant="ghost" bg="transparent">
            <Link to="/">Movies</Link>
          </Button>
          <Button variant="ghost" bg="transparent">
            <Link to="/favourites">Favourites</Link>
          </Button>
          <Button variant="ghost" bg="transparent">
            <Link to="/watchlist">Watchlist</Link>
          </Button>
        </Box>
      </Center>
    </div>
  );
};

export default Navbar;
