import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CandidateList from "./Pages/CandidateList";
import { CandidateProvider } from "./Provider/CandidateContext";
import CandidateDetail from "./Pages/CandidateDetail";



const App = () => {
    return (
      <Router>
        <CandidateProvider>
        <Routes>
          <Route path="/" element={
            <CandidateList />
          } />
          <Route path="/candidatedetail/:id" element={<CandidateDetail />} />
        </Routes>
        </CandidateProvider>
      </Router>
    );
  };

export default App;