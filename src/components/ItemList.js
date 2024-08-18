import React from "react";
import { CDN_URL } from "../utils/constants";
import {addItem} from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className="">
      {items.map((e) => (
        <div
          key={e?.card?.info?.id}
          className="mx-auto my-3 border-gray-200 border-b-2 text-left flex flex-col justify-between hover:shadow-lg"
        >
          <div className="">
            <span>{e?.card?.info?.name} </span>
            <span className="font-bold flex flex-wrap">
              {"₹"}{" "}
              {e?.card?.info?.price
                ? e?.card?.info?.price / 100
                : e?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-xs">{e?.card?.info?.description}</p>
            </div>

            <div className="">
              <div className="absolute w-1 ">
                <button className="shadow-lg m-auto bg-green-800 text-white rounded-sm px-[2px]"
                onClick={() => handleAddItem(e)}>
                  Add+
                </button>
              </div>
              <img
                alt=""
                src={CDN_URL + e?.card?.info?.imageId}
                className="w-24 rounded-md h-14"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
