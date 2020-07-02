import { get_images } from './api.js';

const form = document.getElementById('main_form');

form.addEventListener('submit',on_form_submit);

function on_form_submit(event) {
    event.preventDefault();
    console.log('form submitado');
    const form_data = new FormData(form);

    const termo = form_data.get('busca');

    console.log(termo);

    get_images(termo)
    .then((images) => add_images(images))
    
}

function add_images(images){
    console.log(images);
    const result_container = document.getElementById('container');
    result_container.innerHTML = ''; 
    images.map( ({title,image}) => {
        console.log(title, image);
        const image_element = document.createElement('img');
        image_element.src = image;
        result_container.append(image_element);
    })
    
}



