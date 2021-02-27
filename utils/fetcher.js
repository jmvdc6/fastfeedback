export const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json', token }),
    creadentials: 'same-origin'
  });

  return res.json();
};
