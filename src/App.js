import React, { useReducer, useState, } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Card, Grid } from "semantic-ui-react";
import { Route, Routes,useParams } from "react-router-dom";
import { PrivateRoute } from "./components/Route/PrivateRoute";
import ThemeContext from "./context/ThemeContext";
import Detail from "./components/Detail/Detail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
const initialState = {
  fruitObjects: [],
  carts: [],
  count: 0,
};
var fruitObjects = [
  {
    name: "Banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    price: 12,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Grapes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
    weight: 0.1,
    price: 45,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Pineapple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
    price: 35,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    price: 12,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Grapes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
    weight: 0.1,
    price: 45,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Pineapple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
    price: 35,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    price: 12,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Grapes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
    weight: 0.1,
    price: 45,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Pineapple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
];
const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_LIST": {
      return {
        ...state,
        fruitObjects: actions.value,
      };
    }
    case "SET_CART": {
      return {
        ...state,
        carts: actions.value,
      };
    }
    case "SET_VALUE":{
      return{
        ...state,
        [actions.key]:actions.value,

      };
    }
    default:
      break;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const params = useParams()
   
    if (state.fruitObjects.length === 0) {
      dispatch({ type: "SET_VALUE", value: fruitObjects, key: "fruitObjects" });
    }
  
  const renderCards = () => {
    return (
      <Grid
        style={
          isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>

        <Cards
          List={state.fruitObjects}
          carts={state.carts}
          setList={List => {
            //dispatch({ type: "SET_LIST", value: List });
            dispatch({type:"SET_VALUE", value : List,key:"fruitObjects"})
          }}
          setCarts={(cart) => {
           // dispatch({ type: "SET_CART", value: cart });
           dispatch({type:"SET_VALUE", value : cart,key:"carts"})
          }}
        ></Cards>
      </Grid>
    );
  };
  const renderDetail = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>

        <Detail
          fruits={state.fruitObjects}
          carts={state.carts}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCarts={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Detail>
      </Grid>
    )
  }
  const renderCart = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>
        <Cart
          carts={state.carts}
          fruits={state.fruitObjects}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCart={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Cart>
      </Grid>
    )
  }
  const renderCheckout = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>
        <Checkout
          carts={state.carts}
          fruits={state.fruitObjects}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCart={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Checkout>
      </Grid>
    )
  }
  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/shop"
          element={<PrivateRoute>{renderCards()}</PrivateRoute>}
        ></Route>
        <Route
          path="/detail/:fruitId"
          element={<PrivateRoute>{renderDetail()}</PrivateRoute>}
        ></Route>
        <Route path="/cart" element={<PrivateRoute>{renderCart()}</PrivateRoute>}></Route>
        <Route path="/check-out"
        element={<PrivateRoute>{renderCheckout()}</PrivateRoute>}
        ></Route>
      </Routes>
    </ThemeContext.Provider>
  );
}
export default App 
