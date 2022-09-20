import { useSelector } from 'react-redux';

import './ModalButton.scss';

function ModalButton() {
  const { colorTheme } = useSelector(store => store.appReducer.modalData);
  const theme = colorTheme === 'dark' ? 'modal-button_dark' : 'modal-button_light';

  return (
    <button className={`modal-button ${theme}`}>ok</button>
  );
}

export default ModalButton;

