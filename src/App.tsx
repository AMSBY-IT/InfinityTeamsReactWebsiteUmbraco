import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CandidateList from "./Pages/CandidateList";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Protected from "./Protected";
import CandidateDetail from "./Pages/CandidateDetail";



const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            
            <Protected><CandidateList /></Protected> 
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/detail/:id" element={<Protected><CandidateDetail /></Protected>} />
        </Routes>
      </Router>
    );
  };

export default App;