import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Menu.css';

const links = ["/drawings", "/videos", "/codes", "/certificates"];

function LinkList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) => 
      <li key={index}><Link to={val}>{val}</Link></li>
    );
    return <ul>{listItems}</ul>
  }

class Menu extends React.Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return <div id="menu"
            onClick={this.props.handleMouseDown}
            className={visibility}>
                <LinkList data={links} />
            </div>
    }
}

export default Menu;