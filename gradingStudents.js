function roundToMultipleofFive(num) {
    //round number to the next multiple of 5. Example: 43 will become 45
    return Number(Math.ceil(num/5)*5);
}
function gradingStudents(grades) {
    // console.log(roundToMultipleofFive(grades));
    let finalGrade = 0;
    if (roundToMultipleofFive(grades) - grades < 3 && grades > 37){
        finalGrade = roundToMultipleofFive(grades);
    } else {
        finalGrade = grades;
    }
    // console.log(roundToMultipleofFive)
    console.log(finalGrade);
    return finalGrade;
}

gradingStudents(38);