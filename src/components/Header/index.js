import { HeaderStyled, HeaderImg, HeaderTitle } from "./header-styled";
import vladimirImg from "../../img/img-vladimir.jpeg";

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderImg
        src={vladimirImg}
        alt="Vladimir Castañeda"
        loading="lazy"
        draggable="false"
      />
      <HeaderTitle>Vladimir Castañeda</HeaderTitle>
      <p>Frontend Developer</p>
    </HeaderStyled>
  );
}
