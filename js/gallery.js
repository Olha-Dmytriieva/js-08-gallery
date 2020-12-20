import pictures from "./pics.js";



//gallery root element
const galleryEl = document.querySelector('.js-gallery');


const mainPicEl = document.querySelector('.lightbox__image');
let indexElement = 0;

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

        function sliderRight(event){
         
        if (event.code === 'ArrowRight') {
            
        const indexRef = event.target.querySelector('img');
        console.log(event.target    )
        let datasetRef = Number(indexRef.dataset.index);
        // console.log(indexRef.dataset.index)

            // let nextPic = 1;
            let elementById;
            // console.log(indexRef.dataset.picture)
        indexElement += 1;
        // console.log(indexElement)
        if (indexElement >= pictures.length) {
            indexElement = pictures.length - 1;
            // elementById = indexRef.dataset.picture;
            // mainPicEl.src = elementById;

            // console.log(indexRef.dataset.picture)
        };
        
        // elementById = indexRef.dataset.picture;
        // mainPicEl.src = elementById;
        // console.log(indexRef)
        if (indexElement === datasetRef) {
            elementById = indexRef.dataset.picture;
            mainPicEl.src = elementById;

            // console.log(indexRef.dataset.picture)
        }

   
    
}}});




    function mainPicFunction(event){
        event.preventDefault()
        if(event.target.nodeName !== 'IMG'){
            return
        }

        
        // mainPicEl.setAttribute('data-change', '0')
        mainPicEl.src = event.target.dataset.picture;
        mainPicEl.alt = `${event.target.alt}`
        
    
        modalEl.classList.add('is-open');
        // console.log(event.target)
        
    }

    // function sliderRight(event){
    //     if (event.code === 'ArrowRight') {
            
    //         const indexRef = event.target.querySelector('img');
    //         let datasetRef = Number(indexRef.dataset.index);


    //             let nextPic = 1;
    //             let elementById;
           
    //         indexElement += nextPic;
    //         // console.log(indexElement)
    //         if (indexElement >= pictures.length) {
    //             indexElement = pictures.length - 1;
                

    //             console.log(event.code)
    //         };
                
    //         if (indexElement === datasetRef) {
    //             elementById = indexRef.dataset.picture;
    //             mainPicEl.src = elementById;

    //             console.log(indexRef.dataset.picture)
    //         }
        
    // }}

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

    window.addEventListener('keydown', sliderRight);
    // let elementById;
//     window.addEventListener('keydown', event=>{
        
//         if (event.code === 'ArrowRight') {
            
//         const indexRef = event.target.querySelector('img');
//         console.log(event.target    )
//         let datasetRef = Number(indexRef.dataset.index);
//         // console.log(indexRef.dataset.index)

//             // let nextPic = 1;
//             let elementById;
//             // console.log(indexRef.dataset.picture)
//         indexElement += 1;
//         // console.log(indexElement)
//         if (indexElement >= pictures.length) {
//             indexElement = pictures.length - 1;
//             // elementById = indexRef.dataset.picture;
//             // mainPicEl.src = elementById;

//             // console.log(indexRef.dataset.picture)
//         };
        
//         elementById = indexRef.dataset.picture;
//         mainPicEl.src = elementById;
//         console.log(indexRef)
//         // if (indexElement === datasetRef) {
//         //     elementById = indexRef.dataset.picture;
//         //     mainPicEl.src = elementById;

//         //     // console.log(indexRef.dataset.picture)
//         // }

     
    
// }})

        
   

