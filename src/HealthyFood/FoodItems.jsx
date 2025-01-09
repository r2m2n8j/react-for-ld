import Item from "./Item";

const FoodItems = ({foodItems}) => {
    return (
        <>
            {foodItems.map((item) => (
                <Item 
                key={item}
                foodItem = {item}
                handleBuyButton={() => console.log('clicked')}
                />))}
        </>
    );
}
export default FoodItems;