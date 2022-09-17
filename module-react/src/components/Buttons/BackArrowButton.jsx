import { useNavigate } from 'react-router-dom'

import './Buttons.scss'

function BackArrowButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button className='back-arrow-button' onClick={goBack}></button>
  )

}

export default BackArrowButton;