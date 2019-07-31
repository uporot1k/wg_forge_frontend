async function fetchData(resource) {
  const baseDomain = 'http://localhost:9000/api';
  
  const response = await fetch(`${baseDomain}/${resource}.json`);
  const json = await response.json();

  return json;
}

export default fetchData;
