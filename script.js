//Note add box section
const noteadd = document.querySelector('.Notes-addition')
const noddaddbox = document.querySelector('.Note-input')
noteadd.addEventListener('click' , () => {
    if (noddaddbox.style.display == "block"){
        alert("Note addtion block is already opened")
        return
    }
    else{
        const heading = document.querySelector('.heading')
        heading.textContent = "New Note"
        createbtn.textContent = "Create Note"
        noddaddbox.style.display = "block"
    }
})

//Close the note taking part section
const closebtn = document.querySelector('.close')
closebtn.addEventListener('click' , () => {
    const textarea = document.querySelector('#textarea')
    textarea.value = ""
    noddaddbox.style.display = "none"
})

//creation of notes
const createbtn = document.querySelector('.create-note')
createbtn.addEventListener('click' , (event) =>{
    if(createbtn.textContent == "Save"){
        const textarea = document.querySelector('#textarea')
        const notearea = document.querySelector('.note-area')
        notearea.textContent = textarea.value
        textarea.value = ""
        noddaddbox.style.display = "none"
        return
    }
    cardcreation(event);
})

//card creation
function cardcreation(event){
    const textarea = document.querySelector('#textarea')
    if(textarea.value == ""){
        alert("Enter Valid Input")
        return
    }
    const parent = document.querySelector('.Notes-main')
    const carddiv = document.createElement('div')
    carddiv.style.backgroundColor = random_color()
    carddiv.classList.add('card')
    const notearea = document.createElement('div')
    notearea.classList.add('note-area')
    const paragraph = document.createElement('p')
    notearea.appendChild(paragraph)
    paragraph.textContent = textarea.value
    textarea.value = ""
    const button_section = document.createElement('div')
    button_section.classList.add('Notes-btn-section')
    const buttonone = document.createElement("div")
    buttonone.classList.add('btn1')
    const buttontwo = document.createElement("div")
    buttontwo.classList.add('btn2')

    buttonone.addEventListener('click', (event) => {
        edit(event , carddiv)
    })

    //deletion of notes
    buttontwo.addEventListener('click' , () => {
        carddiv.style.display = 'none'
    })

    buttonone.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    buttontwo.innerHTML = '<i class="fa-solid fa-trash"></i>'

    //Button append
    button_section.appendChild(buttonone)
    button_section.appendChild(buttontwo)

    //note div and button div addition
    carddiv.appendChild(notearea)
    carddiv.appendChild(button_section)
    

    //Main addition
    parent.appendChild(carddiv)


    noddaddbox.style.display = 'none'
}

//Random color
function random_color(){
    s = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ; i < 6 ; i++){
        color += s[Math.floor(Math.random() * 16)]
    }
    return color
}

//Edit function



function edit(event , carddiv){
    const heading = document.querySelector('.heading')
    heading.textContent = "Edit Note"
    console.log("Edit")
    if (noddaddbox.style.display == "none"){
        noddaddbox.style.display = "block"
        createbtn.textContent = 'Save'
        const textarea = document.querySelector('#textarea')
        const notearea = document.querySelector('.note-area')
        textarea.value = notearea.textContent
    }
    // else{
        
    // }
}