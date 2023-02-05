import React from "react"
import { Item, Button, Grid, Segment, Rating, Icon } from "semantic-ui-react"
import {Link} from "react-router-dom";
const Cart = ({ carts, fruits, setCart, setList }) => {
  var sum = 0
  const deleteItem = itemIndex => {
    let updatedValue = fruits.map((fruit, index) =>
      itemIndex === index ? { ...fruit, quantity: 0 } : { ...fruit }
    )
    let filteredCart = carts.filter(cart => cart !== itemIndex)
    setList(updatedValue)
    setCart(filteredCart)
  }
  const renderItem = () => {
    if (carts.length > 0) {
      return carts.map(cart => {
        sum += parseInt(fruits[cart].price) * parseInt(fruits[cart].quantity)
        return (
          <Item key={cart}>
            <Item.Image src={fruits[cart].image} />
            <Item.Content>
              <Item.Header as="a">{fruits[cart].name}</Item.Header>
              <Item.Meta>
                <Rating icon="star" maxRating={5} defaultRating={3}></Rating>
              </Item.Meta>
              <Item.Extra>
                <Button
                  icon="trash alternate"
                  content="Delete"
                  onClick={() => {
                    deleteItem(cart)
                  }}
                  size="tiny"
                ></Button>
              </Item.Extra>

              <Item.Header style={{ float: "right" }}>
                <Icon name="inr" size="small"></Icon>
                {fruits[cart].price}
              </Item.Header>
            </Item.Content>
          </Item>
        )
      })
    } else {
      return (
        <Item>
          <Item.Content>
            <Item.Header>No Items in the cart</Item.Header>
          </Item.Content>
        </Item>
      )
    }
  }
  const renderTotal = () => {
    return (
      <Item>
        <Item.Content>
          <Item.Header>Total</Item.Header>
          <Item.Header style={{ float: "right" }}>
            <Icon name="inr" size="small"></Icon>
            {sum}
          </Item.Header>
        </Item.Content>
      </Item>
    )
  }
  
const renderCheckout = () => {
  return (
    <Item>
      <Item.Extra>
        {/* <Button floated="right" as={Link} >Checkout</Button> */}
        <Link to="/check-out">
          <Button floated="right">Checkout</Button>
        </Link>
      </Item.Extra>
    </Item>
  )
}
return (
  <Grid.Row centered>
    <Grid.Column width={14}>
      <Segment>
        <Item.Group divided>
          {renderItem()}
          {renderTotal()}
          {renderCheckout()}
        </Item.Group>
      </Segment>
    </Grid.Column>
  </Grid.Row>
)
}
export default Cart
