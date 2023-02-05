import React, { useReducer } from "react"
import {
  Divider,
  Form,
  Grid,
  Item,
  Segment,
  Icon,
  Rating,
  Button,
} from "semantic-ui-react"
const initalState = {
  name: "",
  phone: "",
  email: "",
  address: "",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE": {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default:
      return state
  }
}
const Checkout = ({ carts, fruits, setList, setCart }) => {
  const [state, dispatch] = useReducer(reducer, initalState)
  var sum = 0
  const deleteItem = itemIndex => {
    let updatedValue = fruits.map((fruit, index) =>
      itemIndex === index ? { ...fruit, quantity: 0 } : { ...fruit }
    )
    let filteredCart = carts.filter(cart => cart !== itemIndex)
    setList(updatedValue)
    setCart(filteredCart)
  }
  const renderItems = () => {
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
  return (
    <Grid.Row centered>
      <Grid.Column width={14}>
        <Segment as={Grid}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Form>
                <Form.Input
                  label="Name"
                  icon="user outline"
                  iconPosition="left"
                  placeholder="Enter your name"
                  onChange={event => {
                    dispatch({
                      type: "CHANGE_VALUE",
                      value: event.target.value,
                      key: "name",
                    })
                  }}
                ></Form.Input>
                <Form.Input
                  label="Phone"
                  placeholder="Enter your phone number"
                  icon="mobile alternate"
                  iconPosition="left"
                  onChange={event => {
                    dispatch({
                      type: "CHANGE_VALUE",
                      value: event.target.value,
                      key: "phone",
                    })
                  }}
                ></Form.Input>
                <Form.Input
                  label="Email"
                  placeholder="Enter your email"
                  icon={"mail outline"}
                  iconPosition="left"
                  onChange={event => {
                    dispatch({
                      type: "CHANGE_VALUE",
                      value: event.target.value,
                      key: "email",
                    })
                  }}
                ></Form.Input>
                <Form.TextArea
                  label="Address"
                  onChange={event => {
                    dispatch({
                      type: "CHANGE_VALUE",
                      value: event.target.value,
                      key: "address",
                    })
                  }}
                ></Form.TextArea>
              </Form>
            </Grid.Column>
            <Grid.Column width={2}>
              <Divider vertical clearing></Divider>
            </Grid.Column>
            <Grid.Column width={8}>
              <Item.Group divided>
                {renderItems()}
                {renderTotal()}
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}
export default Checkout;