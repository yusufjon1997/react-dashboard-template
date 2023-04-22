import React from 'react'
import { useFetchOne } from 'hooks';

const One = ({ cache, id = 1 , endpoint, options = {}, children }) => {
    
    const { status , data , error } = useFetchOne({ key: cache, id , endpoint, options });
    
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error' && error) {
        return <div>Error: {error.message}</div>;
    }

    if (Array.isArray(data.data) && data.data.length === 0) {
        return <div>No data found</div>;
    }

    if (status === 'success') {
        return children(data.data)
    }
    return null;
}

export default One;