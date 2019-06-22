function whisper(string) {
    var message = "..." + string.toLowerCase() + "...";
    console.log(message);
}

whisper("Hey Anthony"); // => "...hey anthony..."
whisper("YEA! that was fun"); // => "...yea! that was fun..."