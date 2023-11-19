import { useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { checkAuthAsync, selectLoggedInUser } from './features/auth/AuthSlice';

function App() {

  const dispatch=useDispatch()
  const loggedInUser=useSelector(selectLoggedInUser)


  useEffect(()=>{
    dispatch(checkAuthAsync())
  },[])
  return (
    <Router>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
