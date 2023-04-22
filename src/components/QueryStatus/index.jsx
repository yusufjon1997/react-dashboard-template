import React from 'react';

const QueryStatus = ({ queryResult , children}) => {
  
  const { data , status, error } = queryResult;

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error' && error) {
    return <div>Error: {error.message}</div>;
  }

  if (Array.isArray(data.data) && data.data.length === 0) {
    return <div>No data found</div>;
  }

  if(status === 'success'){
    return children
  }

  return Error("QueryStatus da xatolik bor");
};

export default QueryStatus;
