// javascript
// click events
// save buton
let save = document.querySelector('.save');
save.addEventListener('click', ()=>{
    if(save.classList.contains('far')){
        // saved
        save.classList.add('fas');
        save.classList.remove('far');
    }
    else{
        // unsaved
        save.classList.remove('fas');
        save.classList.add('far');
    }
})

// like button
let like = document.querySelector('.like');
like.addEventListener('click', ()=> {
    if(like.classList.contains('far')){
        like.classList.add('fas');
        like.classList.remove('far');
        like.classList.add('liked');

    }
    else{
        like.classList.add('far');
        like.classList.remove('fas');
        like.classList.remove('liked');
    }
})