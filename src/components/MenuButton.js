import React from 'react';
import '../assets/MenuButton.css';

class MenuButton extends React.Component {
    render() {
        return <button id="logoButton" 
        onMouseDown={this.props.handleMouseDown}>Kiszkot TV</button>
    }
}

export default MenuButton