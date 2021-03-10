// #################################
// STATE LIFTING
// #################################
import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Marco");
  const message = "I love my dog"
  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet />
      <TweetList name={name} setName={setName} message={message} />
    </div>
  );
}

export default App;
