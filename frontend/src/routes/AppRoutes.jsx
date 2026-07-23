import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import BrowseItems from '../pages/BrowseItems';
import PostItem from '../pages/PostItem';
import ItemDetails from '../pages/ItemDetails';
import AdminDashboard from '../pages/AdminDashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/browse" element={<BrowseItems />} />
      <Route path="/post" element={<PostItem />} />
      <Route path="/items/:id" element={<ItemDetails />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
