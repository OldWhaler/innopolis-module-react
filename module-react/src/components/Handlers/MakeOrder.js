import { clearIdList } from '../../store/basketSlice';

function MakeOrder(dispatch, navigate) {
  dispatch(clearIdList())
  navigate('/')
  alert('Заказ оформлен. Информация по заказу отправлена на fake@mail.ru')
}

export default MakeOrder;