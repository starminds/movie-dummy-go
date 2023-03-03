import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBed,
  faBrain,
  faClose,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: 0.5s;
  background-color: ${(props) => props.bgcolor};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  position: relative;
  z-index: 10;
  a {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
const MenWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Menu = styled.div`
  margin-left: 100px;
  font-size: 20px;
  font-weight: 500;
  p{
    color: ${mainStyle.mainColor};
  }
  
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

const MoMenu = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const MoMmenu = styled.ul`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${(props) => props.leftResult};
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  li {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 100px;
    &:nth-child(1) {
      font-size: 24px;
    }
  }
`;

const MenuBtn = styled.div`
  font-size: 25px;
`;
const CloseBtn = styled.li`
  position: absolute;
  font-size: 25px;
  top: 27px;
  right: 20px;
  z-index: 10;
`;

export const Header = () => {
  const [bg, setBg] = useState("transparent");
  const [left, setleft] = useState("100%");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct > 500) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgcolor={bg}>
      <Logo>
        <Link to={"/"}><p>M-movie</p></Link>
      </Logo>

      <MenWrap>
        <Menu>
          <Link to={"/"}>
            <p>Home</p></Link>
        </Menu>
        {/* <Menu>
          <Link to={"/Interest"}>
            <p>Interest</p></Link>
        </Menu> */}
        <Menu>
          <Link to={"/Login"}>
            <p>Login</p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Search"}>
            <p>Search</p></Link>
        </Menu>
      </MenWrap>

      <MoMenu>
        <MenuBtn onClick={() => setleft("0")}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>

        <MoMmenu leftResult={left}>
          <CloseBtn onClick={() => setleft("100%")}>
            <FontAwesomeIcon icon={faClose} />
          </CloseBtn>
          <li>
            <Link Link to={"/"}>
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
        </MoMmenu>
      </MoMenu>
    </SHeader>
  );
};