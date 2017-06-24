export function addComicToLS(data, state) {
  this.setState({ favorites: state.concat([data])});
  return localStorage.setItem('favorites', { favorites: state});
}

export function removeComicToLS(id, state) {
  const removeIndex = state.map( item => item.id).indexOf(id);
  ~removeIndex && this.setState({ favorites: state.splice(removeIndex, 1)});
  localStorage.removeItem('favorites');
  return localStorage.setItem('favorites', { favorites: state});
}