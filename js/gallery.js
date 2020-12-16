import pictures from "/js/pics.js";



//gallery root element
const galleryEl = document.querySelector('.js-gallery');



pictures.forEach(item => {


    ///list elements for preview
const liElement = document.createElement('li');

const aElement = document.createElement('a');
aElement.href = item.original;

const imgPreviewEl = document.createElement('img');
imgPreviewEl.src = item.preview;
imgPreviewEl.width = '340';
imgPreviewEl.alt = item.description;
imgPreviewEl.setAttribute('data-picture', item.original)


galleryEl.append(liElement);
liElement.append(aElement);
aElement.append(imgPreviewEl);

});


const mainPicEl = document.querySelector('.lightbox__image');

function mainPicFunction(event){
    event.preventDefault()
    if(event.target.nodeName !== 'IMG'){
        return
     }

    mainPicEl.src = event.target.dataset.picture;
    modalEl.classList.add('is-open')

//    console.log(event.target.dataset) 
}

galleryEl.addEventListener('click', mainPicFunction)


///modal open-close
const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]')
const modalEl = document.querySelector('.js-lightbox')
const overlayEl = document.querySelector('.lightbox__overlay')

closeButtonEl.addEventListener('click',()=>
modalEl.classList.remove('is-open')
)

overlayEl.addEventListener('click',()=>
modalEl.classList.remove('is-open')
)

// modalEl.addEventListener('keyup')