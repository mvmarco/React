import '../styles/Tweet.scss'
function Tweet({name, tweet, tweets, status, setTweets}) {
  const deleteTweet = () => {
    setTweets(tweets.filter((item) => item.id !== tweet.id));
  }
  return (
    <div className={"tweet"}>
      <h1 className={"title"}>Your Tweet</h1>
      <h2>Name: {name}</h2>
      <h3>Message: {tweet.message}, status: {status}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  )
}
export default Tweet;




