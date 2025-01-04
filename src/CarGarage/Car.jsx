function Car({name, info}) {
    return (
        <>
            <h1>I have {name} car in my Garage.</h1>
            <p> And model is {info.model} and I purched it in {info.manufactureYear} </p>
        </>
    )
}

export default Car;