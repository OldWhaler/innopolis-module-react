import { useNavigate } from 'react-router-dom';



function ExitButton() {
  const navigate = useNavigate()

  const exit = () => {
    navigate('/login')
  }

  return (
    <button className="button" onClick={exit}>Выйти</button>
  )

}

export default ExitButton;