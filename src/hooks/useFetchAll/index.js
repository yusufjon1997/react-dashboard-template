import axios from "axios";
import { useQuery } from "react-query";
import { api , queryBuilder } from "services";

export const fetcher = async (endpoint , params = {}) => {

    try {
        const response = await api.request.get(queryBuilder(endpoint , params))
        return response
    }catch(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            throw Error(`Server`)
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            throw Error('No response from server')
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                throw Error('Something happened in setting up the request that triggered an Error')
          }
    }
}


const useFetchAll = ({key , page=null , params = {},  endpoint , options = {}}) => {
    return useQuery([key , page] , () => fetcher(endpoint , params), {...options , keepPreviousData : Boolean(page)})    
}

export default useFetchAll