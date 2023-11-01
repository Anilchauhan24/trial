import { useState } from "react";
import "../CSS/AddtoCart.css";

const AddtoCart = () => {
  const [count, setCount] = useState(0);

  function handleCart() {
    setCount(count + 1);
  }

  return (
    <div className="cartButton">
      <button onClick={handleCart}>Cart {count}</button>
    </div>
  );
};

export default AddtoCart;
