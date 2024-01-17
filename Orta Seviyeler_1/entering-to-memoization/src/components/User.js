import React from 'react';

function User({ data }) {

    console.log("User component re-render");

  return (
    <>
    <h4>User</h4>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default React.memo(User);