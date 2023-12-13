import React, { useEffect, useState } from "react";
import { Button, Heading, Center, VStack, Input } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import AllRoutes from "../Routes/AllRoutes";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  console.log("auth", auth);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
    }
  }, []);

  return (
    <div>
      {value ? (
        <div>
          <AllRoutes />
        </div>
      ) : (
        <Center mt={"200px"}>
          <VStack>
            <Heading color={"blackAlpha.800"}>Welcome to Recipe App</Heading>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button mt={"10px"} size="lg" colorScheme="teal">
              Login
            </Button>
            <Button boxShadow="lg" mt={"10px"} size="lg" onClick={handleSignin}>
              Sign in with Google
              <FcGoogle style={{ background: "none" }} size={"30px"} />
            </Button>
          </VStack>
        </Center>
      )}
    </div>
  );
};

export default Login;
