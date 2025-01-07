import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ItemPage from './pages/ItemPage';
import Login from './pages/Login';
import LoginVerification from './feature/login/LoginVerification';
import Join from './pages/Join';
import LoginLayout from './ui/LoginLayout';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import Event from './pages/Event';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <LoginVerification>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              {/* 아이템들 */}
              <Route path="/category">
                {/* 기본값 category/1/?sort=date_desc */}
                <Route path="1" element={<ItemPage />} />
                <Route path="2" element={<ItemPage />} />
                <Route path="3" element={<ItemPage />} />
              </Route>
              <Route path="/category/1/detail/:itemNum" element={<ItemDetail />} />
              <Route path="/category/2/detail/:itemNum" element={<ItemDetail />} />

              <Route path="event" element={<Event />} />
              <Route path="mypage" element={<p>오픈예정</p>} />

              <Route path="faq" element={<p>오픈예정</p>} />
              <Route path="order">
                <Route path="cart" element={<Cart />} />
              </Route>
            </Route>

            {/* 로그인 */}
            <Route path="/member" element={<LoginLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="join" element={<Join />} />
              <Route path="search" element={<p>elment3</p>} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </LoginVerification>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default Router;
