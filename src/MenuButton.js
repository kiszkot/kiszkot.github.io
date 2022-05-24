import React from 'react';
import './MenuButton.css';

class MenuButton extends React.Component {
    render() {
        return <button id="logoButton" 
        onMouseDown={this.props.handleMouseDown}>Kiszkot TV</button>
    }
}

export default MenuButton