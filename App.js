import logo from './logo.svg';
import './App.css';
import useFetchServer from './useFetchServer'

function App() {
  const data = useFetchServer('http://localhost:3001/')
  return <p>{data}</p>
}

export default App;



