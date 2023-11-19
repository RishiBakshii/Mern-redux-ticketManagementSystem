import { useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { checkAuthAsync, selectIsAuthChecked, selectLoggedInUser } from './features/auth/AuthSlice';
import { AdminDashBoardPage, LoginPage, SignupPage } from './pages';

function App() {

  const dispatch=useDispatch()
  const loggedInUser=useSelector(selectLoggedInUser)
  const isAuthChecked=useSelector(selectIsAuthChecked)


  useEffect(()=>{
    dispatch(checkAuthAsync())
  },[])
  return (
    <Router>
      <Routes>

        {/* AUTH routes */}
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/signup' element={<SignupPage/>}/>

        {/* admin routes */}
        <Route exact path='/admin' element={<AdminDashBoardPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
