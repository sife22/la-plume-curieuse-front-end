import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/front/Layout/Layout';
import AdminLayout from './components/admin/Layout/Layout';
import Home from './components/front/Home/Home';
import AdminHome from './components/admin/Home/Home';
import ErrorPage from './components/front/ErrorPage/ErrorPage';
import Contact from './components/front/Contact/Contact';
import About from './components/front/About/About';
import PrivacyPolicy from './components/front/PrivacyPolicy/PrivacyPolicy';
import Login from './components/front/Login/Login';
import Categories from './components/admin/Category/Categories';
import AddCategory from './components/admin/Category/AddCategory';
import ProtectedRoute from './middlewares/ProtectedRoute';
import AlreadyLoggedIn from './middlewares/AlreadyLoggedIn';
import AdminNewsletter from './components/admin/Newsletter/Newsletter';
import Category from './components/front/Category/Category';
import UpdateCategory from './components/admin/Category/UpdateCategory';
import AddPost from './components/admin/Post/AddPost';
import Post from './components/front/Post/Post';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<AlreadyLoggedIn><Layout /></AlreadyLoggedIn>}>
          <Route index element={<Home />} />
          <Route path='/qui-somme-nous' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/politique-confidentialite' element={<PrivacyPolicy />} />
          <Route path='/connexion' element={<Login />} />
          <Route path="/:slugCategory/:slugPost" element={<Post />} />
          <Route path='/:slugCategory' element={<Category />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminHome />} />
          {/* Category */}
          <Route path='/dashboard/categories' element={<Categories />} />
          <Route path='/dashboard/ajouter-categorie' element={<AddCategory />} />
          <Route path='/dashboard/modifier-categorie/:slugCategory' element={<UpdateCategory />} />
          {/* End Category */}
          {/* Post */}
          <Route path='/dashboard/ajouter-article' element={<AddPost />} />
          {/* End Post */}
          <Route path='/dashboard/emails' element={<AdminNewsletter />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;