console.log('JS Connected')

// const title = document.getElementById('title')
// // console.log(title)

// const btn = document.getElementById('btn')
// // console.log(btn)


// //event listener

// let darkmode = false

// btn.addEventListener('click', () => {
//    if (darkmode == false) {
//     document.body.style.backgroundColor = 'black'
//     title.style.color = 'white'
//     btn.textContent = 'Light Mode'
//     darkmode = true
//    }

//    else {
//      document.body.style.backgroundColor = 'white'
//      title.style.color = 'black'
//      btn.textContent = 'Dark Mode'
//      darkmode = false
//    }
// })


// //input

// const t1 = document.getElementById('t1')
// const nameip = document.getElementById('nameip')
// const submit = document.getElementById('submit')

// submit.addEventListener('click', () => {

//     const username = nameip.value

//     if (username == '') {
//         alert('Please enter your name')
//     }

//     // username.toUpperCase()

//     t1.textContent = `Hello ${nameip.value.toUpperCase()}`
//     nameip.value = ''

// })


// dynamic elements

const taskip = document.getElementById('taskip')
const addbtn = document.getElementById('addbtn')
const tasklist = document.getElementById('tasklist')

addbtn.addEventListener('click', () => {

    const task = taskip.value.trim()

    //task elem
    const li = document.createElement('li')
    // li.style.color = 'blue'
    li.textContent = task

    // scratch on click
    // li.addEventListener('click', () => {
    //     li.classList.toggle('completed')
    // })

    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed')   //class completed defined in css
    })

    //delete btn
    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'Delete'
    deletebtn.classList.add("deletebtn");
    
    deletebtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove()
        taskip.focus()
    })

    if (task == '') {
        alert('Please enter a task')
        return
    }

    li.prepend(checkbox);
    li.appendChild(deletebtn)
    tasklist.appendChild(li)

    taskip.value = ''

    taskip.focus()

})

// enter pe add task
taskip.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addbtn.click()

    }
})  