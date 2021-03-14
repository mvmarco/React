import Tweet from "./Tweet";

function TweetList({ name, tweets, setName, setTweets }) {
  const changeName = () => {
    setName('john')
  }
  return (
    <div className="tweet-list">
      <button onClick={changeName}> BUTTTON CHANGE ALL THE NAMES</button>
      {tweets.map(tweet => (
        <Tweet 
          setTweets={setTweets} 
          tweets={tweets} 
          name={name} 
          status='Active' 
          tweet={tweet} 
          key={tweet.id}
          />
      ))}

    </div>
  )
}


export default TweetList