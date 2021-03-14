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
// FOLDER STYLING ONE
// ###########################

/* 
  1. You create a folder in "src" called for instance, "styles" and create an "App.css" file
     in it
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

// ###########################
// FOLDER STYLING TWO
// ###########################

/*
  To avoid that things collide (for instance we have here in "App.js" a "h1" with:
  className={title}    but also in "Tweet.js" we have another "h1" with className={title}),  
  You can:
  1. In the folder "styles" you can create an "App.module.css" file
  2. Import it in App.js as follow:  import s from './styles/App.module.css';
     notice that "s" can be anything you want. 
  3. Add a className={s.title} And now only the Title in "App.js" will change.
     notice also that if you do the same in "Tweet.js" things will not work out.
  4. In fact, if you want some style in "Tweet.js" you gotta create its own "Tweet.module.css"
  5. Then import it (in Tweet.js) as follow: import s from '../styles/Tweet.module.css';
  6. And add: Add a className={s.title} 

*/


// ###########################
// SAAS STYLING
// ###########################
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
      <h1 className={"title"}>Hello {name}</h1>
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
