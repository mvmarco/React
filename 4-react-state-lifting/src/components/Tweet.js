  /* 
    // THIS WAS THE ORIGINAL FUNCTION
    function Tweet({name, message, status}) {
      return (
        <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {message}, status: {status}</h3>
        <button>Delete</button>
        <button>Like</button>
        </div>
      )
    }
    export default Tweet;

    here we "message" before was referring to const message = "I love my dog" in App.js
    now in App.js we have something more complex: We have tweets in App.js refers to the array
    with a bunch of tweets, in "Tweetlist.js" we take each single tweet, and we pass it
    as a prop of Tweet named tweet={tweet} as in "TweetList.js".

    Another thing we need to update is the "delete" and "like" button here below.
    We create our onClick events and call back, but we need to be sure to access the "state"
    because if you delete it from the state, you delete it from the UI. 
    So what we need is the function that allows us to delete something/or set something.
    Which is "setTweets". So we:
    1 go on "App.js" and pass: <TweetList setTweets={setTweets} />
    2 go on "TweetList.js" and pass "setTweets" as prop
    3 pass in "TweetList.js" : in TweetList we pass <Tweet setTweets={setTweets} /> and
      pass it as params here
    5 We also need the original array "tweets" in Tweet.js so we gotta pass it as
      props in TweetList.js <Tweet tweets={tweets} /> and pass it as params here.

    Important: notice by the way, that if you console.log(tweet), the individual message, to the
    deleteTweet() call back, each time you press the delete button it logs its on message.

    6 now that we have everything we basically in deleteTweet we can, use the "setTweets"
      function as a vehicle to delete something from the array "tweets". 
      We take the big mama array "tweets" and filter the for item which is not equal to our
      current tweet (if you console.log(tweet) and press delete you get the current tweet
      associated with that button). So if the item of the array is not equal to the current 
      tweet we are referring to, you basically return/set a new array with "setTweet" which does
      not include the current tweet you were referring to.

    important: the problem is that we are relaying on the message to delete the tweet.
    What if we have equal 4 messages. We delete all of them then. Because we delete things
    based on the text and not some sort of ID. It will be covered in the next note file.
  */
  
  function Tweet({name, tweet, tweets, status, setTweets}) {
    const deleteTweet = () => {
      setTweets(tweets.filter((item) => item !== tweet));
    }
    return (
      <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {tweet}, status: {status}</h3>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
      </div>
    )
  }
  export default Tweet;




