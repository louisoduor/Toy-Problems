 
## Speed Detector

## Overview

The Speed Detector is a JavaScript program designed to monitor vehicle speeds and provide real-time feedback to drivers. 
This program takes the speed of a car as input and assesses whether the driver is within the speed limit or if demerit points should be assigned.

## Usage
Input Speed
Prompt the user to input the speed of the car. The input should be a numeric value representing the speed in km/h.

// Example: User input speed

let speed = 80;
Output Results:

If the speed is less than 70 km/h, it displays "Ok," indicating the driver is within the speed limit.
For speeds exceeding 70 km/h, the program calculates demerit points: one point for every 5 km/h over the limit.

The total demerit points are then displayed as "Points: X."

// Example: Output demerit points based on input speed
if (speed < 70) {
  alert("Ok");
} else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  alert("Points: " + demeritPoints);
  
  if (demeritPoints > 12) {
    alert("License suspended");
  }
}


## Contributing
If you have ideas for new features or bug fixes, follow these steps:

Fork the repository.
Create a new branch for your changes: git checkout -b feature-name.
Commit your changes: git commit -m 'Add a new feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
License
Car Connect is licensed under the MIT License - see the LICENSE file for details.

 ## Contact
For inquiries or support, reach out to our team at louisodhiambo20@gmail.com.