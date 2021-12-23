import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


const plantUrl = 'http://localhost:6001/plants'
function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  //when component mounts call get plants
  useEffect(() => {
    getPlants()
  }, [])

  const getPlants = () => {
    fetch(plantUrl).then(res => res.json()).then(plants => {
      console.log(plants)
      setPlants(plants)
    })
  }

  const addPlant = (formData) => {
    const postObj = {
      method: 'POST',
      headers:  {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    } 
    fetch(plantUrl, postObj).then(res => res.json()).then((newPlant) => {
      //add newPlant to plant state
      setPlants([...plants, newPlant])
    })
  }

  const filteredPlants = () => {
    return plants.filter((plant) => {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    })
  }  
  return (
    <main> 
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch}/>
      {/* for the filter dont change the plant list but instead change 
      the array you're passing down  */}
      {/*  if we have a search term than pass downt the filtered array
       else pass main array */}
      <PlantList plants={!!search ? filteredPlants() : plants}/>
    </main>
  ); 
}

export default PlantPage;
