import React from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import MenuButton from './MenuButton';
import '../assets/Navbar.css';

class Navbar extends React.Component {
    constructor(props, context) {

        super(props, context);
  
        this.state = {
          show: false
        };
    }
  
    handleMouseDown = (e) => {
        this.toggleMenu();
  
        e.stopPropagation();
    }
  
    toggleMenu = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return <nav id="navBar">
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.show} />
            <div>
            <Link to="#top">top</Link>
            </div>
            <div>
            <Link to="#footer">bottom</Link>
            </div>
            <div>
            <Link to="/">home</Link>
            </div>
        </nav>
    }
}

export default Navbar