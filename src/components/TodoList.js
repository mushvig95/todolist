import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div className="todos_box">
                {this.props.todos.map(element => (
                    <Todo
                        key={element.id}
                        id={element.id}
                        done={element.done}
                        body={element.body}
                        description={element.description}
                        toggleTodo={this.props.toggleTodo}
                        getInfo={this.props.getInfo}
                        filter={this.props.filter}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
