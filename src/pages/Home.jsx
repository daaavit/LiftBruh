import {ReactComponentElement, useState, useEffect} from "react";
import emailjs from "emailjs-com";
import {
  HomeWrapper,
  InfoWrapper,
  IntroBox,
  SecondIntroBox,
  TextWithVideo,
  FirstIntroHeading,
  FirstIntroText,
  SecondIntroHeading,
  SecondIntroText,
  VideoArea,
  TextForVideo,
  VideoHeading,
  VideoText,
  RightTextForVideo,
  RightVideoHeading,
  RightVideoText,
  RightVideoArea,
  ButtonArea,
  ButtonHeading,
  ButtonText,
  Button,
  ContactBox,
  ContactFromContainer,
  FormWrapper,
  Input,
  StyledTextArea,
  SendButton,
  InfoContainer,
  InfoBox,
  IconWithText,
} from "../ Styles/Home.Styles";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import SideBar from "../components/SideBar";

const Home = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2l3znj",
        "template_ba9y6tb",
        e.target,
        "yUa38DGZ7vuChx03r"
      )
      .then(
        (result) => {
          window.alert(`Success Status: ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const resizeHandler = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
    return size;
  };
  const [height, width] = useWindowSize();

  return (
    <HomeWrapper>
      <SideBar />
      <InfoWrapper>
        <IntroBox>
          <FirstIntroHeading>Do you even lift bruh?</FirstIntroHeading>
          <FirstIntroText>
            THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN
            UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM.
            CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE
            AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.
          </FirstIntroText>
        </IntroBox>
        <SecondIntroBox>
          <SecondIntroHeading>Sed amet aliquam</SecondIntroHeading>
          <SecondIntroText>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </SecondIntroText>
        </SecondIntroBox>
        <TextWithVideo>
          <VideoArea>
            <video
              data-testid="video-asset"
              style={{ width: "100%", height: "100%" }}
              src="https://media.istockphoto.com/videos/man-using-the-kettlebell-video-id1091704926"
              alt="Man using the kettlebel"
              controls={false}
              controlsList="nodownload"
              autoPlay={true}
              loop={true}
            ></video>
          </VideoArea>
          <TextForVideo>
            <VideoHeading>Orci maecenas</VideoHeading>
            <VideoText>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa sed magna lacinia magna pellentesque lorem
              ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
              et sagittis tempus.
            </VideoText>
          </TextForVideo>
        </TextWithVideo>
        <TextWithVideo style={{ background: "#154E50" }}>
          <RightTextForVideo>
            <RightVideoHeading>Rhoncus magna</RightVideoHeading>
            <RightVideoText>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa sed magna lacinia magna pellentesque lorem
              ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
              et sagittis tempus.
            </RightVideoText>
          </RightTextForVideo>
          <RightVideoArea>
            <video
              data-testid="video-asset"
              style={{ width: "100%", height: "100%" }}
              src="https://media.istockphoto.com/videos/building-muscles-one-rep-at-a-time-video-id1007250260"
              alt="Man using the kettlebel"
              controls={false}
              controlsList="nodownload"
              autoPlay={true}
              loop={true}
            ></video>
          </RightVideoArea>
        </TextWithVideo>
        <TextWithVideo>
          <VideoArea>
            <video
              data-testid="video-asset"
              style={{ width: "100%", height: "100%" }}
              src="https://media.istockphoto.com/videos/small-business-concept-many-training-machines-in-an-empty-gym-video-id1227517584"
              alt="Man using the kettlebel"
              controls={false}
              controlsList="nodownload"
              autoPlay={true}
              loop={true}
            ></video>
          </VideoArea>
          <TextForVideo>
            <VideoHeading>Sed nunc ligula</VideoHeading>
            <VideoText>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa sed magna lacinia magna pellentesque lorem
              ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
              et sagittis tempus.
            </VideoText>
          </TextForVideo>
        </TextWithVideo>
        <ButtonArea>
          <ButtonHeading>Massa libero</ButtonHeading>
          <ButtonText>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et
            feugiat tempus.
          </ButtonText>
          <Button>Get Started ></Button>
        </ButtonArea>
        <ContactBox>
          <ContactFromContainer>
            <FormWrapper onSubmit={sendEmail}>
              <Input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name"
              />
              <Input
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Required"
              />
              <Input
                type="tel"
                id="workphone"
                name="workphone"
                //   pattern="[0-9]{3}-[0-9]{3}-[0-9]"
                placeholder="Optional"
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Required"
              />
              <StyledTextArea
                id="message"
                name="message"
                rows="8"
                cols="50"
                placeholder="Your Message..."
              />
              <SendButton>Send</SendButton>
            </FormWrapper>
          </ContactFromContainer>
          <InfoContainer>
            <InfoBox>
              <IconWithText>
                <MdEmail size={30} style={{ color: "white" }} />
                EMAIL
              </IconWithText>
              <IconWithText><a
          style={{ textDecoration: "none", color: "white", margin: "1%" }}
          href="mailto:eklesia.brooklyn@gmail.com"
        >
         information@untitled.tld
        </a></IconWithText>
            </InfoBox>
            <InfoBox>
              <IconWithText>
                <BsTelephoneFill size={30} style={{ color: "white" }} />
                PHONE
              </IconWithText>
              <IconWithText>(000) 000-0000 x12387</IconWithText>
            </InfoBox>
            <InfoBox style={{border: 'none'}}>
              <IconWithText>
                <FaHome size={30} style={{ color: "white" }} />
                ADRESS
              </IconWithText>
              <IconWithText>
                234 Somewhere Road #5432 Nashville, TN 00000 United States of
                America
              </IconWithText>
            </InfoBox>
          </InfoContainer>
        </ContactBox>
      </InfoWrapper>
    </HomeWrapper>
  );
};

export default Home;
