/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = `0`;
  } else {
    document.getElementById("navbar").style.top = `-85.6px`;
  }
  prevScrollpos = currentScrollPos;
}

const menu = document.getElementById("menu")
const list = document.getElementById("list")

menu.onclick = function() {
  list.classList.toggle("show")
  if(menu.classList.contains("fa-bars")){
    menu.classList.remove("fa-bars")
    menu.classList.add("fa-xmark")
  }
  else{
    menu.classList.remove("fa-xmark")
    menu.classList.add("fa-bars")
  }
}

const faqs = document.querySelectorAll('#expand');
const info = document.querySelectorAll('.info')


for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function() {
    for (let j = 0; j < info.length; j++) {
      if (j === i) {
        info[j].classList.toggle("in");
        if(faqs[j].classList.contains("fa-circle-plus")){
          faqs[j].classList.remove("fa-circle-plus")
          faqs[j].classList.add("fa-circle-minus")
        }
        else {
          faqs[j].classList.remove("fa-circle-minus")
          faqs[j].classList.add("fa-circle-plus")
        }
      } else {
        info[j].classList.remove("in");
        faqs[j].classList.remove("fa-circle-minus")
        faqs[j].classList.add("fa-circle-plus")
      }
    }
  });
}


let heroText = document.querySelector('.heroText-1')

heroText.addEventListener('pointerdown', e => {
  console.log("huing")
  heroText.style.color = `#ffffff`
})

/*let featureDivs = document.querySelectorAll('.feature1-sub, .feature2-sub')

function toggleFeature(index) {
  featureDivs.forEach((div, i) => {
    if (i === index) {
      div.style.transform = `scale(1.05)`;
    } else {
      div.style.transform = `scale(1)`;
    }
  });
}

function toggleUp(index) {
  featureDivs.forEach((div,i) => {
    if (i === index) {
      div.style.transform = `scale(1)`;
    } else {
      div.style.transform = `scale(1)`;
    }
  })
}

featureDivs.forEach((div, index) => {
  div.addEventListener('pointerdown', () => {
    toggleFeature(index);
  });
});

featureDivs.forEach((div, index) => {
  div.addEventListener('pointerup', () => {
    toggleUp(index);
  });
});*/

let featureDivs = document.querySelectorAll('.feature1-sub, .feature2-sub');

function scaleUp(index) {
  featureDivs.forEach((div, i) => {
    if (i === index) {
      div.classList.add('feature-scaling');
    } else {
      div.classList.remove('feature-scaling');
    }
  });
}

featureDivs.forEach((div, index) => {
  div.addEventListener('pointerdown', () => {
    scaleUp(index);
  });
});

featureDivs.forEach((div) => {
  div.addEventListener('pointerup', () => {
    div.classList.remove('feature-scaling');
  });
});