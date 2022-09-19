import axios from 'axios'


function App() {
  const onClick = () => {
    axios.post('http://localhost:4000/api/search', {data : "string"}).then(res => console.log(res.data.hits)).catch(err => console.log(err))
  }
  return (
    <div >
      <button onClick={onClick} >버튼</button>
    </div>
  );
}

export default App;