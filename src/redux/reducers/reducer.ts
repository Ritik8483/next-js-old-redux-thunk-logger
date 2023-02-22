const initialState={
    candidateValue:[],
    selectedCandidate:{}
};
export const apiReducer=(state=initialState,action: { type: any; payload: any; })=>{
    switch(action.type){
        case 'GET_API':return{
            // ...state,
            candidateValue:action.payload,
        }
        break;
        default:return state;
    }
}
export default apiReducer