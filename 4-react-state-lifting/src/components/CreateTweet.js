/*
  // #################################
  // STATE LIFTING
  // #################################

  Using the chrome extension "React tools" you can see the section "components"
  by selecting for instance, the "App" you see under "hooks" a "state" called "Marco".
  Or again by selecting "TweetList" we can see the "Props", "message", "name", "setName".

  The thing is that if you go to "CreateTweet", the "state" is empty and when we type something
  is gonna fill up or it updates also there. What we want is: click submit and clear the "state", 
  bringing back to the initial state "". And Create another state that contains, like a sort 
  of an array, a list of all the previous submited status.


  ############## creating the array storing the diffent states used, after clicking submit

  So what we can do is creating another state const with as user state an empty array:
  const [tweets, setTweets] = useState([]);

  To avoid to click submit and having the page refreshed (default behaviour of the browser)
  we can add     e.preventDefault();
  This because in React we do not want anything refreshed, React does it by itself.
  then in the event callback "submitTweetHandler" we spread the array, and we add
  our updated state "textInput" (with all the letter in the input, then submiting
  them it will create, an array element, with those letters). If you just pass:
  setTweets(tweetInput), tweetInput will always replace the setTweets array with its
  value

  ############## resetting the update state "setTextInput", after clicking submit

  import {useState} from 'react';
  function CreateTweet() {
    // state
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);
    // functions
    const userInputHandler = (e) => {
      setTextInput(e.target.value);
    };
    function submitTweetHandler(e) {
      e.preventDefault();
      setTweets([...tweets, textInput]);
      setTextInput("");

    }
    return (
      <form onSubmit={submitTweetHandler}>
        <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
        <button>Submit</button>
        <p> <strong> Tweet output: {textInput} </strong></p>
      </form>
    )
  }

  export default CreateTweet;
  ---------------------------------------------------------------------------------------------
  Now we want to use the "setTweets" as vehicle of transplant the items of the array
  to the page, from tweetList. But the problem is that the App tree is:
  1. App
  2. TweetList  2. CreateTweet
  3. Tweet

  you can't go back to "App" from "CreateTweet" and transfer the created tweet to "TweetList".
  What we can do is, since we have a state on "CreateTweet", we can "lift up the state" that
  is what is referred to "state lifting", in other words, taking the state from "createTweet" 
  and lifting it to the "App", so to let it become accessible to the "TweetList"

  so we can go to where the state has to be lifted (CreateTweet) and take the states and put
  it in the "App.js". And pass them as props in the <CreateTweet /> as follow:
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
 
  and as params in the CreateTweet() as follow:
      function CreateTweet({textInput, setTextInput, tweets, setTweets}) {.....etc etc..}
  so the function CreateTweet can run.

  Then the last thing is to pass the message now updated "tweet" as a prop to the "TweetList"
  so instead of having message={message}, we have now tweet={tweet}. The problem is that
  we replace every single messages with what we submit (so every tweet will look like the same)
  then if we submit again, the message one lets say "hello" gets attached to the message two 
  "hi", resulting in "hello","hi" but seen like hellohi. So we need to know how to render 
  multiple components, and it is so common in React. check "TweetList.js".

  While to "delete" and "like" a message go to "Tweet.js"
  -----------------------------------------------------------------------------------------
*/

function CreateTweet({textInput, setTextInput, tweets, setTweets}) {
  // the states here are lifted to the App
  // functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  function submitTweetHandler(e) {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");

  }
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button>Submit</button>
      <p> <strong> Tweet output: {textInput} </strong></p>
    </form>
  )
}

export default CreateTweet;