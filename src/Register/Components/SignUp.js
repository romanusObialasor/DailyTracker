import React, { useState } from "react";
import styled from "styled-components";
import SignupPage from "../Component2/SignupPage";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { app } from "../../base";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [toggle, setToggle] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  const onToggle = () => {
    setToggle(!toggle);
  };

  const uplaod = (e) => {
    const file = e.target.files[0];
    const fileRef = URL.createObjectURL(file);
    setImage(fileRef);
  };

  const configure = async () => {
    const auth = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (auth) {
      await app.firestore().collection("users").doc(auth.user.uid).set({
        name: name,
        email: email,
        image: image,
      });
    }

    setName("");
    setEmail("");
    setPassword("");
    setImage("");
    history.push("/dashboard");
  };

  return (
    <Container>
      <Right>
        <Holder>
          <Image src="/images/10.png" />
          <Head>Sign up</Head>
          <Alt>
            Already have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/signIn"
            >
              <span>Sign in</span>
            </Link>
          </Alt>
          <Inputs>
            <Inputer>
              <span>Name</span>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Inputer>
            <Inputer>
              <span>Email</span>
              <Input
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
            <Inputer>
              <span>Image upload</span>
              <Div>
                {image === "" ? <ImageInput htmlFor="img">+</ImageInput> : null}
                <input
                  style={{
                    display: "none",
                  }}
                  type="file"
                  id="img"
                  onChange={uplaod}
                />
                {image === "" ? null : <ImageUpload src={image} />}
              </Div>
            </Inputer>
          </Inputs>
          <ButtonHolder onClick={configure}>Sign up</ButtonHolder>
        </Holder>
      </Right>
      <Left>
        <SignupPage />
      </Left>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1c253c;
  height: 100%;
  display: flex;
`;

const Right = styled.div`
  width: 50%;
  min-height: 100vh;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Holder = styled.div`
  width: auto;
  height: auto;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 50px;
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
const PasswordHolder = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 290px;
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

const ImageInput = styled.label`
  /* width: 350px;
  height: 250px;
  background: #e1e1e1;
  margin-top: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 290px;
  } */

  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: rgba(252, 252, 252, 0.6);
  cursor: pointer;
`;

const ImageUpload = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonHolder = styled.div`
  width: 363px;
  height: 45px;
  display: flex;
  justify-content: center;
  background: #1c253c;
  align-items: center;
  color: white;
  margin-top: 25px;
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

const Div = styled.div`
  margin-top: 10px;
  height: 300px;
  border-radius: 5px;
  position: relative;
  border: 1px dashed rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;
