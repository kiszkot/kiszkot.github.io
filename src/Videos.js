import React from 'react';
import AnchorList from './AnchorList';
//import MediaPlayer from './MediaPlayer';

//const video = ["https://www.youtube.com/embed/HPXzJ_K0d6g","https://www.youtube.com/embed/znOWjJniHpQ"];
const links = new Map([
    ["Youtube","https://www.youtube.com/channel/UCuMhj7l2qrAZ6QtgqY3mOGA"]
]);
class Videos extends React.Component {
    render() {
        return <div>
            <h1 className="title">Hello</h1>
			
			<p>	
                I removed my Instagram account a while ago. Less data on the net I guess. Youtube is still up though have fun. <br/><br/>
                There was an ebbeded youtube video player of some of my videos.
            </p>
            <AnchorList links={links}/>
        </div>
    }
}

export default Videos