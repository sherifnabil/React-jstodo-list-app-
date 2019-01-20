import React from 'react';
import './TodoItems.css';


const TodoItem = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    const itemsList = length 
        ? 
            items.map( item => {
                return(
                    <div key={item.id}>
                        <span className="name">{ item.name }</span>
                        <span className="age">{ item.age }</span>
                        <span className="action icon "  onClick={() => {deleteItem(item.id)}}> &times; </span>
                    </div>
                    )
                } )

        :
            (<p className="p">There's No Items To Show</p>)

    return (
        <div>
            <div className="listitems">
                <span className="name-title">Name</span>
                <span className="age-title">Age</span>
                <span className="action-title"> Action</span>
            </div>
            {itemsList}
        </div>
    )
}

export default TodoItem;