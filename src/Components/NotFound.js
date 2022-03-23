import React from 'react'
import { useHistory } from 'react-router-dom';

const NotFound = () => {

  const history = useHistory();

  const redirect = () => {
    history.push('/');
  }

  return (
    <div className="text-center">
      <img src="https://t3.ftcdn.net/jpg/03/88/23/82/360_F_388238209_tCXemYkYHzhiSV6KVUbaiuCEfoSAFLwz.jpg" width="100%" height="500" alt="img" />
        <h3>This page could not be found</h3>
      <button className="btn btn-primary" onClick={redirect}>Return to home page</button>
    </div >
  )
}

export default NotFound