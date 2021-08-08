let emailCollectionForm = document.getElementById("Email-Collector");
emailCollectionForm.addEventListener("submit", event => {
    console.log("clicked");
    event.preventDefault();
    let ourFormData = new FormData(event.target);
let firstName = ourFormData.get("firstName");
let email = ourFormData.get("emailAddress");
let main = document.getElementById("Main-Content");
console.log(firstName + "," + email)

    let updatedHtmlContent = `
    <h2>Congratulations, ${firstName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>

    <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>
    `
main.innerHTML = updatedHtmlContent;



});
