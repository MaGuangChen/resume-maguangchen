export const changeHoverStatusReducer = (state = 'skill', action) => {
    switch(action.type) {
      case 'CHANGE_HOVER' :
        return action.status;
      default :
        return state;
    }
  }