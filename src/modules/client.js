const request = (url, func) => {
  return (func || fetch)(url)
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }
      return response.text();
    })
    .catch(err => err);
};

export { request };
