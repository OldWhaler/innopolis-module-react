import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearIdList } from '../../store/appSlice';


import './BasketFooter.scss'

function BasketFooter() {
  const basketSum = useSelector(store => store.appReducer.sum);
  const logged = useSelector(store => store.appReducer.logged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const makeOrder = () => {
    if (basketSum === 0) return
    if (logged) {
      navigate('/');
      dispatch(clearIdList())
      alert('Вы оформили заказ!');
    } else {
      alert('Для оформления заказа необходимо зарегистрироваться.')
    }
  }

  return (
    <footer className="basket__footer">
      <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
      <button className="button button_colored" onClick={makeOrder}>Оформить заказ</button>
    </footer>
  );
}

export default BasketFooter;