import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetail from './components/shared/blog/PostDetail';
import PostsList from './components/shared/blog/PostsList';
import Header from './components/shared/Header';
import Home from './components/shared/home/Home';
import ProjectList from './components/shared/project/ProjectList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header /> <Home />
        </>
      ),
    },
    {
      path: '/projects',
      element: (
        <>
          {' '}
          <Header /> <ProjectList />
        </>
      ),
    },
    {
      path: '/blog',
      element: (
        <>
          <Header />
          <PostsList />
        </>
      ),
    },
    {
      path: '/blog/:blogId',
      element: (
        <>
          <Header />
          <PostDetail />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Header />
          <ProjectList />
        </>
      ),
    },
  ]);
  return (
    <section className="max-w-3xl px=-8 mx-auto min-h-screen font-sans w-full  grow antialiased __variable_36bd41 __variable_33d430">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
