import pictures from "/js/pics.js";



//gallery root element
const galleryEl = document.querySelector('.js-gallery');


const mainPicEl = document.querySelector('.lightbox__image');

pictures.forEach((item, indx) => {

// console.log(indx)
    /// elements list for preview
    const liElement = document.createElement('li');

    const aElement = document.createElement('a');
    aElement.href = item.original;

    const imgPreviewEl = document.createElement('img');
    imgPreviewEl.src = item.preview;
    imgPreviewEl.width = '340';
    imgPreviewEl.alt = item.description;
    imgPreviewEl.setAttribute('data-picture', item.original);
    // imgPreviewEl.setAttribute('data-index', indx);
    imgPreviewEl.setAttribute('data-index', '0')
    


    galleryEl.append(liElement);
    liElement.append(aElement);
    aElement.append(imgPreviewEl);


   
    
});




function mainPicFunction(event){
    event.preventDefault()
    if(event.target.nodeName !== 'IMG'){
        return
     }

      
    mainPicEl.setAttribute('data-change', '0')
    mainPicEl.src = event.target.dataset.picture;
    mainPicEl.alt = `${event.target.description}`
    
    modalEl.classList.add('is-open');

    
   
    
}

galleryEl.addEventListener('click', mainPicFunction)


///modal open-close
const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]')
const modalEl = document.querySelector('.js-lightbox')
const overlayEl = document.querySelector('.lightbox__overlay')

// function datasetRemoval(){
//     if((modalEl.classList.contains('is-open')===false)){
        
//         mainPicEl.src = "";
//       } 
// }

closeButtonEl.addEventListener('click',()=>
modalEl.classList.remove('is-open') )


overlayEl.addEventListener('click',()=>
modalEl.classList.remove('is-open') 



)

window.addEventListener('keydown', event =>{
    if(event.code === 'Escape'){
        mainPicEl.src = "";
        modalEl.classList.remove('is-open') 
    }
// console.log(event.code)

});

// galleryEl.addEventListener('keydown', event =>{
//     const calculator = '0';
//     if(event.code === 'ArrowRight'){
//         console.log(event.currentTarget)
//     }

// })

