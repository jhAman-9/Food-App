import { CDN_URL } from "../utils/constants";

function RestaurantCard(props) {
  const stylecard = {
    background: "#f0f0f0",
  };


  return (
    <div
      className="res-card w-52 h-72  border-black p-1 hover:border hover:cursor-pointer m-1 rounded-lg hover:bg-slate-200 bg-slate-100"
      style={stylecard}
    >

      <img
        alt="res-logo"
        src={CDN_URL + props?.resData?.cloudinaryImageId}
        className="w-full h-32 rounded-md"
      />
      <div className="text-lg">
        <h3 className="text-lg">{props?.resData?.name}</h3>
        <div className="flex font-mono">
          <h4>{props?.resData?.cuisines}</h4>
        </div>
        <h4>{props?.resData?.avgRating}</h4>
        <h4>{props?.resData?.costForTwo}</h4>
      </div>
    </div>
  );
}


// Higher Order Components
// input  -  RestaurantsCard ==> RestaurantsCardPromoted 
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">open</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
