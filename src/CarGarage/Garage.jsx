import Car from "./Car";

function Garage() {
    const carName = "Ford";
    const carInfo = {model: "mustang" , manufactureYear: "2022"};
    return (
        <>
            <h1>Welcome to Garage</h1>;
            <Car name={carName}  info ={carInfo}/>
        </>
    )
}
export default Garage;