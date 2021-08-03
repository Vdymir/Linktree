import { Linktree, Links } from "./layout-styled";
import Cards from "../Cards";
import Footer from "../footer/Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <Linktree>
      <Header />
      <Links>
        <Cards />
      </Links>
      <Footer />
    </Linktree>
  );
};

export default Layout;
