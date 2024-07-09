const form = document.querySelector('form');
const fileInput = document.querySelector('#file');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.upload.addEventListener('progress', (e) => {
        console.log(`Upload progress: ${e.loaded} / ${e.total}`);
    });
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log('File uploaded successfully!');
        } else {
            console.error('Error uploading file.');
        }
    };
    xhr.send(formData);
});