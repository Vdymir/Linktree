import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WorkIcon from "@material-ui/icons/Work";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const textColors = {
  white: "#ffffff",
};

export const cardsLinks = [
  {
    txt: "Github",
    url: "https://github.com/Vdymir",
    textColor: textColors.white,
    bgColor: "#000",
    IconComponent: <GitHubIcon />,
  },
  {
    txt: "Portafolio",
    url: "/",
    textColor: textColors.white,
    bgColor: "#52006A",
    IconComponent: <WorkIcon />,
  },
  {
    txt: "LinkedIn",
    url: "https://www.linkedin.com/in/eduardo-casta%C3%B1ed4/",
    textColor: textColors.white,
    bgColor: "#0A66C2",
    IconComponent: <LinkedInIcon />,
  },
  {
    txt: "Instagram",
    url: "https://www.instagram.com/vladimirsw_cb_/?hl=es-la",
    textColor: textColors.white,
    bgColor:
      "linear-gradient(97deg, rgba(235,0,0,1) 0%, rgba(255,224,0,1) 100%)",
    IconComponent: <InstagramIcon />,
  },
  {
    txt: "Facebook",
    url: "https://www.facebook.com/vladimir.castaneda.731/",
    textColor: textColors.white,
    bgColor: "#1877f2",
    IconComponent: <FacebookIcon />,
  },
  {
    txt: "WhatsApp",
    url: "https://wa.me/qr/MAIHEENXQDURM1",
    textColor: textColors.white,
    bgColor: "green",
    IconComponent: <WhatsAppIcon />,
  },
];
