const img_src = ["images/slide1.jpeg", "images/slide2.jpeg", "images/slide3.jpeg"];
let num = -1;

function slide_time() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 4000);