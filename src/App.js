import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import CollegeLogin from './components/CollegeLogin';
import CareerSelection from './components/CareerSelectionPage';
import AptitudeTest from './components/AptitudeTest';
import SignUpPage from './components/SignUp';
import TestCompletionPage from './components/TestCompletionPage';
import LocationSelectionPage from './components/LocationSelectionPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/college-login" element={<CollegeLogin />} />
        <Route path="/career-selection" element={<CareerSelection />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="//test-completion" element={<TestCompletionPage />} />
        <Route path="/location-selection" element={<LocationSelectionPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
