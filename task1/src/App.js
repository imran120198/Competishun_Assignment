import "./App.css";
import Navbar from "./Components/Navbar";
import { FavoriteProvider } from "./Context/FavoriteContext";
import { WatchlistProvider } from "./Context/WatchlistContext";
import Login from "./Pages/Login";
import { Box, VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <VStack minHeight="100vh" spacing={0}>
        <Box flex="1" overflow="auto" width="100%">
          <WatchlistProvider>
            <FavoriteProvider>
              <Login />
            </FavoriteProvider>
          </WatchlistProvider>
        </Box>
        <Navbar />
      </VStack>
    </div>
  );
}

export default App;
