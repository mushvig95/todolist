import React from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import MessageBox from './MessageBox';
import SideBar from './SideBar';

class App extends React.Component {
    state = {
        todos: [],
        filterTodo: false,
        inputBody: '',
        inputDescription: '',
        sideBarHeader: '',
        sideBarDescription: '',
        sidebarOpened: false,
    };

    addBody = body => {
        this.setState({
            inputBody: body,
        });
    };

    addDescription = description => {
        this.setState({
            inputDescription: description,
        });
    };

    addTodo = (body, description) => {
        this.setState({
            todos: this.state.todos.concat([
                {
                    id: this.state.todos.length,
                    body: body,
                    description: description,
                    done: false,
                },
            ]),
        });
    };

    toggleTodo = id => {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            ),
        });
    };

    toggleTodoVisibility = () => {
        this.setState({ filterTodo: !this.state.filterTodo });
    };

    getInfo = (head, description) => {
        this.setState({
            sideBarHeader: head,
            sideBarDescription: description,
            sidebarOpened: true,
        });
    };

    closeSidebar = () => this.setState({ sidebarOpened: false });

    render() {
        return (
            <div>
                <div className="main_container">
                    <Header />
                    <TodoInput
                        addTodo={this.addTodo}
                        body={this.state.inputBody}
                        addBody={this.addBody}
                        addDescription={this.addDescription}
                        description={this.state.inputDescription}
                    />
                    <TodoFilter
                        toggleTodoVisibility={() => {
                            this.setState({
                                filterTodo: !this.state.filterTodo,
                            });
                        }}
                    />
                    <MessageBox
                        todos={this.state.todos}
                        filterTodo={this.state.filterTodo}
                    />
                    <TodoList
                        todos={this.state.todos}
                        toggleTodo={this.toggleTodo}
                        getInfo={this.getInfo}
                        filter={this.state.filterTodo}
                    />
                </div>
                <div>
                    <SideBar
                        getInfo={this.getInfo}
                        sideBarHeader={this.state.sideBarHeader}
                        sideBarDescription={this.state.sideBarDescription}
                        onCloseButtonClick={this.closeSidebar}
                        sidebarOpened={this.state.sidebarOpened}
                    />
                </div>
            </div>
        );
    }
}

export default App;
