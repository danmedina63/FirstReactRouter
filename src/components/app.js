import React, {Component} from 'react';
import '../style/app.scss';

export default class App extends Component {
  // export default function App() {
  render() {
    return (
      <div className="app">
        <div className='heading'>
        <h1>Book Me For a Party Buddy!!!</h1>
        </div>
        <div className='pros-cons'>
        <ul className='pros'>
          <h2>Pros</h2>
          <li>Great to talk to.</li>
          <li>Best at BeerPong.</li>
          <li>Can drink almost anyone under the table.</li>
        </ul>
        <ul className='cons'>
          <h2>Cons</h2>
          <li>Might call you dumb.</li>
          <li>Might steal your girl due to my BP skillz.</li>
          <li>Might drink all your booze</li>
        </ul>
        </div>
      </div>
    );
  }
}
