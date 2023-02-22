import axios from "axios";
const getData=(getData: any)=>{
    return{
        type:'GET_API',
        payload:getData
    }
}

export const getApiData=()=>{
    console.log('R')
    console.log('p',process.env.NEXT_PUBLIC_APP_API);
    
    return function(dispatch: (arg0: { type: string; payload: any; }) => void){
        axios.get(`${process.env.NEXT_PUBLIC_APP_API}`)
        .then((response)=>{
            console.log('Response',response);
            dispatch(getData(response.data));
        })
        .catch((error)=>console.log(error));
    }
}
// export default getApiData;