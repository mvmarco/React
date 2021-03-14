/*
  // ORIGINAL VERSION

  import Tweet from "./Tweet";

  function TweetList ({name, message, setName}) {
    const changeName = () => {
      setName('john')
    }
    return (
      <div className="tweet-list">
        <button onClick={changeName}> BUTTTON CHANGE ALL THE NAMES</button>
        <Tweet name={name} status='Active' message={message}/>
        <Tweet name={name} status='Offline' message={message} />
        <Tweet name={name} status='Busy' message={message} />
      </div>
    )
  }


  export default TweetList 
*/

/* 
  In order to display multiple tweets as independent messages, we can get rid of:
      <Tweet name={name} status='Active' message={message} />
      <Tweet name={name} status='Offline' message={message} />
      <Tweet name={name} status='Busy' message={message} />
  And replace  it with:

      {tweets.map(tweet => (
        <Tweet name={name} status='Active' tweet={tweet} />
      ))}
  
  So basically we take each single tweet from the array and display it. tweet={tweet}
  correspond to the message={message}. To do so we need to add as props in App.js inside
  the:       <Tweet tweets={tweets} /> So to get "tweets" and iterate to get the message.

  Now to delete, a tweet go to "Tweet.js"
*/


import Tweet from "./Tweet";

function TweetList({ name, tweets, setName, setTweets }) {
  const changeName = () => {
    setName('john')
  }
  return (
    <div className="tweet-list">
      <button onClick={changeName}> BUTTTON CHANGE ALL THE NAMES</button>
      {tweets.map(tweet => (
        <Tweet setTweets={setTweets} tweets={tweets} name={name} status='Active' tweet={tweet} />
      ))}

    </div>
  )
}


export default TweetList