import React from "react";
import '../style/aboutSober.scss'; 

export default function AboutSober() {
  return ( 
    <div className="about-container">
    <div className="heading">
    <h1>Sober Dan!!!</h1>
    </div>
    <p className="drunk-dan">
      Sober Dan is a calm and introverted guy. <br></br>Very quiet and shy compared to his counterpart, <br></br> but very kind and always trying to keep the peace.<br></br> Here are some qualities of Sober Dan.
    </p>
    <div className="qualities-drunk">
    <ul>
        <li>Very protective and aware.</li>
        <li>Respectful and kind.</li>
        <li>Very nerdy.</li>
        <li>Great athlete, always down to do something outdoors.</li>
        <li>Can carry you if you get too drunk!</li>
    </ul>
    </div>
    <div className="superman">
      <img src="../static/assest/super-man.jpg" alt="superman"></img>
    </div>
</div>
  );
}
