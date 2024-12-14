const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const imageInput = document.getElementById('imageInput');
let uploadedImage = null;

imageInput.addEventListener('change',(event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
            uploadedImage = img;
            drawImage();
        };
    };

    reader.readAsDataURL(file);
});

function drawImage() {
    if(uploadedImage) {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        ctx.drawImage(uploadedImage, 0 , 0, canvas.clientWidth, canvas.height);

        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;

        ctx.font = '30px Impact';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';

        ctx.fillText(topText, canvas.width / 2, 50);
        ctx.strokeText(topText, canvas.width /2, 50);

        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
    }
}

function generateMeme() {
    drawImage();
}


function downloadMeme() {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL();
    link.click();
}