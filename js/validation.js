const form = document.forms('create-form');
const title = document.forms('title');
const tags = document.forms('tags');
const content = document.forms('content');


if (form) {
    form.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form; no validation will be performed');
}

if (title) {
    form.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form; no validation will be performed');
}

if (tags) {
    form.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form; no validation will be performed');
}


if (content) {
    alert("test");
    form.addEventListener('submit', validateForm);
} else {
    alert("test fail");
    console.error('Unable to find the registration form; no validation will be performed');
}


function validateForm(event) {

    const errorMsg = "This field is required";

    if (form.Title.value == ' ') {
        event.preventDefault();
        document.getElementById("title_error").innerHTML = "required field";
    }

    if (form.Tags / Keywords.value == ' ') {
        event.preventDefault();
        document.getElementById("tags_error").innerHTML = "required field";
    }

    if (form.Content.value == ' ') {
        event.preventDefault();
        document.getElementById("content_error").innerHTML = "required field";
    }
}

function create() {
    var contentTXT = form.Content.value;

    console.log("test");

    if (!(contentTXT.length > 80)) {
        //create post
    } else {
        document.getElementById("contentError").innerHTML = "Content needs to be less than 80 characters";
    }

}

function reset() {
    document.getElementById("title").innerHTML = "";
    document.getElementById("tags").innerHTML = "";
    document.getElementById("content").innerHTML = "";
}