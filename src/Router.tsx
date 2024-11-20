import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/user">
          <Route path="/user/login" />
          <Route path="/user/join" />
          <Route path="/user/search" />
        </Route>
        <Route path="/mypage" />
        <Route path="/order">
          <Route path="/order/cart" />
        </Route>
        <Route path="/items/best" />
        <Route path="/items/new" />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
