export const changeAboutSectionReducer = (state = 'aboutMe', action) => {
    switch(action.type) {
      case 'CHANGE_ABOUT' :
        return action.section;
      default :
        return state;
    }
  }