import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const mappedPlants = () => {
    return plants.map(plant => {
      return <PlantCard plant={plant}  key={plant.id}/>
    })
  }
  return (
    <ul className="cards">{mappedPlants()}</ul>
  );
}

export default PlantList;
