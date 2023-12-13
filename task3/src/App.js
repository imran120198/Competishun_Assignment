import "./App.css";
import { Box, VStack } from "@chakra-ui/react";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <VStack minHeight="100vh" spacing={0}>
        <Box flex="1" overflow="auto" width="100%">
          <Login />
        </Box>
        <Navbar />
      </VStack>
    </div>
  );
}

export default App;
