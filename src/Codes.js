import React from 'react';
import AnchorList from './AnchorList';

const links = new Map([
    ["Github","https://www.github.com/kiszkot"],
	["Javadoc","CrappyCardStuff/doc/index.html"]
]);
class Codes extends React.Component {
    render() {
        return <div>
            <h1 class="title">Hello</h1>
			
			<p>	Here you can find a link to my github as well as a link to the javadoc of one of my repositories.
			</p>
            <AnchorList links={links}/>
        </div>
    }
}

export default Codes