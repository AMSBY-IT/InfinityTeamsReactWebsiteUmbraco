import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CandidateList from "./Pages/CandidateList";
import { CandidateProvider } from "./Provider/CandidateContext";
import CandidateDetail from "./Pages/CandidateDetail";



const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CandidateProvider>
            <CandidateList />
          </CandidateProvider>} />
          <Route path="/candidatedetail/:id" element={<CandidateDetail />} />
        </Routes>
      </Router>
    );
  };

export default App;