const userInput = document.getElementById('note-input')
// console.log(userInput)
const addBtn = document.getElementById('add-btn')
const notes_data = document.querySelector('.notes-data')

let notes = [];
console.log(notes)

const addNote = () => {
    if(userInput.value.trim() === ''){
        // console.log('Please enter a value')
        const error = document.querySelector('.error-text')
        error.innerText = '* Please Enter Something!'
    }else{
        const error = document.querySelector('.error-text');
        error.innerText = '';

        const notes_div = document.createElement('div');
        notes_div.setAttribute('id', 'notes-container');
        notes_data.append(notes_div);

        const list_ul = document.createElement('ul');
        list_ul.setAttribute('id', 'notes-list')
        notes_div.append(list_ul);

        const actions = document.createElement('div');
        actions.classList.add('action');

        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit-btn');
        edit_btn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete-btn');
        delete_btn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        actions.append(edit_btn);
        actions.append(delete_btn);
        notes_div.append(actions);


        const newNote = document.createElement('li')
        newNote.textContent = userInput.value;
        console.log(userInput.value);
        notes.push(newNote);
        // const span =  document.createElement('span')
        // span.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
        // newNote.appendChild(span);


        list_ul.appendChild(newNote);
        delete_btn.addEventListener('click', deleteNote)
        edit_btn.addEventListener('click', editNote)
    }
}

const deleteNote = () =>{
    const removeNote = document.querySelector('li');
    removeNote.parentNode.removeChild(removeNote)
}

const editNote = () => {
    
}





addBtn.addEventListener('click', addNote)