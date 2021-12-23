import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState( {
     name: '',
     image: '',
     price: 0,
  })
  

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
 
  // const handleChangeName = (e) => {
  //   setFormData({...formData, name: e.target.value})
  // } 
  // const handleChangeImage = (e) => {
  //   setFormData({...formData, image: e.target.value}) 
  // }
  // const handleChangePrice = (e) => {
  //   setFormData({...formData, price: e.target.value})
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    addPlant(formData)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        value={formData.name}
        placeholder="Plant name"
        onChange={handleChange} />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={formData.image}
        onChange={handleChange}/>
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={formData.price} 
        onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
