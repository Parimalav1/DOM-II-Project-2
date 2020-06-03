// Your code goes here
// const launchButton = document.querySelector('#launchButton')
// const confirmButton = document.querySelector('#confirmButton')
// const cancelButton = document.querySelector('#cancelButton')
// const successMessage = document.querySelector('.report.success')
// const failureMessage = document.querySelector('.report.failure')
// const modal = document.querySelector('.modal')
// const modalOpacity = document.querySelector('.modal-opacity')

//     * []`mouseover`
//     * []`keydown`
//     * []`wheel`
//     * []`drag / drop`
//     * []`load`
//     * []`focus`
//     * []`resize`
//     * []`scroll`
//     * []`select`
//     * []`dblclick`

document.addEventListener('click', function (event) {
    console.log('the document got clicked')
    console.log('this is this', this)
    console.log('here is the target of the event', event.target)
})

const mouseOverHandler = function(event) {
    allImgs[3].style.width = '50%';
};
const mouseOutHandler = function(event) {
    allImgs[3].style.width = '100%';
};
const allImgs = document.querySelectorAll('.home img');
allImgs[3].addEventListener('mouseover', mouseOverHandler);
allImgs[3].addEventListener('mouseout', mouseOutHandler);

const zoom = function(event) {
    if ( allImgs[1].style.width === '60%') {
        allImgs[1].style.width = '100%';
        allImgs[2].style.width = '60%';
    } else {
        allImgs[2].style.width = '100%';
    }
}
allImgs[1].addEventListener('wheel', zoom)

const heading = document.querySelector('h2')
function contentChange(event) {
    if (heading.textContent === 'Hop on to the bus') {
        heading.textContent = 'Welcome to fun bus';
    } else {
        heading.textContent = 'Hop on to the bus'; //console.log('Hop on to the bus');
    }
}
heading.addEventListener('dblclick', contentChange);

// const destiny = document.querySelector('h4')
// function ke (et) {
//     console.log('i see a keydown event');
//     destiny.textContent = 'Tourism';
// }
// destiny.addEventListener('keydown', ke )

const log = document.querySelector('.content-section');
const pElem = document.querySelector('p');
pElem.addEventListener('click', () => {
  log.textContent ='';
  event.stopPropagation();
  window.setTimeout(() => {
      window.location.reload(true);
  }, 1000);
});
window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});
document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});
document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});

const allInputs = document.querySelectorAll('input');
function change(event) {
    event.target.style.backgroundColor = 'blue';
}
allInputs.forEach(x => {
    x.addEventListener('focus', change);
});
//allInputs.map((x) => {x.addEventListener('focus', change); return x});

const nameInput= document.querySelector('#name')
nameInput.addEventListener('select', function changeText(event){
    console.log("I'm in select handler");
    event.target.value = "I'm ready for vacation";
});

window.addEventListener("resize", myFunction);

function myFunction() {
  document.querySelector("#adventureId").innerHTML = `Height of window: ${window.innerHeight}, Width of window: ${window.innerWidth}`;
}


var dragged;
document.addEventListener("drag", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
  }, false);

document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    console.log('drop event handler called');
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }, false);

  const homeNav = document.querySelector('.nav-link');
  homeNav.addEventListener('click', function change(event) {
      homeNav.style.color = 'green';
    //   console.log('homeNav');
      event.preventDefault();
  });