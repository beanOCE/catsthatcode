


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
                document.getElementById("title_error").innerHTML = "This is a required field";
                title.style.border = "2px solid red";
            } else if (title.value.length > 80){ 
                    document.getElementById("title_error").innerHTML = "Title must be less than 80 characters";
                    title.style.border = "2px solid red";
            } else {
                document.getElementById("title_error").innerHTML = "";
                title.style.border = "none";
            }
                
            if (tags.value == '') {
                document.getElementById("tags_error").innerHTML = "This is a required field";
                tags.style.border = "2px solid red";
            } else {
                document.getElementById("tags_error").innerHTML = "";
                tags.style.border = "none";
            }
                
            if (content.value == '') {
                document.getElementById("content_error").innerHTML = "This is a required field";
                content.style.border = "2px solid red";
            } else {
                document.getElementById("content_error").innerHTML = "";
                content.style.border = "none";
            }


            if ((title.value != '' && tags.value != '' && content.value != '')){
                window.location.href = "index.html";
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
            title.style.border = "none";
            tags.style.border = "none";
            content.style.border = "none";
        });

    } else {
        console.error('Unable to find the registration form; no validation will be performed');
    }
};
