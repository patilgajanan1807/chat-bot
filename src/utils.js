
function getCurrentTime(){
    return new Date(
            Date.now()).toLocaleTimeString('en', 
                { hour: 'numeric', hour12: true, minute: 'numeric' }
        );
}

export {getCurrentTime};