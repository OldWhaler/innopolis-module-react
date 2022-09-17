import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearIdList } from '../../store/basketSlice';


import './BasketFooter.scss'

function BasketFooter() {
  const basketSum = useSelector(store => store.basketReducer.sum);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const makeOrder = () => {
    navigate('/');
    dispatch(clearIdList())
    alert('Вы оформили заказ');
  }

  return (
    <footer className="basket__footer">
      <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
      <button className="button button_colored" onClick={makeOrder}>Оформить заказ</button>
    </footer>
  );
}

export default BasketFooter;