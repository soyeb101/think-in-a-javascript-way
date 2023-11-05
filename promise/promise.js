const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 AM"
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled"));
    }
});

meeting
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    
    })



// promise methods

const promise1 = Promise.resolve("Promise 1");

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 2000);

})

Promise.all([promise1, promise2]).then((res) => {
    console.log(res); // it will result two promise in same time
})

// promise.race will show the only promise 1 result which is resolve first like race