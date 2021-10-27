'use strict'

var gElCanvas;
var gCtx;

function init() {
    // gElCanvas = document.querySelector('#meme-canvas');
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d');
}



function onImgClicked(imgId) {

    selectImg(imgId);
    var elMemeEdit = document.querySelector('.meme-edit');
    elMemeEdit.style.display = 'flex';
    renderCanvas();
}

function renderCanvas() {
    var meme = gMeme;
    var selectedImgId = meme.selectedImgId;
    var memeImg = new Image();

    memeImg.src = gImgs[selectedImgId - 1].url;

    memeImg.onload = function () {
        gElCanvas.width = this.naturalWidth
        gElCanvas.height = this.naturalHeight
        gCtx.drawImage(this, 0, 0);
    }
}


function renderLineLiveText(elText) {
    if (elText.value.length === 1 && !gMeme.isLineEditOn) {
        createLine(elText.value);
        isLineEditOn(true);
        drawLineTxt(gMeme.lines[gMeme.lines.length - 1]);
    }

    gMeme.lines[gMeme.lines.length - 1].txt = elText.value;
    setTimeout(() => {
        for (var i = 0; i < gMeme.lines.length; i++) {
            console.log(gMeme.lines[i]);
            drawLineTxt(gMeme.lines[i]);
        }
    }, 50)
}


function drawLineTxt(line) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = `${line.strokeColor}`
    gCtx.fillStyle = `${line.fillColor}`
    gCtx.font = `${line.size}px Impact`
    gCtx.textAlign = line.textAlign;
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
    gCtx.fillText(line.txt, line.pos.x, line.pos.y);
}