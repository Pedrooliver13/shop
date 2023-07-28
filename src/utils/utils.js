export const getURLParams = (params = 'products') => {
  const urlParams = new URLSearchParams(window.location.search)
  const location = urlParams.get(params)

  return location;
}
