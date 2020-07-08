// // task part
// function askForNote(topic, cb){
//     console.log('Friend received the phone and told me to wait until he call back');
//     setTimeout(function(){
//         console.log('Note found after 2 hours');
//         cb(null, {
//             pdfNote: topic
//         });
//     }, 2000);
// };


// // exevution part
// console.log('Start preparation for exam');
// console.log('Call the friend for note');
// askForNote('JavaScript', function(err, done){
//     if(err){
//         console.log('Error on getting note', err);
//     } else {
//         console.log('Success on getting note', done);
//     };
// });
// console.log('Clean the room');
// console.log('Prepare pen, pencils and copies');


// // task part
// function printNote(subjectMatter, cb){
//     console.log('Pdf Note is in stationary');
//     console.log('Shopkeeper promise to call me after finished printing');
//     setTimeout(function(){
//         let electricity = true;
//         if(electricity){
//             cb(null, {
//                 pdf: subjectMatter
//             });
//         } else {
//             cb('no electricity')
//         }
//     }, 2000);
// };



// // execution part
// console.log('Note is in pdf so print note');
// printNote('pdfNote', function(err, done){
//     if(err){
//         console.log('Printing failed', err)
//     } else {
//         console.log('Printing completed', done);
//     }
// });
// console.log('Meet friend');
// console.log('Had a coffee');

// // task part
// function entertainment(cb){
//     console.log('Entertaiment started');
//     setTimeout(function(){
//         cb();
//     }, 2000);
// }


// // execution part
// entertainment(function(){
//     console.log('Entertainment finished');
// });

// task part
function servicing(cb){
    console.log('Bike is at servicing');
    setTimeout(function(){
        cb()
    }, 2000)
}

// execution part
servicing(function(){
    console.log('Bike servicing finished');
    console.log('Now start preparation for the exam')
})