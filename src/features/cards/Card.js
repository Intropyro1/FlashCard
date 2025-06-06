import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCardById } from "./cardsSlice"; // Adjust the import path as necessary

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id)); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
