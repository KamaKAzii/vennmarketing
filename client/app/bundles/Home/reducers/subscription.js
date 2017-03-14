const initialState = {
  isSubscribing: false,
  hasSubscribed: false,
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_SUBSCRIPTION':
      console.log(action.subscription);
      return {
        ...state,
        isSubscribing: true,
        hasSubscribed: false,
      }
    case 'RECEIVE_SUBSCRIPTION_ERROR':
      return {
        ...state,
        isSubscribing: false,
        hasSubscribed: false,
      }
    case 'RECEIVE_SUBSCRIPTION_SUCCESS':
      return {
        ...state,
        isSubscribing: false,
        hasSubscribed: true,
      }
    default:
      return state;
  }
};
