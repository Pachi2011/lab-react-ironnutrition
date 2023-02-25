// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, servings };
    
    console.log("Submitted", newFood);
    props.addFood(newFood);

    // Reset the state
    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" value={name} onChange={handleNameInput} />

      <label>Image</label>
      <Input type="text" name="image" value={image} onChange={handleImageInput} />
      
      <label>Calories</label>
      <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input type="number" name="servings" value={servings} onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;