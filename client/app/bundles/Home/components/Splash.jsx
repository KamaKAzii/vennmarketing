import React from 'react'
import { connect } from 'react-redux'
import * as subscriptionActions from '../actions/subscription'

class Splash extends React.Component {
  constructor () {
    super();
  }

  submitForm() {
    this.props.createSubscription({
      greeting: "Hello",
    });
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

const mapStateToProps = (state, ownProps) => {
  return {
    subscription: state.subscription
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSubscription: subscription => { dispatch(subscriptionActions.createSubscription(subscription)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
