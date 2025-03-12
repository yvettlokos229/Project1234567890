// Get the current date and time
let currentDate = new Date();
console.log(currentDate);

// Get the current time in milliseconds since the epoch (January 1, 1970)
console.log(currentDate.getTime());

// Create a new Date object with the current date and time
let newDate = new Date();

// Output the created date
console.log(newDate);

// Create an array of dates using the for loop
var dates = [];
for (var i = 0; i < 10; i++) {
    var currentDate = new Date();
    dates[i] = currentDate;
}

// Output the created dates
console.log(dates);
