import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({todos}) => {
    // использование Spread оператора для item
    const elements = todos.map(item => {
        const { id, ...otherItems } = item;
        return <li key={id} className="list-group-item"><TodoListItem {...otherItems} /></li>
    })

    return <ul className="list-group todo-list">{elements}</ul>;
}

export default TodoList;