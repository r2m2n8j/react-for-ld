// import AddToDo from "./ToDo/AddToDo";
// import "./App.css";
// import DateTime from "./clock/DateTime";
// import Garage from "./CarGarage/Garage";
// import ToDoItems from "./ToDo/ToDoItems";
import { useState } from 'react';
import style from './App.module.css';
import FoodInput from './HealthyFood/FoodInput';
import FoodItems from './HealthyFood/FoodItems';
// import ButtonContainer from './Calculator/ButtonContainer';
// import Display from './Calculator/Display';

function App() {
  /**Props */

  // const items = [
  //   {toDoName: "Complete one task in one day", toDoDate: "01/01/2025"},
  //   {toDoName: "Finish", toDoDate: "By Today"},
  // ];
  // return <>
  //   <DateTime />
  //   <center>
  //     <div >
  //       <h1>ToDo</h1>
  //       <AddToDo />
  //       <ToDoItems items={items}/>
  //       {/* <ToDoItem toDoName = "Complete ToDo" toDoDate= "01/01/2025" /> */}

  //       <Garage />
  //     </div>
  //   </center>
  // </>

  /**Calculator */

  // return (
  //   <div className={style.calculator}>
  //     <Display />
  //     <ButtonContainer />
  //   </div>
  // );

  /** state */
  
  let [foodItems, setFoodItems] = useState( ['Paneer', 'Ghee', 'Roti', 'Salad']);
  // let [textToShow, setTextToShow] = useState("Food Item Entered By User");
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setTextToShow(event.target.value);
  // }
  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [newFoodItem, ...foodItems];
      setFoodItems(newItems);
    }
  }

  return (
    <div className={style.healthy_food}>
      <h1 className={style.food_heading}> Healthy Food </h1>
      {/* <FoodInput handleOnChange={handleOnChange} /> */}
      <FoodInput handleKeyDown={onKeyDown} />
      {/* <p>{textToShow}</p> */}
      <FoodItems foodItems={foodItems} />
    </div>
  )

}

export default App;