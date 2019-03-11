import React from 'react';

class TodoInput extends React.Component {
    handleChangeBody = event => {
        this.props.addBody(event.target.value);
    };

    handleChangeDescription = event => {
        this.props.addDescription(event.target.value);
    };

    handleClick = () => {
        if (this.props.body !== '') {
            this.props.addTodo(this.props.body, this.props.description);
            this.props.addBody('');
            this.props.addDescription('');
        }
    };

    handleKeyPress = e => {
        if (e.charCode === 13) {
            this.handleClick();
        }
    };

    render() {
        return (
            <div className="inputbox">
                <div className="todobar_box">
                    <input
                        placeholder="What do you want to do?"
                        onKeyPress={this.handleKeyPress}
                        value={this.props.body}
                        className="todobar_input"
                        onChange={this.handleChangeBody}
                    />
                    <button
                        className="todobar_add_btn"
                        onClick={this.handleClick}
                    >
                        ADD
                    </button>
                </div>
                <textarea
                    placeholder="Add description for your todo item..."
                    className="textarea"
                    onChange={this.handleChangeDescription}
                    value={this.props.description}
                />
            </div>
        );
    }
}

export default TodoInput;
