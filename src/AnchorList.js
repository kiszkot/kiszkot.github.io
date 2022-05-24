import React from 'react';
import './AnchorList.css'

function AnchorList(props) {
    const arr = props.links;
    let tmp = [];
    arr.forEach(function(value, key) {
    tmp.push(<li key={key}><a href={value}>{key}</a></li>);
  })
    const linkList = tmp;
    return <ul>{linkList}</ul>
  }

export default AnchorList