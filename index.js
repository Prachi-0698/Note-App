const userInput = document.getElementById('note-input')
// console.log(userInput)
const addBtn = document.getElementById('add-btn')
const notesContainer = document.getElementById('notes-container')

const addNote = () => {
    if(userInput.value.trim() === ''){
        // console.log('Please enter a value')
        const error = document.querySelector('.error-text')
        error.innerText = '* Please Enter Something!'
    }else{
        const error = document.querySelector('.error-text');
        error.innerText = '';
        const newNote = document.createElement('li')
        newNote.textContent = userInput.value;
        const span =  document.createElement('span')
        span.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
        newNote.appendChild(span);
        notesContainer.appendChild(newNote);
        span.addEventListener('click', deleteNote)
    }
}

const deleteNote = () =>{
    const removeNote = document.querySelector('li');
    removeNote.parentNode.removeChild(removeNote)
}



addBtn.addEventListener('click', addNote)