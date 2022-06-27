import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path='admin/*' element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;

