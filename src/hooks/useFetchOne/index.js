import { useQuery } from "react-query";
import { fetcher } from "../useFetchAll";

const useFetchOne = ({key , id=1 , endpoint , options = {}}) => {
    return useQuery([key , id] , () => fetcher(endpoint), options)    
}

export default useFetchOne