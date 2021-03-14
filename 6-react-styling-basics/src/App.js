// ###########################
// STYLING
// ###########################

/* 
  You can style React components in different ways. Here will be styled just the "Tweet"
  component just for purpose of learning
*/

// ###########################
// INLINE STYLING
// ###########################

/* 
  For instance, with "inline styling" you have to pass a style object to an element or component
  as follow:          style={{color:red}}         
  the first {} means we are adding some javaScript and the second one is an object.
  In fact, since the style is JavaScripted, when you add a background color you do not do as
  you would naturally do like: background-color: red; but instead you gotta write camelCase
  such as: style={{backgroundcolor:red}}. You could also create a variable that takes in the
  style object:                            s = {backgroundcolor:red}
  and then pass it into style like:                  style={{s}};
  but it is not the best way of dealing with styles. Just imagine how many variables we might
  have and how long that could be. The nice thing is that everything is in one file but it is
  not reccommended. 
*/

// ###########################
// FOLDER STYLING
// ###########################

/* 
  1. You create a folder in "src" called for instance, "styles"
  2. The you import it in "App.js" (here) as follow:              import './styles/App.css';
  3. Anywhere in the application you can take a component or an element and add a class like:
     classList={className} and then in the "App.css" you can just call that class and style it
     as you would normally:
     .className {
       background-color:red;
     }
  
  The problem with this approach is that if the app is too big the multiple classNames can 
  collide. But for small project it is a fine approach.
*/
import './styles/App.css';
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
