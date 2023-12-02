import React from 'react';
import AnchorList from './AnchorList';
import '../assets/Drawings.css';
import sampleImage from '../assets/pooh_cutie_mark.png';

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
            <p className='p-image'>
                <img src={sampleImage} alt="Microphone with rainbow coloured handle."/>
                On the left you can see a rainbow microphone. A friend of mine asked me to draw him a simple logo that would represent him. 
                I came up with this thingy. At that time, my ability with Inkscape was not great (it still isn't), but to get somewhere you 
                have to try. <br/>

                Maybe I should redesign it with my new knowledge.
            </p>
        </div>
    }
}

export default Drawings