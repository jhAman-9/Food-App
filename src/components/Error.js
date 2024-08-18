import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
          <div>Opps !!</div>
          <h1>
              Something Wnet Wrong ..
          </h1>
          <h2>
              {err.status} : {err.statusTesxt  }
          </h2>
    </div>
  );
}

export default Error