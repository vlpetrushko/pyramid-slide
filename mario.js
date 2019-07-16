function printPyramid(height, filler) {
    const pyramid = document.getElementById('pyramid');
    pyramid.innerHTML = '';
    for (let i = 0; i < height; i++) {
        const row = ''.padEnd(height - 1 - i, "\u00A0").padEnd(height + 1, filler);
        const line = document.createElement('p');
        line.innerHTML = row;
        pyramid.appendChild(line);
    }
}
