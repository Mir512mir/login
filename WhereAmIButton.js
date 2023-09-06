import React from "react";

class WhereAmIButton extends React.Component {
  submit = (event) => {
    console.log("Mouse Position:", event.clientX, event.clientY);
  };

  render() {
    return (
      <button onClick={this.submit}>whereAmI</button>
    );
  }
}

export default WhereAmIButton;