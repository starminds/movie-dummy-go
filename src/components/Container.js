import styled from "styled-components";
import { mainStyle } from "./styles/globalStyle";

const Section = styled.section`
  /* margin-top: 150px; */
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};