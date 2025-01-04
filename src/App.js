// import AddToDo from "./ToDo/AddToDo";
// import "./App.css";
// import DateTime from "./clock/DateTime";
// import Garage from "./CarGarage/Garage";
// import ToDoItems from "./ToDo/ToDoItems";
import style from './App.module.css';

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
  const digit = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  return (
    <div className={style.calculator}>
      <input className={style.textInput} type="text" />
      <div className={style.buttonContainer}>
        <button className={style.button}>1</button>
        <button className={style.button}>C</button>
        <button className={style.button}>3</button>
        <button className={style.button}>4</button>
      </div>
    </div>
  )


}

export default App;