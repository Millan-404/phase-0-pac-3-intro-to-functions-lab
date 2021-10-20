function shout(string) {
    return string.toUpperCase();
  }
"Hello!".toUpperCase(); // 'HELLO!'

function whisper(string) {
    return string.toLowerCase();
  }
"Hello!".toLowewrCase(); // 'HELLO!'

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout('hello');


function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper('HELLO'); 

function sayHiToGrandma(string) {
    const cant = "I can't hear you!";
    const yes = "YES INDEED!";
    const lov = "I love you, too.";

    if (string.toLowerCase(string) === string){
        return cant;
    }
    else if (string.toUpperCase(string) === string){
        return yes;
    }
    else if ("I love you, Grandma." === string){
        return lov;
    }
}

