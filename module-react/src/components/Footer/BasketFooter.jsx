import { useSelector, useDispatch } from 'react-redux';
import { clearBasket, changeModalData, toggleModalVisability } from '../../store/appSlice';


import './BasketFooter.scss'

function BasketFooter() {
  const basketSum = useSelector(store => store.appReducer.sum);
  const logged = useSelector(store => store.appReducer.logged);
  const dispatch = useDispatch();

  const makeOrder = () => {
    dispatch(toggleModalVisability());
    if (logged) {
      dispatch(clearBasket());
      dispatch(changeModalData(
        {
          text: 'Заказ оформлен! Благодарим за покупку!',
          colorTheme: 'dark'
        }
      ));
    } else {
      dispatch(changeModalData(
        {
          text: 'Для оформления заказа необходимо войти используя логин и пароль.',
          colorTheme: 'dark'
        }
      ));
    }
  }

  return (
    <footer className="basket__footer">
      <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
      <button className="button button_colored" onClick={makeOrder} disabled={basketSum === 0}>Оформить заказ</button>
    </footer>
  );
}

export default BasketFooter;