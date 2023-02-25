import { useState } from "react";
import foodsData from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";


function FoodList() {
  const [foodData, setFoodData] = useState(foodsData);
  const [foods, setFood] = useState(foodsData);
  const [searchQuery , setSearchQuery] = useState("")

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodData(updatedFoodsData);
    setFood(updatedFoods); // you are telling that the new value of foods is updatedFoods
  };

  const displayFilterFood = foods.filter((food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const removeFood = (el) => {
    const remaindFood = foods.filter((food)=>{
      return food.name !== el
    })
    setFood(remaindFood)
  }

/*   const filterFoodList = (str) => {
    let filteredFoods;
    if (str === "All") {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }

    setFood(filteredFoods);
  }; */


  return (
    <div>
      <Search  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AddFoodForm addFood={addNewFood} />
      {displayFilterFood.map((food) => {
        return <FoodBox key={food._id} food={food} removeFood={removeFood} />;
      })}
    </div>
  );
}

export default FoodList;