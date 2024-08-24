import Frase from "./Frase"

function HelloWorld(){
    return(  /*O return serve para retornar um HTML*/
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <Frase/>
        </div>
    )
}

export default HelloWorld