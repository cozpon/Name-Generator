import React from 'react';
// separating out the name results

// the names you pass in are not important, the order matters though
const BandName = ({ name, key, id }) => {
    return (
      <div className="NameOutput">
        <div id="band-name"> Your new band name is: { name }</div><br/>
      </div>
    );
}
export default BandName;
