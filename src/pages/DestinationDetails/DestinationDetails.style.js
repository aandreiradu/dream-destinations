import styled from "styled-components";
import { ArrowLeft } from "../../assets/Icons/IconsExport";

export const DestinationWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  /* background: url(${props => props.imageURL});
  background-repeat: no-repeat;
  background-position: center center;
  background-size:cover;
  background-blend-mode: darken; */
`;

export const DestinationDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  
`;

export const BackWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 25px;
  z-index: 10;
  background: rgba(255,255,255,.6);
  display:flex;
  align-items:center;
  border-radius:12px;
  padding: .25rem;
`;

export const GoBackArrow = styled(ArrowLeft)`
  height: 25px;
  width: 25px;
`;

export const DestinationDetailImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  background-color: rgba(0,0,0,.6);
  filter: brightness(.6);
`;

export const DestinationDetailContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-end;
  padding: 65px 0;
  padding: 65px 0 40px 0;
  color: #fff;
  overflow-y: auto;

  & h2 {
    text-transform: uppercase;
    font-size : 2rem;
  }

  &>div span {
    color: yellow;
    padding: .25rem
  }
`;
