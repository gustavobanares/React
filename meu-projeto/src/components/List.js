import Item from './Item'


function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = 'Ferrari' ano_lancamento={1980}/>
                <Item marca = 'Fiat' ano_lancamento={1997}/>
                <Item marca = 'Renault'/>
                <Item marca = 'Chevrolet' ano_lancamento={2000}/>
                <Item/>
            </ul>
        </>
    )
}

export default List