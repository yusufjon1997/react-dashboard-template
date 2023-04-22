import React from 'react'
import { useFetchAll } from 'hooks';

const All = ({ cache, page = null , params = {} , endpoint, options = {}, children }) => {
    
    const { status , data , error } = useFetchAll({ key: cache, page , params , endpoint, options });
    
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

export default All;