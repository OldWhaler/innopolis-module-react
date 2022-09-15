function ShowDishCard(e, id, navigate) {
  if (e.target.localName === 'button') return
  navigate(`/${id}`)
}

export default ShowDishCard