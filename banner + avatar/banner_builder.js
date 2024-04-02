'use strict'

const SOURCE_IMG = 'source/images/баннер_участника8ver.jpg'

const main_content = document.getElementById('main-content')
const upload_button = document.getElementById('upload')
const download_button = document.getElementById('download')

const init_canvas = (id, parent_id) => {
    const parent = document.getElementById(parent_id)
    let canvas = document.getElementById(id)
    const size = Math.min(parent.offsetWidth, parent.offsetHeight)
    canvas.width = size
    canvas.height = size
    return canvas
}

const canvas = init_canvas('canvas', 'cv-container')
const ctx = canvas.getContext('2d');

const vector = (x, y) => {
    return {
        x,
        y
    }
}

const create_rect = (point_start, point_end) => {
    return {
        x_start: point_start.x,
        y_start: point_start.y,
        x_end: point_end.x,
        y_end: point_end.y
    }
}

const clear = (cv, context) => {
    context.clearReact(0, 0, cv.width, cv.height)
}

const draw_avatar = (cv, context, img, meta) => {
    console.log(meta)
    const {multiplier, full_rect: ext_rect, round_rect: int_rect, radius} = meta;

    context.save()
    context.beginPath()
    context.arc(int_rect.x_start, int_rect.y_start, radius, Math.PI, 1.5 * Math.PI)
    context.arc(int_rect.x_end, int_rect.y_start, radius, 1.5 * Math.PI, 2 * Math.PI)
    context.arc(int_rect.x_end, int_rect.y_end, radius, 2 * Math.PI, 2.5 * Math.PI)
    context.arc(int_rect.x_start, int_rect.y_end, radius, 2.5 * Math.PI, 3 * Math.PI)
    context.closePath()
    context.clip()

    context.drawImage(img,
        0, 0, img.width, img.height,
        ext_rect.x_start, ext_rect.y_start, ext_rect.x_end - ext_rect.x_start, ext_rect.y_end - ext_rect.y_start)
    context.restore()
}

const create_metadata = (img, cv, avatar_rect, inner_rect) => {
    const multiplier = cv.width / img.naturalWidth;
    return {
        multiplier,
        full_rect: create_rect(
            vector(avatar_rect.x_start * multiplier, avatar_rect.y_start * multiplier),
            vector(avatar_rect.x_end * multiplier, avatar_rect.y_end * multiplier)
        ),
        round_rect: create_rect(
            vector(inner_rect.x_start * multiplier, inner_rect.y_start * multiplier),
            vector(inner_rect.x_end * multiplier, inner_rect.y_end * multiplier)
        ),
        radius: Math.abs(avatar_rect.x_start * multiplier - inner_rect.x_start * multiplier)
    }
}

const fill_with_image = (cv, context, img) => {
    context.drawImage(img, 0, 0, cv.width, cv.height)
}

const source_img = new Image();
source_img.src = SOURCE_IMG;
source_img.onload = () => {
    fill_with_image(canvas, ctx, source_img)
}
const original_size_avatar_rect = create_rect(
    vector(420, 345),
    vector(905, 850)
)

const original_size_round_avatar_rect = create_rect(
    vector(520, 445),
    vector(805, 750)
)

const metadata = create_metadata(source_img, canvas, original_size_avatar_rect, original_size_round_avatar_rect);

upload_button.addEventListener('change', (e) => {
    if (FileReader && e && e.target && e.target.files) {
        Array.from(e.target.files).forEach((f) => {
            let fr = new FileReader();
            fr.onload = () => {
                let avatar = new Image();
                avatar.src = fr.result;
                avatar.onload = () => {
                    draw_avatar(canvas, ctx, avatar, metadata)
                }
            }
            fr.readAsDataURL(f);
        })
    }
});

download_button.addEventListener('click', () => {
    let canvasUrl = canvas.toDataURL();
    const anchor = document.createElement('a');
    anchor.href = canvasUrl;
    anchor.download = "download-this-canvas";
    anchor.click();
    anchor.remove();
})
