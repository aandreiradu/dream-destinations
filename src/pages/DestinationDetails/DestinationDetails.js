import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectDestinations } from "../../store/destinations/destination.selector";

import {
  DestinationWrapper,
  DestinationDetailWrapper,
  DestinationDetailImg,
  BackWrapper,
  GoBackArrow,
  DestinationDetailContent,
} from "./DestinationDetails.style";

const generateStars = (reviews) => {
  return [...Array(+reviews)].map((star, index) => (
    <span key={index}>&#9733;</span>
  ));
};

const DestinationDetails = () => {
  const navigate = useNavigate();
  const [destinationData, setDestinationData] = useState([]);
  const { destinationId } = useParams();
  const destinations = useSelector(selectDestinations);

  useEffect(() => {
    if (destinationId && destinations) {
      const filteredDestinationData = destinations.filter(
        (destination) => destination.id == destinationId
      );

      filteredDestinationData && setDestinationData(filteredDestinationData);
    }
  }, [destinationId, destinations]);

  const handleBackEvent = () => navigate(-1);

  return (
    <DestinationWrapper>
      {destinationData?.map((d) => (
        <DestinationDetailWrapper key={d.id}>
          <DestinationDetailImg src={d.imageURL} alt={d.country} />
          <BackWrapper onClick={handleBackEvent}>
            <GoBackArrow />
          </BackWrapper>
          <DestinationDetailContent>
            <h2>{d.location || d.country}</h2>
            <div>{generateStars(d.reviews)}</div>
            <p>{d.description}</p>
          </DestinationDetailContent>
        </DestinationDetailWrapper>
      ))}
    </DestinationWrapper>
  );
};

export default DestinationDetails;
