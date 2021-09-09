import logo from './logo.svg';
import './App.css';
import TopHeader from './components/topHeader';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { SettingsContext } from './context/auth';
import { useContext } from 'react';
import CircularUnderLoad from './components/loader'


function App() {
  const context = useContext(SettingsContext);

  if(context.loading)return(<>
    <CircularUnderLoad/>
  </>)
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
