import {useState} from 'react';
function CreateTweet() {
  // state
  const [textInput, setTextInput] = useState('');
  // function
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form>
      <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button>Submit</button>
      <p> <strong> Tweet output: {textInput} </strong></p>
    </form>
  )
}

export default CreateTweet;