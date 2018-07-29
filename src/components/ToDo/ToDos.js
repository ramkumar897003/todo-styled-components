import React, { Component } from 'react';
import { Container, Content, Wrapper, Title, TextCenter, TextInput } from '../common/StyledComponents';
import ToDoList from '../ToDo/ToDoList';

var initialToDo = {
    title: '',
    isCompleted: false
}
class ToDos extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todo: {...initialToDo},
            todos: []
        }
    }

    onChange = (e) => {
        let { todo } = {...this.state};
        todo['title'] = e.target.value;

        this.setState({ todo });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { todo, todos } = this.state;
        if(todo.title) {
            todos.push(todo);
            this.setState({ todos, todo: {...initialToDo} });
        }
    }

    onDelete = (key) => {
        let { todos } = this.state;
        todos.splice(key, 1);

        this.setState({ todos });
    }

    toggleComplete = (key) => {
        let { todos } = this.state;
        todos[key].isCompleted = !todos[key].isCompleted;

        this.setState({ todos });
    }

    render() {
        return(
            <Container>
                <Wrapper>
                    <Title>Todo App</Title>
                </Wrapper>
                <Content>
                    <TextCenter>
                        <form onSubmit={this.onSubmit}>
                            <TextInput 
                                placeholder="Enter Todo..." 
                                onChange={this.onChange} 
                                value={this.state.todo.title}   
                            />
                        </form>
                    </TextCenter>
                </Content>
                <Content>
                    <TextCenter>
                        <ToDoList 
                            todos={this.state.todos} 
                            onDelete={this.onDelete}
                            toggleComplete={this.toggleComplete}
                        />
                    </TextCenter>
                </Content>
            </Container>
        )
    }
} 

export default ToDos;