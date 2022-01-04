import React from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SignupPage from "../Component2/SignupPage";
import { Link } from "react-router-dom";
import { app } from "../../base";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [toggle, setToggle] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const onToggle = () => {
    setToggle(!toggle);
  };

  const configure = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    history.push("/dashboard");
  };

  return (
    <Container>
      <Right>
        <Holder>
          <Image src="/images/10.png" />
          <Head>Sign in</Head>
          <Alt>
            Don't have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/signUp"
            >
              <span>Sign up</span>
            </Link>
          </Alt>
          <Inputs>
            <Inputer>
              <span>Email</span>
              <Input
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Inputer>
            <PasswordInputer>
              <span>Password</span>
              {toggle ? (
                <PasswordHolder>
                  <PasswordInput
                    type="text"
                    placeholder="**************"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <AiFillEyeInvisible
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      marginRight: "5px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={onToggle}
                  />
                </PasswordHolder>
              ) : (
                <PasswordHolder>
                  <PasswordInput
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="**************"
                  />
                  <AiFillEye
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      marginRight: "5px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={onToggle}
                  />
                </PasswordHolder>
              )}
            </PasswordInputer>
          </Inputs>
          <ButtonHolder onClick={configure}>Sign in</ButtonHolder>
        </Holder>
      </Right>
      <Left>
        <SignupPage />
      </Left>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1c253c;
  display: flex;
`;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Holder = styled.div`
  width: auto;
  height: auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 50px;
  margin-top: 20px;
`;

const Head = styled.div`
  margin-top: 15px;
  font-size: 35px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

const Alt = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 16px;
  margin-top: 5px;
  span {
    color: #377dff;
    cursor: pointer;
  }
`;

const Inputs = styled.div`
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Inputer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  background: transparent;
  padding-left: 10px;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;

const ButtonHolder = styled.div`
  width: 363px;
  height: 45px;
  display: flex;
  justify-content: center;
  background: #1c253c;
  align-items: center;
  color: white;
  margin-top: 50px;
  border-radius: 50px;
  cursor: pointer;
  opacity: 1;
  transition: 250ms;
  :hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;

const Left = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PasswordHolder = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const PasswordInputer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;

const PasswordInput = styled.input`
  width: 320px;
  height: 45px;
  background: transparent;
  padding-left: 10px;
  outline: none;
  border: none;
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;
// const Holder = styled.div``
