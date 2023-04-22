import axios from "axios"
import { useMutation , useQueryClient } from "react-query";


const request = ({ method , endpoint , payload}) => {
    if(method === 'post'){
        return axios.post(`http://localhost:5004/api${endpoint}`, payload)
    }
    if(method === 'put'){
        return axios.put(`http://localhost:5004/api${endpoint}`, payload)
    }
    if(method === 'delete'){
        return axios.delete(`http://localhost:5004/api${endpoint}/${payload.id}`)
    }
    return axios.post('fefe')
}



const useMutate = ({name , method , endpoint}) => {

    const queryClient = useQueryClient();

    return useMutation((payload)  => request({ method , endpoint , payload}),
        {
            onSuccess : () => {
                queryClient.invalidateQueries(name)
            },
            onError : (err) => {
                alert(err.response.data)
            }
        }
    )
}

export default useMutate