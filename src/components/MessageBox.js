import React from 'react';
import empty from './img/empty.svg';
import alldone from './img/alldone.svg';
import alldonehidden from './img/hide.svg';

// import hide from './img/hide.svg';

class MessageBox extends React.Component {
    checkAllDone = () => {
        return this.props.todos.every(element => element.done === true);
    };
    render() {
        return (
            <div className="msg_box">
                {/* Shows the block when todo list is empty */}
                <div
                    className={
                        this.props.todos.length === 0 ? 'empty_msg' : 'hide'
                    }
                >
                    <div className="img_box">
                        <img src={empty} alt="empty" />
                    </div>
                    <p className="msg_body">
                        No todos yet. Add one to start planning.
                    </p>
                </div>
                {/* Show the block when all todos are completed */}
                <div
                    className={
                        this.props.todos.every(
                            element => element.done === true
                        ) &&
                        this.props.todos.length > 0 &&
                        !this.props.filterTodo
                            ? 'show'
                            : 'alldone_msg'
                    }
                >
                    <div className="img_box">
                        <img src={alldone} alt="complete" />
                    </div>
                    <p className="msg_body">
                        Well Done. All todos are completed.
                    </p>
                </div>
                {/* Show the block when all todos are completed and all of then are hidden */}
                <div
                    className={
                        this.props.todos.every(
                            element => element.done === true
                        ) &&
                        this.props.todos.length > 0 &&
                        this.props.filterTodo
                            ? 'show'
                            : 'alldonehidden_msg'
                    }
                >
                    <div className="img_box">
                        <img src={alldonehidden} alt="complete" />
                    </div>
                    <p className="msg_body">
                        All todos are completed and hidden. Uncheck Hide Done to
                        see.
                    </p>
                </div>
            </div>
        );
    }
}

export default MessageBox;
