import React from 'react';

class Todo extends React.Component {
    handleClick = () => {
        this.props.toggleTodo(this.props.id);
    };
    handleInfoClick = () => {
        this.props.getInfo(this.props.body, this.props.description);
    };

    render() {
        return (
            <div
                className={
                    this.props.done && this.props.filter
                        ? 'todobox_hide'
                        : 'todobox'
                }
            >
                <input
                    className="todo_check"
                    type="checkbox"
                    value="hide"
                    id={'label_' + this.props.id}
                    onClick={this.handleClick}
                />
                <label htmlFor={'label_' + this.props.id}>
                    <p className={this.props.done ? 'crossed' : 'not-crossed'}>
                        {this.props.body}
                    </p>
                </label>
                <span
                    className={this.props.description !== '' ? 'info' : 'hide'}
                    href="#"
                    onClick={this.handleInfoClick}
                >
                    i
                </span>
            </div>
        );
    }
}

export default Todo;
