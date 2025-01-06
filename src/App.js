// import AddToDo from "./ToDo/AddToDo";
// import "./App.css";
// import DateTime from "./clock/DateTime";
// import Garage from "./CarGarage/Garage";
// import ToDoItems from "./ToDo/ToDoItems";
import style from './App.module.css';
import ButtonContainer from './Calculator/ButtonContainer';
import Display from './Calculator/Display';

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
  
  return (
    <div className={style.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );


}

export default App;