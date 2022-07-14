import styled from "styled-components";

export const CardItemWrapper = styled.div`
  width: 280px;
  height: 250px;
  position: relative;
  border-radius: 12px;
  margin: 0 5px;
  // overflow: hidden;
`;

export const CardItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CardItemOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  // padding: 28px 15px;
  padding: 15px 15px;
  color: #fff;
  background: #020024;
  background: linear-gradient(0deg, #020024 0%, #000032a1 3%, #17d9ff00 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartItemContentWrapper = styled.div`
  width: 100%;
`;
export const CartItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const CardItemTitle = styled.span`
  /* background: rgba(255, 255, 255, 0.25); */
  background: rgb(78 76 76 / 25%);;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 60px;
  padding: 10px 20px;
  display: inline-block;
`;

export const CardItemCity = styled.h2`
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const CartItemAddToFavorites = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;

  background: none;
  margin: none;
  border: none;

  padding: 0.25rem;
  border-radius: 12px;
  /* background-color: #2a2a72; */
  /* background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%); */
`;


export const CartItemPricePeriodPersons = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`
