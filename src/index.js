const apiKey = '9e6b30a98f5fee7a125427a3f8abc82fcf532430f3f1d8339d1c6b1c23876491'; // Replace with your Africa's Talking API key
const username = 'sandbox'; // Replace with your Africa's Talking username

// Import the Africa's Talking Node.js SDK
const Africastalking = require('africastalking');

// Create an instance of the SDK with your API key and username
const africastalking = Africastalking({ apiKey, username });

// Initialize the SMS service
const sms = africastalking.SMS;

// Define the message and recipient
const message = 'Welcome to EDSHARE! \n Subscribe to our platform where we share educational resources, websites, updates, tips and tricks. \n https://schoola.app \n Thank You';
const recipients = ['+2348162844475']; // Replace with the recipient's phone number

// Send the SMS
sms.send({
  to: recipients,
  message,
})
  .then(response => {
    console.log('SMS sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending SMS:', error);
  });
