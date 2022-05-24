import React from 'react';
import AnchorList from './AnchorList';

const links = new Map([
    ["Twitter","https://www.twitter.com/kiszkot"],
    ["DeviantArt","https://www.deviantart.com/kiszkot"]
]);
class Drawings extends React.Component {
    render() {
        return <div>
            <h1 class="title">Hello</h1>
			<p>
                Here is a list of pages where I post drawings mostly.
			</p>
            <AnchorList links={links} />
        </div>
    }
}

export default Drawings