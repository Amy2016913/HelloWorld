var maxline, spacenum, starnum;
var starstring, spacestring;
var x = process.argv[2];
var num = parseInt(x);
for (maxline = 0; maxline < num; maxline++) {
    starstring = "";
    spacestring = "";
    for (spacenum = 0; spacenum < (num - maxline - 1); spacenum++) {
        spacestring += " ";
    }
    for (starnum = 0; starnum < (2 * maxline + 1); starnum++) {
        starstring += "*";
    }
    console.log(spacestring + starstring);
}
