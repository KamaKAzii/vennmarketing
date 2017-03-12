import React from 'react'

export default class Splash extends React.Component {
  constructor () {
    super();
  }

  submitForm() {
    console.log("submitted form");
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => {
          e.preventDefault();
          this.submitForm();
        }}>
          <input type="text" placeholder="location" />
          <input type="text" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
