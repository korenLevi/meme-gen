// const { func } = require("prop-types");


var gImgs = [{
        id: 1,
        url: 'img/memes-images/1.jpg',
        keywords: ['trump']
    },
    {
        id: 2,
        url: 'img/memes-images/2.jpg',
        keywords: ['dog']
    },
    {
        id: 3,
        url: 'img/memes-images/3.jpg',
        keywords: ['baby']
    },
    {
        id: 4,
        url: 'img/memes-images/4.jpg',
        keywords: ['happy']
    },
    {
        id: 5,
        url: 'img/memes-images/5.jpg',
        keywords: ['cat']
    },
    {
        id: 6,
        url: 'img/memes-images/6.jpg',
        keywords: ['angry']
    },
    {
        id: 7,
        url: 'img/memes-images/7.jpg',
        keywords: ['.']
    },
    {
        id: 8,
        url: 'img/memes-images/8.jpg',
        keywords: ['.']
    },
    {
        id: 9,
        url: 'img/memes-images/9.jpg',
        keywords: ['.']
    },
    {
        id: 10,
        url: 'img/memes-images/10.jpg',
        keywords: ['.']
    },
    {
        id: 11,
        url: 'img/memes-images/11.jpg',
        keywords: ['.']
    },
    {
        id: 12,
        url: 'img/memes-images/12.jpg',
        keywords: ['.']
    },
    {
        id: 13,
        url: 'img/memes-images/13.jpg',
        keywords: ['.']
    },
    {
        id: 14,
        url: 'img/memes-images/14.jpg',
        keywords: ['.']
    },
    {
        id: 15,
        url: 'img/memes-images/15.jpg',
        keywords: ['.']
    },
    {
        id: 16,
        url: 'img/memes-images/16.jpg',
        keywords: ['.']
    },
    {
        id: 17,
        url: 'img/memes-images/17.jpg',
        keywords: ['.']
    },
    {
        id: 18,
        url: 'img/memes-images/18.jpg',
        keywords: ['.']
    },
];

var gLinesPos = [{
        x: 225,
        y: 50
    },
    {
        x: 225,
        y: 450
    },
    {
        x: 225,
        y: 225
    },
    {
        x: 225,
        y: 215
    },
    {
        x: 225,
        y: 235
    },
    {
        x: 225,
        y: 205
    },
    {
        x: 225,
        y: 245
    },
    {
        x: 225,
        y: 200
    },
]


var gMeme = {
    selectedImgId: 5,
    // selectedLineIdx: 0,
    selectedLineIdx: 0,
    linePosIdx: 0,
    lines: [],
    fontSize: 40,
    font: 'IMPACT',
    isLineEditOn: false,
    isFocusedLineOn: false,
    isLineDeleted: false
}

function selectImg(imgId) {
    console.log(imgId);
    gMeme.selectedImgId = imgId;
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}


function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.meme-canvas').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        // gImg = img
    }
    reader.readAsDataURL(ev.target.files[0])
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function createLine(text, align = "left", fillColor = "white", strokeColor = "black") {
    var linePosIdx = gMeme.linePosIdx;
    console.log('gMeme.linePosIdx', gMeme.linePosIdx);
    // var linePosIdx = gMeme.lines.length;
    console.log('linePosIdx', linePosIdx);
    var newLine = {
        txt: text,
        size: 40,
        align,
        fillColor,
        strokeColor,
        pos: gLinesPos[linePosIdx]
    }

    gMeme.lines.push(newLine);
    gMeme.linePosIdx++;
}

function isLineEditOn(bool) {
    gMeme.isLineEditOn = bool;
}

function setLineIdx() {

}