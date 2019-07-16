function printPyramid(height, filler) {
    var pyramid = document.getElementById('pyramid');
    pyramid.innerHTML = '';
    for (let i = 0; i < height; i++) {
        let line = document.createElement('p');
        line.innerHTML = ''.padEnd(height - 1 - i, "\u00A0").padEnd(height + 1, filler);
        pyramid.appendChild(line);
    }

}
