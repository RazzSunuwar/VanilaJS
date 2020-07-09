// The valule of the keyword 'this' is usually determined by how a function is called.
// It's important to know that 'this' may be different each time the function is called.

// // Global Object
// var myName = 'Ray';
// // console.log(myName);  //Ray
// window.myName;  //On Browser Ray

// console.log(this);

// function test(){
//     console.log(this);
// };
// test(); //global object


// method => obj

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function(){
//     console.log(this);
// };

// video.stop();



// Regular function => global (window, global)
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title){
    this.title = title;
    console.log(this);
};

const v = new Video('b');






