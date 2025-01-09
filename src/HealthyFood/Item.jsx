import style from './Item.module.css'
function Item({ foodItem, handleBuyButton }) {
    // const handleBuyButtonClicked = (event, foodItem) =>{
    //     console.log(event);
    //     console.log(foodItem);
    // }
     // const handleBuyButtonClicked = (event) =>{
    //     console.log(event);
    //     console.log(foodItem);
    // }
    // const handleBuyButtonClicked = (event) =>{
    //     console.log(event);
    //     console.log(foodItem);
    // }
    return (
        <>
            <li className={`${style.item} list-group-item`}>
                <span>{foodItem}</span>
                <button
                    className={style.buyButton}
                    // onClick={(event) => handleBuyButtonClicked(event, foodItem)}
                    // onClick={(event) => handleBuyButtonClicked(event)}
                    // onClick={ handleBuyButtonClicked}
                    onClick={handleBuyButton}
                >buy</button>
            </li>
        </>
    )
}
export default Item;