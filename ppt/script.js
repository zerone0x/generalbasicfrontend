const  booth = document.getElementsByClassName('booth')[0];
const dot1 = document.getElementsByClassName('dot1')[0]
const dot2 = document.getElementsByClassName('dot2')[0]
const dot3 = document.getElementsByClassName('dot3')[0]

const images =[]
let i = 0;

function createimg(src){
    const img = document.createElement('img');
    img.src = src
    images.push(img)
    img.setAttribute('id', 'img'+i)
    // img.style.opacity = 0
    console.log(img.id)
    i++
}


createimg('./img/moutain.avif')
createimg('./img/snow.jpg')
createimg('./img/sun.jpg')

const imgs = document.querySelector('img')


const previous = document.getElementById('previous');
const next = document.getElementById('next');

function displayImage(i){
    for(let i = 0; i < images.length; i++){
        images[i].style.opacity = 0
    }
    images[i].style.opacity = 1
    booth.appendChild(images[i]);
}

function changeImage(index){
    booth.innerHTML = '';
    displayImage(index)
}
displayImage(0)

function nextImage(){
    if(i < images.length - 1){
        i++
    }else{
        i = 0
    }
    console.log(i)

    changeImage(i)
}

function previousImage(){
    if(i > 0){
        i--
    }else{
        i = images.length - 1
    }
    changeImage(i)
}

previous.addEventListener('click', previousImage)
dot1.addEventListener('click', previousImage)
next.addEventListener('click', nextImage)
dot3.addEventListener('click', nextImage)

var intervalid = setInterval(nextImage, 2000)