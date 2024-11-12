import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(plant.soldOut || false);

  // Toggle the sold-out status
  const toggleSoldOut = () => {
    setSoldOut(!soldOut);

    // Send a PATCH request to update the sold-out status on the server
    fetch(`  http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        soldOut: !soldOut,
      }),
    });
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className={soldOut ? "sold-out" : "in-stock"} onClick={toggleSoldOut}>
        {soldOut ? "Sold Out" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
