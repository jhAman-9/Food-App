import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIdx }) => {

    const handleShow = () =>{
        setShowIdx();  
    }

  return (   
    <div>
      <div className="w-6/12 mx-auto my-3 hover:shadow-xl cursor-pointer shadow-lg bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between" onClick={handleShow}>
          <span className="font-bold ">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
