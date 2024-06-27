// GET THE DAY NUMBER
// get the day number from a new date object
// assign to a variable
 today = new Date().getDay();

// MATCH DAY NUMBER WITH NODE LIST INDEX
// Sunday is the first JavaScript day but it's
// the last day in our list so change 0 to 6
// and decrement all other day numbers so they
// match with the node list indexes
if (today === 0){
    today = 6;
}else{
    today--;
}

// SELECT ALL DTs
// select all the description term elements
// assign to a variable
 dts = document.querySelectorAll('dt');

// ADD A CLASS TO TODAY'S DT
// use the day number (today variable) to add
// the 'today' class to the appropriate dt
// element so it and the adjacent dd can be
// styled in CSS
dts[today].className = 'today';
// node lists begin at 0, so day 1 in our list
// (Monday) will be node 0

console.log(today);