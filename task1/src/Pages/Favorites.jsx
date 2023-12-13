import React from "react";
import { useFavorite } from "../Context/FavoriteContext";
import { Button, Center, Heading, Img, Text } from "@chakra-ui/react";

const Favorites = () => {
  const { favoriteMovies } = useFavorite();

  const handlePlayNow = () => {
    alert("Movie Playing");
  };

  return (
    <div>
      <Heading mt={"40px"} mb={"50px"}>
        Favourites
      </Heading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px",
          padding: "10px",
          width: "90%",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        {favoriteMovies.length === 0 ? (
          <Text fontSize={"20px"}>You don't have favorite movies.</Text>
        ) : (
          favoriteMovies.map((ele, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#8caef5",
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px",
                }}
              >
                <Img
                  src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}
                  alt="img"
                  h={"400px"}
                  w={"100%"}
                />
                <Heading fontSize={"20px"} size="lg">
                  {ele.title}
                </Heading>
                <Text>{ele.release_date}</Text>
                <Center mt={"30px"}>
                  <Button onClick={handlePlayNow}>PLAY NOW</Button>
                </Center>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorites;
