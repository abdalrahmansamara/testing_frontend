import logo from './logo.svg';
import './App.css';
import TopHeader from './components/topHeader';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
