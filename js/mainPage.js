/*
    type:
    0 = image
    1 = video
*/
const previews = [
    {
        name: 'Capture_133.PNG',
        type: 0,
    },
    {
        name: 'Capture_133.PNG',
        type: 0,
    },
    {
        name: 'Capture_133.PNG',
        type: 0,
    },
    {
        name: 'Capture_133.PNG',
        type: 0,
    },
];
let currentPreview = 0;

function ElementTagForType(type) {
    switch (type) {
        case 0: return "img";
        case 1: return "video";
    }
}

function UrlForPreview(preview) {
    switch (preview.type) {
        case 0: return "img/" + preview.name;
        case 1: return "video/" + preview.name
    }
}

function RenderPreview() {
    if (previews.length - 1 > currentPreview) {
        throw "Error: Failed to load preview";
    }
    const containerElement = document.getElementById('largePreviewContainer');
    containerElement.innerHTML = '';

    const previewData = previews[currentPreview];
    const previeweElement = document.createElement(ElementTagForType(previewData.type));
    previeweElement.src = UrlForPreview(previewData);

    if (previewData.type === 1) {
        previeweElement.controls = true;
    }

    containerElement.appendChild(previeweElement);
}

function OnImageClick(e) {
    currentPreview = e.target.dataset.index;
    RenderPreview();
}

window.addEventListener('load', e => {
    document.getElementById('preview1').addEventListener('click', OnImageClick);
    document.getElementById('preview2').addEventListener('click', OnImageClick);
    document.getElementById('preview3').addEventListener('click', OnImageClick);
    document.getElementById('preview4').addEventListener('click', OnImageClick);
});