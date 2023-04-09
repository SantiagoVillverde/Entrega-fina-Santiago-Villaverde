
import Item from "../Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function ItemList ({productos}){
    return <Container fluid> 
        <Row className='gap-3 justify-content-center'>
            <h2 className='text-center titulo'>Mercancia</h2>
            {productos.map((elemento,index) =>(<Item producto={elemento} key={elemento.id}/>))}
        </Row>      
    </Container>
}

export default ItemList;
