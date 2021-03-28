import React, { Component } from "react";
import Preview from "./components/Preview";
import Speed from "./components/Speed";
import RandomText from "./components/RandomText"


const initialState = {
  text: RandomText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
};
  

class App extends Component {

state = initialState;

onReset = () => {
    this.setState(initialState)
  };


 onUserInput = (e) => {
    const v = e.target.value
    this.setTimer();
    this.onFinish(v);
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  };

    onFinish(userInput){
        if (userInput === this.state.text){
          clearInterval(this.interval);
          this.setState({
            finished: true
          })
        }
    }

  countCorrectSymbols(userInput){
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
  }

  setTimer(){
      if(!this.state.started){
        this.setState({started: true});
        this.interval = setInterval(() => {
          this.setState(prevProps => {
            return { sec: prevProps.sec + 1}
          })
        }, 1000)
      }
  }

  render() {
  return (
    <div className="mainContainer">
      <main className="typingWrapper">
      <div className="titleText">Typing Speed Test!</div>
     <div className="textContainer">
      <Preview text={this.state.text} userInput={this.state.userInput}/>
     </div>
     <div className="typingContainer">
       <textarea
        value={this.state.userInput}
        onChange={this.onUserInput}
        placeholder="Start typing the text above.....">
        readOnly={this.state.finished} 
       </textarea>
     </div>


     <div className="btnSpeedContainer">
      <Speed sec={this.state.sec} symbols={this.state.symbols}/>
       <button className="btn" onClick={this.onReset}>Restart!</button>
     </div>
     
     </main> 
    </div>
  );
}
}


export default App;
