import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetail from './components/shared/blog/PostDetail';
import PostsList from './components/shared/blog/PostsList';
import Contact from './components/shared/contact/Contact';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './components/shared/home/Home';
import Privacy from './components/shared/Privacy';
import ProjectList from './components/shared/project/ProjectList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header /> <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/projects',
      element: (
        <>
          <Header /> <ProjectList />
          <Footer />
        </>
      ),
    },
    {
      path: '/blog',
      element: (
        <>
          <Header />
          <PostsList />
          <Footer />
        </>
      ),
    },
    {
      path: '/blog/:blogId',
      element: (
        <>
          <Header />
          <PostDetail />
          <Footer />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: '/privacy',
      element: (
        <>
          <Header />
          <Privacy />
          <Footer />
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
