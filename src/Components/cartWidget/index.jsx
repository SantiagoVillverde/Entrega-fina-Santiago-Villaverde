import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getQuantity } = useContext(Context);

  return (
    <div className="CartCont nav-link p-2">
      <i className="CartIcon">
        <Link to="/cart">
          <BsFillCartFill className="iconoCarro" />
        </Link>
      </i>

      {getQuantity() > 0 ? <i className="CartCant">{getQuantity()}</i> : null}
    </div>
  );
}

export default CartWidget;
