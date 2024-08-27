import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';


function App(){

  const meusItens = ['React', 'Vue', 'Angular']

  return(
    <div className="App">
      <h1>Renderizacao de listas</h1>
      <OutraLista itens ={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}




export default App;
