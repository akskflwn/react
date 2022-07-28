import logo from './logo.svg';
import './App.css';
import UseMemo01 from './hooks/4_useMemo/UseMemo01';
import UseMemo02 from './hooks/4_useMemo/UseMemo02';
import UseCallback03 from './hooks/5_uesCallBack/UserCallback03';
import UserReducer02 from './hooks/6_useReducer/UserReducer02';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserReducer02/>      
      </header>
    </div>
  );
}

export default App;
