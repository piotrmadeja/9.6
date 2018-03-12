var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listLength = document.getElementsByTagName('li');


add.addEventListener('click', function() {
  var element = document.createElement('li');
  element.innerHTML = 'item ' + listLength.length;
  list.appendChild(element);
});


