import './App.css';
import React from 'react';
import AnchorList from './AnchorList';

const codeLinks = new Map();
codeLinks.set("Github", "https://www.github.com/kiszkot");
codeLinks.set("Stack Overflow", "https://stackoverflow.com/users/17176223/kiszkot");
/*
function LinkList(props) {
  const arr = props.links;
  let tmp = [];
  arr.forEach(function(value, key) {
  tmp.push(<li key={key}><a href={value}>{key}</a></li>);
})
  const linkList = tmp;
  return <ul>{linkList}</ul>
}*/

function App() {
  return (
    <div id="top">
      <h1 className="title">Welcome</h1>
    
      <p>	This is now a waypoint to different pages where you can see some other stuff I do as well.<br/><br/>
    
    You can take a look at some drawings on the "Drawings" page or you can watch some videos on the "Videos" page. 
    You can as well take a look at some of my other projects on GitHub.<br/><br/>
    
    Under codes you can find the JavaDoc of a card project I did in my fourth semester, as well as my github page link.<br/><br/>
    
    The github page link will be below so you don't have to search for it.<br/><br/>

    Finally if you click "Kiszkot TV" you will see a link to the mentioned pages.
      </p>
      <AnchorList links={codeLinks} />
    </div>
  );
}

export default App;
