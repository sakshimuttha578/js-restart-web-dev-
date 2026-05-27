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

let tasks = JSON.parse(localStorage.getItem("tasks")) || []   //pasre - string to array

const taskip = document.getElementById('taskip')
const addbtn = document.getElementById('addbtn')
const tasklist = document.getElementById('tasklist')


// ui making reusable func
function addTask(task){

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
        tasks = tasks.filter((t) => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove()
        taskip.focus()
    })
    
    // adding to li
    li.prepend(checkbox);
    li.appendChild(deletebtn)
    tasklist.appendChild(li)

}

addbtn.addEventListener('click', () => {

    const task = taskip.value.trim()
    
        if (task == '') {
            alert('Please enter a task')
            return
        }
    
        tasks.push(task);  //adding into array

        localStorage.setItem('tasks', JSON.stringify(tasks))  //storing in local storage    //json - array to string

        // console.log(tasks); //to check

    addTask(task)

    taskip.value = '' //clearing ip box

    taskip.focus()  // ip box pe focus after adding

})

// enter pe add task
taskip.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addbtn.click()

    }
})  

// day 2

//render saved tasks
tasks.forEach((task) => {
    addTask(task)
});

