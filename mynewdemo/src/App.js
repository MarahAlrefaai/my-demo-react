import './App.css';
import MyInfo from './components/MyInfo';
import ViewList from './components/ViewList';
import data from './data/data.json';
function App() {
  return (
    <>
      <p>hello this is my first app</p>
     <MyInfo name="marah"  />
     <ViewList data={data} />
    </>
  );
}
export default App;
