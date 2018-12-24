import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component{

    render(){
        const { item, onClick, onRemoved} = this.props;
        return(
            
            <div className={classNames('TodoItem', {'TodoItem-complete' : item.isComplete})}>
                <input type="checkbox" onClick={onClick(item)} />
                <span>{this.props.item.title}</span>
                <button onClick={onRemoved(item)}>Delete</button>
            </div>
        );
    }
}


export default TodoItem;