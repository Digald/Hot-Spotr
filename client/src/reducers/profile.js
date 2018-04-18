//A reducer takes in two things:

//1. The action (info about what happened)
//2. A copy of current state

function profile(state = [], action) {
    console.log('The profile will change')
    console.log(state, action);
    return state;
}

export default profile;
