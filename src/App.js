import React from 'react';
import './App.css';
var timer = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hour: 0,minute: 0,second: 0};
  }
  increase_timer(x){
    if (x === 1 && this.state.hour < 59) {
      this.setState({hour: this.state.hour + 1});
      
    }
    else if (x === 2 && this.state.minute < 59) {
      this.setState({minute: this.state.minute + 1});
      
    }
    else if (x === 3 && this.state.second < 59) {
      this.setState({second: this.state.second + 1});
      
    }
  }
  decrease_timer(x){
    if (x === 1 && this.state.hour > 0) {
      this.setState({hour: this.state.hour - 1});
      
    }
    else if (x === 2 && this.state.minute > 0) {
      this.setState({minute: this.state.minute - 1});
      
    }
    else if (x === 3 && this.state.second > 0) {
      this.setState({second: this.state.second - 1});
      
    }
  }

  resettimer(){
    this.setResetInterval(false);
    this.setState({hour: 0});
    this.setState({minute: 0});
    this.setState({second: 0});
  }

  setResetInterval(bool){
    var self = this;
    if(bool){
          timer = setInterval(function(){
            if (self.state.second > 0){
              self.decrease_timer(3);
            }
            else if(self.state.minute > 0){
              self.decrease_timer(2);
              self.setState({second: 60});
              self.decrease_timer(3);
            }
            else if(self.state.hour > 0){
              self.decrease_timer(1);
              self.setState({minute: 60});
              self.decrease_timer(2);
              self.setState({second: 60});
              self.decrease_timer(3);
            }
            else{
              clearInterval(timer);
            }
          },1000);
    }else{
      clearInterval(timer); 
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Countdown Timer</h1>

        <div className="sideways">
        <div>
          {/* hour */}
          <h3>Hour</h3>
          <button onClick={()=>{this.increase_timer(1)}}>up</button>
          <h3>{this.state.hour.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(1)}}>down</button>
        </div>

        <div>
        
          {/* minutes */}
          <h3>Minute</h3>
          <button onClick={()=>{this.increase_timer(2)}}>up</button>
          <h3>{this.state.minute.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(2)}}>down</button>
        </div>

        <div>
          {/* seconds */}
          <h3>Second</h3>
          <button onClick={()=>{this.increase_timer(3)}}>up</button>
          <h3>{this.state.second.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(3)}}>down</button>
        </div>
        </div>
        <br/>
          <button onClick={()=>{this.setResetInterval(true)}}>Start</button>
          <button onClick={()=>{this.setResetInterval(false)}}>Stop</button>
          <button onClick={()=>{this.resettimer()}}>reset</button>
      </div>
    );
  }
}

export default App;
