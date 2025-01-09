const FoodInput = ({handleKeyDown}) => {
    // const handleOnChange = (event) =>{
    //     console.log(event.target.value);
    // }
    return (
        <input
            type='text'
            placeholder='Your favorite food'
            // onChange={handleOnChange}
            onKeyDown={handleKeyDown}
        />
    );
}
export default FoodInput;