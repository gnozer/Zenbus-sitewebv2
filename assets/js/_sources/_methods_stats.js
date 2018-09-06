function numberWithSpaces(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
/**
 * Returns the value of a number rounded to the nearest integer
 * @param   {number}   number [[Description]]
 * @returns {number}   [[Description]]
 */
function round(number) {
	return Math.round(number);
}
/**
 * [[Description]]
 * @param {[[Type]]} start    [[Description]]
 * @param {[[Type]]} end      [[Description]]
 * @param {[[Type]]} duration [[Description]]
 * @param {[[Type]]} data     [[Description]]
 */
function animateValue(start, end, duration, callback) {
	
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        this.currentKms = current;
        if (current == end) {
            clearInterval(timer);
			  	callback();
        }
    }.bind(this), stepTime);
}
/**
 * [[Description]]
 */
function runStat(){
	
	var 
	diff = (Date.now()/1000) - this.dateBase,
	end = round(this.counterBase + diff*1.15);
	
	this.currentKms = end;
	
	if(this.getLang() == 'en') {
		this.currentKms = end*0.62137119223733;
		setInterval(function(){
			this.currentKms = round(this.currentKms + 0.7146);
			}.bind(this), 1000)
	} else {
		this.currentKms = end;

		setInterval(function(){
			this.currentKms = round(this.currentKms + 1.15);
		}.bind(this), 1000)
	}
}