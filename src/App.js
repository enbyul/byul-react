import React, {Component} from "react";
import ScrollBox from './ScrollBox';

class App extends Component {
  render () {
    return (
      <>
    <ScrollBox ref={(ref) => this.scrollBox=ref} />
    <button onClick={() => this.scrollBox.scrollToBottom()}>밑으로</button>
    <p>test2</p>
    <p>test1</p>
    </>
    )
  }
}

export default App;
