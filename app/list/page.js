"use client";

import { useState } from "react";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 2]);
  return (
    <div>
      <h4 className="title">item list</h4>
      {items.map((v, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{v} $40</h4>
            <button
              onClick={() => {
                let changeCount = [...count];
                changeCount[i]--;
                setCount(changeCount);
              }}
            >
              -
            </button>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let changeCount = [...count];
                changeCount[i]++;
                setCount(changeCount);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
