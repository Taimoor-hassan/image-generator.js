

function generate(){
    var imgtag = document.createElement('img');
    imgtag.setAttribute('id','new');
    imgtag.src = ('img/2.webp');
    var div = document.getElementById('imgg');
    div.appendChild(imgtag);
}
function reset() {
    document.getElementById('new').remove();
}




























