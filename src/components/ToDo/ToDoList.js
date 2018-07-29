import React, { Component } from 'react';
import { 
    ToDoListWrapper, 
    ToDoListItem, 
    NoDataFound, 
    DeleteButton, 
    CompleteButton 
} from '../common/StyledComponents';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ToDo.css';

const ToDoList = (props) => {
    const { todos, onDelete, toggleComplete } = props;

    return(
        <ToDoListWrapper>
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >
                {todos.length?todos.map((todo, key) => 
                    <ToDoListItem 
                        key={key}
                        isCompleted={todo.isCompleted}>
                            {todo.title}
                            <DeleteButton 
                                onClick={onDelete.bind(this, key)}
                            >x</DeleteButton>
                            <CompleteButton 
                                isCompleted={todo.isCompleted} 
                                onClick={toggleComplete.bind(this, key)}
                            >
                                {todo.isCompleted?'Mark as incomplete':'Mark as complete'}
                            </CompleteButton>
                    </ToDoListItem>):
                    <NoDataFound>No Todo was found.</NoDataFound>
                }
            </ReactCSSTransitionGroup>
        </ToDoListWrapper>
    )
}

export default ToDoList;