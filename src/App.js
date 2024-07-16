import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StepProvider } from './context/StepContext';
import CreateYourAcoountOne from "./pages/CreateYourAcoountOne";
import CreateYourAcountTwo from "./pages/CreateYourAcountTwo";
import CreateYourAccountThree from "./pages/CreateYourAccountThree";

function App() {
  return (
    <div className="App">
      <Router>
      <StepProvider>
        <Routes>
          <Route path="/" element={<CreateYourAcoountOne />} />
          <Route path="/step-two" element={<CreateYourAcountTwo />} />
          <Route path="/step-three" element={<CreateYourAccountThree />} />
        </Routes>
        </StepProvider>
      </Router>
    </div>
  );
}

export default App;
