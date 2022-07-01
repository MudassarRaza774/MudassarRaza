function addTask() {

    const mainInput = document.getElementById("userTask")

    const task = mainInput.value;

    if (task == "") {
        window.alert("Enter some task please")
    } else {
        const mainDiv = document.getElementById("id") //parent div

        const div = document.createElement("div") //first child div inside parent mainDiv, parent div for input field
        div.classList.add("justifyBro")
        div.classList.add("childDiv")

        mainDiv.appendChild(div)

        const input = document.createElement("input")
        input.classList.add("inputBorder")
        input.classList.add("paddings")
        input.value = task
        input.style.marginTop = "10px"
        input.setAttribute("readonly", "readonly")
        div.appendChild(input)
        mainInput.value = ""

        const EditButton = document.createElement("button")
        EditButton.innerText = "Edit"
        EditButton.style.marginTop = "10px"
        EditButton.classList.add("inputBorder")
        EditButton.classList.add("paddings")
        div.appendChild(EditButton)

        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteButton.classList.add("inputBorder")
        deleteButton.classList.add("paddings")
        //deleteButton.innerText = "Delete"
        deleteButton.style.marginTop = "10px"
        deleteButton.style.backgroundColor = "red"
        div.appendChild(deleteButton)

        EditButton.addEventListener("click", () => {
            if (EditButton.innerText == "Edit") {
                input.removeAttribute("readonly")
                input.focus();
                EditButton.innerText = "Save"
            } else if (EditButton.innerText == "Save") {
                input.setAttribute("readonly", "readonly")
                EditButton.innerText = "Edit"
            };
        })

        deleteButton.addEventListener("click", () => {
            // div.removeChild(input)
            // div.removeChild(EditButton)
            // div.removeChild(deleteButton)
            mainDiv.removeChild(div)
        })
    }
}