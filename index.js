var weekDay = prompt('Please enter week day');
var weekDayResult;

switch (weekDay) {
    case 'Saturday':
    case 'Sunday':
        weekDayResult = 'Weekend';
        break;

    case 'Monday':
        weekDayResult = 'Working Day';
        break;

    case 'Tuesday':
        weekDayResult = 'Working Day';
        break;

    case 'Wednesday':
        weekDayResult = 'Working Day';
        break;

    case 'Thursday':
        weekDayResult = 'Working Day';
        break;

    case 'Friday':
        weekDayResult = 'Working Day';
        break;

    default:
        weekDayResult = 'Can not define, please try another value';
        break;
}

alert(weekDayResult);