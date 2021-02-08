import { colors } from "../utils";
import styled from "styled-components";
const { black, whitish, primaryColor } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "'Julius Sans One";
  /* background-color: rgba(228, 228, 228, 0.15); */
  height: 10vh;
  padding: 0 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.5rem;
    font-family: "Julius Sans One";
    color: ${whitish};
    padding: 1em;
  }
  .menu {
    display: flex;
    flex-direction: "row";
  }
  .p2 {
    color: ${whitish};
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
    &:hover {
      background-color: rgba(163, 189, 49, 0.6);
      border-radius: 7px;
    }
  }
  a {
    text-decoration: none;
  }
`;
