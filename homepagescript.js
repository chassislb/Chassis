const fs = require('fs');

const contentToAdd = 'Chassis System and Strategy
Welcome to Chassis, your trusted partner in business solutions. Whether you’re seeking guidance on operations management, HR strategies, or business development, we’re here to provide expert assistance tailored to your needs.

Let’s work together to unlock your business’s full potential. How can we assist you today?

Elevate your business experience with Chassis.';

// Specify the file path
const filePath = 'path/to/your/file.txt';

// Add the content to the file
fs.appendFile(filePath, contentToAdd, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Content added to the file successfully!');
  }
});