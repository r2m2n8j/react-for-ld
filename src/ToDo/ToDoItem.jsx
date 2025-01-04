import itemStyle from './ToDoItem.module.css';
function ToDoItem({toDoName, toDoDate}) {
    return <>
        <div className="container">
            <div className={`row `}>
                <div className={`col-4 ${itemStyle.itemContainer} `}> {toDoName} </div>
                <div className={`col-4 ${itemStyle.itemContainer} `}> {toDoDate} </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger todoButton">Delete</button>
                </div>
            </div>
        </div>
    </>
}

export default ToDoItem;