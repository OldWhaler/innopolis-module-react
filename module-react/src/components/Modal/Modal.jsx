import ModalButton from '../Buttons/ModalButton/ModalButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalVisability } from '../../store/appSlice';

import './Modal.scss'

function Modal() {
  const dispatch = useDispatch()
  const modalVisability = useSelector(store => store.appReducer.modalVisability);
  const { text, colorTheme } = useSelector(store => store.appReducer.modalData);

  const theme = colorTheme === 'dark' ? 'modal_dark' : 'modal_light';
  const hidden = modalVisability ? '' : 'hidden';

  function onClick(e) {
    e.stopPropagation();
    const targetNodeName = e.target.nodeName;

    if (targetNodeName === 'BUTTON' || targetNodeName === 'MAIN') {
      dispatch(toggleModalVisability());
    }
  }

  return (
    <main className={`modal ${theme} ${hidden}`} onClick={(e) => onClick(e)}>
      <div className="modal__content">
        <p className="modal__text">{text}</p>
        <ModalButton />
      </div>
    </main>
  );
}

export default Modal