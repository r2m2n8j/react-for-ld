function AddToDo() {
    return <>
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <input type="text" placeholder="Enter your todo" />
                </div>
                <div className="col-4">
                    <input type="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success todoButton">Add</button>
                </div>
            </div>
        </div>
    </>
}

export default AddToDo;