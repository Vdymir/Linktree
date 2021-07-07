import { Linktree, Header, Links } from "./layout-styled";
import vladimirImg from "../../img/img-vladimir.jpeg";
import Cards from "../Cards/Cards";
import Footer from "../footer/Footer";
const Layout = () => {
  return (
    <>
      <Linktree>
        <Header>
          <img src={vladimirImg} alt="Vladimir Castañeda" loading="lazy" />
          <h3>Vladimir Castañeda</h3>
          <p>Frontend Developer</p>
        </Header>
        <Links>
          <Cards />
        </Links>
        <Footer />
      </Linktree>
    </>
  );
};

export default Layout;
