import React from "react";
import { Card, Txt } from "./card-styled";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WorkIcon from "@material-ui/icons/Work";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Cards = () => {
  const handleClick = (url) => {
    window.location.assign(url);
  };
  return (
    <>
      <Card
        color={"#fff"}
        bgcolor={"black"}
        onClick={() => handleClick("https://github.com/Vdymir")}
      >
        <GitHubIcon />
        <Txt>GitHub</Txt>
      </Card>
      <Card color={"#fff"} bgcolor={"#52006A"}>
        <WorkIcon />
        <Txt>Portafolio</Txt>
      </Card>
      <Card
        color={"#fff"}
        bgcolor={"#0A66C2"}
        onClick={() =>
          handleClick("https://www.linkedin.com/in/eduardo-casta%C3%B1ed4/")
        }
      >
        <LinkedInIcon />
        <Txt>LinkedIn</Txt>
      </Card>
      <Card
        color={"#fff"}
        bgcolor={
          "linear-gradient(97deg, rgba(235,0,0,1) 0%, rgba(255,224,0,1) 100%)"
        }
        onClick={() =>
          handleClick("https://www.instagram.com/vladimirsw_cb_/?hl=es-la")
        }
      >
        <InstagramIcon />
        <Txt>Instagram</Txt>
      </Card>
      <Card
        color={"#fff"}
        bgcolor={"#1877f2"}
        onClick={() =>
          handleClick("https://www.facebook.com/vladimir.castaneda.731/")
        }
      >
        <FacebookIcon />
        <Txt>Facebook</Txt>
      </Card>
      <Card
        color={"#fff"}
        bgcolor={"green"}
        onClick={() => handleClick("https://wa.me/qr/MAIHEENXQDURM1")}
      >
        <WhatsAppIcon />
        <Txt>WhatsApp</Txt>
      </Card>
    </>
  );
};

export default Cards;
