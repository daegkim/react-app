import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ComponentPage from './pages/component';
import ErrorPage from './pages/error';
import FormPage from './pages/form';
import HomePage from './pages/home';
import PostPage from './pages/post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/component" element={<ComponentPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
