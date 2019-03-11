import React from 'react';

class TodoFilter extends React.Component {
    render() {
        return (
            <div className="hidedone_box">
                <div className="hidedone_inner">
                    <label htmlFor="hidedone">
                        <span className="hidedone_text">Hide Done</span>
                    </label>
                    <input
                        className="hidedone_check"
                        type="checkbox"
                        value="hide"
                        id="hidedone"
                        onClick={this.props.toggleTodoVisibility}
                    />
                </div>
            </div>
        );
    }
}

export default TodoFilter;
