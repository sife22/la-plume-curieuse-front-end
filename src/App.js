import { Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/front/Layout/Layout';
import AdminLayout from './components/admin/Layout/Layout';

function App() {
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== '/dashboard' ? <Layout /> : <AdminLayout />}
    </div>
  );
}

export default App;
