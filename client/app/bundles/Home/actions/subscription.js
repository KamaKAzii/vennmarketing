export const createSubscription = (subscription) => {
  return {
    type: 'CREATE_SUBSCRIPTION',
    subscription
  }
};

export const receiveSubscriptionError = () => {
  return {
    type: 'RECEIVE_SUBSCRIPTION_ERROR'
  }
};

export const receiveSubscriptionSuccess = () => {
  return {
    type: 'RECEIVE_SUBSCRIPTION_SUCCESS'
  }
};
