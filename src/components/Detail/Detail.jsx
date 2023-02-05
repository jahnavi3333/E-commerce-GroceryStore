import React from "react";
import { useParams } from "react-router";
import { Button, Grid,Header,Label,Segment,Image,Rating} from "semantic-ui-react";
class Detail extends React.Component{
    constructor(){
        super()
        this.state={
            fruit:{},
        }
    }
    render() {
        if (this.state.fruit && this.state.fruit.image) {
          return (
            <Grid.Row centered>
              <Grid.Column width={10}>
                <Segment as={Grid}>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Image src={this.state.fruit.image} size="medium"></Image>
                    </Grid.Column>
                    <Grid.Column as={Grid} width={10}>
                      <Grid.Row>
                        <Grid.Column>
                          <Header as="h2">{this.state.fruit.name}</Header>
                          <Rating icon="star" defaultRating={3} maxRating={5}></Rating>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={4}>
                          <Label size="big">₹ {this.state.fruit.price}</Label>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Button
                            fluid
                            // inverted={isDarkTheme}
                            positive
                            basic={this.state.fruit.quantity === 0}
                            onClick={() => {
                              if (this.state.fruit.quantity === 0)
                                this.addItemToCart(parseInt(this.props.params.fruitId))
                            }}
                          >
                            {this.state.fruit.quantity === 0
                              ? "Add to Cart"
                              : "Added to Cart"}
                          </Button>{" "}
                        </Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          )
        }
      }
      addItemToCart = itemIndex => {
        let updatedValue = this.props.fruits.map((value, index) =>
          itemIndex === index ? { ...value, quantity: value.quantity + 1 } : { ...value }
        )
    
        this.props.setList(updatedValue)
        this.props.setCarts([...this.props.carts, itemIndex])
      }
      static getDerivedStateFromProps(props, state) {
        return { fruit: props.fruits[parseInt(props.params.fruitId)] }
      }
    }
    export default props => <Detail {...props} params={useParams()}></Detail>