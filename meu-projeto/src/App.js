import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App(){

  const nome = 'Bacco'

  return(
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome='Gustavo'/>
      <SayMyName nome = 'Banares'/>
      <SayMyName nome = {nome}/>
      <Pessoa 
      nome = 'Bruno' 
      idade = '30' 
      profissao = 'Programador' 
      foto = 'https://via.placeholder.com/150' />
      <List/>
    </div>
  )
}




export default App;
