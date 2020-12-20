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
        mainPicEl.alt = `${event.target.description}`
        
        modalEl.classList.add('is-open');

        
    }

    function sliderRight(event){
        const indexRef = event.target.querySelector('img')
        let datasetRef = Number(indexRef.dataset.index);
        let nextPic = 1;

        mainPicEl.src = datasetRef + nextPic;
        
        
        console.log(datasetRef +=1)

    }


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



    window.addEventListener('keydown', sliderRight);

    // window.addEventListener('keydown', event =>{
    //     let calculator = 0;
    //     if(event.code === 'ArrowRight'){
    //         calculator = calculator + 1;

        
    //     } console.log(calculator)

    // })

