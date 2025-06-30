console.log('Format : quiz pack script loaded');

let time = document.getElementById("quiz-schedule");
let get_opens = time.getAttribute( "data-open" ).replace("-", "").replace("-", "").replace("-", "").replace(":", "");
let get_close = time.getAttribute( "data-close" ).replace("-", "").replace("-", "").replace("-", "").replace(":", "");

let tm = new Date();
let yy = tm.getFullYear();
let mm = tm.getMonth();
let dd = tm.getDate();
let hh = tm.getHours();
let ss = tm.getMinutes();
let ck = yy+""+(mm+1)+""+dd+""+hh+""+ss;


let begin = Number(get_opens);
let exits = Number(get_close);
let curen = Number(ck)

console.log(begin);
console.log(curen);


if ( curen >= begin && curen <= exits ) {
    console.log('Quiz Open')
}
else {
    document.getElementById("quiz-class").remove();
}

