import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function Body() {
  const [rest, setRest] = useState([]);
  const [filterRest, setFilteredRestaurants] = useState([]);

  const RestaurantsCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    
    setRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline, Please Check Your Internet Connection..</h1>;

  return rest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-1 bg-yellow-100">
      <div className="flex">
        <div className="head p-3 flex items-center gap-12">
          <input type="text" placeholder="search food" />
          <button
            className="cursor-pointer"
            onClick={() => {
              const filterRest = rest.filter(
                (res) => res?.info?.resData?.avgRating >= 4
              );
              setFilteredRestaurants(filterRest);
            }}
          >
            filter
          </button>
        </div>

        <div className="head p-3 flex items-center gap-12">
          <label>Change User Name : </label>
          <input
            className="p-2 border border-orange-400 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap m-1">
        {filterRest?.map((item) => (
          <Link key={item?.info?.id} to={"restaurants/" + item?.info?.id}>
            {item?.info?.isOpen ? (
              <RestaurantsCardPromoted resData={item?.info} />
            ) : (
              <RestaurantCard resData={item?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
