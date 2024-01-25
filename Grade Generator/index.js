  // Challenge 1: Student Grade Generator
  function generateStudentGrade() {
    // Get user input
    let userMarks = document.getElementById("marks").value;

    // Validate input
    if (isNaN(userMarks) || userMarks < 0 || userMarks > 100) {
        alert("Invalid input. Please enter a valid number between 0 and 100.");
        return;
    }

    // Convert input to a number
    let marks = parseFloat(userMarks);

    // Determine grade based on marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the result
    alert(`For ${marks} marks, the grade is: ${grade}`);
}