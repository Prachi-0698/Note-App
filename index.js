const userInput = document.getElementById('note-input');
// console.log(userInput)
const submitButton = document.getElementById('add-btn');
submitButton.innerText = 'Add';

const notes_data = document.querySelector('.notes-data');
const notesList = document.getElementById('notes-list');
let elementToEdit = null;



const addNote = (ele) => {

    if(ele.currentTarget.innerText == 'Edit') {
        console.log('Editing text');

        elementToEdit.innerText = userInput.value;
        submitButton.innerText = 'Add';
        userInput.value = ' ';
        return;
    }

    if(userInput.value.trim() === ''){
        // console.log('Please enter a value')
        const error = document.querySelector('.error-text')
        error.innerText = '* Please Enter Something!'
    }else{
        const error = document.querySelector('.error-text');
        error.innerText = '';

        const list_ul = document.createElement('ul');
        list_ul.setAttribute('id', 'notes-list')
        notes_data.append(list_ul);

        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit-btn');
        edit_btn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete-btn');
        delete_btn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        const newNote = document.createElement('li');
        newNote.setAttribute('class', 'note');

        const noteBlock = document.createElement('div');
        noteBlock.setAttribute('class', 'note-block');
        noteBlock.textContent = userInput.value;
        newNote.appendChild(noteBlock);
        newNote.appendChild(edit_btn);
        newNote.appendChild(delete_btn);



        list_ul.appendChild(newNote);
        
        delete_btn.addEventListener('click', deleteNote);
        edit_btn.addEventListener('click', editNote);

        userInput.value = ' ';
    }
}

const deleteNote = (ele) =>{

    let deleteElement = ele.currentTarget.parentNode;
    console.log(deleteElement);

    deleteElement.remove();
}

const editNote = (ele) => {
    let editableElement = ele.currentTarget.parentNode;
    elementToEdit = editableElement.firstChild;
    let toEdit = elementToEdit.innerText;
    console.log(toEdit);
    
    userInput.value = toEdit;
    submitButton.innerText = 'Edit';
}





submitButton.addEventListener('click', addNote);