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