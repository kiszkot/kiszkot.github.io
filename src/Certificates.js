import './Certificates.css'
import React from 'react';
import certificate from './swedish_certificate.png';

class Videos extends React.Component {
    render() {
        return <div>
            <h1 className="title">Hello</h1>
			
			<p>	
                Here you'll find some of my certificates that are not hosted elsewhere.
            </p>
            
            <div className="frame">
                <img src={certificate} alt="Certificate of attendance to ENUICE Swedish beginner course"/>
                <p>
                Certificate of attendance to ENUICE Swedish beginner course
                </p>
            </div>

            <p>
                This one has a nice story, as it was given to me in MsWord format. The formatting was kinda bad, as some elements were on another page. 
                I managed to fix it but please, format your documents correctly or export to a static format. You can't easily break the formatting on a PDF or image.
            </p>
        </div>
    }
}

export default Videos