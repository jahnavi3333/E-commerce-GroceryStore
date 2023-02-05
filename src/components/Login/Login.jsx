import React, { useState } from "react";
import {
  Grid,
  Header,
  Segment,
  Image,
  Form,
  Input,
  GridRow,
  Message,
  Button,
} from "semantic-ui-react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("9972057677");
  const [otp, setOTP] = useState("123");
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("isAuthenticated"));
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault()
    if (otp === "123" && phoneNumber === "9972057677") {
      Cookies.set("isAuthenticated", true, { expires: 7 });
      Cookies.set("phoneNumber", phoneNumber, { expires: 7 });
      Cookies.set("otp", otp, { expires: 7 });
      setIsAuthenticated(isAuthenticated, true);
      navigate("/shop");
    }
  }
  if (Cookies.get("isAuthenticated")) {
    navigate("/shop");
    return <></>
  }
  return (
    <Grid style={{ height: "99vh" }} verticalAlign="middle">
      <Grid.Row centered>
        <Grid.Column width="5" verticalAlign="middle">
          <Header as={"h2"} style={{ color: "#ff8c00" }}>
            <Image src="images/logo.jpg" />
            Log-in
          </Header>
          <Form size="large">
            <Segment color="red">
              <Form.Input
                fluid
                icon={"mobile alternate"}
                iconPosition="left"
                placeholder="Phone number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
                value={phoneNumber}
              ></Form.Input>
              <Form.Input
                icon={"key"}
                fluid
                iconPosition="left"
                placeholder="OTP"
                onChange={(event) => {
                  setOTP(event.target.value);
                }}
                value={otp}
              ></Form.Input>
              <Button color={"orange"} onClick={onSubmit}>
                {" "}
                Login
              </Button>
            </Segment>
          </Form>
          <Message info>
            New to us ? <a href="#">Signup</a>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Login;
