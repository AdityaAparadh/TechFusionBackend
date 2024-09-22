const generateEmailTemplate = (participantName, participantID, events, logoURL, QRURL) => {
  const eventsList = events.map(event => `<li class="event-item">${event}</li>`).join('');

  const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Techfusion 2k24 Registration Confirmation</title>
  <style>
    body, html {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
    }
    .logo {
      max-width: 120px;
      height: auto;
    }
    .content {
      background-color: #f9f9f9;
      border-radius: 10px;
      padding: 30px;
      margin-top: 20px;
    }
    h1 {
      color: #1a3c5b;
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
    .participant-info {
      background-color: #ffffff;
      border: 2px solid #308de4;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 25px;
      text-align: center;
    }
    .participant-id {
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
      background-color: #308de4;
      padding: 10px 15px;
      border-radius: 8px;
      display: inline-block;
      margin-bottom: 15px;
    }
    .events-list {
      list-style-type: none;
      padding: 0;
    }
    .event-item {
      background-color: #e6f3ff;
      border-left: 4px solid #308de4;
      padding: 12px 15px;
      margin-bottom: 10px;
      font-size: 16px;
    }
    .qr-code-container {
      text-align: center;
      margin-top: 30px;
    }
    .qr-code {
      background-color: #ffffff;
      border: 2px solid #308de4;
      border-radius: 10px;
      padding: 20px;
      display: inline-block;
      margin-bottom: 15px;
    }
    .qr-code img {
      max-width: 180px;
      height: auto;
    }
    .qr-message {
      color: #1a3c5b;
      font-size: 14px;
      margin-top: 10px;
    }
    .button {
      display: inline-block;
      background-color: #308de4;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${logoURL}" alt="Techfusion 2k24 Logo" class="logo">
    </div>
    <div class="content">
      <h1>Successfully Registered for Techfusion 2k24!</h1>
      <div class="participant-info">
        <div class="participant-id">ID: ${participantID}</div>
        <p><strong>Name:</strong> ${participantName}</p>
      </div>
      <p>Congratulations, ${participantName}! You're all set for an amazing experience at Techfusion 2k24. Get ready to dive into a sea of innovation and technology!</p>
      <h2>Your Registered Events:</h2>
      <ul class="events-list">
        ${eventsList}
      </ul>
      <p>We're thrilled to have you on board for this exciting journey. Prepare to explore the depths of technology and make waves in the world of innovation!</p>
      <div class="qr-code-container">
        <div class="qr-code">
          <img src="${QRURL}" alt="Registration QR Code">
        </div>
        <p class="qr-message">Keep this handy for a quick check-in at offline events</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  return emailTemplate;
};
module.exports = generateEmailTemplate