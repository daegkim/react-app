import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ErrorPage from './pages/error';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
