var modal = document.getElementById('modal')

function createModal(){

  var box = document.createElement('div');
  var box2 = document.createElement('div');
  var cancel = document.createElement('div');

  box.style.width = '600px';
  box.style.height = '500px';
  box.style.backgroundColor = 'grey';
  box.style.border = '4px solid'
  box.style.margin = 'auto';
  box.innerHTML = "Would you like to subscribe to our service?"
  box.style.textAlign = "center"
  box.style.fontSize = "30px"

// button
  box2.style.width = '200px';
  box2.style.height = '50px';
  box2.style.backgroundColor = 'orange';
  box2.style.borderRadius = '70px';
  box2.style.margin = 'auto';
  box2.style.position = "relative";
  box2.style.top = "375px"
  box2.innerHTML = "Subscribe"
  box2.style.textAlign = 'center'

// cancel button
  cancel.style.width = "25px";
  cancel.style.height = "25px";
  cancel.innerHTML = 'x'
  cancel.style.position = "relative";
  cancel.style.bottom = "40px";
  cancel.style.left = "575px";
  cancel.style.fontStyle = 'bold'
  cancel.style.justifyContent = "right"

// exit button
  cancel.onclick = function(){
    box.style.display = "none";
  }

  document.body.appendChild(box)
  box.appendChild(cancel)
  box.appendChild(box2)
}

function start() {
  setTimeout(createModal, 3000)

}
window.addEventListener('load', start)
