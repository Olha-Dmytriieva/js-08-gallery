import pictures from "/js/pics.js";
// console.log(pictures)

// main element
const rootEl = document.querySelector('.js-gallery');

// functional (open-close)
const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]')
const modalEl = document.querySelector('.js-lightbox')
const overlayEl = document.querySelector('.lightbox__overlay')

// big pictures
const mainPicEl = document.querySelector('.lightbox__image')




console.log(overlayEl)

// console.log(listEl)

// console.log(imgEl)



pictures.forEach(item => {
    

    const listEl = document.createElement('li')
    const previewEl = document.createElement('img')
    listEl.append(previewEl)

    previewEl.src = item.preview;
    previewEl.width = '340'
    rootEl.append(listEl)
    
    
});


function clickControl(event){
    if(event.target.nodeName !== 'IMG'){
        // console.log(pictures)
        return
    }

    
    modalEl.classList.add('is-open')

    pictures.forEach(item, indx) => {
        mainPicEl.src = item.original  

        console.log(event)
     })
}


rootEl.addEventListener('click', clickControl)



closeButtonEl.addEventListener('click',()=>
modalEl.classList.remove('is-open')
)

overlayEl.addEventListener('click',()=>
modalEl.classList.remove('is-open')
)