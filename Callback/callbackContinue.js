// Task Part
function askForNote(topic, callback){
    console.log('Friend received the call and told me to wait, until note not found');
    setTimeout(function(){
        console.log("note found after 2 hours");
        callback(null, {
            pdfNote: topic
        })
    }, 2000);
};

function printNote(pdfNote, callback){
    console.log('Note is in stationary');
    console.log('Shopkeeper promise to call me after finish printing');
    let electricity = true;
    if(electricity){
        setTimeout(function(){
            callback(null, {
                print: pdfNote
            });
        }, 2000);
    } else {
        callback('no-electricity');
    }
};

function entertainment(callback){
    console.log('Entertainment started');
    setTimeout(function(){
        callback();
    }, 2000);
};

function servicing(callback){
    console.log('Bike is at servicing');
    setTimeout(function(){
        callback();
    }, 2000);
};




// Execution part
console.log('Start preparation for the exam');
console.log('Call the friend for the node');
askForNote('JavaScript', function(err, done){
    if(err){
        console.log('Error getting note', err)
    } else {
        console.log('Success in getting note', done);
        console.log('note is in pdf now print note');
        printNote('pdfNote', function(err, done){
            if(err){
                console.log('Printing failed', err);
            }else{
                console.log('Printing completed >> ', done);
                entertainment(function(){
                    console.log('Entertainment finished');
                    servicing(function(){
                        console.log('Bike servicing finished');
                        console.log('now start prepration');
                    })
                })
            }
        });
        console.log('Meet friend');
        console.log('Had a coffee');
    }
});
console.log('clean room');
console.log('prepare pen pencils papers');




