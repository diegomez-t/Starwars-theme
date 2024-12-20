const endpoints = [
  'https://swapi.info/api/films',
  'https://swapi.info/api/people',
  'https://swapi.info/api/planets',
  'https://swapi.info/api/species',
  "https://swapi.info/api/species",
];

const props = {
  name: 'name',
  height: 'Height',
  eye_color: 'Eye Color',
  gender: 'Gender',
  birth_year: 'Birth Year',
  title: 'title',
  episode_id: 'Episode #',
  director: 'Director',
  producer: 'Producers',
  release_date: 'Release Date',
  climate: 'Climate',
  terrain: 'Terrain',
  population: 'Population',
  gravity: 'Gravity',
  average_height: 'Average Height',
  classification: 'Classification',
  designation: 'Designation',
  average_lifespan: 'Average Lifespan',
  language: 'Language',
};

export const searchAPI = async (searchText) => {
  let result = [];

  for (let i = 0; i < endpoints.length; i++) {
    const data = await fetch(`${endpoints[i]}?search=${searchText}`);
    if (data.status !== 200) continue;
    const json = await data.json();
    console.log(json);
    

    const output = json.map(({ name, title, ...element }) => ({
      name,
      title,
      data: Object.keys(element).reduce((a, c) => props[c] ? [...a, { label: props[c], value: element[c] }] : a, [])
    }));

    result = [...result, ...output];
  }

  return result;
};
