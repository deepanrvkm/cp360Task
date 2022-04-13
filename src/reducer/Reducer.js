function Reducer(state, action){          
    switch(action.type){        
        case 'signin':
            return{  
                ...state,             
                signin: action.payload.status,               
            }             
        default: return state;
    }    
}

export default Reducer;


