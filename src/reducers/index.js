
export default (state = 0, action = {}) => { // bcoz its anonomous , we can give any name when imported
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
  
