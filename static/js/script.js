console.log("Conectado...")


function addTask(){


    const list = document.querySelector(".list ul")
    const btn = document.getElementById("button")
    const input = document.getElementById("inputTask")

    btn.addEventListener("click", function(e){
        e.preventDefault()
        const inputValue = input.value
        if(inputValue != ""){
            const li = document.createElement("li")
            li.innerHTML = `${inputValue} <i class="fa-solid fa-x deletebtn"></i>`            
            list.appendChild(li)
            const deleteBtn = li.querySelector(".deletebtn")
            deleteBtn.addEventListener("click", function(){
                li.remove()
            })
            input.value = ""
        }
    })

    input.addEventListener("keydown", function(e){
        if(e.keyCode === 13) {
            e.preventDefault()
            btn.click()
        }
    })
}




document.addEventListener("DOMContentLoaded", function(){
    addTask()

    DeleteTask()

})
