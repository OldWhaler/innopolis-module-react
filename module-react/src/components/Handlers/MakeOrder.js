import { useSelector } from 'react-redux';
import { clearIdList } from '../../store/basketSlice';

function MakeOrder(dispatch, navigate) {
  const counter = useSelector(store => store.basketReducer.counter);
  if (counter === 0) return;

  dispatch(clearIdList())
  navigate('/')
  alert('Заказ оформлен. Информация по заказу отправлена на fake@mail.ru')
}

export default MakeOrder;