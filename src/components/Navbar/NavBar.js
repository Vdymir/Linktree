import { Navbar, NavbarCenter, NavBarImg, NavBarTitle } from "./navbar-styled";

const NavBar = () => {
  return (
    <Navbar>
      <NavbarCenter>
        <NavBarImg
          src="https://img.icons8.com/color/50/000000/linktree.png"
          alt="Linktree"
        />
        <NavBarTitle>LinkTree</NavBarTitle>
      </NavbarCenter>
    </Navbar>
  );
};

export default NavBar;
