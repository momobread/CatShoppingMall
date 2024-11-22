import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      refetchInterval: 10000,
      refetchOnWindowFocus: true,
    },
  },
});

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            {/* 아이템들 */}
            <Route path="product" element={<>dddd</>} />
            <Route path="/product/best" element={<p>bestItemPage</p>}>
              <Route path=":product" element={<p>detail1</p>} />
              {/* 댓글,후기 등은 쿼리스트링으로 받는다 */}
            </Route>
            <Route path="/product/new" element={<p>newItem</p>}>
              <Route path=":product" element={<p>detil2</p>} />
            </Route>

            <Route path="event" element={<p>이벤트</p>} />
            <Route path="mypage" element={<p>내페이지</p>} />

            <Route path="faq" element={<p>자주묻는질문</p>} />
            <Route path="order">
              <Route path="cart" element={<p>fff</p>} />
            </Route>
          </Route>

          {/* 로그인 */}
          <Route path="/member">
            <Route path="login" element={<p>elment</p>} />
            <Route path="join" element={<p>elment2</p>} />
            <Route path="search" element={<p>elment3</p>} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default Router;
