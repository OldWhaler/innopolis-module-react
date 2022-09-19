import { products } from '../../products-list';
import { changeCounter, changeSum, addToIdList } from '../../store/appSlice';

function AddInBasket(event, dispatch) {
  const target = event.target;

  const dishId = target.dataset.dishId;
  const dish = products.filter(item => item.id === dishId)[0];

  dispatch(changeCounter(1));
  dispatch(changeSum(+dish.price));
  dispatch(addToIdList(dishId))
}

export default AddInBasket;