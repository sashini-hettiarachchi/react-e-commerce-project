import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return (
          <CartItem
            key={item.id}
            item={item}
            id={item.id}
            title={item.title}
            img={item.img}
            total={item.total}
            count={item.count}
            price={item.price}
            increment={value.increment}
            decrement={value.decrement}
            removeItem={value.removeItem}
            value={value}
          />
        );
      })}
    </div>
  );
}
