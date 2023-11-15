import React from 'react';
import certificate from './swedish_certificate.png';

class Videos extends React.Component {
    render() {
        return <div>
            <h1 class="title">Hello</h1>
			
			<p>	
                Here you will find some of my certificates which cannot are not currently hostend anywhere.
            </p>
            
            <img src={certificate} alt="Certificate of attendance to ENUICE Swedish beginner course"/>

        </div>
    }
}

export default Videos