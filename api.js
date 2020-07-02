const API_URL = 'https://nature-image-api.now.sh/search?q=';

export function get_images(termo) {
     return fetch(API_URL + termo)
    .then((resposta) => resposta.json())
    .then((data) => data.images)

}

