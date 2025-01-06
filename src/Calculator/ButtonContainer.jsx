import style from './ButtonContainer.module.css';

function ButtonContainer() {
    const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/','C'];
    return (
        <div className={style.buttonContainer}>
            {buttons.map(button => <button className={style.button}>{button}</button>)}

        </div>
    );
}

export default ButtonContainer;