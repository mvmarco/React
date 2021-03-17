// ###########################
// FONTAWESOME REACT
// ###########################

/* 
  In order to use "fontawesome" with React you need to go here: 
  https://fontawesome.com/how-to-use/on-the-web/using-with/react
  and run:
  1. npm i --save @fortawesome/fontawesome-svg-core
  2. npm install --save @fortawesome/free-solid-svg-icons
  3. npm install --save @fortawesome/react-fontawesome

  Then in "App.js" you can:
  1. Import the library: import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  2. Import the font you need: import { faPlay } from '@fortawesome/free-solid-svg-icons'
     PS: to add multiple of them: just {faPlay, faCoffee} etc etc.
*/

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
// SASS STYLING
// ###########################

/* 
  Here there is a good cheatsheet: https://sass-lang.com/guide

  Sass (Sass is the pronunciation, Scss is the actual way of writing it)
  is like an amplified CSS. In other words, Sass is a preprocessor scripting language that
  is interpreted or compiled into CCS.

  1. install it with: npm install node-sass
  2. create a file in the "styles" folder called: "Tweet.scss"
  3. in "Tweet.js" we have the class: <div className={"tweet"}> we can simply style it in
     Sass with some small differences than normal css. Check the file.
  4. in "Tweet.js"  we just: import '../styles/Tweet.scss'
*/

// ###########################
// STYLED COMPONENTS
// ###########################

/* 
  Quite common, check it out here: https://styled-components.com/
  What "styled components" allow us to do is to create a variable and you have literally
  all the style in there.
  It is similar to the "inline styles" with the difference that you can just use normal CSS.
  1. you install it with: npm install --save styled-components
  2. whereever you need it you do: import styled from 'styled-components'
  3. to the bottom you can create a const (any name) targeting the element you want (eg. a div)
     as follow:
    <div>
      <h1 className={"title"}>Your Tweet</h1>
      <h2>Name: {name}</h2>
      <h3>Message: {tweet.message}, status: {status}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>

     const TweetStyle = styled.div`
      background-color: red
     `
  4. then you replace the "div" tag with the name of the constant you created. Like this:
    <TweetStyle>
      <h1 className={"title"}>Your Tweet</h1>
      <h2>Name: {name}</h2>
      <h3>Message: {tweet.message}, status: {status}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </TweetStyle>



  If does not do autocomplete install the extension: "styled components"
*/

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
