import './ColoredButton.scss';

function ColoredButton({ id, text, handler = null }) {
  return <button className="button" onClick={handler} data-dish-id={id}>{text}</button>
}

export default ColoredButton;