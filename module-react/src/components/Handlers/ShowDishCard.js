function ShowDishCard(e, id, navigate) {
  if (e.target.localName === 'button') return
  navigate(`/products/${id}`)
}

export default ShowDishCard