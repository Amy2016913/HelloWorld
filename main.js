var a, b, c;
var starstring, spacestring;
var x = process.argv[2];
var num = parseInt(x);
for (a = 0; a < num; a++) {
    starstring = "";
    spacestring = "";
    for (b = 0; b < (num - a - 1); b++) {
        spacestring += " ";
    }
    for (c = 0; c < (2 * a + 1); c++) {
        starstring += "*";
    }
    console.log(spacestring + starstring);
}
