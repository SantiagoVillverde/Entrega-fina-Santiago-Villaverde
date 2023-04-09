import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "./item.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext } from "react";
import { Context } from "../../context";

function Item({ producto }) {
  const { onAdd } = useContext(Context);

  return (
    <Card className="card-custom my-4 mx-auto">
      <Card.Img variant="top" src={producto.imagen} />

      <Card.Body style={{ fontFamily: "Comfortaa, cursive" }}>
        <Card.Title style={{ fontWeight: "bold" }}>
          {producto.nombre}
        </Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{
            fontSize: "1.5em",
          }}
        >
          ${producto.precio}
        </Card.Subtitle>
        <ButtonGroup>
          <Button variant="info" onClick={() => onAdd(producto, 1)}>
            <BsFillCartPlusFill
              className="iconoCarro"
              style={{ color: "white" }}
            />
          </Button>

          <Button variant="info">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/item/${producto.id}`}
            >
              Ver
            </Link>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default Item;
