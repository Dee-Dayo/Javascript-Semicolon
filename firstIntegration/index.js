const form = document.forms["form"];
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const address = document.getElementById("address").value
    const password = document.getElementById("password").value

    const obj = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        address : address,
        password: password,
    }

    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:8080/api/DeeLogistics/register-user", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            document.getElementsByClassName(".success").textContent = "Register successfully";
            console.log("Success:", result);
            // alert("REGISTERED")
        } catch (error) {
            console.error("Error:", error);
            alert("unsuccessful")
        }
    }

    postJSON(obj);

})