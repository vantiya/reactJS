// eslint-disable-next-line
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './../UI/Card';

function ExpenseItem(props) {
    let title = props.title;
    const btnClickHandler = () => {
        title = "Updated"
        console.log("CLicked");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{"$"}{props.price}</div>
            </div>
            <button onClick={btnClickHandler}>Update Title</button>
        </Card>
    );
}

export default ExpenseItem;
