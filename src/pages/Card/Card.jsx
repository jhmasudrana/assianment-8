import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard/DonationCard";

const Card = () => {
  const [card, setCard] = useState({});
  
  const {id} = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards.find((card) => card.id == id);
    
    setCard(findCard)
  }, [id, cards]);

  

  return (
    <div>
    <DonationCard card={card} ></DonationCard>
    </div>
  );
};

export default Card;
