import React from "react";
import '../style/aboutdrunk.scss'; 

export default function AboutDrunk() {
  return ( 
  <div className="about-container">
      <div className="heading">
      <h1>Drunk Dan!!!</h1>
      </div>
      <p className="drunk-dan">
        Drunk Dan is a gentle giant. <br></br>Far more outgoing than his counterpart, <br></br> but always looking to laugh and make others laugh.<br></br> Here are some qualities of Drunk Dan.
      </p>
      <div className="qualities-drunk">
      <ul>
          <li>Very outgoing/ super friendly.</li>
          <li>Others are usually scared to start a fight with the group on account of my size.</li>
          <li>Gets girls.</li>
          <li>Trash talk on point.</li>
          <li>Takes a lot to get super drunk. So I'm not sloppy!</li>
      </ul>
      </div>
  </div>
  );
}
