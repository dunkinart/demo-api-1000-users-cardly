const { v4: uuidv4 } = require('uuid');

function getRandomDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString();
}

function getEmployees() {
  return [
    {
      requestDateTime: getRandomDate(),
      requestTrackingId: uuidv4(),
      users: [
        {
          eligible: true,
          status: true,
          email: "john.doe0@nwc.com.sa",
          prefix: "Mr.",
          firstName: "John0",
          lastName: "Doe0",
          jobTitle: "IT Manager",
          country: "Saudi Arabia",
          emails: [{ type: "work", value: "john.doe0@nwc.com.sa" }],
          phones: [
            { type: "work", dialCode: "+966", value: "509666344" },
            { type: "home", dialCode: "+966", value: "1425181719" }
          ],
          socials: [
            { type: "work", value: "https://facebook.com" },
            { type: "custom", value: "https://google.com" }
          ],
          addresses: [
            { type: "home", value: "Street 11 near Paradise Grammar School" },
            { type: "work", value: "Second Address" }
          ],
          createdAt: "2024-10-13T00:00:00Z",
          updatedAt: "2025-04-02T00:00:00Z"
        },
        {
          eligible: false,
          status: true,
          email: "sarah.ali1@nwc.com.sa",
          prefix: "Ms.",
          firstName: "Sarah1",
          lastName: "Ali1",
          jobTitle: "Network Engineer",
          country: "Saudi Arabia",
          emails: [{ type: "work", value: "sarah.ali1@nwc.com.sa" }],
          phones: [{ type: "work", dialCode: "+966", value: "512345678" }],
          socials: [{ type: "linkedin", value: "https://linkedin.com/in/sarahali" }],
          addresses: [{ type: "home", value: "House No. 45, Garden Town" }],
          createdAt: "2023-09-20T00:00:00Z",
          updatedAt: "2025-03-01T00:00:00Z"
        },
        {
          eligible: true,
          status: false,
          email: "ahmed.khan2@nwc.com.sa",
          prefix: "Mr.",
          firstName: "Ahmed2",
          lastName: "Khan2",
          jobTitle: "Cybersecurity Analyst",
          country: "Saudi Arabia",
          emails: [{ type: "personal", value: "ahmed.khan2@gmail.com" }],
          phones: [{ type: "mobile", dialCode: "+966", value: "543216789" }],
          socials: [],
          addresses: [{ type: "work", value: "IT Department HQ, Riyadh" }],
          createdAt: "2022-07-11T00:00:00Z",
          updatedAt: "2025-01-15T00:00:00Z"
        },
        {
          eligible: true,
          status: true,
          email: "fatima.zahid3@nwc.com.sa",
          prefix: "Ms.",
          firstName: "Fatima3",
          lastName: "Zahid3",
          jobTitle: "Data Analyst",
          country: "Saudi Arabia",
          emails: [{ type: "work", value: "fatima.zahid3@nwc.com.sa" }],
          phones: [{ type: "work", dialCode: "+966", value: "567899321" }],
          socials: [{ type: "twitter", value: "https://twitter.com/fatima_z" }],
          addresses: [{ type: "home", value: "Flat 22, King Street, Jeddah" }],
          createdAt: "2024-02-10T00:00:00Z",
          updatedAt: "2025-04-05T00:00:00Z"
        }
      ]
    }
  ];
}

module.exports = getEmployees;
