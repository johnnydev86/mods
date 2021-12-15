
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Auth/Authpages/Signup'
import Errorpage from './AppPages/Errorpage'
import ForgotPassword from './Auth/Authpages/ForgotPassword'
import Signin from './Auth/Authpages/SignIn'




function App() {

  return (
    <Router>
      <Routes>
      <Route path='/Signin' caseSensitive={false} element={<Signin />} />
      <Route path='/Signup' caseSensitive={false} element={<Signup />} />
      <Route path='/ForgotPassword' caseSensitive={false} element={<ForgotPassword />} />
      <Route path='/*' caseSensitive={false} element={<Errorpage />} />
     </Routes>
    </Router>
  );
}

export default App;
  