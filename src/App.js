import React from 'react';
import './App.css';

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
  
  render() {
    return (
      <div className="App">
        <h1>Simple timer</h1>
        <div className="sideways">
        <div>
          {/* hour */}
          <button onClick={()=>{this.increase_timer(1)}}>up</button>
          <h3>{this.state.hour.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(1)}}>down</button>
        </div>

        <div>
        
          {/* minutes */}
          <button onClick={()=>{this.increase_timer(2)}}>up</button>
          <h3>{this.state.minute.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(2)}}>down</button>
        </div>

        <div>
          {/* seconds */}
          <button onClick={()=>{this.increase_timer(3)}}>up</button>
          <h3>{this.state.second.toString().padStart(2,'0')}</h3>
          <button onClick={()=>{this.decrease_timer(3)}}>down</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
