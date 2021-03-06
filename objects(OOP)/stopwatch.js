function Stopwatch() {
    let startTime , endTime , running , duration = 0;
    this.start= function () {
        if(running){
            throw new Error('Stopwatch has already started');
        }
        running = true;
        startTime = Date.now();

    }
    this.stop = function () {
        if(!running){
            throw new Error('Stopwatch has not started');
        }
        running = false;
        endTime = Date.now();
        const seconds = endTime.getTime() - startTime.getTime()/1000;
        duration += seconds;
    }
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    }
    OBject.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}