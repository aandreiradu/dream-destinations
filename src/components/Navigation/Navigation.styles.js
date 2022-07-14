import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const scaleAnimation = keyframes`
  0%{transform:scale(1)}
  50%{transform:scale(1.25)}
  100%{transform:scale(1)}
`;

export const NavigationWrapper = styled.nav`
  z-index: 10;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  // padding: 20px 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #fff;
`;

export const NavigationUL = styled.ul`
  padding: 0 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  a {
    color: #000;
  }

  svg {
    color: #fff;
    width: 25px;
    height: 25px;
  }
`;

export const CountWrapper = styled.div`
  position: relative;
  z-index: -1;
`;

export const FavoriteDestinationsCount = styled.span`
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  position: absolute;
  right: -11px;
  top: -12px;
  border-radius: 50%;
  padding: 0px 4px;
  color: #fff;

  &.active {
    animation-name: ${scaleAnimation};
    animation-duration: 5s;
  }
`;
