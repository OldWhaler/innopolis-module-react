import { useSelector, useDispatch } from 'react-redux';

import ColoredButton from '../Buttons/ColoredButton';
import MakeOrder from '../Handlers/MakeOrder';

import './BasketFooter.scss'

function BasketFooter() {
  const dispatch = useDispatch();
  const basketSum = useSelector(store => store.basketReducer.sum);

  return (
    <footer className="basket__footer">
      <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
      <ColoredButton text={'Оформить заказ'} handler={() => MakeOrder(dispatch)} />
    </footer>
  );
}

export default BasketFooter;