import { clearIdList } from '../../store/basketSlice';

function MakeOrder(dispatch) {
  dispatch(clearIdList())
  alert('Заказ оформлен. Информация по заказу отправлена на fake@mail.ru')
}

export default MakeOrder;