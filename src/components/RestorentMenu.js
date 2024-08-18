import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestorentMenu = () => {
  const [showIdx, setShowIdx] = useState(null);

  const { resId } = useParams();  
  const resInfo = useRestaurantMenu(resId);

  if (resInfo?.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="text-2xl">{name}</h1>
      <p>   
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((e, index) => (
        <RestaurantCategory key={index} data={e?.card?.card} showItems={index === showIdx ? true : false} setShowIdx={() => setShowIdx(index)} />
      ))}
    </div>
  );
};

export default RestorentMenu;
