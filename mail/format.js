const generateFormat = (participantName, participantID, events, logoURL, QRURL) => {
    console.log(events)
    const eventsList = events.map(event => `<li class="event-item">${event}</li>`).join('');
  
    const emailTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Techfusion 2k24 Registration Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #ffffff;
        background: linear-gradient(to bottom right, #1a3c5b, #0d1e2e);
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
        max-width: 100px;
        height: auto;
      }
      .content {
        background-color: rgba(48, 141, 228, 0.4);
        border-radius: 10px;
        padding: 30px;
        margin-top: 20px;
      }
      h1 {
        color: #ffffff;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .participant-info {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 20px;
      }
      .participant-id {
        font-size: 28px;
        font-weight: bold;
        color: #308de4;
        margin-bottom: 10px;
      }
      .events-list {
        list-style-type: none;
        padding: 0;
      }
      .event-item {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
      }
      .qr-code {
        text-align: center;
        margin-top: 30px;
      }
      .qr-code img {
        max-width: 150px;
        height: auto;
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
        <p>Congratulations, ${participantName}! You're all set for an amazing experience at Techfusion 2k24. Get ready to dive into a sea of innovation and technology!</p>
        <div class="participant-info">
          <div class="participant-id">Participant ID: ${participantID}</div>
        </div>
        <h2>Your Registered Events:</h2>
        <ul class="events-list">
          ${eventsList}
        </ul>
        <p>We're thrilled to have you on board for this exciting journey. Prepare to explore the depths of technology and make waves in the world of innovation!</p>
        <div class="qr-code">
          <img src="${QRURL}" alt="Registration QR Code">
          <p>Keep this QR code handy for quick check-in at offline events.</p>
        </div>
      </div>
    </div>
  </body>
  </html>
    `;
  
    return emailTemplate;
  };

module.exports = generateFormat