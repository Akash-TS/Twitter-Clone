import './App.css';
import Main from './components/Main/Main';
import QuickLinks from './components/QuickLinks/QuickLinks';
import SideBar from './components/Sidebar/Sidebar';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <SideBar />
      <Main />
      <QuickLinks />
    </div>
  );
}

export default App;
