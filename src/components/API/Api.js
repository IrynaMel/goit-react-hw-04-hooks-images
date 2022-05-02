const key = '25186497-f0b65966427832fd654bcbd8e';
const position = 'photo&orientation=horizontal';

export function FetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=${position}&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`no image for ${name}`));
    })
    .then(response => response.hits);
}
