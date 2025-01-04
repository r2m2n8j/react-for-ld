

function DateTime() {
    const dateTime = new Date();
    return <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>React</h1>
                </div>
                <div className="col-4">
                    <p>{dateTime.toLocaleDateString()}</p>
                    <p>{dateTime.toLocaleTimeString()}</p>
                    
                </div>
            </div>
        </div>

    </>
}

export default DateTime;