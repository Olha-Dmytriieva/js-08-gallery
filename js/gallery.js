import pictures from "./pics.js";



//gallery root element
const galleryEl = document.querySelector('.js-gallery');


const mainPicEl = document.querySelector('.lightbox__image');

pictures.forEach((item, indx) => {


    /// elements list for preview
    const liElement = document.createElement('li');

    const aElement = document.createElement('a');
    aElement.href = item.original;

    const imgPreviewEl = document.createElement('img');
    imgPreviewEl.src = item.preview;
    imgPreviewEl.width = '340';
    imgPreviewEl.alt = item.description;
    imgPreviewEl.setAttribute('data-picture', item.original);
    imgPreviewEl.setAttribute('data-index', indx)
    


    galleryEl.append(liElement);
    liElement.append(aElement);
    aElement.append(imgPreviewEl);


   
    
});




    function mainPicFunction(event){
        event.preventDefault()
        if(event.target.nodeName !== 'IMG'){
            return
        }

        
        // mainPicEl.setAttribute('data-change', '0')
        mainPicEl.src = event.target.dataset.picture;
        // mainPicEl.alt = `${event.target.description}`
        
        modalEl.classList.add('is-open');

        
    }

    // function sliderRight(event){
    //     const indexRef = event.target.querySelector('img')
    //     let datasetRef = Number(indexRef.dataset.index);
    //     let nextPic = datasetRef +1;

    //     mainPicEl.src = nextPic;
        
        
    //     console.log(mainPicEl.src)

    // }


    galleryEl.addEventListener('click', mainPicFunction)


    ///modal open-close
    const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]')
    const modalEl = document.querySelector('.js-lightbox')
    const overlayEl = document.querySelector('.lightbox__overlay')

    function datasetRemoval(){

        modalEl.classList.remove('is-open');
        mainPicEl.src = ""


    }

    closeButtonEl.addEventListener('click', datasetRemoval);
    overlayEl.addEventListener('click', datasetRemoval);

    window.addEventListener('keydown', event =>{
        if(event.code === 'Escape'){
            modalEl.classList.remove('is-open');
        }
    })

    // window.addEventListener('keydown', sliderRight);

    // window.addEventListener('keydown', event =>{
    //     const indexRef = event.target.querySelector('img');
    //     // console.log(indexRef)

    //     let datasetRef = Number(indexRef.dataset.index);
    //     console.dir(datasetRef)



    //     let nextPic = 0;

       
    //          if(event.code === 'ArrowRight'){
           
    //         //  
    //         nextPic = datasetRef + 1;
    //         mainPicEl.src =  indexRef.dataset.picture;
            
    //         console.log('click')
            
        

    //      }

        
    // })

