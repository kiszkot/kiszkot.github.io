import React from 'react';
import AnchorList from './AnchorList';

const links = new Map([
    ["Twitter","https://www.twitter.com/kiszkot"],
    ["DeviantArt","https://www.deviantart.com/kiszkot"]
]);
class Drawings extends React.Component {
    render() {
        return <div>
            <h1 className="title">Hello</h1>
			<p>
                Twitter, now called X. I have not posted there for some time. DeviantArt on the other hand is a little better, but weird policy: 
                pay to upload some content. It makes sense from a certain point of view, but there are better alternatives like Mastodon. 
                I should consider donating to them.
			</p>
            <AnchorList links={links} />
        </div>
    }
}

export default Drawings