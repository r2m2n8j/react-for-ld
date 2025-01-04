
import ToDoItem from "./ToDoItem";
function ToDoItems({ items }) {
    return (
        <>
            {items.map(item => (<ToDoItem toDoName={item.toDoName} toDoDate={item.toDoDate} />))}
        </>
    )
}

export default ToDoItems;