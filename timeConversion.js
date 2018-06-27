function timeConversion(s) {
    let hours = s.split(':')[0];
    let minutes = s.split(':')[1];
    let seconds = s.split(':')[2].slice(0, 2);
    let period = s.split(':')[2].slice(-2);
    let convertedTime = '';

    if (period === 'AM' && hours == 12) {
        hours = '00';
    } else if ( period === 'PM' && hours == 12 ) {
        hours = 12;
    } else if (period === 'PM') {
        hours = Number(hours) + 12;
    }

    convertedTime = hours + ":" + minutes + ":" + seconds;
    console.log(convertedTime);
    return convertedTime;
}

timeConversion('12:45:54PM');