import React from "react";
import * as ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Привет, {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Саша" />,
  document.getElementById('hello-example')
);