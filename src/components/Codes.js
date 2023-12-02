import React from 'react';
import AnchorList from './AnchorList';

const links = new Map([
    ["Github","https://www.github.com/kiszkot"],
	["Javadoc","CrappyCardStuff/doc/index.html"]
]);
class Codes extends React.Component {
    render() {
        return <div>
            <h1 className="title">Hello</h1>
			
			<p> Github link and Javadoc for one of my Engineering projects. Nothing fancy, just some card stuff. I'll probably remove it in the future, who knows?
			</p>
            <AnchorList links={links}/>
        </div>
    }
}

export default Codes