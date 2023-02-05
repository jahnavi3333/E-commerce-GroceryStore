import React, { useContext, useEffect, useState } from "react";
import "./Cards.css";
import {
  Icon,
  Button,
  Grid,
  Loader,
  Segment,
  Image,
  Header,
  Rating,
  Card,
} from "semantic-ui-react";
import ThemeContext from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
const Cards = ({ List, setList, carts,setCarts }) => {
  const isDarkTheme = useContext(ThemeContext);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const renderFruits = () => {
    let renderedFruits = "";
    if (isLoading === false) {
      renderedFruits = List.map((value, index) => {
        return (
          <Grid.Column width={"4"} key={index}>
            <Segment as={Grid} inverted={isDarkTheme}>
              <Grid.Row
                onClick={() => {
                  navigate("/detail/" + index);
                }}
              >
                <Grid.Column width={16}>
                  <Image src={value.image} wrapped ui fluid></Image>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" inverted={isDarkTheme}>
                    {value.name}
                  </Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                  <Header as="h4" inverted={isDarkTheme}>
                    ₹{value.price}
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Rating icon="star" defaultRating={3} maxRating={5} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Button
                    fluid
                    inverted={isDarkTheme}
                    positive
                    basic={value.quantity === 0}
                    onClick={() => {
                      if (value.quantity === 0) addItemToCart(index);
                    }}
                  >
                    {value.quantity === 0 ? "Add to Cart" : "Added to Cart"}
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        );
      });
    } else {
      return (
        <Grid.Column width={16} textAlign="center">
          <Loader active inline>
            Loading...
          </Loader>
        </Grid.Column>
      );
    }

    return renderedFruits;
  };
  const setLike = (likedItemIndex) => {
    let updatedValue = List.map((value, index) =>
      likedItemIndex === index
        ? { ...value, isLiked: !value.isLiked }
        : { ...value }
    );
    setList(updatedValue);
  };
  const addItemToCart = (itemIndex) => {
    let updatedValue = List.map((value, index) =>
      itemIndex === index
        ? { ...value, quantity: value.quantity + 1 }
        : { ...value }
    );
    setList(updatedValue);
    setCarts([...carts, itemIndex]);
  };
  useEffect(() => {
    if (List.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  return <Grid.Row columns={"4"}>{renderFruits()}</Grid.Row>;
};
export default Cards;
