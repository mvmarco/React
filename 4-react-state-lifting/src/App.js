// #################################
// STATE LIFTING
// #################################

/* 
  Using the chrome extension "React tools" you can see the section "components"
  by selecting for instance, the "App" you see under "hooks" a "state" called "Marco".
  Or again by selecting "TweetList" we can see the "Props", "message", "name", "setName".

  The thing is that if you go to "CreateTweet", the "state" is empty and when we type something
  is gonna fill up or it updates also there. So what we want to do is, when I click submit
  I wanna clear the "state", in other words bring it back to the initial state "".
  But also, create another state that contains, like a sort of an array, a list of all
  the previous submited status.

  check this concept aforehead mentioned in "CreateTweet"
*/
import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState } from 'react';

function App() {
  //states
  const [name, setName] = useState("Marco");
  // lifted states from CreateTweet, you gotta pass them as props
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet 
        textInput={textInput} 
        setTextInput={setTextInput}
        tweets={tweets} 
        setTweets={setTweets}
      />
      <TweetList 
        setName={setName}
        name={name}
        tweets={tweets} 
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
