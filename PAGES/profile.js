// script.js

function openNav() {
    document.querySelector('.nav-links').style.width = '250px';
}

function closeNav() {
    document.querySelector('.nav-links').style.width = '0';
}


document.addEventListener('DOMContentLoaded', function () {
    // File input change event listener
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change', handleFileSelect);

    // Upload button click event listener
    const uploadButton = document.querySelector('.custom-btn');
    uploadButton.addEventListener('click', handleUpload);
});

function handleFileSelect(event) {
    const fileInput = event.target;
    const fileName = fileInput.files[0].name;
    const uploadBtnWrapper = document.querySelector('.upload-btn-wrapper');
    
    // Display selected file name
    uploadBtnWrapper.querySelector('.btn').textContent = fileName;
}

function handleUpload(event) {
    event.preventDefault();
    
    // Logic for handling file upload goes here
    // You can use AJAX, Fetch API, or other methods to send the file to the server
    // For now, let's just log a message
    console.log('File upload logic here');
}
// compliance.js

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for the ministry, industry, category, and state selects
    const ministrySelect = document.getElementById('ministrySelect');
    const industrySelect = document.getElementById('industrySelect');
    const categorySelect = document.getElementById('categorySelect');
    const stateSelect = document.getElementById('stateSelect');

    ministrySelect.addEventListener('change', handleSelectChange);
    industrySelect.addEventListener('change', handleSelectChange);
    categorySelect.addEventListener('change', handleSelectChange);
    stateSelect.addEventListener('change', handleSelectChange);
});

function handleSelectChange(event) {
    const selectedOption = event.target.value;
    console.log(`${event.target.id} selected: ${selectedOption}`);
    // Add logic here to handle the selected option as needed
}

    document.addEventListener('DOMContentLoaded', function () {
        // Get the form element
        var form = document.querySelector('.details.ID');

        // Get the submit button
        var submitButton = form.querySelector('.input-field button.submit-button');

        // Add a click event listener to the submit button
        submitButton.addEventListener('click', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Add your form submission logic here, for example:
            alert('Form submitted!'); // Replace this with your actual form submission code
        });
    });
