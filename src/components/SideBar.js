import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div
                className={
                    this.props.sidebarOpened ? 'sidebar_show' : 'sidebar'
                }
            >
                <div className="sidebar_header">
                    <p>{this.props.sideBarHeader}</p>
                    <span onClick={this.props.onCloseButtonClick}>x</span>
                </div>
                <div className="sidebar_body">
                    {this.props.sideBarDescription}
                </div>
            </div>
        );
    }
}

export default SideBar;
