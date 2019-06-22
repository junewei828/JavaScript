function echo(string) {
    return console.log(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
}

echo("Mom!"); // => "MOM! ... Mom! ... mom!"
echo("hey"); // => "HEY ... hey ... hey"
echo("JUMp"); // => "JUMP ... JUMp ... jump"