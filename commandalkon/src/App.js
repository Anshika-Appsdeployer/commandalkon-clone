import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';

function App() {
  return (
    <div className="absolute flex flex-col w-full h-auto">
      <Header />
      <Navbar />
      <div className="relative">
      <Hero />
      </div>
      <Content />
    </div>
  );
}

export default App;
