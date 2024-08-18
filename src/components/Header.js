import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
function Header() {
  const onlineStatus = useOnlineStatus();

  // Extracting Data from userContext and as well as using it through useContext..
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="header flex justify-between	border border-black bg-pink-50">
      <div className="logoContainer p-2 m-2">
        <img className="logo w-10" src={LOGO_URL} alt="" />
      </div>

      <div className="hover:cursor-pointer">
        <ul className="flex gap-5 pe-10 text-md	font-medium">
          <li className="p-2 m-2">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/cart"> Cart - ({cartItems?.length}) </Link>
          </li>
          <li className="p-2 m-2">Log In : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
