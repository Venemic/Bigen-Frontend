import actions from "./actions";

const initState = {
    id: "",
    useremail:"",
    roles:"",
    isLogged : JSON.parse(localStorage.getItem("isLogged")) || false,
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
             case actions.SET_SIGNUP_CREDENTIALS:
                if(!payload) return state;
                console.log(state)
                return Object.assign({}, state, { 
                    ...state,
                    useremail: state.useremail,
              });
              case actions.SET_LOGIN_CREDENTIALS:
                if(!payload) return state;
                console.log(state)
                return Object.assign({}, state, { 
                    ...state,
                    id: state.id,
                    useremail: state.useremail,
                    roles: state.roles[0]
              });
      default: return state;
    }
};

export default reducer;