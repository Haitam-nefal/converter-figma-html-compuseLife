


document.getElementById("buttonSubmit").addEventListener("click", (e) => {
    e.preventDefault()


    const nom = document.getElementById("nom").value
    const prenom = document.getElementById("prenom").value
    const email = document.getElementById("email").value
    const telephone = document.getElementById("telephone").value
    let campus = null;

    document.querySelectorAll(`input[name="campus"]`).forEach((ele) => {
        if (ele.checked) {
            campus = ele.value
        }
    })

    window.localStorage.setItem("userInfo", JSON.stringify({ nom, prenom, email, telephone, campus }))

})