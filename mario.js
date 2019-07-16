function printPyramid(height, filler) {
    let str = '';
    for (let i = 0; i < height - 1; i++) {
        str = str.concat("\u00A0");
    }
    str = str.concat(filler + filler);
    var pyramid = document.getElementById('pyramid');
    pyramid.innerHTML = '';
    for (let i = 0; i < height; i++) {
        let line = document.createElement('p');
        line.innerHTML += str;
        pyramid.appendChild(line);
        str = str.substring(0, height - 2 - i) + filler + str.substring(height - i - 1);
    }

}
