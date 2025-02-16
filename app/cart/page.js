import age from "./data";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner card="롯데카드" />
      <Banner card="현대카드" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.card} 결제 행사중</h5>;
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
