함수

function showMessage(from, text = "no text data") {
    console.log(`${from} , ${text}`);
}
showMessage("kim", "hi");
showMessage("kim");

function showMessage(text) {
    if (text === undefined) {
        text = 'no text data';
    }
    console.log(text);
}
showMessage();

function showMessage(text) {
    text = text || "no text data";
    console.log(text);
}
showMessage();

function showMessage(text) {
    text = text ?? "no text data";
    console.log(text);
}
showMessage();

