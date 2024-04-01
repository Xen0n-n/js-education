const SOURCE_IMG = "source/images/баннер_участника8ver.jpg";

let main_content = document.getElementById('main-content')

let upload_button = document.getElementById('upload')


let canvas = document.getElementById('cv');
const ctx = canvas.getContext('2d');
const source_img = new Image();
source_img.src = SOURCE_IMG;
source_img.onload = () => {
    let scale = {
        x: canvas.width / source_img.width,
        y: canvas.height / source_img.height
    }
    console.log(scale);
    ctx.drawImage(source_img, 0, 0, source_img.width, source_img.height,
        0, 0, canvas.width, canvas.height);
}

upload_button.addEventListener('change', (e) => {
    if (FileReader && e && e.target && e.target.files) {
        Array.from(e.target.files).forEach((f) => {
            let fr = new FileReader();
            fr.onload = () => {
                let avatar = new Image();
                avatar.src = fr.result;
                avatar.onload = () => {
                    let orig = {
                        x: canvas.width,
                        y: canvas.height
                    }
                    console.log(orig)
                    ctx.scale(0.2, 0.2);
                    ctx.drawImage(avatar,
                        0, 0,
                        500, 500)
                }
            }
            fr.readAsDataURL(f);
        })
    }
});
