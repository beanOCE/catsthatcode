


window.onload = function () {
    const createForm = document.getElementById('create-form');
    const createBtn = document.getElementById('create');
    const resetBtn = document.getElementById('reset');

    if (createForm) {
        createBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const title = document.getElementById('title');
            const tags = document.getElementById('tags');
            const content = document.getElementById('content');
            
            if (title.value == '') {
                event.preventDefault();
                document.getElementById("title_error").innerHTML = "This is a required field";
            } else {
                document.getElementById("title_error").innerHTML = "";
            }
                
            if (tags.value == '') {
                event.preventDefault();
                document.getElementById("tags_error").innerHTML = "This is a required field";
            } else {
                document.getElementById("tags_error").innerHTML = "";
            }
                
            if (content.value == '') {
                event.preventDefault();
                document.getElementById("content_error").innerHTML = "This is a required field";
            } else if (content.value.length > 80){ 
                event.preventDefault();
                document.getElementById("content_error").innerHTML = "Content must be less than 80 characters";
            } else {
                document.getElementById("content_error").innerHTML = "";
            }


            if ((title.value != '' && tags.value != '' && content.value != '')){
                //create
            }
        });

        resetBtn.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById("title").value = "";
            document.getElementById("tags").value = "";
            document.getElementById("content").value = "";
            document.getElementById("title_error").innerHTML = "";
            document.getElementById("tags_error").innerHTML = "";
            document.getElementById("content_error").innerHTML = "";
        });

    } else {
        console.error('Unable to find the registration form; no validation will be performed');
    }
};
