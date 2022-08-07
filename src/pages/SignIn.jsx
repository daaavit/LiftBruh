import React from "react";
import {
  MainWrapper,
  SignInBox,
  Heading,
  InputArea,
  InputBox,
  IconBox,
  UniInputBox,
  PassOptions,
  RemeberMe,
  ForgotPass,
  SignInButton,
  CreateAccountBox,
  TextForCreateAcount,
  IconBoxesForAccounts,
  IconsForAccounts,
} from "../ Styles/SignIn.Styles"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";



const SignIn = () => {
  return (
    <MainWrapper>
      <SignInBox>
        <Heading>Sign In</Heading>
        <InputArea>
          <InputBox>
            <IconBox>
              <MdEmail size={20} style={{color: 'white'}}/>
            </IconBox>
            <UniInputBox placeholder="example@yahoo.com"></UniInputBox>
          </InputBox>
          <InputBox>
            <IconBox>
              <RiLockPasswordFill size={20} style={{color: 'white'}}/>
            </IconBox>
            <UniInputBox placeholder="Password" type="password"></UniInputBox>
          </InputBox>
        </InputArea>
        <PassOptions>
          <RemeberMe>
            <input type="checkbox" />
            Remeber Me
          </RemeberMe>
          <ForgotPass>Forgot Pass?</ForgotPass>
        </PassOptions>
        <SignInButton>Sign In</SignInButton>
        <CreateAccountBox>
          <TextForCreateAcount>or login with</TextForCreateAcount>
          <IconBoxesForAccounts>
            <IconsForAccounts>
              <AiFillGoogleCircle size={30} style={{color: 'white'}} />
            </IconsForAccounts>
            <IconsForAccounts>
              <AiFillFacebook size={30} style={{color: 'white'}}/>
            </IconsForAccounts>
            <IconsForAccounts>
              <AiFillTwitterCircle size={30}  style={{color: 'white'}}/>
            </IconsForAccounts>
          </IconBoxesForAccounts>
        </CreateAccountBox>
        <TextForCreateAcount>Not registred?<span style={{fontWeight:"bold", cursor: 'pointer', }}>Create account</span></TextForCreateAcount>
      </SignInBox>
    </MainWrapper>
  );
};

export default SignIn;