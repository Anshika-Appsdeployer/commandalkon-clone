import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Hero />
      <Content /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Home