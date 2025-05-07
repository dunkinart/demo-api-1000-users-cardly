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
    "requestDateTime": "2024-05-13T14:23:30.175408",
    "requestTrackingId": "3843229d-0252-443c-8612-b37021a510f1",
    "users": [
        {
            "eligible": true,
            "status": false,
            "email": "ahmed0.sheikh0@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed0",
            "lastName": "Sheikh0",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed0.sheikh0@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504514789"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 0, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T17:41:29.023355",
            "updatedAt": "2024-08-14T16:18:59.974557"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima1.sheikh1@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima1",
            "lastName": "Sheikh1",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima1.sheikh1@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503153347"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 1, Street XYZ"
                }
            ],
            "createdAt": "2024-09-28T10:33:47.613755",
            "updatedAt": "2024-05-18T22:39:26.123186"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha2.qureshi2@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha2",
            "lastName": "Qureshi2",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha2.qureshi2@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503630631"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 2, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T22:16:22.349622",
            "updatedAt": "2024-11-26T15:36:32.017925"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john3.khan3@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John3",
            "lastName": "Khan3",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john3.khan3@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501180633"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 3, Street XYZ"
                }
            ],
            "createdAt": "2024-07-16T11:25:42.520782",
            "updatedAt": "2024-07-11T01:30:58.418949"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima4.zahid4@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima4",
            "lastName": "Zahid4",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima4.zahid4@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504079243"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 4, Street XYZ"
                }
            ],
            "createdAt": "2024-11-11T16:39:17.586023",
            "updatedAt": "2025-03-27T19:40:02.183811"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab5.sheikh5@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab5",
            "lastName": "Sheikh5",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab5.sheikh5@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509324318"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 5, Street XYZ"
                }
            ],
            "createdAt": "2024-06-14T00:40:52.263037",
            "updatedAt": "2024-05-09T03:58:56.268542"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan6.yousuf6@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan6",
            "lastName": "Yousuf6",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan6.yousuf6@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504540256"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 6, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T16:43:10.580969",
            "updatedAt": "2024-05-26T01:52:38.689294"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima7.qureshi7@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima7",
            "lastName": "Qureshi7",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima7.qureshi7@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503391359"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 7, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T19:07:28.199356",
            "updatedAt": "2025-01-19T21:46:53.808891"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed8.yousuf8@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed8",
            "lastName": "Yousuf8",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed8.yousuf8@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504464010"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 8, Street XYZ"
                }
            ],
            "createdAt": "2024-07-16T06:21:23.109572",
            "updatedAt": "2024-07-11T04:49:30.477358"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali9.zahid9@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali9",
            "lastName": "Zahid9",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali9.zahid9@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509763528"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 9, Street XYZ"
                }
            ],
            "createdAt": "2024-12-17T10:16:51.248975",
            "updatedAt": "2024-09-22T10:44:06.580114"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar10.sheikh10@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar10",
            "lastName": "Sheikh10",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar10.sheikh10@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509020432"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 10, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T09:57:28.620990",
            "updatedAt": "2024-05-27T03:44:59.269289"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john11.rauf11@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John11",
            "lastName": "Rauf11",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john11.rauf11@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501838285"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 11, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T23:57:45.884471",
            "updatedAt": "2025-01-10T19:21:25.366915"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima12.sheikh12@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima12",
            "lastName": "Sheikh12",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima12.sheikh12@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502131310"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 12, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T19:09:23.586539",
            "updatedAt": "2024-05-26T12:55:08.168553"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima13.zahid13@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima13",
            "lastName": "Zahid13",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima13.zahid13@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506065036"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 13, Street XYZ"
                }
            ],
            "createdAt": "2025-04-01T06:45:28.350361",
            "updatedAt": "2024-09-18T17:17:13.778483"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan14.yousuf14@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan14",
            "lastName": "Yousuf14",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan14.yousuf14@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508885410"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 14, Street XYZ"
                }
            ],
            "createdAt": "2025-04-24T22:49:15.762168",
            "updatedAt": "2024-11-23T06:52:06.815812"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab15.tariq15@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab15",
            "lastName": "Tariq15",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab15.tariq15@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508396143"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 15, Street XYZ"
                }
            ],
            "createdAt": "2024-06-16T21:52:44.330394",
            "updatedAt": "2024-11-30T07:44:19.358115"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan16.ali16@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan16",
            "lastName": "Ali16",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan16.ali16@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508315000"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 16, Street XYZ"
                }
            ],
            "createdAt": "2025-02-22T00:37:56.935925",
            "updatedAt": "2024-11-10T18:50:08.815856"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed17.zahid17@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed17",
            "lastName": "Zahid17",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed17.zahid17@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504679037"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 17, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T09:35:52.036959",
            "updatedAt": "2025-05-04T08:10:43.932012"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah18.khan18@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah18",
            "lastName": "Khan18",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah18.khan18@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502650586"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 18, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T13:32:59.248915",
            "updatedAt": "2025-02-11T16:16:05.380381"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha19.rauf19@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha19",
            "lastName": "Rauf19",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha19.rauf19@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504068379"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 19, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T17:25:17.463933",
            "updatedAt": "2025-01-31T03:36:01.147155"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab20.doe20@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab20",
            "lastName": "Doe20",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab20.doe20@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509911769"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 20, Street XYZ"
                }
            ],
            "createdAt": "2024-08-12T03:06:10.311798",
            "updatedAt": "2024-06-10T17:12:12.831964"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor21.nawaz21@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor21",
            "lastName": "Nawaz21",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor21.nawaz21@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506633234"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 21, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T22:53:08.692920",
            "updatedAt": "2024-12-23T09:26:36.028914"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha22.sheikh22@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha22",
            "lastName": "Sheikh22",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha22.sheikh22@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504411960"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 22, Street XYZ"
                }
            ],
            "createdAt": "2025-01-20T21:43:56.316464",
            "updatedAt": "2025-04-22T03:03:34.582879"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali23.zahid23@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali23",
            "lastName": "Zahid23",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali23.zahid23@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508445850"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 23, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T01:22:25.821122",
            "updatedAt": "2024-05-09T18:44:37.615980"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima24.tariq24@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima24",
            "lastName": "Tariq24",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima24.tariq24@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503814660"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 24, Street XYZ"
                }
            ],
            "createdAt": "2025-03-17T18:31:37.785644",
            "updatedAt": "2025-01-21T02:02:39.187050"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima25.ali25@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima25",
            "lastName": "Ali25",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima25.ali25@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502889798"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 25, Street XYZ"
                }
            ],
            "createdAt": "2025-03-22T10:01:16.684615",
            "updatedAt": "2025-03-18T05:27:57.647961"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar26.doe26@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar26",
            "lastName": "Doe26",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar26.doe26@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509564651"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 26, Street XYZ"
                }
            ],
            "createdAt": "2024-11-17T19:02:51.300690",
            "updatedAt": "2025-04-21T03:40:05.971154"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar27.ali27@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar27",
            "lastName": "Ali27",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar27.ali27@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507082611"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 27, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T22:15:28.703131",
            "updatedAt": "2024-11-18T09:02:51.383488"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan28.sheikh28@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan28",
            "lastName": "Sheikh28",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan28.sheikh28@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508515655"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 28, Street XYZ"
                }
            ],
            "createdAt": "2024-05-10T22:49:34.479408",
            "updatedAt": "2025-04-07T19:41:48.660438"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali29.doe29@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali29",
            "lastName": "Doe29",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali29.doe29@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507940045"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 29, Street XYZ"
                }
            ],
            "createdAt": "2024-11-01T04:30:51.336952",
            "updatedAt": "2024-09-22T08:25:28.432247"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah30.nawaz30@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah30",
            "lastName": "Nawaz30",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah30.nawaz30@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506067911"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 30, Street XYZ"
                }
            ],
            "createdAt": "2024-11-06T12:41:20.613098",
            "updatedAt": "2024-09-15T01:57:27.838920"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed31.sheikh31@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed31",
            "lastName": "Sheikh31",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed31.sheikh31@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506233050"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 31, Street XYZ"
                }
            ],
            "createdAt": "2024-06-27T21:50:43.076831",
            "updatedAt": "2025-04-29T16:19:31.900608"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima32.nawaz32@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima32",
            "lastName": "Nawaz32",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima32.nawaz32@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507691939"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 32, Street XYZ"
                }
            ],
            "createdAt": "2024-05-22T07:54:21.603819",
            "updatedAt": "2024-05-18T00:20:43.754127"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah33.doe33@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah33",
            "lastName": "Doe33",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah33.doe33@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504929079"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 33, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T17:04:06.545452",
            "updatedAt": "2024-05-27T21:42:27.916221"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah34.nawaz34@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah34",
            "lastName": "Nawaz34",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah34.nawaz34@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501785145"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 34, Street XYZ"
                }
            ],
            "createdAt": "2024-12-30T22:58:57.947295",
            "updatedAt": "2025-03-10T12:08:46.597767"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha35.doe35@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha35",
            "lastName": "Doe35",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha35.doe35@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501999264"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 35, Street XYZ"
                }
            ],
            "createdAt": "2024-12-05T12:23:32.626145",
            "updatedAt": "2025-04-09T01:31:37.039699"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john36.nawaz36@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John36",
            "lastName": "Nawaz36",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john36.nawaz36@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502970379"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 36, Street XYZ"
                }
            ],
            "createdAt": "2024-11-20T11:12:10.855044",
            "updatedAt": "2025-01-24T11:04:49.877840"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar37.khan37@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar37",
            "lastName": "Khan37",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar37.khan37@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504833073"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 37, Street XYZ"
                }
            ],
            "createdAt": "2025-04-25T20:21:05.508762",
            "updatedAt": "2025-04-06T05:12:49.301350"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali38.yousuf38@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali38",
            "lastName": "Yousuf38",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali38.yousuf38@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502709053"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 38, Street XYZ"
                }
            ],
            "createdAt": "2024-11-06T04:38:20.673834",
            "updatedAt": "2024-11-17T13:58:04.864556"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar39.khan39@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar39",
            "lastName": "Khan39",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar39.khan39@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507753284"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 39, Street XYZ"
                }
            ],
            "createdAt": "2025-04-24T08:15:48.470477",
            "updatedAt": "2025-01-20T03:21:21.049999"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab40.yousuf40@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab40",
            "lastName": "Yousuf40",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab40.yousuf40@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509826344"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 40, Street XYZ"
                }
            ],
            "createdAt": "2024-09-27T23:25:56.335638",
            "updatedAt": "2024-07-13T10:46:42.049407"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john41.qureshi41@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John41",
            "lastName": "Qureshi41",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john41.qureshi41@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506367546"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 41, Street XYZ"
                }
            ],
            "createdAt": "2025-02-23T16:27:34.416755",
            "updatedAt": "2025-04-28T05:39:02.752800"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor42.zahid42@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor42",
            "lastName": "Zahid42",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor42.zahid42@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502956515"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 42, Street XYZ"
                }
            ],
            "createdAt": "2024-12-17T05:09:19.890790",
            "updatedAt": "2025-01-12T08:23:29.608346"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah43.doe43@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah43",
            "lastName": "Doe43",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah43.doe43@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504389382"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 43, Street XYZ"
                }
            ],
            "createdAt": "2024-08-13T08:46:52.478736",
            "updatedAt": "2024-12-05T09:33:47.552708"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john44.sheikh44@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John44",
            "lastName": "Sheikh44",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john44.sheikh44@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502126240"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 44, Street XYZ"
                }
            ],
            "createdAt": "2024-10-09T15:16:22.609644",
            "updatedAt": "2025-01-06T17:51:32.223455"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab45.zahid45@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab45",
            "lastName": "Zahid45",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab45.zahid45@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505075784"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 45, Street XYZ"
                }
            ],
            "createdAt": "2025-04-05T20:25:46.967883",
            "updatedAt": "2024-07-09T12:39:07.688288"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar46.ali46@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar46",
            "lastName": "Ali46",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar46.ali46@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509695461"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 46, Street XYZ"
                }
            ],
            "createdAt": "2025-02-02T21:16:09.828447",
            "updatedAt": "2025-03-12T07:11:11.947308"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john47.ali47@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John47",
            "lastName": "Ali47",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john47.ali47@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505867347"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 47, Street XYZ"
                }
            ],
            "createdAt": "2025-04-05T00:23:20.200396",
            "updatedAt": "2024-08-19T05:36:18.936464"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali48.sheikh48@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali48",
            "lastName": "Sheikh48",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali48.sheikh48@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507776765"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 48, Street XYZ"
                }
            ],
            "createdAt": "2024-08-17T13:34:20.144177",
            "updatedAt": "2025-02-13T12:23:33.004711"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar49.yousuf49@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar49",
            "lastName": "Yousuf49",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar49.yousuf49@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505011807"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 49, Street XYZ"
                }
            ],
            "createdAt": "2024-10-11T20:33:27.104635",
            "updatedAt": "2025-01-24T02:58:36.736658"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab50.doe50@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab50",
            "lastName": "Doe50",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab50.doe50@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505659889"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 50, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T19:38:34.409193",
            "updatedAt": "2025-01-18T19:31:07.925557"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor51.khan51@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor51",
            "lastName": "Khan51",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor51.khan51@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509974497"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 51, Street XYZ"
                }
            ],
            "createdAt": "2024-08-24T20:24:04.247430",
            "updatedAt": "2024-08-25T19:37:23.006227"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima52.rauf52@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima52",
            "lastName": "Rauf52",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima52.rauf52@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502822480"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 52, Street XYZ"
                }
            ],
            "createdAt": "2024-06-11T06:26:01.841523",
            "updatedAt": "2025-03-28T12:37:29.063233"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima53.nawaz53@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima53",
            "lastName": "Nawaz53",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima53.nawaz53@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507043042"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 53, Street XYZ"
                }
            ],
            "createdAt": "2024-08-20T00:46:46.256713",
            "updatedAt": "2025-01-29T03:28:44.658583"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar54.tariq54@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar54",
            "lastName": "Tariq54",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar54.tariq54@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505647086"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 54, Street XYZ"
                }
            ],
            "createdAt": "2024-10-30T02:21:54.316686",
            "updatedAt": "2025-03-20T18:56:06.739217"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan55.khan55@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan55",
            "lastName": "Khan55",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan55.khan55@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503161074"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 55, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T22:16:11.112643",
            "updatedAt": "2024-08-15T14:14:23.934161"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali56.ali56@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali56",
            "lastName": "Ali56",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali56.ali56@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505537963"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 56, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T06:45:56.378575",
            "updatedAt": "2024-09-20T06:02:17.207663"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar57.sheikh57@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar57",
            "lastName": "Sheikh57",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar57.sheikh57@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505415469"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 57, Street XYZ"
                }
            ],
            "createdAt": "2024-12-25T22:21:06.835884",
            "updatedAt": "2024-11-14T22:50:37.317265"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john58.sheikh58@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John58",
            "lastName": "Sheikh58",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john58.sheikh58@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509368829"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 58, Street XYZ"
                }
            ],
            "createdAt": "2024-05-10T14:51:04.035497",
            "updatedAt": "2025-02-17T08:16:31.494092"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar59.zahid59@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar59",
            "lastName": "Zahid59",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar59.zahid59@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502808419"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 59, Street XYZ"
                }
            ],
            "createdAt": "2024-11-28T01:35:00.643492",
            "updatedAt": "2025-04-21T13:03:28.726732"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali60.ali60@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali60",
            "lastName": "Ali60",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali60.ali60@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501236794"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 60, Street XYZ"
                }
            ],
            "createdAt": "2025-04-14T02:50:15.915061",
            "updatedAt": "2024-10-08T01:28:46.674616"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab61.nawaz61@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab61",
            "lastName": "Nawaz61",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab61.nawaz61@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508756692"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 61, Street XYZ"
                }
            ],
            "createdAt": "2024-05-10T19:52:32.138258",
            "updatedAt": "2024-08-14T00:28:39.341633"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john62.sheikh62@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John62",
            "lastName": "Sheikh62",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john62.sheikh62@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502724719"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 62, Street XYZ"
                }
            ],
            "createdAt": "2024-06-24T21:12:20.410682",
            "updatedAt": "2024-05-10T22:29:43.535011"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha63.rauf63@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha63",
            "lastName": "Rauf63",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha63.rauf63@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502359651"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 63, Street XYZ"
                }
            ],
            "createdAt": "2025-02-28T16:14:23.686894",
            "updatedAt": "2025-02-05T00:43:38.572865"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed64.nawaz64@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed64",
            "lastName": "Nawaz64",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed64.nawaz64@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502405774"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 64, Street XYZ"
                }
            ],
            "createdAt": "2024-07-27T22:14:42.324794",
            "updatedAt": "2025-05-07T00:07:20.687926"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali65.tariq65@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali65",
            "lastName": "Tariq65",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali65.tariq65@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508609052"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 65, Street XYZ"
                }
            ],
            "createdAt": "2024-09-12T22:15:54.285418",
            "updatedAt": "2024-06-14T08:47:09.627212"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar66.sheikh66@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar66",
            "lastName": "Sheikh66",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar66.sheikh66@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505430397"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 66, Street XYZ"
                }
            ],
            "createdAt": "2024-12-05T12:09:15.563310",
            "updatedAt": "2024-06-02T02:27:37.855729"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar67.tariq67@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar67",
            "lastName": "Tariq67",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar67.tariq67@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501115300"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 67, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T09:29:34.535846",
            "updatedAt": "2025-04-07T20:37:47.833228"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar68.ali68@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar68",
            "lastName": "Ali68",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar68.ali68@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501206975"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 68, Street XYZ"
                }
            ],
            "createdAt": "2025-04-26T06:17:17.239546",
            "updatedAt": "2024-10-05T11:18:22.954562"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed69.qureshi69@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed69",
            "lastName": "Qureshi69",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed69.qureshi69@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504040363"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 69, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T19:27:48.333990",
            "updatedAt": "2024-09-02T14:02:49.197464"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar70.nawaz70@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar70",
            "lastName": "Nawaz70",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar70.nawaz70@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508930405"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 70, Street XYZ"
                }
            ],
            "createdAt": "2025-01-14T21:38:09.958783",
            "updatedAt": "2025-05-04T03:38:58.857572"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john71.khan71@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John71",
            "lastName": "Khan71",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john71.khan71@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503690009"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 71, Street XYZ"
                }
            ],
            "createdAt": "2024-11-22T08:45:56.780129",
            "updatedAt": "2024-05-18T23:00:10.649983"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima72.rauf72@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima72",
            "lastName": "Rauf72",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima72.rauf72@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507530039"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 72, Street XYZ"
                }
            ],
            "createdAt": "2024-11-10T11:34:43.904304",
            "updatedAt": "2024-06-28T15:40:35.826824"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha73.khan73@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha73",
            "lastName": "Khan73",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha73.khan73@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508647491"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 73, Street XYZ"
                }
            ],
            "createdAt": "2024-11-06T20:29:23.353216",
            "updatedAt": "2024-12-06T06:26:36.427021"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali74.sheikh74@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali74",
            "lastName": "Sheikh74",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali74.sheikh74@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503756935"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 74, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T12:07:24.954633",
            "updatedAt": "2025-05-02T00:14:37.169331"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar75.sheikh75@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar75",
            "lastName": "Sheikh75",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar75.sheikh75@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506250360"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 75, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T17:38:22.582611",
            "updatedAt": "2025-04-19T14:34:14.422136"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar76.khan76@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar76",
            "lastName": "Khan76",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar76.khan76@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509306880"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 76, Street XYZ"
                }
            ],
            "createdAt": "2024-10-29T09:37:19.527455",
            "updatedAt": "2024-07-24T04:45:17.763909"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah77.qureshi77@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah77",
            "lastName": "Qureshi77",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah77.qureshi77@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506149990"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 77, Street XYZ"
                }
            ],
            "createdAt": "2025-05-04T05:52:22.704091",
            "updatedAt": "2024-12-24T22:03:31.803153"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima78.qureshi78@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima78",
            "lastName": "Qureshi78",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima78.qureshi78@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504926653"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 78, Street XYZ"
                }
            ],
            "createdAt": "2025-03-01T03:59:52.108980",
            "updatedAt": "2024-08-30T14:55:03.223129"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab79.sheikh79@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab79",
            "lastName": "Sheikh79",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab79.sheikh79@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502633564"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 79, Street XYZ"
                }
            ],
            "createdAt": "2025-02-06T03:39:44.669636",
            "updatedAt": "2025-02-27T13:27:53.721936"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali80.nawaz80@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali80",
            "lastName": "Nawaz80",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali80.nawaz80@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506711865"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 80, Street XYZ"
                }
            ],
            "createdAt": "2025-01-18T14:45:48.762010",
            "updatedAt": "2024-11-07T18:33:45.320400"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha81.tariq81@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha81",
            "lastName": "Tariq81",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha81.tariq81@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506515511"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 81, Street XYZ"
                }
            ],
            "createdAt": "2024-11-05T23:15:57.425955",
            "updatedAt": "2024-07-28T00:56:57.360082"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor82.sheikh82@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor82",
            "lastName": "Sheikh82",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor82.sheikh82@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504009243"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 82, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T15:07:30.239140",
            "updatedAt": "2025-02-22T01:40:35.118665"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha83.khan83@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha83",
            "lastName": "Khan83",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha83.khan83@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502945109"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 83, Street XYZ"
                }
            ],
            "createdAt": "2024-12-15T22:10:19.296609",
            "updatedAt": "2024-10-24T19:44:11.405385"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima84.nawaz84@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima84",
            "lastName": "Nawaz84",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima84.nawaz84@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504829003"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 84, Street XYZ"
                }
            ],
            "createdAt": "2025-02-03T14:42:03.943748",
            "updatedAt": "2025-04-16T03:00:23.067813"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah85.sheikh85@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah85",
            "lastName": "Sheikh85",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah85.sheikh85@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504537707"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 85, Street XYZ"
                }
            ],
            "createdAt": "2025-03-27T18:45:30.250410",
            "updatedAt": "2024-12-11T05:54:37.321003"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali86.yousuf86@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali86",
            "lastName": "Yousuf86",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali86.yousuf86@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502013201"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 86, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T16:11:15.963972",
            "updatedAt": "2024-11-16T06:06:07.076222"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor87.qureshi87@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor87",
            "lastName": "Qureshi87",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor87.qureshi87@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505096802"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 87, Street XYZ"
                }
            ],
            "createdAt": "2025-05-07T01:56:21.009424",
            "updatedAt": "2024-07-27T17:52:16.697978"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor88.yousuf88@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor88",
            "lastName": "Yousuf88",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor88.yousuf88@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508014931"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 88, Street XYZ"
                }
            ],
            "createdAt": "2024-08-26T15:16:32.664633",
            "updatedAt": "2025-05-06T00:03:57.180901"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha89.yousuf89@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha89",
            "lastName": "Yousuf89",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha89.yousuf89@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506155562"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 89, Street XYZ"
                }
            ],
            "createdAt": "2024-07-13T08:13:26.284896",
            "updatedAt": "2024-09-21T16:42:16.806075"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor90.sheikh90@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor90",
            "lastName": "Sheikh90",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor90.sheikh90@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505416813"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 90, Street XYZ"
                }
            ],
            "createdAt": "2024-11-05T01:18:09.305760",
            "updatedAt": "2024-11-03T05:18:41.322588"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar91.doe91@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar91",
            "lastName": "Doe91",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar91.doe91@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509793042"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 91, Street XYZ"
                }
            ],
            "createdAt": "2024-11-13T11:38:06.408943",
            "updatedAt": "2025-01-14T17:59:38.705597"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar92.yousuf92@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar92",
            "lastName": "Yousuf92",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar92.yousuf92@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501457935"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 92, Street XYZ"
                }
            ],
            "createdAt": "2024-10-05T05:37:30.303183",
            "updatedAt": "2025-04-21T01:19:19.173315"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab93.ali93@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab93",
            "lastName": "Ali93",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab93.ali93@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505523034"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 93, Street XYZ"
                }
            ],
            "createdAt": "2024-10-29T18:40:01.168753",
            "updatedAt": "2024-09-30T01:23:20.183587"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john94.yousuf94@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John94",
            "lastName": "Yousuf94",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john94.yousuf94@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509344427"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 94, Street XYZ"
                }
            ],
            "createdAt": "2024-06-14T14:13:35.111207",
            "updatedAt": "2024-12-02T01:29:12.697791"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima95.khan95@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima95",
            "lastName": "Khan95",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima95.khan95@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508931661"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 95, Street XYZ"
                }
            ],
            "createdAt": "2024-12-17T16:10:50.575591",
            "updatedAt": "2024-05-11T01:59:38.824192"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah96.ali96@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah96",
            "lastName": "Ali96",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah96.ali96@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507204797"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 96, Street XYZ"
                }
            ],
            "createdAt": "2024-12-17T20:29:38.982211",
            "updatedAt": "2024-05-11T03:11:58.265131"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab97.khan97@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab97",
            "lastName": "Khan97",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab97.khan97@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502604933"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 97, Street XYZ"
                }
            ],
            "createdAt": "2024-12-09T23:51:14.452757",
            "updatedAt": "2024-12-05T12:28:35.768751"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab98.ali98@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab98",
            "lastName": "Ali98",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab98.ali98@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507939244"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 98, Street XYZ"
                }
            ],
            "createdAt": "2025-02-27T02:05:12.348894",
            "updatedAt": "2025-01-10T11:28:12.278106"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor99.khan99@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor99",
            "lastName": "Khan99",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor99.khan99@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502373803"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 99, Street XYZ"
                }
            ],
            "createdAt": "2024-10-12T12:07:15.027630",
            "updatedAt": "2024-09-06T01:46:43.522053"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah100.zahid100@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah100",
            "lastName": "Zahid100",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah100.zahid100@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505869675"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 100, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T12:51:40.256197",
            "updatedAt": "2024-10-25T15:43:28.893943"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha101.zahid101@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha101",
            "lastName": "Zahid101",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha101.zahid101@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508868164"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 101, Street XYZ"
                }
            ],
            "createdAt": "2024-11-27T03:54:09.086246",
            "updatedAt": "2024-06-20T21:10:22.358972"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab102.rauf102@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab102",
            "lastName": "Rauf102",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab102.rauf102@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507857975"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 102, Street XYZ"
                }
            ],
            "createdAt": "2024-10-19T17:25:38.476068",
            "updatedAt": "2024-09-12T16:59:38.307915"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan103.sheikh103@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan103",
            "lastName": "Sheikh103",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan103.sheikh103@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509196704"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 103, Street XYZ"
                }
            ],
            "createdAt": "2024-06-14T10:41:03.698072",
            "updatedAt": "2024-07-06T12:40:58.632250"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali104.yousuf104@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali104",
            "lastName": "Yousuf104",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali104.yousuf104@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504984830"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 104, Street XYZ"
                }
            ],
            "createdAt": "2025-04-25T17:20:24.862322",
            "updatedAt": "2025-02-19T11:59:08.038421"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john105.nawaz105@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John105",
            "lastName": "Nawaz105",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john105.nawaz105@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508131299"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 105, Street XYZ"
                }
            ],
            "createdAt": "2024-12-14T10:09:15.991811",
            "updatedAt": "2025-01-14T07:43:05.884671"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john106.nawaz106@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John106",
            "lastName": "Nawaz106",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john106.nawaz106@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508959092"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 106, Street XYZ"
                }
            ],
            "createdAt": "2024-12-26T08:58:32.412663",
            "updatedAt": "2024-07-01T22:27:31.978949"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor107.rauf107@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor107",
            "lastName": "Rauf107",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor107.rauf107@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509421929"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 107, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T11:28:26.994363",
            "updatedAt": "2024-11-17T16:52:22.416377"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima108.ali108@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima108",
            "lastName": "Ali108",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima108.ali108@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503388645"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 108, Street XYZ"
                }
            ],
            "createdAt": "2025-02-23T20:31:55.680522",
            "updatedAt": "2024-12-11T20:21:25.731734"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab109.sheikh109@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab109",
            "lastName": "Sheikh109",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab109.sheikh109@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507194895"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 109, Street XYZ"
                }
            ],
            "createdAt": "2024-10-02T01:12:07.335463",
            "updatedAt": "2024-12-02T11:59:37.070263"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed110.tariq110@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed110",
            "lastName": "Tariq110",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed110.tariq110@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505459462"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 110, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T14:19:09.508455",
            "updatedAt": "2025-01-11T09:38:51.058564"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed111.tariq111@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed111",
            "lastName": "Tariq111",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed111.tariq111@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504252038"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 111, Street XYZ"
                }
            ],
            "createdAt": "2024-06-30T11:13:32.461343",
            "updatedAt": "2024-11-15T12:34:33.018105"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali112.qureshi112@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali112",
            "lastName": "Qureshi112",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali112.qureshi112@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504871316"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 112, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T08:32:05.868102",
            "updatedAt": "2025-01-24T06:36:41.293104"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed113.sheikh113@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed113",
            "lastName": "Sheikh113",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed113.sheikh113@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508752192"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 113, Street XYZ"
                }
            ],
            "createdAt": "2024-05-28T14:33:22.465419",
            "updatedAt": "2024-12-30T03:48:31.553951"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed114.doe114@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed114",
            "lastName": "Doe114",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed114.doe114@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502922004"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 114, Street XYZ"
                }
            ],
            "createdAt": "2024-06-20T08:52:44.335685",
            "updatedAt": "2025-01-19T08:52:04.095812"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab115.ali115@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab115",
            "lastName": "Ali115",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab115.ali115@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502500703"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 115, Street XYZ"
                }
            ],
            "createdAt": "2025-02-03T02:45:43.642362",
            "updatedAt": "2024-06-21T18:15:16.036037"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar116.rauf116@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar116",
            "lastName": "Rauf116",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar116.rauf116@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503721791"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 116, Street XYZ"
                }
            ],
            "createdAt": "2024-10-04T12:13:18.036605",
            "updatedAt": "2025-01-25T09:37:38.766086"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima117.ali117@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima117",
            "lastName": "Ali117",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima117.ali117@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508809645"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 117, Street XYZ"
                }
            ],
            "createdAt": "2024-05-16T12:28:31.668086",
            "updatedAt": "2024-05-10T15:26:47.478408"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john118.khan118@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John118",
            "lastName": "Khan118",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john118.khan118@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503516454"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 118, Street XYZ"
                }
            ],
            "createdAt": "2024-09-08T20:05:02.258073",
            "updatedAt": "2024-12-12T15:39:11.015128"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab119.khan119@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab119",
            "lastName": "Khan119",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab119.khan119@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507334669"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 119, Street XYZ"
                }
            ],
            "createdAt": "2024-07-13T09:00:53.889908",
            "updatedAt": "2024-12-03T20:09:14.990908"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor120.yousuf120@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor120",
            "lastName": "Yousuf120",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor120.yousuf120@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503238594"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 120, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T17:09:20.242555",
            "updatedAt": "2024-12-20T02:16:08.743065"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali121.qureshi121@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali121",
            "lastName": "Qureshi121",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali121.qureshi121@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503948307"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 121, Street XYZ"
                }
            ],
            "createdAt": "2024-12-11T19:59:06.077354",
            "updatedAt": "2024-11-15T01:42:32.758743"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah122.tariq122@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah122",
            "lastName": "Tariq122",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah122.tariq122@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501464957"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 122, Street XYZ"
                }
            ],
            "createdAt": "2024-07-04T12:07:53.509367",
            "updatedAt": "2024-12-06T22:09:05.126297"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed123.ali123@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed123",
            "lastName": "Ali123",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed123.ali123@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505592097"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 123, Street XYZ"
                }
            ],
            "createdAt": "2025-04-06T20:49:44.054069",
            "updatedAt": "2024-08-25T20:45:22.913895"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan124.tariq124@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan124",
            "lastName": "Tariq124",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan124.tariq124@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501635261"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 124, Street XYZ"
                }
            ],
            "createdAt": "2024-05-09T17:14:23.670815",
            "updatedAt": "2025-01-12T20:27:13.534768"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john125.sheikh125@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John125",
            "lastName": "Sheikh125",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john125.sheikh125@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508561894"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 125, Street XYZ"
                }
            ],
            "createdAt": "2024-10-24T19:41:39.727935",
            "updatedAt": "2024-12-16T09:21:20.342457"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima126.qureshi126@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima126",
            "lastName": "Qureshi126",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima126.qureshi126@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501990009"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 126, Street XYZ"
                }
            ],
            "createdAt": "2025-02-13T20:23:53.592409",
            "updatedAt": "2024-08-19T01:55:53.292951"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed127.yousuf127@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed127",
            "lastName": "Yousuf127",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed127.yousuf127@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504932230"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 127, Street XYZ"
                }
            ],
            "createdAt": "2024-06-02T22:44:01.451830",
            "updatedAt": "2025-05-05T00:21:19.179049"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar128.qureshi128@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar128",
            "lastName": "Qureshi128",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar128.qureshi128@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506935329"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 128, Street XYZ"
                }
            ],
            "createdAt": "2025-02-18T02:17:07.529485",
            "updatedAt": "2025-02-23T16:51:55.397972"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali129.tariq129@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali129",
            "lastName": "Tariq129",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali129.tariq129@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502026659"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 129, Street XYZ"
                }
            ],
            "createdAt": "2025-03-30T23:28:52.222023",
            "updatedAt": "2024-09-15T21:01:15.853264"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima130.qureshi130@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima130",
            "lastName": "Qureshi130",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima130.qureshi130@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506285898"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 130, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T23:42:44.220202",
            "updatedAt": "2024-11-14T01:03:55.459420"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha131.rauf131@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha131",
            "lastName": "Rauf131",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha131.rauf131@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508387208"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 131, Street XYZ"
                }
            ],
            "createdAt": "2025-01-22T12:14:05.861158",
            "updatedAt": "2024-08-25T16:25:56.857184"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar132.zahid132@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar132",
            "lastName": "Zahid132",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar132.zahid132@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509492901"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 132, Street XYZ"
                }
            ],
            "createdAt": "2025-01-06T14:11:14.985131",
            "updatedAt": "2025-01-25T00:43:34.589738"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar133.zahid133@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar133",
            "lastName": "Zahid133",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar133.zahid133@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501559436"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 133, Street XYZ"
                }
            ],
            "createdAt": "2024-06-13T05:37:45.894965",
            "updatedAt": "2024-08-08T21:24:29.311044"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali134.yousuf134@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali134",
            "lastName": "Yousuf134",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali134.yousuf134@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505332622"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 134, Street XYZ"
                }
            ],
            "createdAt": "2024-08-29T07:10:11.229766",
            "updatedAt": "2024-11-21T08:41:05.457266"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan135.sheikh135@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan135",
            "lastName": "Sheikh135",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan135.sheikh135@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506080396"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 135, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T17:43:33.349686",
            "updatedAt": "2024-12-28T08:11:54.512793"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed136.yousuf136@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed136",
            "lastName": "Yousuf136",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed136.yousuf136@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503992669"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 136, Street XYZ"
                }
            ],
            "createdAt": "2024-07-02T00:23:38.562655",
            "updatedAt": "2024-11-10T22:24:02.266068"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali137.tariq137@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali137",
            "lastName": "Tariq137",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali137.tariq137@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503392455"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 137, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T11:40:10.059627",
            "updatedAt": "2025-04-05T23:34:08.495215"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar138.qureshi138@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar138",
            "lastName": "Qureshi138",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar138.qureshi138@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504509701"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 138, Street XYZ"
                }
            ],
            "createdAt": "2024-09-23T07:45:21.619492",
            "updatedAt": "2024-10-26T16:09:50.107108"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed139.rauf139@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed139",
            "lastName": "Rauf139",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed139.rauf139@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505607235"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 139, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T01:30:16.605909",
            "updatedAt": "2024-10-18T19:45:26.411922"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor140.zahid140@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor140",
            "lastName": "Zahid140",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor140.zahid140@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503769425"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 140, Street XYZ"
                }
            ],
            "createdAt": "2024-07-28T03:24:52.273772",
            "updatedAt": "2025-03-14T10:13:37.351434"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor141.qureshi141@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor141",
            "lastName": "Qureshi141",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor141.qureshi141@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504175751"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 141, Street XYZ"
                }
            ],
            "createdAt": "2024-11-02T07:41:47.941130",
            "updatedAt": "2024-08-28T07:37:11.904244"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha142.zahid142@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha142",
            "lastName": "Zahid142",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha142.zahid142@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506018855"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 142, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T18:59:02.533476",
            "updatedAt": "2024-10-18T02:13:19.233196"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed143.doe143@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed143",
            "lastName": "Doe143",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed143.doe143@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509653048"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 143, Street XYZ"
                }
            ],
            "createdAt": "2025-02-10T04:28:38.575525",
            "updatedAt": "2024-10-22T02:08:03.450747"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed144.zahid144@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed144",
            "lastName": "Zahid144",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed144.zahid144@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509486789"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 144, Street XYZ"
                }
            ],
            "createdAt": "2024-11-08T19:20:33.127963",
            "updatedAt": "2024-07-13T22:28:07.149915"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar145.nawaz145@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar145",
            "lastName": "Nawaz145",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar145.nawaz145@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501969740"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 145, Street XYZ"
                }
            ],
            "createdAt": "2024-08-06T01:58:44.066962",
            "updatedAt": "2025-04-25T21:47:11.354175"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali146.rauf146@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali146",
            "lastName": "Rauf146",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali146.rauf146@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501883981"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 146, Street XYZ"
                }
            ],
            "createdAt": "2024-07-01T12:46:10.440818",
            "updatedAt": "2024-12-03T04:38:54.890418"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan147.qureshi147@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan147",
            "lastName": "Qureshi147",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan147.qureshi147@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506009241"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 147, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T16:52:13.980379",
            "updatedAt": "2025-01-12T02:27:08.822384"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan148.sheikh148@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan148",
            "lastName": "Sheikh148",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan148.sheikh148@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502520745"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 148, Street XYZ"
                }
            ],
            "createdAt": "2024-06-19T20:16:48.665880",
            "updatedAt": "2024-12-06T06:48:39.741452"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima149.tariq149@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima149",
            "lastName": "Tariq149",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima149.tariq149@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505017130"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 149, Street XYZ"
                }
            ],
            "createdAt": "2024-11-23T17:24:20.710006",
            "updatedAt": "2025-04-14T19:41:02.558255"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha150.ali150@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha150",
            "lastName": "Ali150",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha150.ali150@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504545107"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 150, Street XYZ"
                }
            ],
            "createdAt": "2025-03-18T04:58:40.803985",
            "updatedAt": "2024-06-10T09:56:43.303643"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali151.nawaz151@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali151",
            "lastName": "Nawaz151",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali151.nawaz151@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506066784"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 151, Street XYZ"
                }
            ],
            "createdAt": "2024-12-30T03:53:25.039552",
            "updatedAt": "2024-08-20T04:26:16.843576"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima152.nawaz152@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima152",
            "lastName": "Nawaz152",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima152.nawaz152@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508026085"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 152, Street XYZ"
                }
            ],
            "createdAt": "2025-01-17T15:20:16.239349",
            "updatedAt": "2025-02-11T00:59:59.629617"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah153.tariq153@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah153",
            "lastName": "Tariq153",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah153.tariq153@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509574030"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 153, Street XYZ"
                }
            ],
            "createdAt": "2024-11-25T13:16:25.820942",
            "updatedAt": "2024-07-14T01:52:24.929528"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan154.rauf154@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan154",
            "lastName": "Rauf154",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan154.rauf154@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504310254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 154, Street XYZ"
                }
            ],
            "createdAt": "2024-12-08T21:47:04.516294",
            "updatedAt": "2024-10-28T16:38:52.680536"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha155.zahid155@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha155",
            "lastName": "Zahid155",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha155.zahid155@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504672046"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 155, Street XYZ"
                }
            ],
            "createdAt": "2024-06-21T20:50:15.278457",
            "updatedAt": "2024-12-01T06:24:06.628588"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima156.zahid156@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima156",
            "lastName": "Zahid156",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima156.zahid156@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504944162"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 156, Street XYZ"
                }
            ],
            "createdAt": "2025-03-29T03:31:51.751277",
            "updatedAt": "2024-08-02T07:29:58.231663"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed157.tariq157@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed157",
            "lastName": "Tariq157",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed157.tariq157@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507969446"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 157, Street XYZ"
                }
            ],
            "createdAt": "2024-11-23T19:05:15.321356",
            "updatedAt": "2024-07-22T19:33:28.753348"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali158.ali158@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali158",
            "lastName": "Ali158",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali158.ali158@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506414851"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 158, Street XYZ"
                }
            ],
            "createdAt": "2024-11-24T12:36:13.740746",
            "updatedAt": "2024-07-14T00:12:46.266643"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab159.ali159@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab159",
            "lastName": "Ali159",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab159.ali159@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505062802"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 159, Street XYZ"
                }
            ],
            "createdAt": "2024-12-18T02:16:41.410379",
            "updatedAt": "2024-11-27T20:12:01.226593"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha160.doe160@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha160",
            "lastName": "Doe160",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha160.doe160@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507059918"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 160, Street XYZ"
                }
            ],
            "createdAt": "2024-06-01T07:13:34.962395",
            "updatedAt": "2025-02-13T23:52:54.431013"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali161.zahid161@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali161",
            "lastName": "Zahid161",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali161.zahid161@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507954619"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 161, Street XYZ"
                }
            ],
            "createdAt": "2024-06-01T05:40:39.351268",
            "updatedAt": "2024-12-01T02:18:08.426041"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali162.zahid162@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali162",
            "lastName": "Zahid162",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali162.zahid162@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508344405"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 162, Street XYZ"
                }
            ],
            "createdAt": "2025-03-11T16:07:27.648892",
            "updatedAt": "2024-10-01T22:30:00.073100"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john163.tariq163@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John163",
            "lastName": "Tariq163",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john163.tariq163@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508424020"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 163, Street XYZ"
                }
            ],
            "createdAt": "2025-01-30T06:35:21.616477",
            "updatedAt": "2024-06-09T16:16:00.476367"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali164.sheikh164@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali164",
            "lastName": "Sheikh164",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali164.sheikh164@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507749863"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 164, Street XYZ"
                }
            ],
            "createdAt": "2025-02-24T00:23:09.956528",
            "updatedAt": "2025-04-19T14:06:07.800417"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima165.tariq165@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima165",
            "lastName": "Tariq165",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima165.tariq165@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509002251"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 165, Street XYZ"
                }
            ],
            "createdAt": "2024-06-07T15:55:31.703729",
            "updatedAt": "2024-12-25T01:56:32.323532"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali166.tariq166@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali166",
            "lastName": "Tariq166",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali166.tariq166@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501386559"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 166, Street XYZ"
                }
            ],
            "createdAt": "2024-12-12T22:54:42.434191",
            "updatedAt": "2024-08-19T05:56:55.121752"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah167.ali167@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah167",
            "lastName": "Ali167",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah167.ali167@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507341311"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 167, Street XYZ"
                }
            ],
            "createdAt": "2024-07-16T06:36:58.553490",
            "updatedAt": "2024-09-01T08:07:05.507661"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali168.nawaz168@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali168",
            "lastName": "Nawaz168",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali168.nawaz168@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508351571"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 168, Street XYZ"
                }
            ],
            "createdAt": "2024-08-15T04:36:04.400684",
            "updatedAt": "2024-07-27T18:09:38.771564"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john169.sheikh169@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John169",
            "lastName": "Sheikh169",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john169.sheikh169@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503866416"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 169, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T22:02:05.516294",
            "updatedAt": "2024-06-10T13:40:25.368711"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima170.doe170@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima170",
            "lastName": "Doe170",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima170.doe170@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506428877"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 170, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T16:56:50.908896",
            "updatedAt": "2024-07-18T10:19:09.766660"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha171.tariq171@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha171",
            "lastName": "Tariq171",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha171.tariq171@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501727462"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 171, Street XYZ"
                }
            ],
            "createdAt": "2025-03-24T15:38:51.459582",
            "updatedAt": "2025-05-06T11:37:38.491475"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah172.rauf172@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah172",
            "lastName": "Rauf172",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah172.rauf172@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501273499"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 172, Street XYZ"
                }
            ],
            "createdAt": "2025-05-05T01:21:24.414681",
            "updatedAt": "2024-05-25T23:32:55.242858"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali173.nawaz173@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali173",
            "lastName": "Nawaz173",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali173.nawaz173@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508713007"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 173, Street XYZ"
                }
            ],
            "createdAt": "2024-08-17T09:52:42.015368",
            "updatedAt": "2024-07-25T16:12:36.274436"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john174.khan174@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John174",
            "lastName": "Khan174",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john174.khan174@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502888280"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 174, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T08:33:33.780673",
            "updatedAt": "2024-10-11T09:56:23.814022"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab175.rauf175@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab175",
            "lastName": "Rauf175",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab175.rauf175@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503786235"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 175, Street XYZ"
                }
            ],
            "createdAt": "2025-02-12T02:49:26.339458",
            "updatedAt": "2025-04-30T18:58:53.687813"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah176.nawaz176@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah176",
            "lastName": "Nawaz176",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah176.nawaz176@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506169107"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 176, Street XYZ"
                }
            ],
            "createdAt": "2025-02-03T01:41:14.033359",
            "updatedAt": "2024-08-16T16:40:27.874536"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali177.ali177@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali177",
            "lastName": "Ali177",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali177.ali177@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503468695"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 177, Street XYZ"
                }
            ],
            "createdAt": "2025-02-27T17:39:26.094513",
            "updatedAt": "2024-07-07T22:23:48.691877"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali178.rauf178@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali178",
            "lastName": "Rauf178",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali178.rauf178@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505234695"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 178, Street XYZ"
                }
            ],
            "createdAt": "2024-06-20T20:43:08.588827",
            "updatedAt": "2024-10-18T18:54:04.918191"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john179.zahid179@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John179",
            "lastName": "Zahid179",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john179.zahid179@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501453393"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 179, Street XYZ"
                }
            ],
            "createdAt": "2025-02-03T03:25:22.666047",
            "updatedAt": "2024-09-23T09:32:09.697732"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali180.zahid180@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali180",
            "lastName": "Zahid180",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali180.zahid180@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505433500"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 180, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T14:39:27.483481",
            "updatedAt": "2024-10-07T10:43:16.047525"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah181.tariq181@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah181",
            "lastName": "Tariq181",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah181.tariq181@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509031501"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 181, Street XYZ"
                }
            ],
            "createdAt": "2025-01-30T01:45:04.744735",
            "updatedAt": "2024-12-16T06:13:21.712396"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab182.sheikh182@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab182",
            "lastName": "Sheikh182",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab182.sheikh182@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505989678"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 182, Street XYZ"
                }
            ],
            "createdAt": "2025-04-06T11:43:03.160354",
            "updatedAt": "2024-11-04T18:19:43.553182"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan183.khan183@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan183",
            "lastName": "Khan183",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan183.khan183@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507616158"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 183, Street XYZ"
                }
            ],
            "createdAt": "2025-03-20T19:50:03.466843",
            "updatedAt": "2024-11-04T02:27:54.930412"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab184.nawaz184@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab184",
            "lastName": "Nawaz184",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab184.nawaz184@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506998377"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 184, Street XYZ"
                }
            ],
            "createdAt": "2025-01-08T01:27:41.490671",
            "updatedAt": "2024-05-08T07:31:59.762859"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan185.sheikh185@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan185",
            "lastName": "Sheikh185",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan185.sheikh185@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502180640"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 185, Street XYZ"
                }
            ],
            "createdAt": "2024-11-25T10:57:15.577167",
            "updatedAt": "2025-04-08T05:20:59.099485"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar186.khan186@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar186",
            "lastName": "Khan186",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar186.khan186@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503709136"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 186, Street XYZ"
                }
            ],
            "createdAt": "2024-10-04T07:51:29.382097",
            "updatedAt": "2025-05-05T12:16:57.106358"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john187.qureshi187@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John187",
            "lastName": "Qureshi187",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john187.qureshi187@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501443684"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 187, Street XYZ"
                }
            ],
            "createdAt": "2024-05-27T23:34:56.134018",
            "updatedAt": "2025-05-05T05:50:52.939568"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima188.yousuf188@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima188",
            "lastName": "Yousuf188",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima188.yousuf188@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507920012"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 188, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T20:34:21.780548",
            "updatedAt": "2024-05-14T14:02:22.242872"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john189.qureshi189@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John189",
            "lastName": "Qureshi189",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john189.qureshi189@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509889697"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 189, Street XYZ"
                }
            ],
            "createdAt": "2025-01-19T23:10:24.546074",
            "updatedAt": "2024-07-25T08:59:50.434228"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar190.qureshi190@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar190",
            "lastName": "Qureshi190",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar190.qureshi190@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504127985"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 190, Street XYZ"
                }
            ],
            "createdAt": "2024-06-07T22:01:33.910509",
            "updatedAt": "2024-07-29T08:49:51.218651"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john191.ali191@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John191",
            "lastName": "Ali191",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john191.ali191@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509100700"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 191, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T22:39:59.824203",
            "updatedAt": "2025-02-11T17:04:05.743919"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab192.zahid192@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab192",
            "lastName": "Zahid192",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab192.zahid192@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504828366"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 192, Street XYZ"
                }
            ],
            "createdAt": "2024-12-02T02:29:23.048291",
            "updatedAt": "2024-08-29T07:53:23.687770"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab193.sheikh193@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab193",
            "lastName": "Sheikh193",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab193.sheikh193@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506228178"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 193, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T18:12:13.001355",
            "updatedAt": "2024-05-10T01:07:38.189726"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed194.khan194@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed194",
            "lastName": "Khan194",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed194.khan194@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508864784"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 194, Street XYZ"
                }
            ],
            "createdAt": "2024-07-06T22:22:52.239798",
            "updatedAt": "2024-07-09T10:04:22.056417"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed195.qureshi195@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed195",
            "lastName": "Qureshi195",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed195.qureshi195@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501022533"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 195, Street XYZ"
                }
            ],
            "createdAt": "2024-10-25T19:17:10.455740",
            "updatedAt": "2024-12-29T02:05:25.883291"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john196.sheikh196@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John196",
            "lastName": "Sheikh196",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john196.sheikh196@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504404010"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 196, Street XYZ"
                }
            ],
            "createdAt": "2025-01-15T07:15:27.476744",
            "updatedAt": "2025-01-05T11:41:04.303685"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan197.tariq197@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan197",
            "lastName": "Tariq197",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan197.tariq197@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502101013"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 197, Street XYZ"
                }
            ],
            "createdAt": "2024-05-13T00:41:24.361303",
            "updatedAt": "2025-01-31T16:09:52.017827"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar198.nawaz198@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar198",
            "lastName": "Nawaz198",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar198.nawaz198@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506400560"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 198, Street XYZ"
                }
            ],
            "createdAt": "2024-12-30T19:59:29.640035",
            "updatedAt": "2025-05-07T05:00:26.358512"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali199.ali199@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali199",
            "lastName": "Ali199",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali199.ali199@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506350877"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 199, Street XYZ"
                }
            ],
            "createdAt": "2024-12-11T05:53:17.420851",
            "updatedAt": "2025-01-28T07:06:03.966026"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima200.sheikh200@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima200",
            "lastName": "Sheikh200",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima200.sheikh200@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502063369"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 200, Street XYZ"
                }
            ],
            "createdAt": "2024-10-21T22:54:56.294694",
            "updatedAt": "2024-07-17T10:20:58.250458"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha201.zahid201@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha201",
            "lastName": "Zahid201",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha201.zahid201@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503513577"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 201, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T18:02:38.866121",
            "updatedAt": "2024-10-22T20:21:22.753244"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john202.doe202@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John202",
            "lastName": "Doe202",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john202.doe202@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507814608"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 202, Street XYZ"
                }
            ],
            "createdAt": "2024-10-10T08:13:13.086018",
            "updatedAt": "2024-07-11T04:53:42.830865"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali203.ali203@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali203",
            "lastName": "Ali203",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali203.ali203@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508821676"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 203, Street XYZ"
                }
            ],
            "createdAt": "2024-09-12T00:32:53.580986",
            "updatedAt": "2025-02-01T20:30:39.477622"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab204.tariq204@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab204",
            "lastName": "Tariq204",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab204.tariq204@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502916197"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 204, Street XYZ"
                }
            ],
            "createdAt": "2025-05-02T01:55:29.036997",
            "updatedAt": "2025-03-16T17:01:01.178330"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima205.sheikh205@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima205",
            "lastName": "Sheikh205",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima205.sheikh205@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508610557"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 205, Street XYZ"
                }
            ],
            "createdAt": "2024-11-28T05:57:31.723120",
            "updatedAt": "2024-05-15T15:12:31.968259"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan206.nawaz206@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan206",
            "lastName": "Nawaz206",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan206.nawaz206@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502577744"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 206, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T23:55:24.675769",
            "updatedAt": "2025-02-19T17:48:02.737295"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali207.sheikh207@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali207",
            "lastName": "Sheikh207",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali207.sheikh207@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509182155"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 207, Street XYZ"
                }
            ],
            "createdAt": "2024-05-30T07:57:27.088761",
            "updatedAt": "2024-05-14T21:25:05.132240"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar208.qureshi208@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar208",
            "lastName": "Qureshi208",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar208.qureshi208@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502040254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 208, Street XYZ"
                }
            ],
            "createdAt": "2025-03-03T21:59:05.143540",
            "updatedAt": "2024-11-07T12:13:09.829463"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali209.qureshi209@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali209",
            "lastName": "Qureshi209",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali209.qureshi209@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506652175"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 209, Street XYZ"
                }
            ],
            "createdAt": "2025-02-21T06:49:47.644496",
            "updatedAt": "2024-10-29T04:37:53.035997"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed210.sheikh210@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed210",
            "lastName": "Sheikh210",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed210.sheikh210@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505578169"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 210, Street XYZ"
                }
            ],
            "createdAt": "2024-05-27T09:47:22.352480",
            "updatedAt": "2024-12-21T12:03:47.603682"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john211.qureshi211@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John211",
            "lastName": "Qureshi211",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john211.qureshi211@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506231408"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 211, Street XYZ"
                }
            ],
            "createdAt": "2025-03-17T14:25:42.823585",
            "updatedAt": "2025-03-08T02:18:20.756299"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima212.nawaz212@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima212",
            "lastName": "Nawaz212",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima212.nawaz212@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507344404"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 212, Street XYZ"
                }
            ],
            "createdAt": "2025-03-30T09:54:42.911465",
            "updatedAt": "2024-07-21T17:08:07.651104"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah213.doe213@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah213",
            "lastName": "Doe213",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah213.doe213@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502730352"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 213, Street XYZ"
                }
            ],
            "createdAt": "2024-07-29T05:09:34.045105",
            "updatedAt": "2024-06-06T16:39:37.255088"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed214.ali214@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed214",
            "lastName": "Ali214",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed214.ali214@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501313171"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 214, Street XYZ"
                }
            ],
            "createdAt": "2024-10-07T02:58:35.010639",
            "updatedAt": "2025-03-11T08:25:29.005827"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed215.tariq215@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed215",
            "lastName": "Tariq215",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed215.tariq215@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507414918"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 215, Street XYZ"
                }
            ],
            "createdAt": "2024-06-13T04:53:41.016498",
            "updatedAt": "2024-05-15T09:32:30.131904"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed216.doe216@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed216",
            "lastName": "Doe216",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed216.doe216@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503753741"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 216, Street XYZ"
                }
            ],
            "createdAt": "2024-07-30T16:12:03.092472",
            "updatedAt": "2024-09-15T00:39:53.729416"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab217.rauf217@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab217",
            "lastName": "Rauf217",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab217.rauf217@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508735606"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 217, Street XYZ"
                }
            ],
            "createdAt": "2025-02-14T21:00:37.249661",
            "updatedAt": "2024-06-08T23:23:20.200437"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab218.rauf218@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab218",
            "lastName": "Rauf218",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab218.rauf218@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501467604"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 218, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T23:29:14.948449",
            "updatedAt": "2025-03-21T06:02:07.575919"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima219.zahid219@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima219",
            "lastName": "Zahid219",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima219.zahid219@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502855124"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 219, Street XYZ"
                }
            ],
            "createdAt": "2025-04-09T13:26:52.159700",
            "updatedAt": "2024-05-13T04:09:53.327883"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha220.sheikh220@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha220",
            "lastName": "Sheikh220",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha220.sheikh220@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509270857"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 220, Street XYZ"
                }
            ],
            "createdAt": "2024-11-08T21:15:28.591624",
            "updatedAt": "2024-10-08T11:36:14.292074"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor221.tariq221@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor221",
            "lastName": "Tariq221",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor221.tariq221@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501703887"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 221, Street XYZ"
                }
            ],
            "createdAt": "2025-03-04T23:09:34.275399",
            "updatedAt": "2025-01-25T23:30:29.338923"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali222.sheikh222@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali222",
            "lastName": "Sheikh222",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali222.sheikh222@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506702532"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 222, Street XYZ"
                }
            ],
            "createdAt": "2024-07-07T08:18:56.073942",
            "updatedAt": "2025-01-23T03:32:52.083357"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor223.sheikh223@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor223",
            "lastName": "Sheikh223",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor223.sheikh223@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504741897"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 223, Street XYZ"
                }
            ],
            "createdAt": "2024-10-15T07:43:40.285743",
            "updatedAt": "2024-10-04T15:11:27.779355"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah224.zahid224@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah224",
            "lastName": "Zahid224",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah224.zahid224@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507526851"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 224, Street XYZ"
                }
            ],
            "createdAt": "2025-01-08T20:17:15.730886",
            "updatedAt": "2024-12-08T15:55:54.308239"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha225.tariq225@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha225",
            "lastName": "Tariq225",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha225.tariq225@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508095673"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 225, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T21:11:02.764114",
            "updatedAt": "2024-11-27T23:09:06.351677"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab226.ali226@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab226",
            "lastName": "Ali226",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab226.ali226@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506630801"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 226, Street XYZ"
                }
            ],
            "createdAt": "2024-07-23T18:52:52.688334",
            "updatedAt": "2024-11-23T19:17:35.969642"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima227.ali227@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima227",
            "lastName": "Ali227",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima227.ali227@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507684809"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 227, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T06:55:31.484937",
            "updatedAt": "2024-06-24T21:38:58.625625"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha228.khan228@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha228",
            "lastName": "Khan228",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha228.khan228@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509642380"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 228, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T02:31:26.225349",
            "updatedAt": "2024-08-28T00:03:48.921061"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha229.zahid229@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha229",
            "lastName": "Zahid229",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha229.zahid229@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502401184"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 229, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T07:47:49.710999",
            "updatedAt": "2024-11-08T05:38:09.298629"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima230.sheikh230@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima230",
            "lastName": "Sheikh230",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima230.sheikh230@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508851619"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 230, Street XYZ"
                }
            ],
            "createdAt": "2024-05-28T18:31:19.740655",
            "updatedAt": "2025-02-09T19:57:56.458837"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed231.yousuf231@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed231",
            "lastName": "Yousuf231",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed231.yousuf231@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507009191"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 231, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T11:52:34.099920",
            "updatedAt": "2024-07-25T19:58:46.330462"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor232.sheikh232@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor232",
            "lastName": "Sheikh232",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor232.sheikh232@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504907836"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 232, Street XYZ"
                }
            ],
            "createdAt": "2025-02-17T21:40:45.254991",
            "updatedAt": "2025-01-12T07:11:50.863779"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima233.qureshi233@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima233",
            "lastName": "Qureshi233",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima233.qureshi233@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503988744"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 233, Street XYZ"
                }
            ],
            "createdAt": "2024-08-02T05:24:24.592597",
            "updatedAt": "2025-02-12T02:09:59.841049"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor234.qureshi234@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor234",
            "lastName": "Qureshi234",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor234.qureshi234@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508915119"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 234, Street XYZ"
                }
            ],
            "createdAt": "2024-10-23T01:34:20.988641",
            "updatedAt": "2024-09-07T14:18:47.728033"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali235.doe235@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali235",
            "lastName": "Doe235",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali235.doe235@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507244611"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 235, Street XYZ"
                }
            ],
            "createdAt": "2025-04-09T02:34:17.393521",
            "updatedAt": "2024-10-27T20:44:44.877337"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed236.sheikh236@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed236",
            "lastName": "Sheikh236",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed236.sheikh236@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506304435"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 236, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T06:20:12.247081",
            "updatedAt": "2025-03-18T14:07:31.876526"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima237.sheikh237@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima237",
            "lastName": "Sheikh237",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima237.sheikh237@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503109904"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 237, Street XYZ"
                }
            ],
            "createdAt": "2025-03-24T14:12:28.419066",
            "updatedAt": "2024-09-07T20:34:50.062844"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima238.khan238@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima238",
            "lastName": "Khan238",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima238.khan238@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502989873"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 238, Street XYZ"
                }
            ],
            "createdAt": "2024-07-06T05:00:02.893854",
            "updatedAt": "2024-12-13T09:25:14.107356"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah239.rauf239@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah239",
            "lastName": "Rauf239",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah239.rauf239@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504434152"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 239, Street XYZ"
                }
            ],
            "createdAt": "2025-03-20T02:37:00.018571",
            "updatedAt": "2024-12-26T12:35:50.610216"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar240.rauf240@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar240",
            "lastName": "Rauf240",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar240.rauf240@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501281482"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 240, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T21:41:30.533921",
            "updatedAt": "2024-05-21T13:49:44.609106"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah241.qureshi241@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah241",
            "lastName": "Qureshi241",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah241.qureshi241@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506502882"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 241, Street XYZ"
                }
            ],
            "createdAt": "2025-04-27T14:06:34.454257",
            "updatedAt": "2025-01-05T20:16:18.674383"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan242.yousuf242@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan242",
            "lastName": "Yousuf242",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan242.yousuf242@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508627360"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 242, Street XYZ"
                }
            ],
            "createdAt": "2024-11-24T10:45:38.618852",
            "updatedAt": "2024-06-20T10:01:38.654099"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar243.rauf243@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar243",
            "lastName": "Rauf243",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar243.rauf243@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504613649"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 243, Street XYZ"
                }
            ],
            "createdAt": "2024-07-13T09:01:38.319974",
            "updatedAt": "2024-07-24T07:45:43.617862"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali244.yousuf244@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali244",
            "lastName": "Yousuf244",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali244.yousuf244@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503032770"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 244, Street XYZ"
                }
            ],
            "createdAt": "2024-09-12T15:27:46.756305",
            "updatedAt": "2024-06-21T12:16:40.380400"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar245.rauf245@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar245",
            "lastName": "Rauf245",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar245.rauf245@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506307419"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 245, Street XYZ"
                }
            ],
            "createdAt": "2024-09-02T12:04:18.889824",
            "updatedAt": "2024-05-15T18:31:49.233951"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha246.yousuf246@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha246",
            "lastName": "Yousuf246",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha246.yousuf246@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507970968"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 246, Street XYZ"
                }
            ],
            "createdAt": "2024-11-20T11:57:17.965960",
            "updatedAt": "2024-12-16T05:20:23.498768"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima247.khan247@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima247",
            "lastName": "Khan247",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima247.khan247@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508080149"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 247, Street XYZ"
                }
            ],
            "createdAt": "2024-10-09T19:09:14.167953",
            "updatedAt": "2025-03-25T15:07:58.574863"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan248.ali248@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan248",
            "lastName": "Ali248",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan248.ali248@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502708261"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 248, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T12:28:18.728213",
            "updatedAt": "2024-07-16T00:21:17.383060"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali249.khan249@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali249",
            "lastName": "Khan249",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali249.khan249@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503433061"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 249, Street XYZ"
                }
            ],
            "createdAt": "2025-02-01T01:44:30.074757",
            "updatedAt": "2024-12-05T20:01:43.023880"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar250.nawaz250@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar250",
            "lastName": "Nawaz250",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar250.nawaz250@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507829210"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 250, Street XYZ"
                }
            ],
            "createdAt": "2024-10-04T19:50:15.243680",
            "updatedAt": "2025-01-11T05:39:06.398339"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed251.yousuf251@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed251",
            "lastName": "Yousuf251",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed251.yousuf251@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509885426"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 251, Street XYZ"
                }
            ],
            "createdAt": "2024-11-14T21:23:29.940447",
            "updatedAt": "2024-11-02T10:03:27.167002"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan252.khan252@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan252",
            "lastName": "Khan252",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan252.khan252@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505181836"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 252, Street XYZ"
                }
            ],
            "createdAt": "2024-10-09T11:32:02.947952",
            "updatedAt": "2025-02-24T12:44:58.774124"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar253.tariq253@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar253",
            "lastName": "Tariq253",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar253.tariq253@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504452567"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 253, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T18:42:16.844581",
            "updatedAt": "2024-05-22T17:07:54.595968"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed254.sheikh254@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed254",
            "lastName": "Sheikh254",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed254.sheikh254@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508443365"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 254, Street XYZ"
                }
            ],
            "createdAt": "2024-07-12T15:07:18.661066",
            "updatedAt": "2024-10-19T19:51:28.028265"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed255.rauf255@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed255",
            "lastName": "Rauf255",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed255.rauf255@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508644499"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 255, Street XYZ"
                }
            ],
            "createdAt": "2025-05-02T10:17:29.278839",
            "updatedAt": "2024-05-13T19:18:30.675499"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar256.nawaz256@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar256",
            "lastName": "Nawaz256",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar256.nawaz256@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503993066"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 256, Street XYZ"
                }
            ],
            "createdAt": "2024-07-01T13:32:23.167962",
            "updatedAt": "2024-07-14T14:17:52.172259"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima257.nawaz257@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima257",
            "lastName": "Nawaz257",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima257.nawaz257@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509621680"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 257, Street XYZ"
                }
            ],
            "createdAt": "2024-07-12T15:15:51.017155",
            "updatedAt": "2025-04-06T09:29:47.719532"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah258.khan258@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah258",
            "lastName": "Khan258",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah258.khan258@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502984173"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 258, Street XYZ"
                }
            ],
            "createdAt": "2025-01-12T10:57:07.586831",
            "updatedAt": "2024-05-09T14:25:31.999362"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed259.ali259@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed259",
            "lastName": "Ali259",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed259.ali259@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505183260"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 259, Street XYZ"
                }
            ],
            "createdAt": "2024-09-11T09:05:29.297543",
            "updatedAt": "2024-07-18T12:24:31.584174"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab260.rauf260@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab260",
            "lastName": "Rauf260",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab260.rauf260@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506927128"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 260, Street XYZ"
                }
            ],
            "createdAt": "2024-10-06T01:17:51.113401",
            "updatedAt": "2024-07-20T11:34:37.501406"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan261.qureshi261@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan261",
            "lastName": "Qureshi261",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan261.qureshi261@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501170519"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 261, Street XYZ"
                }
            ],
            "createdAt": "2025-04-06T14:04:56.904417",
            "updatedAt": "2025-01-17T09:01:50.598121"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah262.khan262@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah262",
            "lastName": "Khan262",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah262.khan262@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508879117"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 262, Street XYZ"
                }
            ],
            "createdAt": "2024-12-28T04:37:34.140800",
            "updatedAt": "2024-08-03T02:16:03.002278"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah263.doe263@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah263",
            "lastName": "Doe263",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah263.doe263@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507746088"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 263, Street XYZ"
                }
            ],
            "createdAt": "2025-02-13T14:39:05.967472",
            "updatedAt": "2024-10-06T21:46:30.631901"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan264.zahid264@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan264",
            "lastName": "Zahid264",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan264.zahid264@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507184006"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 264, Street XYZ"
                }
            ],
            "createdAt": "2024-12-11T14:29:39.430292",
            "updatedAt": "2024-10-05T16:39:38.301001"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor265.rauf265@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor265",
            "lastName": "Rauf265",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor265.rauf265@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507265244"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 265, Street XYZ"
                }
            ],
            "createdAt": "2024-06-22T03:05:31.198519",
            "updatedAt": "2024-08-04T21:55:04.630116"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali266.qureshi266@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali266",
            "lastName": "Qureshi266",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali266.qureshi266@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503350969"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 266, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T00:38:27.469897",
            "updatedAt": "2025-03-06T18:42:37.892866"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john267.yousuf267@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John267",
            "lastName": "Yousuf267",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john267.yousuf267@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507465502"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 267, Street XYZ"
                }
            ],
            "createdAt": "2024-05-19T18:11:51.683586",
            "updatedAt": "2024-08-12T03:05:09.389846"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima268.zahid268@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima268",
            "lastName": "Zahid268",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima268.zahid268@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503296726"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 268, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T05:39:30.854400",
            "updatedAt": "2024-12-25T10:45:54.223838"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah269.rauf269@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah269",
            "lastName": "Rauf269",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah269.rauf269@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501040316"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 269, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T05:13:11.305807",
            "updatedAt": "2024-09-22T21:44:54.887955"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed270.rauf270@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed270",
            "lastName": "Rauf270",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed270.rauf270@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505658402"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 270, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T12:54:13.057440",
            "updatedAt": "2024-10-21T04:40:48.202042"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah271.ali271@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah271",
            "lastName": "Ali271",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah271.ali271@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502783369"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 271, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T01:38:06.552376",
            "updatedAt": "2024-10-13T21:33:11.307677"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar272.nawaz272@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar272",
            "lastName": "Nawaz272",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar272.nawaz272@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503471816"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 272, Street XYZ"
                }
            ],
            "createdAt": "2024-05-23T21:40:28.537996",
            "updatedAt": "2024-11-01T21:35:08.023739"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar273.sheikh273@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar273",
            "lastName": "Sheikh273",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar273.sheikh273@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505326794"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 273, Street XYZ"
                }
            ],
            "createdAt": "2025-01-23T09:40:46.511016",
            "updatedAt": "2025-04-05T03:09:29.732843"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali274.nawaz274@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali274",
            "lastName": "Nawaz274",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali274.nawaz274@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507925063"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 274, Street XYZ"
                }
            ],
            "createdAt": "2025-01-04T19:00:37.320266",
            "updatedAt": "2025-04-18T08:10:32.441032"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed275.zahid275@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed275",
            "lastName": "Zahid275",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed275.zahid275@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501451411"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 275, Street XYZ"
                }
            ],
            "createdAt": "2024-10-18T10:02:43.331913",
            "updatedAt": "2024-11-25T06:07:21.156905"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john276.qureshi276@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John276",
            "lastName": "Qureshi276",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john276.qureshi276@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507786840"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 276, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T19:09:28.733996",
            "updatedAt": "2024-10-21T19:04:16.419632"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha277.nawaz277@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha277",
            "lastName": "Nawaz277",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha277.nawaz277@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508340792"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 277, Street XYZ"
                }
            ],
            "createdAt": "2024-08-03T23:47:27.620212",
            "updatedAt": "2024-08-16T11:23:04.141709"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john278.ali278@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John278",
            "lastName": "Ali278",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john278.ali278@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504489541"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 278, Street XYZ"
                }
            ],
            "createdAt": "2024-11-11T05:04:01.444028",
            "updatedAt": "2024-06-23T13:05:23.861919"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor279.khan279@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor279",
            "lastName": "Khan279",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor279.khan279@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506032903"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 279, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T23:40:56.044056",
            "updatedAt": "2025-04-14T02:21:17.176331"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor280.qureshi280@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor280",
            "lastName": "Qureshi280",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor280.qureshi280@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506918308"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 280, Street XYZ"
                }
            ],
            "createdAt": "2024-11-13T12:02:14.770895",
            "updatedAt": "2024-12-05T03:49:26.887157"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor281.doe281@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor281",
            "lastName": "Doe281",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor281.doe281@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501737942"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 281, Street XYZ"
                }
            ],
            "createdAt": "2024-07-28T07:52:44.668276",
            "updatedAt": "2024-07-20T04:05:02.046360"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali282.nawaz282@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali282",
            "lastName": "Nawaz282",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali282.nawaz282@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504700073"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 282, Street XYZ"
                }
            ],
            "createdAt": "2024-06-11T14:47:07.676625",
            "updatedAt": "2025-01-21T23:32:44.204489"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed283.nawaz283@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed283",
            "lastName": "Nawaz283",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed283.nawaz283@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502327737"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 283, Street XYZ"
                }
            ],
            "createdAt": "2024-12-15T21:04:59.371524",
            "updatedAt": "2024-08-23T00:31:16.764436"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah284.ali284@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah284",
            "lastName": "Ali284",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah284.ali284@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504291768"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 284, Street XYZ"
                }
            ],
            "createdAt": "2024-07-07T19:08:21.170592",
            "updatedAt": "2025-03-02T23:17:34.795560"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan285.tariq285@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan285",
            "lastName": "Tariq285",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan285.tariq285@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509636106"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 285, Street XYZ"
                }
            ],
            "createdAt": "2025-02-01T13:09:23.545086",
            "updatedAt": "2025-01-13T03:48:19.521964"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab286.khan286@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab286",
            "lastName": "Khan286",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab286.khan286@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501907371"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 286, Street XYZ"
                }
            ],
            "createdAt": "2024-05-19T18:27:53.683137",
            "updatedAt": "2024-09-01T22:31:32.435123"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan287.khan287@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan287",
            "lastName": "Khan287",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan287.khan287@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506348262"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 287, Street XYZ"
                }
            ],
            "createdAt": "2025-03-03T11:15:38.493687",
            "updatedAt": "2025-05-04T08:30:32.287636"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor288.ali288@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor288",
            "lastName": "Ali288",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor288.ali288@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501668449"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 288, Street XYZ"
                }
            ],
            "createdAt": "2025-03-19T10:21:11.137709",
            "updatedAt": "2025-02-07T11:17:18.352052"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan289.qureshi289@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan289",
            "lastName": "Qureshi289",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan289.qureshi289@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503531825"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 289, Street XYZ"
                }
            ],
            "createdAt": "2025-04-11T02:28:44.211195",
            "updatedAt": "2024-12-25T18:39:19.622768"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar290.qureshi290@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar290",
            "lastName": "Qureshi290",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar290.qureshi290@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504182999"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 290, Street XYZ"
                }
            ],
            "createdAt": "2025-04-25T21:40:51.856910",
            "updatedAt": "2024-08-28T02:20:03.044466"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar291.nawaz291@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar291",
            "lastName": "Nawaz291",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar291.nawaz291@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508471052"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 291, Street XYZ"
                }
            ],
            "createdAt": "2024-07-18T16:38:15.208176",
            "updatedAt": "2025-04-25T09:38:39.738489"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah292.sheikh292@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah292",
            "lastName": "Sheikh292",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah292.sheikh292@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506611131"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 292, Street XYZ"
                }
            ],
            "createdAt": "2025-03-11T14:13:57.016743",
            "updatedAt": "2024-05-11T08:13:08.468737"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor293.qureshi293@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor293",
            "lastName": "Qureshi293",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor293.qureshi293@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506763994"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 293, Street XYZ"
                }
            ],
            "createdAt": "2024-07-20T20:29:47.813131",
            "updatedAt": "2024-06-20T22:28:29.684453"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali294.zahid294@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali294",
            "lastName": "Zahid294",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali294.zahid294@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504948273"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 294, Street XYZ"
                }
            ],
            "createdAt": "2024-10-06T09:32:35.549901",
            "updatedAt": "2025-01-15T21:49:33.440219"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah295.tariq295@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah295",
            "lastName": "Tariq295",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah295.tariq295@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506451471"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 295, Street XYZ"
                }
            ],
            "createdAt": "2024-12-08T08:50:32.558249",
            "updatedAt": "2024-11-12T08:34:29.586526"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah296.ali296@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah296",
            "lastName": "Ali296",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah296.ali296@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508276954"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 296, Street XYZ"
                }
            ],
            "createdAt": "2025-03-04T03:26:37.793209",
            "updatedAt": "2024-09-10T20:41:43.155877"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john297.nawaz297@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John297",
            "lastName": "Nawaz297",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john297.nawaz297@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506922888"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 297, Street XYZ"
                }
            ],
            "createdAt": "2024-11-02T17:42:00.228964",
            "updatedAt": "2025-01-08T13:48:14.943108"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab298.doe298@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab298",
            "lastName": "Doe298",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab298.doe298@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503491254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 298, Street XYZ"
                }
            ],
            "createdAt": "2024-12-05T15:41:33.853531",
            "updatedAt": "2024-06-16T10:48:02.952454"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab299.zahid299@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab299",
            "lastName": "Zahid299",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab299.zahid299@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503383620"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 299, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T16:44:15.478896",
            "updatedAt": "2025-01-05T10:47:04.548944"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john300.nawaz300@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John300",
            "lastName": "Nawaz300",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john300.nawaz300@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508285095"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 300, Street XYZ"
                }
            ],
            "createdAt": "2024-11-14T22:48:06.421763",
            "updatedAt": "2025-01-04T10:00:30.370334"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor301.nawaz301@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor301",
            "lastName": "Nawaz301",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor301.nawaz301@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506324062"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 301, Street XYZ"
                }
            ],
            "createdAt": "2024-06-22T14:53:59.290408",
            "updatedAt": "2024-11-26T16:38:21.464191"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali302.tariq302@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali302",
            "lastName": "Tariq302",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali302.tariq302@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503213388"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 302, Street XYZ"
                }
            ],
            "createdAt": "2024-09-13T09:46:24.849159",
            "updatedAt": "2024-08-19T06:52:38.057597"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali303.nawaz303@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali303",
            "lastName": "Nawaz303",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali303.nawaz303@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505526902"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 303, Street XYZ"
                }
            ],
            "createdAt": "2024-12-10T06:39:13.021912",
            "updatedAt": "2024-09-16T06:16:27.535509"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john304.sheikh304@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John304",
            "lastName": "Sheikh304",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john304.sheikh304@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502646529"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 304, Street XYZ"
                }
            ],
            "createdAt": "2024-11-30T02:03:29.453752",
            "updatedAt": "2024-10-01T14:08:10.822183"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali305.khan305@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali305",
            "lastName": "Khan305",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali305.khan305@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509566174"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 305, Street XYZ"
                }
            ],
            "createdAt": "2024-08-07T02:47:58.351966",
            "updatedAt": "2025-04-16T09:52:38.415765"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar306.ali306@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar306",
            "lastName": "Ali306",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar306.ali306@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502444629"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 306, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T08:18:59.205269",
            "updatedAt": "2024-08-08T05:03:12.702507"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor307.doe307@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor307",
            "lastName": "Doe307",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor307.doe307@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506567758"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 307, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T22:45:45.916265",
            "updatedAt": "2024-09-28T02:32:42.398874"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha308.ali308@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha308",
            "lastName": "Ali308",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha308.ali308@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504714032"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 308, Street XYZ"
                }
            ],
            "createdAt": "2024-06-12T18:49:33.666961",
            "updatedAt": "2024-10-04T06:43:57.051204"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan309.zahid309@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan309",
            "lastName": "Zahid309",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan309.zahid309@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501174140"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 309, Street XYZ"
                }
            ],
            "createdAt": "2024-10-19T00:04:48.375547",
            "updatedAt": "2025-03-07T13:56:31.507294"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar310.doe310@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar310",
            "lastName": "Doe310",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar310.doe310@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507442340"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 310, Street XYZ"
                }
            ],
            "createdAt": "2025-03-01T01:36:44.771017",
            "updatedAt": "2024-06-04T13:48:50.344357"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan311.sheikh311@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan311",
            "lastName": "Sheikh311",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan311.sheikh311@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507884517"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 311, Street XYZ"
                }
            ],
            "createdAt": "2024-07-02T05:03:18.376661",
            "updatedAt": "2025-02-26T07:14:27.853144"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar312.nawaz312@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar312",
            "lastName": "Nawaz312",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar312.nawaz312@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501595740"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 312, Street XYZ"
                }
            ],
            "createdAt": "2025-04-11T15:21:41.007307",
            "updatedAt": "2024-06-05T05:56:37.339993"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah313.sheikh313@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah313",
            "lastName": "Sheikh313",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah313.sheikh313@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505881143"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 313, Street XYZ"
                }
            ],
            "createdAt": "2024-06-20T08:06:24.023519",
            "updatedAt": "2024-05-22T07:08:31.003564"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan314.ali314@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan314",
            "lastName": "Ali314",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan314.ali314@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504589400"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 314, Street XYZ"
                }
            ],
            "createdAt": "2025-03-18T13:51:00.672515",
            "updatedAt": "2024-10-12T15:04:04.571865"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah315.qureshi315@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah315",
            "lastName": "Qureshi315",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah315.qureshi315@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509828254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 315, Street XYZ"
                }
            ],
            "createdAt": "2024-05-11T05:31:15.842474",
            "updatedAt": "2024-12-22T15:31:54.412135"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab316.doe316@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab316",
            "lastName": "Doe316",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab316.doe316@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507204914"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 316, Street XYZ"
                }
            ],
            "createdAt": "2024-10-20T15:37:08.507099",
            "updatedAt": "2025-03-23T22:58:24.700750"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha317.nawaz317@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha317",
            "lastName": "Nawaz317",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha317.nawaz317@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501729185"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 317, Street XYZ"
                }
            ],
            "createdAt": "2025-04-15T19:52:10.453804",
            "updatedAt": "2025-01-17T20:25:21.490227"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab318.doe318@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab318",
            "lastName": "Doe318",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab318.doe318@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509743899"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 318, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T22:00:03.595383",
            "updatedAt": "2024-09-09T00:34:03.065792"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor319.doe319@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor319",
            "lastName": "Doe319",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor319.doe319@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504009851"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 319, Street XYZ"
                }
            ],
            "createdAt": "2024-06-24T04:38:49.638875",
            "updatedAt": "2024-09-16T10:39:50.992768"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali320.tariq320@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali320",
            "lastName": "Tariq320",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali320.tariq320@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507512441"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 320, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T12:21:48.559175",
            "updatedAt": "2024-05-23T06:06:01.259242"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan321.khan321@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan321",
            "lastName": "Khan321",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan321.khan321@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502083325"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 321, Street XYZ"
                }
            ],
            "createdAt": "2024-06-04T19:34:59.315268",
            "updatedAt": "2024-10-07T13:51:47.829670"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor322.ali322@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor322",
            "lastName": "Ali322",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor322.ali322@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507655216"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 322, Street XYZ"
                }
            ],
            "createdAt": "2024-08-14T07:26:58.288479",
            "updatedAt": "2024-07-19T03:31:30.414468"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan323.khan323@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan323",
            "lastName": "Khan323",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan323.khan323@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507403051"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 323, Street XYZ"
                }
            ],
            "createdAt": "2024-10-05T14:53:23.775923",
            "updatedAt": "2024-10-12T06:23:17.906660"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed324.nawaz324@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed324",
            "lastName": "Nawaz324",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed324.nawaz324@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504445573"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 324, Street XYZ"
                }
            ],
            "createdAt": "2024-07-09T09:23:44.446894",
            "updatedAt": "2025-01-30T10:22:17.759225"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha325.zahid325@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha325",
            "lastName": "Zahid325",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha325.zahid325@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503232642"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 325, Street XYZ"
                }
            ],
            "createdAt": "2025-03-10T17:34:34.367299",
            "updatedAt": "2025-03-17T12:23:29.088252"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john326.tariq326@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John326",
            "lastName": "Tariq326",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john326.tariq326@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509180354"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 326, Street XYZ"
                }
            ],
            "createdAt": "2025-04-09T20:27:38.866907",
            "updatedAt": "2025-03-12T17:32:48.060446"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah327.ali327@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah327",
            "lastName": "Ali327",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah327.ali327@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502165623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 327, Street XYZ"
                }
            ],
            "createdAt": "2025-03-01T10:10:16.358475",
            "updatedAt": "2025-03-18T18:56:28.535709"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor328.khan328@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor328",
            "lastName": "Khan328",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor328.khan328@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508181492"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 328, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T19:00:27.340967",
            "updatedAt": "2024-07-16T16:59:52.764769"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima329.zahid329@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima329",
            "lastName": "Zahid329",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima329.zahid329@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503080143"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 329, Street XYZ"
                }
            ],
            "createdAt": "2024-07-19T16:56:03.519115",
            "updatedAt": "2024-06-04T15:59:30.584117"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor330.ali330@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor330",
            "lastName": "Ali330",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor330.ali330@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508988367"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 330, Street XYZ"
                }
            ],
            "createdAt": "2025-03-31T14:33:42.558974",
            "updatedAt": "2025-04-10T20:19:57.315335"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha331.rauf331@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha331",
            "lastName": "Rauf331",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha331.rauf331@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506200009"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 331, Street XYZ"
                }
            ],
            "createdAt": "2025-01-01T07:22:13.834838",
            "updatedAt": "2024-05-24T18:11:27.992911"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan332.khan332@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan332",
            "lastName": "Khan332",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan332.khan332@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509944284"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 332, Street XYZ"
                }
            ],
            "createdAt": "2025-01-23T05:42:12.103192",
            "updatedAt": "2025-01-06T03:34:22.043685"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed333.rauf333@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed333",
            "lastName": "Rauf333",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed333.rauf333@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502662974"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 333, Street XYZ"
                }
            ],
            "createdAt": "2024-12-26T10:23:54.735827",
            "updatedAt": "2024-07-23T23:56:35.493824"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha334.zahid334@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha334",
            "lastName": "Zahid334",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha334.zahid334@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506157063"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 334, Street XYZ"
                }
            ],
            "createdAt": "2024-12-28T07:06:44.065714",
            "updatedAt": "2024-12-17T20:52:45.623705"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah335.qureshi335@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah335",
            "lastName": "Qureshi335",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah335.qureshi335@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508182340"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 335, Street XYZ"
                }
            ],
            "createdAt": "2025-04-22T16:44:24.678451",
            "updatedAt": "2024-05-29T12:51:08.628841"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima336.khan336@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima336",
            "lastName": "Khan336",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima336.khan336@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503310550"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 336, Street XYZ"
                }
            ],
            "createdAt": "2025-01-02T13:16:40.148135",
            "updatedAt": "2024-05-21T12:31:03.044300"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima337.nawaz337@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima337",
            "lastName": "Nawaz337",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima337.nawaz337@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508366619"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 337, Street XYZ"
                }
            ],
            "createdAt": "2024-12-05T02:52:05.179024",
            "updatedAt": "2024-05-25T04:55:22.565593"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab338.zahid338@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab338",
            "lastName": "Zahid338",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab338.zahid338@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505089622"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 338, Street XYZ"
                }
            ],
            "createdAt": "2024-10-13T05:43:35.912255",
            "updatedAt": "2025-03-28T13:16:37.458944"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar339.doe339@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar339",
            "lastName": "Doe339",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar339.doe339@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504004515"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 339, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T20:48:51.446148",
            "updatedAt": "2025-02-04T01:14:02.890306"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed340.khan340@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed340",
            "lastName": "Khan340",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed340.khan340@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501513389"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 340, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T17:16:15.138246",
            "updatedAt": "2024-06-13T05:43:23.701268"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah341.sheikh341@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah341",
            "lastName": "Sheikh341",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah341.sheikh341@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509034636"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 341, Street XYZ"
                }
            ],
            "createdAt": "2024-10-10T07:02:48.222265",
            "updatedAt": "2025-02-26T14:03:38.745402"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima342.tariq342@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima342",
            "lastName": "Tariq342",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima342.tariq342@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508908039"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 342, Street XYZ"
                }
            ],
            "createdAt": "2024-08-12T02:01:43.553740",
            "updatedAt": "2024-05-19T10:38:29.298010"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah343.rauf343@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah343",
            "lastName": "Rauf343",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah343.rauf343@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506362624"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 343, Street XYZ"
                }
            ],
            "createdAt": "2025-03-11T05:41:43.170918",
            "updatedAt": "2024-12-03T13:26:40.998413"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan344.tariq344@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan344",
            "lastName": "Tariq344",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan344.tariq344@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509481061"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 344, Street XYZ"
                }
            ],
            "createdAt": "2024-12-02T00:14:41.506190",
            "updatedAt": "2025-01-04T02:16:00.880829"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali345.nawaz345@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali345",
            "lastName": "Nawaz345",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali345.nawaz345@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502068636"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 345, Street XYZ"
                }
            ],
            "createdAt": "2024-12-03T22:17:38.481269",
            "updatedAt": "2024-05-07T23:36:59.446227"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor346.rauf346@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor346",
            "lastName": "Rauf346",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor346.rauf346@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503783653"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 346, Street XYZ"
                }
            ],
            "createdAt": "2025-02-27T01:31:00.165630",
            "updatedAt": "2024-08-10T14:04:15.349370"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab347.sheikh347@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab347",
            "lastName": "Sheikh347",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab347.sheikh347@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504110005"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 347, Street XYZ"
                }
            ],
            "createdAt": "2024-08-19T14:52:05.617135",
            "updatedAt": "2025-03-02T09:22:59.420709"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor348.zahid348@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor348",
            "lastName": "Zahid348",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor348.zahid348@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502716640"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 348, Street XYZ"
                }
            ],
            "createdAt": "2024-12-24T10:56:45.232924",
            "updatedAt": "2024-05-24T07:13:48.357313"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed349.ali349@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed349",
            "lastName": "Ali349",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed349.ali349@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507962719"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 349, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T06:39:47.555113",
            "updatedAt": "2024-10-18T16:11:13.990230"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah350.tariq350@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah350",
            "lastName": "Tariq350",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah350.tariq350@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506745937"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 350, Street XYZ"
                }
            ],
            "createdAt": "2024-12-31T17:17:53.568538",
            "updatedAt": "2025-02-03T02:00:54.358962"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali351.qureshi351@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali351",
            "lastName": "Qureshi351",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali351.qureshi351@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503628378"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 351, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T05:49:07.796296",
            "updatedAt": "2024-12-17T07:42:44.073837"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john352.khan352@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John352",
            "lastName": "Khan352",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john352.khan352@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507600730"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 352, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T03:29:28.133200",
            "updatedAt": "2024-07-09T15:32:47.267261"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah353.yousuf353@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah353",
            "lastName": "Yousuf353",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah353.yousuf353@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509790150"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 353, Street XYZ"
                }
            ],
            "createdAt": "2024-11-07T15:38:26.320362",
            "updatedAt": "2024-08-24T21:19:01.961506"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah354.sheikh354@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah354",
            "lastName": "Sheikh354",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah354.sheikh354@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502346363"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 354, Street XYZ"
                }
            ],
            "createdAt": "2025-04-12T13:37:03.977505",
            "updatedAt": "2024-10-11T02:40:38.179137"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha355.nawaz355@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha355",
            "lastName": "Nawaz355",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha355.nawaz355@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502860367"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 355, Street XYZ"
                }
            ],
            "createdAt": "2024-06-14T10:01:58.782986",
            "updatedAt": "2024-07-04T04:54:53.752190"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha356.yousuf356@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha356",
            "lastName": "Yousuf356",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha356.yousuf356@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506815746"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 356, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T14:25:29.769282",
            "updatedAt": "2025-01-26T11:58:24.147898"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab357.tariq357@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab357",
            "lastName": "Tariq357",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab357.tariq357@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506827759"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 357, Street XYZ"
                }
            ],
            "createdAt": "2025-02-20T06:37:58.393225",
            "updatedAt": "2024-11-11T10:57:41.251756"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima358.qureshi358@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima358",
            "lastName": "Qureshi358",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima358.qureshi358@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507911917"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 358, Street XYZ"
                }
            ],
            "createdAt": "2024-07-30T08:29:06.843616",
            "updatedAt": "2025-04-23T10:13:33.626319"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar359.doe359@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar359",
            "lastName": "Doe359",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar359.doe359@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505048843"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 359, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T18:22:08.569597",
            "updatedAt": "2024-10-16T05:38:11.026494"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha360.nawaz360@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha360",
            "lastName": "Nawaz360",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha360.nawaz360@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504412510"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 360, Street XYZ"
                }
            ],
            "createdAt": "2024-07-17T20:42:13.764170",
            "updatedAt": "2025-01-17T00:22:38.422354"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah361.tariq361@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah361",
            "lastName": "Tariq361",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah361.tariq361@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501501652"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 361, Street XYZ"
                }
            ],
            "createdAt": "2024-09-28T00:11:47.021275",
            "updatedAt": "2024-11-09T18:39:32.786732"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan362.doe362@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan362",
            "lastName": "Doe362",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan362.doe362@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508643182"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 362, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T08:06:27.747407",
            "updatedAt": "2024-06-29T18:42:05.345074"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john363.ali363@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John363",
            "lastName": "Ali363",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john363.ali363@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501976077"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 363, Street XYZ"
                }
            ],
            "createdAt": "2025-02-11T03:00:23.095427",
            "updatedAt": "2024-08-14T17:22:47.775462"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah364.khan364@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah364",
            "lastName": "Khan364",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah364.khan364@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508917786"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 364, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T14:33:08.731456",
            "updatedAt": "2024-07-01T06:31:09.768436"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed365.tariq365@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed365",
            "lastName": "Tariq365",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed365.tariq365@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508519877"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 365, Street XYZ"
                }
            ],
            "createdAt": "2025-02-21T07:13:39.066776",
            "updatedAt": "2025-03-27T08:09:12.262939"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor366.khan366@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor366",
            "lastName": "Khan366",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor366.khan366@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501084579"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 366, Street XYZ"
                }
            ],
            "createdAt": "2024-05-25T18:29:59.192880",
            "updatedAt": "2025-02-22T16:20:55.613507"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar367.yousuf367@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar367",
            "lastName": "Yousuf367",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar367.yousuf367@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503774668"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 367, Street XYZ"
                }
            ],
            "createdAt": "2024-11-28T14:22:50.231922",
            "updatedAt": "2025-02-15T08:09:56.089402"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john368.ali368@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John368",
            "lastName": "Ali368",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john368.ali368@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504873355"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 368, Street XYZ"
                }
            ],
            "createdAt": "2024-09-22T15:12:02.582272",
            "updatedAt": "2025-01-01T03:00:03.613941"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima369.doe369@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima369",
            "lastName": "Doe369",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima369.doe369@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503131236"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 369, Street XYZ"
                }
            ],
            "createdAt": "2024-10-29T21:37:59.258465",
            "updatedAt": "2024-09-14T14:21:11.399044"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar370.sheikh370@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar370",
            "lastName": "Sheikh370",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar370.sheikh370@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504955763"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 370, Street XYZ"
                }
            ],
            "createdAt": "2024-05-16T12:02:10.337199",
            "updatedAt": "2025-05-06T23:37:39.899119"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab371.rauf371@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab371",
            "lastName": "Rauf371",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab371.rauf371@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504346257"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 371, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T16:58:42.795421",
            "updatedAt": "2024-12-08T06:58:39.118903"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar372.doe372@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar372",
            "lastName": "Doe372",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar372.doe372@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502204619"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 372, Street XYZ"
                }
            ],
            "createdAt": "2024-05-30T08:07:16.733242",
            "updatedAt": "2025-04-05T17:22:43.863082"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab373.rauf373@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab373",
            "lastName": "Rauf373",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab373.rauf373@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502332371"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 373, Street XYZ"
                }
            ],
            "createdAt": "2024-09-08T23:30:55.703174",
            "updatedAt": "2024-06-19T03:56:40.761872"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab374.tariq374@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab374",
            "lastName": "Tariq374",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab374.tariq374@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507955589"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 374, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T21:06:42.032395",
            "updatedAt": "2024-07-20T19:11:11.786440"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor375.nawaz375@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor375",
            "lastName": "Nawaz375",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor375.nawaz375@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509108046"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 375, Street XYZ"
                }
            ],
            "createdAt": "2024-12-18T06:46:40.312529",
            "updatedAt": "2025-02-09T04:59:12.444992"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima376.tariq376@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima376",
            "lastName": "Tariq376",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima376.tariq376@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502412900"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 376, Street XYZ"
                }
            ],
            "createdAt": "2024-11-20T19:49:20.674812",
            "updatedAt": "2024-06-08T19:25:36.411371"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah377.rauf377@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah377",
            "lastName": "Rauf377",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah377.rauf377@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502626284"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 377, Street XYZ"
                }
            ],
            "createdAt": "2025-01-12T15:39:57.583129",
            "updatedAt": "2025-04-18T07:04:04.584632"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed378.qureshi378@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed378",
            "lastName": "Qureshi378",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed378.qureshi378@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508552167"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 378, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T19:38:26.988375",
            "updatedAt": "2024-07-04T11:28:06.633361"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima379.yousuf379@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima379",
            "lastName": "Yousuf379",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima379.yousuf379@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501858071"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 379, Street XYZ"
                }
            ],
            "createdAt": "2024-11-16T21:08:45.581122",
            "updatedAt": "2025-05-06T18:25:06.519358"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan380.zahid380@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan380",
            "lastName": "Zahid380",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan380.zahid380@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501593832"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 380, Street XYZ"
                }
            ],
            "createdAt": "2024-07-07T10:32:14.967536",
            "updatedAt": "2025-03-29T06:37:51.339410"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed381.ali381@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed381",
            "lastName": "Ali381",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed381.ali381@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504576701"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 381, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T12:11:54.094416",
            "updatedAt": "2024-05-08T16:58:22.591863"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali382.doe382@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali382",
            "lastName": "Doe382",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali382.doe382@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509240581"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 382, Street XYZ"
                }
            ],
            "createdAt": "2024-09-11T16:23:07.928824",
            "updatedAt": "2024-11-28T11:35:28.733826"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha383.ali383@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha383",
            "lastName": "Ali383",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha383.ali383@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505409984"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 383, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T15:23:49.686818",
            "updatedAt": "2025-04-01T01:47:55.436230"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima384.zahid384@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima384",
            "lastName": "Zahid384",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima384.zahid384@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502967163"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 384, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T19:16:03.721968",
            "updatedAt": "2024-08-22T04:43:28.465818"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar385.nawaz385@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar385",
            "lastName": "Nawaz385",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar385.nawaz385@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506852189"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 385, Street XYZ"
                }
            ],
            "createdAt": "2024-07-30T05:04:08.553177",
            "updatedAt": "2025-01-02T14:34:30.268364"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed386.sheikh386@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed386",
            "lastName": "Sheikh386",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed386.sheikh386@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509046015"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 386, Street XYZ"
                }
            ],
            "createdAt": "2024-06-24T08:01:51.552311",
            "updatedAt": "2025-03-03T09:32:21.588702"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah387.nawaz387@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah387",
            "lastName": "Nawaz387",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah387.nawaz387@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504337012"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 387, Street XYZ"
                }
            ],
            "createdAt": "2024-09-01T06:38:48.717762",
            "updatedAt": "2024-11-11T13:39:18.731944"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah388.zahid388@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah388",
            "lastName": "Zahid388",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah388.zahid388@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503835395"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 388, Street XYZ"
                }
            ],
            "createdAt": "2025-03-08T16:37:53.680949",
            "updatedAt": "2024-08-17T10:08:37.439480"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john389.doe389@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John389",
            "lastName": "Doe389",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john389.doe389@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509772813"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 389, Street XYZ"
                }
            ],
            "createdAt": "2024-05-23T00:02:01.868895",
            "updatedAt": "2025-01-28T20:08:28.604040"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar390.rauf390@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar390",
            "lastName": "Rauf390",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar390.rauf390@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508908311"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 390, Street XYZ"
                }
            ],
            "createdAt": "2025-02-07T17:19:26.894387",
            "updatedAt": "2025-01-03T00:26:23.353100"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed391.doe391@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed391",
            "lastName": "Doe391",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed391.doe391@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509611637"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 391, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T18:15:19.676321",
            "updatedAt": "2024-10-03T11:43:48.863850"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor392.zahid392@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor392",
            "lastName": "Zahid392",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor392.zahid392@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503602734"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 392, Street XYZ"
                }
            ],
            "createdAt": "2025-02-24T01:57:03.904950",
            "updatedAt": "2024-06-18T07:24:17.109259"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar393.tariq393@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar393",
            "lastName": "Tariq393",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar393.tariq393@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502777796"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 393, Street XYZ"
                }
            ],
            "createdAt": "2024-11-29T04:51:34.561227",
            "updatedAt": "2024-12-25T00:41:27.897830"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor394.khan394@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor394",
            "lastName": "Khan394",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor394.khan394@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503994704"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 394, Street XYZ"
                }
            ],
            "createdAt": "2025-01-22T22:09:17.997054",
            "updatedAt": "2024-08-21T14:33:54.137358"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah395.ali395@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah395",
            "lastName": "Ali395",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah395.ali395@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507477758"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 395, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T07:34:45.661666",
            "updatedAt": "2025-03-16T19:03:11.457466"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john396.yousuf396@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John396",
            "lastName": "Yousuf396",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john396.yousuf396@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507324922"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 396, Street XYZ"
                }
            ],
            "createdAt": "2024-12-24T18:08:40.532034",
            "updatedAt": "2024-11-22T13:21:33.275486"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali397.ali397@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali397",
            "lastName": "Ali397",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali397.ali397@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508995588"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 397, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T23:30:10.259206",
            "updatedAt": "2024-09-09T23:33:37.404581"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima398.ali398@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima398",
            "lastName": "Ali398",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima398.ali398@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505034889"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 398, Street XYZ"
                }
            ],
            "createdAt": "2025-04-18T07:19:54.534074",
            "updatedAt": "2025-03-02T03:34:16.384259"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor399.yousuf399@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor399",
            "lastName": "Yousuf399",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor399.yousuf399@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509824196"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 399, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T10:47:08.793476",
            "updatedAt": "2025-01-20T10:20:29.806767"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah400.ali400@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah400",
            "lastName": "Ali400",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah400.ali400@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506981586"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 400, Street XYZ"
                }
            ],
            "createdAt": "2024-07-04T03:19:26.498771",
            "updatedAt": "2024-12-13T17:21:43.530475"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed401.zahid401@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed401",
            "lastName": "Zahid401",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed401.zahid401@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505703429"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 401, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T20:20:32.873189",
            "updatedAt": "2024-12-27T17:21:46.780771"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali402.qureshi402@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali402",
            "lastName": "Qureshi402",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali402.qureshi402@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508296050"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 402, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T00:11:41.462321",
            "updatedAt": "2024-06-16T16:48:08.436418"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha403.khan403@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha403",
            "lastName": "Khan403",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha403.khan403@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506939818"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 403, Street XYZ"
                }
            ],
            "createdAt": "2024-06-27T17:24:10.415304",
            "updatedAt": "2025-01-25T16:27:07.618624"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah404.ali404@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah404",
            "lastName": "Ali404",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah404.ali404@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504675448"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 404, Street XYZ"
                }
            ],
            "createdAt": "2024-06-12T08:27:36.021659",
            "updatedAt": "2024-09-04T06:49:14.821074"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed405.qureshi405@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed405",
            "lastName": "Qureshi405",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed405.qureshi405@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506024933"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 405, Street XYZ"
                }
            ],
            "createdAt": "2024-06-17T00:54:18.042234",
            "updatedAt": "2025-04-28T17:52:51.366555"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah406.ali406@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah406",
            "lastName": "Ali406",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah406.ali406@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503235444"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 406, Street XYZ"
                }
            ],
            "createdAt": "2024-11-22T15:06:42.045683",
            "updatedAt": "2024-06-24T17:53:29.731912"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha407.ali407@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha407",
            "lastName": "Ali407",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha407.ali407@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509198097"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 407, Street XYZ"
                }
            ],
            "createdAt": "2025-01-11T08:58:27.316688",
            "updatedAt": "2024-11-13T09:00:20.534964"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah408.ali408@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah408",
            "lastName": "Ali408",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah408.ali408@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504367131"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 408, Street XYZ"
                }
            ],
            "createdAt": "2024-08-25T22:18:18.524619",
            "updatedAt": "2024-07-30T19:31:04.789783"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab409.sheikh409@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab409",
            "lastName": "Sheikh409",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab409.sheikh409@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509573391"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 409, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T21:48:59.342499",
            "updatedAt": "2024-05-28T22:03:23.046085"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha410.ali410@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha410",
            "lastName": "Ali410",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha410.ali410@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508047611"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 410, Street XYZ"
                }
            ],
            "createdAt": "2024-09-17T18:49:34.934458",
            "updatedAt": "2025-03-17T04:45:19.158199"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar411.qureshi411@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar411",
            "lastName": "Qureshi411",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar411.qureshi411@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501582337"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 411, Street XYZ"
                }
            ],
            "createdAt": "2024-05-17T06:48:28.700234",
            "updatedAt": "2024-07-22T10:30:03.260300"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed412.nawaz412@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed412",
            "lastName": "Nawaz412",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed412.nawaz412@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509370461"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 412, Street XYZ"
                }
            ],
            "createdAt": "2025-02-11T22:50:23.102553",
            "updatedAt": "2025-03-13T14:13:25.295195"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali413.rauf413@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali413",
            "lastName": "Rauf413",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali413.rauf413@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507581752"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 413, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T08:14:22.966527",
            "updatedAt": "2025-04-18T21:03:00.844320"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed414.ali414@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed414",
            "lastName": "Ali414",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed414.ali414@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501764152"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 414, Street XYZ"
                }
            ],
            "createdAt": "2024-05-18T23:05:33.279442",
            "updatedAt": "2024-10-02T23:59:03.458999"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima415.khan415@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima415",
            "lastName": "Khan415",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima415.khan415@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503917767"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 415, Street XYZ"
                }
            ],
            "createdAt": "2025-04-23T10:24:58.449990",
            "updatedAt": "2024-06-09T10:17:53.503413"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john416.doe416@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John416",
            "lastName": "Doe416",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john416.doe416@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508529055"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 416, Street XYZ"
                }
            ],
            "createdAt": "2024-06-23T20:05:46.562051",
            "updatedAt": "2024-12-12T17:37:46.797318"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor417.ali417@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor417",
            "lastName": "Ali417",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor417.ali417@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507341281"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 417, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T23:39:30.217992",
            "updatedAt": "2025-04-16T05:31:56.849541"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab418.sheikh418@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab418",
            "lastName": "Sheikh418",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab418.sheikh418@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501757838"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 418, Street XYZ"
                }
            ],
            "createdAt": "2024-09-26T16:24:46.762179",
            "updatedAt": "2025-01-16T00:11:15.224910"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed419.rauf419@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed419",
            "lastName": "Rauf419",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed419.rauf419@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503209560"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 419, Street XYZ"
                }
            ],
            "createdAt": "2024-07-15T13:02:37.927572",
            "updatedAt": "2024-07-16T23:35:25.024536"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab420.doe420@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab420",
            "lastName": "Doe420",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab420.doe420@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508964382"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 420, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T13:07:15.777772",
            "updatedAt": "2024-08-21T03:58:22.880694"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john421.yousuf421@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John421",
            "lastName": "Yousuf421",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john421.yousuf421@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502661855"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 421, Street XYZ"
                }
            ],
            "createdAt": "2025-05-07T02:56:26.671047",
            "updatedAt": "2025-01-26T18:56:51.194585"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah422.tariq422@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah422",
            "lastName": "Tariq422",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah422.tariq422@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508736348"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 422, Street XYZ"
                }
            ],
            "createdAt": "2024-12-25T20:13:34.690607",
            "updatedAt": "2024-06-12T01:55:22.905576"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed423.nawaz423@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed423",
            "lastName": "Nawaz423",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed423.nawaz423@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502364348"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 423, Street XYZ"
                }
            ],
            "createdAt": "2024-12-04T06:07:31.530045",
            "updatedAt": "2024-11-17T04:57:47.141402"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab424.qureshi424@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab424",
            "lastName": "Qureshi424",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab424.qureshi424@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502371896"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 424, Street XYZ"
                }
            ],
            "createdAt": "2024-07-09T10:59:50.091221",
            "updatedAt": "2025-04-20T02:29:48.218334"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah425.sheikh425@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah425",
            "lastName": "Sheikh425",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah425.sheikh425@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505476485"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 425, Street XYZ"
                }
            ],
            "createdAt": "2024-05-12T06:37:35.684687",
            "updatedAt": "2024-07-19T02:03:28.213105"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali426.ali426@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali426",
            "lastName": "Ali426",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali426.ali426@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503627897"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 426, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T20:27:10.255520",
            "updatedAt": "2024-07-12T03:39:45.974127"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor427.rauf427@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor427",
            "lastName": "Rauf427",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor427.rauf427@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509886485"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 427, Street XYZ"
                }
            ],
            "createdAt": "2025-02-27T11:44:15.400694",
            "updatedAt": "2025-02-05T03:31:57.193039"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab428.nawaz428@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab428",
            "lastName": "Nawaz428",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab428.nawaz428@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508918124"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 428, Street XYZ"
                }
            ],
            "createdAt": "2025-03-18T07:10:04.695987",
            "updatedAt": "2025-01-26T21:44:07.690047"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan429.tariq429@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan429",
            "lastName": "Tariq429",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan429.tariq429@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505582915"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 429, Street XYZ"
                }
            ],
            "createdAt": "2025-02-26T13:49:27.533236",
            "updatedAt": "2024-10-12T15:43:32.740727"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar430.yousuf430@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar430",
            "lastName": "Yousuf430",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar430.yousuf430@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503918395"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 430, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T15:04:25.380712",
            "updatedAt": "2024-05-24T23:53:06.838848"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab431.doe431@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab431",
            "lastName": "Doe431",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab431.doe431@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502800873"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 431, Street XYZ"
                }
            ],
            "createdAt": "2024-08-28T04:40:50.867675",
            "updatedAt": "2024-08-24T18:03:52.783097"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah432.sheikh432@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah432",
            "lastName": "Sheikh432",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah432.sheikh432@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502042297"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 432, Street XYZ"
                }
            ],
            "createdAt": "2025-03-23T10:10:09.593646",
            "updatedAt": "2024-10-07T09:29:07.969337"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar433.rauf433@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar433",
            "lastName": "Rauf433",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar433.rauf433@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509794413"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 433, Street XYZ"
                }
            ],
            "createdAt": "2024-10-12T09:55:48.849581",
            "updatedAt": "2024-06-18T10:24:13.164812"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john434.tariq434@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John434",
            "lastName": "Tariq434",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john434.tariq434@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504732157"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 434, Street XYZ"
                }
            ],
            "createdAt": "2024-11-16T05:01:18.236794",
            "updatedAt": "2024-09-30T18:31:45.316190"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan435.tariq435@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan435",
            "lastName": "Tariq435",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan435.tariq435@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505687020"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 435, Street XYZ"
                }
            ],
            "createdAt": "2024-10-14T13:26:18.564521",
            "updatedAt": "2024-09-07T19:12:31.295867"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima436.nawaz436@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima436",
            "lastName": "Nawaz436",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima436.nawaz436@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507168995"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 436, Street XYZ"
                }
            ],
            "createdAt": "2024-12-08T04:51:00.170021",
            "updatedAt": "2024-10-18T08:31:42.430015"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan437.sheikh437@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan437",
            "lastName": "Sheikh437",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan437.sheikh437@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501631846"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 437, Street XYZ"
                }
            ],
            "createdAt": "2024-11-01T04:14:13.775312",
            "updatedAt": "2024-07-14T14:40:04.043134"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab438.yousuf438@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab438",
            "lastName": "Yousuf438",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab438.yousuf438@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508132906"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 438, Street XYZ"
                }
            ],
            "createdAt": "2025-04-25T01:03:06.358424",
            "updatedAt": "2024-08-31T06:47:02.647332"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan439.nawaz439@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan439",
            "lastName": "Nawaz439",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan439.nawaz439@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501135428"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 439, Street XYZ"
                }
            ],
            "createdAt": "2025-04-15T20:10:16.564655",
            "updatedAt": "2024-12-15T17:13:40.941194"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor440.tariq440@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor440",
            "lastName": "Tariq440",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor440.tariq440@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509265882"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 440, Street XYZ"
                }
            ],
            "createdAt": "2024-07-05T07:31:24.332808",
            "updatedAt": "2024-10-04T08:36:54.120048"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor441.ali441@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor441",
            "lastName": "Ali441",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor441.ali441@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504014619"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 441, Street XYZ"
                }
            ],
            "createdAt": "2024-06-13T21:20:04.010122",
            "updatedAt": "2024-11-24T05:28:53.755880"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar442.nawaz442@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar442",
            "lastName": "Nawaz442",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar442.nawaz442@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509733607"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 442, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T11:20:19.290426",
            "updatedAt": "2024-09-16T19:16:17.621470"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah443.doe443@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah443",
            "lastName": "Doe443",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah443.doe443@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506623140"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 443, Street XYZ"
                }
            ],
            "createdAt": "2024-12-07T19:25:16.918105",
            "updatedAt": "2025-03-12T11:21:11.454051"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed444.zahid444@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed444",
            "lastName": "Zahid444",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed444.zahid444@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508471842"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 444, Street XYZ"
                }
            ],
            "createdAt": "2024-08-30T10:46:18.226867",
            "updatedAt": "2024-11-26T17:34:14.579055"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah445.doe445@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah445",
            "lastName": "Doe445",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah445.doe445@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509021237"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 445, Street XYZ"
                }
            ],
            "createdAt": "2024-11-19T13:14:05.052605",
            "updatedAt": "2024-06-12T19:06:38.954584"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima446.rauf446@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima446",
            "lastName": "Rauf446",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima446.rauf446@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504942914"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 446, Street XYZ"
                }
            ],
            "createdAt": "2025-02-16T15:36:20.987771",
            "updatedAt": "2024-11-13T18:41:10.895946"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima447.tariq447@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima447",
            "lastName": "Tariq447",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima447.tariq447@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506016495"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 447, Street XYZ"
                }
            ],
            "createdAt": "2024-06-19T12:45:41.534047",
            "updatedAt": "2025-01-15T16:14:37.180205"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima448.khan448@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima448",
            "lastName": "Khan448",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima448.khan448@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503224095"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 448, Street XYZ"
                }
            ],
            "createdAt": "2024-10-05T15:36:47.048550",
            "updatedAt": "2025-05-02T20:37:25.985905"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john449.ali449@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John449",
            "lastName": "Ali449",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john449.ali449@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502560304"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 449, Street XYZ"
                }
            ],
            "createdAt": "2025-03-19T07:34:45.195394",
            "updatedAt": "2024-09-26T09:58:15.921411"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali450.qureshi450@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali450",
            "lastName": "Qureshi450",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali450.qureshi450@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506709069"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 450, Street XYZ"
                }
            ],
            "createdAt": "2024-07-20T10:03:29.744249",
            "updatedAt": "2025-01-26T20:52:28.436223"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab451.doe451@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab451",
            "lastName": "Doe451",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab451.doe451@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503806370"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 451, Street XYZ"
                }
            ],
            "createdAt": "2025-01-28T04:57:06.826486",
            "updatedAt": "2025-03-28T00:03:58.224055"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah452.yousuf452@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah452",
            "lastName": "Yousuf452",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah452.yousuf452@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504189388"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 452, Street XYZ"
                }
            ],
            "createdAt": "2024-07-29T06:37:04.942897",
            "updatedAt": "2025-03-04T07:17:59.264024"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab453.khan453@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab453",
            "lastName": "Khan453",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab453.khan453@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505125630"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 453, Street XYZ"
                }
            ],
            "createdAt": "2025-02-07T04:30:17.388954",
            "updatedAt": "2025-04-10T11:22:45.206958"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john454.qureshi454@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John454",
            "lastName": "Qureshi454",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john454.qureshi454@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501843275"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 454, Street XYZ"
                }
            ],
            "createdAt": "2025-01-12T14:42:35.588537",
            "updatedAt": "2025-02-11T02:05:16.839614"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan455.qureshi455@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan455",
            "lastName": "Qureshi455",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan455.qureshi455@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505161916"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 455, Street XYZ"
                }
            ],
            "createdAt": "2025-01-30T03:25:59.935616",
            "updatedAt": "2024-05-17T17:56:43.934525"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha456.qureshi456@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha456",
            "lastName": "Qureshi456",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha456.qureshi456@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507652884"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 456, Street XYZ"
                }
            ],
            "createdAt": "2025-02-19T21:17:40.426778",
            "updatedAt": "2025-03-16T15:15:37.521378"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar457.khan457@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar457",
            "lastName": "Khan457",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar457.khan457@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507539578"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 457, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T09:08:32.641141",
            "updatedAt": "2024-11-29T13:06:56.454018"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john458.rauf458@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John458",
            "lastName": "Rauf458",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john458.rauf458@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507737746"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 458, Street XYZ"
                }
            ],
            "createdAt": "2025-01-05T23:23:07.009784",
            "updatedAt": "2024-11-07T02:27:06.675120"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan459.rauf459@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan459",
            "lastName": "Rauf459",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan459.rauf459@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506212820"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 459, Street XYZ"
                }
            ],
            "createdAt": "2024-05-27T04:39:43.519898",
            "updatedAt": "2025-02-11T06:04:31.617610"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor460.sheikh460@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor460",
            "lastName": "Sheikh460",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor460.sheikh460@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502954538"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 460, Street XYZ"
                }
            ],
            "createdAt": "2025-01-04T02:25:23.611676",
            "updatedAt": "2025-01-31T22:08:02.041194"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali461.qureshi461@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali461",
            "lastName": "Qureshi461",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali461.qureshi461@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502293862"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 461, Street XYZ"
                }
            ],
            "createdAt": "2024-05-30T11:09:21.122485",
            "updatedAt": "2024-11-08T13:28:15.648497"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john462.yousuf462@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John462",
            "lastName": "Yousuf462",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john462.yousuf462@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504521310"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 462, Street XYZ"
                }
            ],
            "createdAt": "2024-12-11T02:15:03.032656",
            "updatedAt": "2024-12-15T14:34:20.571503"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali463.qureshi463@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali463",
            "lastName": "Qureshi463",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali463.qureshi463@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502694450"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 463, Street XYZ"
                }
            ],
            "createdAt": "2024-05-23T09:37:10.123633",
            "updatedAt": "2024-06-18T11:56:45.840097"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali464.nawaz464@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali464",
            "lastName": "Nawaz464",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali464.nawaz464@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507757928"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 464, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T15:19:41.908049",
            "updatedAt": "2025-05-03T00:06:53.075771"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed465.khan465@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed465",
            "lastName": "Khan465",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed465.khan465@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507140284"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 465, Street XYZ"
                }
            ],
            "createdAt": "2024-09-20T05:38:33.645614",
            "updatedAt": "2024-06-24T12:30:40.089890"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed466.zahid466@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed466",
            "lastName": "Zahid466",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed466.zahid466@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505875917"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 466, Street XYZ"
                }
            ],
            "createdAt": "2024-12-19T18:19:31.741672",
            "updatedAt": "2024-10-03T19:36:02.488646"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha467.sheikh467@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha467",
            "lastName": "Sheikh467",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha467.sheikh467@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508668130"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 467, Street XYZ"
                }
            ],
            "createdAt": "2024-07-02T04:28:43.284790",
            "updatedAt": "2024-10-13T01:47:51.495093"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab468.nawaz468@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab468",
            "lastName": "Nawaz468",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab468.nawaz468@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507755116"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 468, Street XYZ"
                }
            ],
            "createdAt": "2025-02-28T15:54:48.967391",
            "updatedAt": "2024-12-28T13:25:05.452884"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali469.sheikh469@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali469",
            "lastName": "Sheikh469",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali469.sheikh469@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509689134"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 469, Street XYZ"
                }
            ],
            "createdAt": "2024-07-17T11:39:55.720510",
            "updatedAt": "2025-05-01T02:39:01.486749"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed470.doe470@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed470",
            "lastName": "Doe470",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed470.doe470@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502861726"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 470, Street XYZ"
                }
            ],
            "createdAt": "2024-09-05T00:00:21.763434",
            "updatedAt": "2025-01-16T14:20:59.952089"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar471.ali471@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar471",
            "lastName": "Ali471",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar471.ali471@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507236989"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 471, Street XYZ"
                }
            ],
            "createdAt": "2024-11-16T00:27:10.455018",
            "updatedAt": "2024-08-02T20:37:01.814460"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah472.nawaz472@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah472",
            "lastName": "Nawaz472",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah472.nawaz472@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508739457"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 472, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T23:32:00.710671",
            "updatedAt": "2024-11-20T07:44:37.096885"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali473.zahid473@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali473",
            "lastName": "Zahid473",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali473.zahid473@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506973234"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 473, Street XYZ"
                }
            ],
            "createdAt": "2024-05-11T16:35:31.797783",
            "updatedAt": "2025-04-30T17:10:31.887846"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab474.tariq474@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab474",
            "lastName": "Tariq474",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab474.tariq474@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501980868"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 474, Street XYZ"
                }
            ],
            "createdAt": "2024-09-28T09:22:40.596645",
            "updatedAt": "2024-10-06T06:57:34.159178"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john475.nawaz475@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John475",
            "lastName": "Nawaz475",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john475.nawaz475@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503767535"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 475, Street XYZ"
                }
            ],
            "createdAt": "2024-05-09T19:38:22.388003",
            "updatedAt": "2025-01-04T18:14:32.679103"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali476.doe476@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali476",
            "lastName": "Doe476",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali476.doe476@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507290718"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 476, Street XYZ"
                }
            ],
            "createdAt": "2025-03-28T10:40:48.602149",
            "updatedAt": "2025-05-02T22:59:03.258610"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali477.tariq477@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali477",
            "lastName": "Tariq477",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali477.tariq477@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509264822"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 477, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T01:49:38.218542",
            "updatedAt": "2025-01-20T18:55:31.256427"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali478.rauf478@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali478",
            "lastName": "Rauf478",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali478.rauf478@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509224111"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 478, Street XYZ"
                }
            ],
            "createdAt": "2024-07-18T06:16:32.708100",
            "updatedAt": "2024-12-06T15:38:29.187531"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan479.nawaz479@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan479",
            "lastName": "Nawaz479",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan479.nawaz479@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509120313"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 479, Street XYZ"
                }
            ],
            "createdAt": "2025-04-02T03:47:18.566319",
            "updatedAt": "2024-12-29T22:34:11.889496"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali480.sheikh480@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali480",
            "lastName": "Sheikh480",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali480.sheikh480@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509537905"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 480, Street XYZ"
                }
            ],
            "createdAt": "2024-12-19T10:19:07.807740",
            "updatedAt": "2025-04-05T11:19:06.392517"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha481.khan481@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha481",
            "lastName": "Khan481",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha481.khan481@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505988113"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 481, Street XYZ"
                }
            ],
            "createdAt": "2025-04-30T14:19:29.900528",
            "updatedAt": "2024-08-06T00:11:49.076853"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab482.yousuf482@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab482",
            "lastName": "Yousuf482",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab482.yousuf482@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507554911"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 482, Street XYZ"
                }
            ],
            "createdAt": "2025-02-05T18:45:56.448058",
            "updatedAt": "2024-12-22T09:43:46.197717"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab483.tariq483@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab483",
            "lastName": "Tariq483",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab483.tariq483@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509247626"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 483, Street XYZ"
                }
            ],
            "createdAt": "2024-12-10T19:19:31.885751",
            "updatedAt": "2024-08-21T02:38:47.518367"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab484.ali484@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab484",
            "lastName": "Ali484",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab484.ali484@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504004986"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 484, Street XYZ"
                }
            ],
            "createdAt": "2025-04-01T16:12:05.878804",
            "updatedAt": "2024-06-11T02:41:17.406333"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah485.khan485@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah485",
            "lastName": "Khan485",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah485.khan485@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502403154"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 485, Street XYZ"
                }
            ],
            "createdAt": "2025-02-13T09:03:15.751252",
            "updatedAt": "2024-10-04T09:55:10.264084"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali486.doe486@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali486",
            "lastName": "Doe486",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali486.doe486@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505057477"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 486, Street XYZ"
                }
            ],
            "createdAt": "2024-12-07T00:38:47.006958",
            "updatedAt": "2025-01-04T15:52:38.125242"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan487.sheikh487@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan487",
            "lastName": "Sheikh487",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan487.sheikh487@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507634341"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 487, Street XYZ"
                }
            ],
            "createdAt": "2025-02-11T21:02:24.129350",
            "updatedAt": "2024-06-18T16:18:26.666061"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah488.ali488@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah488",
            "lastName": "Ali488",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah488.ali488@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508589393"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 488, Street XYZ"
                }
            ],
            "createdAt": "2024-09-08T10:34:28.443865",
            "updatedAt": "2024-07-31T02:22:40.453285"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha489.khan489@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha489",
            "lastName": "Khan489",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha489.khan489@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506432273"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 489, Street XYZ"
                }
            ],
            "createdAt": "2025-01-24T03:41:14.650552",
            "updatedAt": "2025-01-08T19:53:34.094532"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali490.rauf490@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali490",
            "lastName": "Rauf490",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali490.rauf490@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503243795"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 490, Street XYZ"
                }
            ],
            "createdAt": "2025-03-16T07:57:37.300648",
            "updatedAt": "2025-03-27T17:54:18.472374"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar491.tariq491@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar491",
            "lastName": "Tariq491",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar491.tariq491@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506017112"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 491, Street XYZ"
                }
            ],
            "createdAt": "2025-02-02T00:55:16.117459",
            "updatedAt": "2024-08-21T10:05:54.769416"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan492.sheikh492@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan492",
            "lastName": "Sheikh492",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan492.sheikh492@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503331581"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 492, Street XYZ"
                }
            ],
            "createdAt": "2025-01-11T03:31:04.311511",
            "updatedAt": "2025-01-12T17:00:01.867700"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali493.yousuf493@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali493",
            "lastName": "Yousuf493",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali493.yousuf493@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505623562"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 493, Street XYZ"
                }
            ],
            "createdAt": "2024-06-02T06:02:14.519637",
            "updatedAt": "2025-04-15T19:00:24.182317"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali494.ali494@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali494",
            "lastName": "Ali494",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali494.ali494@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503404658"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 494, Street XYZ"
                }
            ],
            "createdAt": "2024-10-11T08:05:49.952925",
            "updatedAt": "2024-07-02T07:24:14.626308"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john495.zahid495@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John495",
            "lastName": "Zahid495",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john495.zahid495@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507107341"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 495, Street XYZ"
                }
            ],
            "createdAt": "2025-03-13T11:32:16.512154",
            "updatedAt": "2025-02-09T08:26:02.114430"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor496.tariq496@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor496",
            "lastName": "Tariq496",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor496.tariq496@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503288629"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 496, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T09:24:54.630399",
            "updatedAt": "2024-11-27T08:40:55.080739"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab497.rauf497@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab497",
            "lastName": "Rauf497",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab497.rauf497@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503898226"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 497, Street XYZ"
                }
            ],
            "createdAt": "2025-05-03T04:38:54.721996",
            "updatedAt": "2024-08-17T20:39:26.573939"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima498.yousuf498@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima498",
            "lastName": "Yousuf498",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima498.yousuf498@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502464057"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 498, Street XYZ"
                }
            ],
            "createdAt": "2024-06-06T17:30:47.084997",
            "updatedAt": "2024-06-27T16:04:45.715572"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima499.nawaz499@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima499",
            "lastName": "Nawaz499",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima499.nawaz499@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504859991"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 499, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T22:45:39.507215",
            "updatedAt": "2024-06-26T08:24:48.675277"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john500.zahid500@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John500",
            "lastName": "Zahid500",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john500.zahid500@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506187670"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 500, Street XYZ"
                }
            ],
            "createdAt": "2024-06-01T07:54:53.728810",
            "updatedAt": "2024-09-30T20:12:15.228351"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab501.nawaz501@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab501",
            "lastName": "Nawaz501",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab501.nawaz501@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507883073"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 501, Street XYZ"
                }
            ],
            "createdAt": "2024-06-30T05:19:14.242592",
            "updatedAt": "2025-04-29T00:30:32.429560"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor502.nawaz502@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor502",
            "lastName": "Nawaz502",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor502.nawaz502@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505397481"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 502, Street XYZ"
                }
            ],
            "createdAt": "2024-11-15T22:12:32.695339",
            "updatedAt": "2024-11-22T22:14:29.318169"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar503.sheikh503@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar503",
            "lastName": "Sheikh503",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar503.sheikh503@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503742917"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 503, Street XYZ"
                }
            ],
            "createdAt": "2024-12-02T02:07:46.722361",
            "updatedAt": "2024-07-25T20:17:26.242898"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john504.sheikh504@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John504",
            "lastName": "Sheikh504",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john504.sheikh504@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508107282"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 504, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T14:28:54.329614",
            "updatedAt": "2024-07-10T18:51:46.355424"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima505.doe505@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima505",
            "lastName": "Doe505",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima505.doe505@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504310478"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 505, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T02:20:07.732262",
            "updatedAt": "2025-03-24T08:02:00.742392"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha506.tariq506@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha506",
            "lastName": "Tariq506",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha506.tariq506@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504559259"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 506, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T22:51:14.751262",
            "updatedAt": "2024-06-26T15:48:21.070222"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor507.ali507@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor507",
            "lastName": "Ali507",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor507.ali507@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503473348"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 507, Street XYZ"
                }
            ],
            "createdAt": "2024-06-09T14:51:01.589902",
            "updatedAt": "2025-04-04T16:10:45.925166"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah508.rauf508@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah508",
            "lastName": "Rauf508",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah508.rauf508@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501068857"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 508, Street XYZ"
                }
            ],
            "createdAt": "2025-05-06T23:36:36.169494",
            "updatedAt": "2024-08-24T19:09:24.506460"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab509.nawaz509@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab509",
            "lastName": "Nawaz509",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab509.nawaz509@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501008291"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 509, Street XYZ"
                }
            ],
            "createdAt": "2025-03-01T09:56:46.501826",
            "updatedAt": "2025-01-31T13:39:19.968884"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan510.doe510@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan510",
            "lastName": "Doe510",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan510.doe510@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502355632"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 510, Street XYZ"
                }
            ],
            "createdAt": "2024-12-17T13:21:49.337174",
            "updatedAt": "2024-07-31T22:35:41.228640"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan511.sheikh511@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan511",
            "lastName": "Sheikh511",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan511.sheikh511@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503004671"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 511, Street XYZ"
                }
            ],
            "createdAt": "2025-02-17T13:27:22.622781",
            "updatedAt": "2025-04-03T15:50:31.019187"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john512.ali512@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John512",
            "lastName": "Ali512",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john512.ali512@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506245113"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 512, Street XYZ"
                }
            ],
            "createdAt": "2024-09-10T04:46:57.996985",
            "updatedAt": "2025-01-09T07:44:58.621459"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john513.ali513@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John513",
            "lastName": "Ali513",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john513.ali513@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503277646"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 513, Street XYZ"
                }
            ],
            "createdAt": "2025-03-05T06:47:57.931169",
            "updatedAt": "2024-06-15T01:05:34.625282"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab514.tariq514@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab514",
            "lastName": "Tariq514",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab514.tariq514@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508984479"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 514, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T20:42:51.842336",
            "updatedAt": "2024-06-25T12:02:45.265416"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah515.khan515@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah515",
            "lastName": "Khan515",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah515.khan515@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502378326"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 515, Street XYZ"
                }
            ],
            "createdAt": "2024-10-20T23:58:20.462955",
            "updatedAt": "2024-11-10T07:39:46.047036"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan516.ali516@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan516",
            "lastName": "Ali516",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan516.ali516@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504389601"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 516, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T20:39:30.784254",
            "updatedAt": "2024-12-22T22:21:22.937904"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan517.zahid517@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan517",
            "lastName": "Zahid517",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan517.zahid517@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502770267"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 517, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T16:32:32.942885",
            "updatedAt": "2024-11-09T18:59:32.175046"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali518.doe518@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali518",
            "lastName": "Doe518",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali518.doe518@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505034669"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 518, Street XYZ"
                }
            ],
            "createdAt": "2025-02-08T02:35:47.681929",
            "updatedAt": "2024-10-31T09:25:06.557688"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor519.sheikh519@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor519",
            "lastName": "Sheikh519",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor519.sheikh519@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506701464"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 519, Street XYZ"
                }
            ],
            "createdAt": "2025-01-18T03:36:29.364816",
            "updatedAt": "2024-06-25T07:39:31.875823"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar520.rauf520@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar520",
            "lastName": "Rauf520",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar520.rauf520@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505862714"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 520, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T15:12:19.730874",
            "updatedAt": "2024-08-01T04:36:35.366800"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john521.khan521@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John521",
            "lastName": "Khan521",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john521.khan521@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504881175"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 521, Street XYZ"
                }
            ],
            "createdAt": "2024-08-27T03:48:33.627381",
            "updatedAt": "2024-08-23T17:41:23.303125"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar522.nawaz522@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar522",
            "lastName": "Nawaz522",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar522.nawaz522@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505251067"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 522, Street XYZ"
                }
            ],
            "createdAt": "2024-08-16T21:28:03.019471",
            "updatedAt": "2024-07-13T04:41:14.279925"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar523.khan523@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar523",
            "lastName": "Khan523",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar523.khan523@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506237448"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 523, Street XYZ"
                }
            ],
            "createdAt": "2024-07-10T11:39:28.795452",
            "updatedAt": "2025-03-11T06:46:13.252644"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali524.tariq524@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali524",
            "lastName": "Tariq524",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali524.tariq524@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506614932"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 524, Street XYZ"
                }
            ],
            "createdAt": "2024-06-01T07:30:57.184852",
            "updatedAt": "2024-11-08T11:57:19.965515"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah525.qureshi525@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah525",
            "lastName": "Qureshi525",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah525.qureshi525@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501244495"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 525, Street XYZ"
                }
            ],
            "createdAt": "2025-01-19T01:44:21.027905",
            "updatedAt": "2025-05-03T07:39:12.829725"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john526.rauf526@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John526",
            "lastName": "Rauf526",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john526.rauf526@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502441453"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 526, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T13:32:45.750201",
            "updatedAt": "2024-11-13T07:10:53.832312"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima527.khan527@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima527",
            "lastName": "Khan527",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima527.khan527@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508092164"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 527, Street XYZ"
                }
            ],
            "createdAt": "2024-08-17T17:00:05.903999",
            "updatedAt": "2025-02-18T09:52:25.799713"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed528.tariq528@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed528",
            "lastName": "Tariq528",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed528.tariq528@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502869160"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 528, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T03:31:17.972887",
            "updatedAt": "2025-05-06T16:44:37.358817"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john529.khan529@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John529",
            "lastName": "Khan529",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john529.khan529@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509186963"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 529, Street XYZ"
                }
            ],
            "createdAt": "2024-09-14T10:00:58.197899",
            "updatedAt": "2024-12-31T05:31:14.604420"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed530.rauf530@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed530",
            "lastName": "Rauf530",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed530.rauf530@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501964772"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 530, Street XYZ"
                }
            ],
            "createdAt": "2025-02-17T03:23:02.950483",
            "updatedAt": "2024-08-27T21:41:28.855138"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah531.yousuf531@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah531",
            "lastName": "Yousuf531",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah531.yousuf531@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507198864"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 531, Street XYZ"
                }
            ],
            "createdAt": "2024-07-04T21:00:29.977036",
            "updatedAt": "2024-07-11T08:31:47.044954"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed532.rauf532@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed532",
            "lastName": "Rauf532",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed532.rauf532@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501806788"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 532, Street XYZ"
                }
            ],
            "createdAt": "2025-02-08T21:32:23.912192",
            "updatedAt": "2025-01-04T02:23:18.997086"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali533.ali533@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali533",
            "lastName": "Ali533",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali533.ali533@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508392437"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 533, Street XYZ"
                }
            ],
            "createdAt": "2024-12-26T10:07:23.329592",
            "updatedAt": "2024-07-20T02:57:27.826150"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed534.sheikh534@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed534",
            "lastName": "Sheikh534",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed534.sheikh534@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502148529"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 534, Street XYZ"
                }
            ],
            "createdAt": "2024-09-07T00:31:39.794352",
            "updatedAt": "2024-09-16T19:49:41.992067"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john535.qureshi535@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John535",
            "lastName": "Qureshi535",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john535.qureshi535@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503815900"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 535, Street XYZ"
                }
            ],
            "createdAt": "2025-01-20T21:33:59.998039",
            "updatedAt": "2025-01-30T10:01:40.321693"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar536.yousuf536@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar536",
            "lastName": "Yousuf536",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar536.yousuf536@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502898263"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 536, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T23:55:54.209810",
            "updatedAt": "2024-07-27T08:53:40.118473"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john537.ali537@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John537",
            "lastName": "Ali537",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john537.ali537@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502040660"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 537, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T18:27:33.479214",
            "updatedAt": "2024-09-23T08:25:53.472712"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha538.tariq538@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha538",
            "lastName": "Tariq538",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha538.tariq538@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506092338"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 538, Street XYZ"
                }
            ],
            "createdAt": "2024-07-24T06:33:21.531617",
            "updatedAt": "2025-05-03T13:23:33.806026"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab539.tariq539@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab539",
            "lastName": "Tariq539",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab539.tariq539@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509152299"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 539, Street XYZ"
                }
            ],
            "createdAt": "2024-05-10T11:50:53.675438",
            "updatedAt": "2024-07-29T03:29:02.143006"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed540.sheikh540@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed540",
            "lastName": "Sheikh540",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed540.sheikh540@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509121616"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 540, Street XYZ"
                }
            ],
            "createdAt": "2024-06-12T16:43:44.040469",
            "updatedAt": "2025-01-17T03:23:08.650141"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john541.khan541@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John541",
            "lastName": "Khan541",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john541.khan541@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504853300"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 541, Street XYZ"
                }
            ],
            "createdAt": "2024-10-21T03:00:31.953702",
            "updatedAt": "2025-01-15T16:29:40.901656"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john542.zahid542@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John542",
            "lastName": "Zahid542",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john542.zahid542@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502267779"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 542, Street XYZ"
                }
            ],
            "createdAt": "2024-05-29T06:27:25.315084",
            "updatedAt": "2024-11-22T09:56:02.960505"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha543.zahid543@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha543",
            "lastName": "Zahid543",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha543.zahid543@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508731285"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 543, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T03:26:21.271057",
            "updatedAt": "2024-07-27T21:03:06.596432"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar544.nawaz544@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar544",
            "lastName": "Nawaz544",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar544.nawaz544@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507774240"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 544, Street XYZ"
                }
            ],
            "createdAt": "2024-05-16T00:32:19.161639",
            "updatedAt": "2024-07-03T15:39:11.864413"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john545.tariq545@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John545",
            "lastName": "Tariq545",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john545.tariq545@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505891683"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 545, Street XYZ"
                }
            ],
            "createdAt": "2025-01-14T04:23:56.190327",
            "updatedAt": "2025-03-10T09:06:59.986805"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab546.ali546@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab546",
            "lastName": "Ali546",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab546.ali546@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507990514"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 546, Street XYZ"
                }
            ],
            "createdAt": "2025-02-19T11:34:08.162993",
            "updatedAt": "2024-12-23T05:20:54.980004"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan547.khan547@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan547",
            "lastName": "Khan547",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan547.khan547@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506244401"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 547, Street XYZ"
                }
            ],
            "createdAt": "2024-09-14T18:22:02.315385",
            "updatedAt": "2024-12-18T01:54:30.718674"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan548.khan548@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan548",
            "lastName": "Khan548",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan548.khan548@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501582136"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 548, Street XYZ"
                }
            ],
            "createdAt": "2024-12-10T05:03:22.368825",
            "updatedAt": "2025-03-20T22:17:22.072726"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha549.tariq549@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha549",
            "lastName": "Tariq549",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha549.tariq549@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508602496"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 549, Street XYZ"
                }
            ],
            "createdAt": "2024-12-31T18:06:28.928828",
            "updatedAt": "2025-02-25T03:42:10.911653"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan550.khan550@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan550",
            "lastName": "Khan550",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan550.khan550@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505065920"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 550, Street XYZ"
                }
            ],
            "createdAt": "2024-08-04T11:53:23.332139",
            "updatedAt": "2024-10-05T05:42:13.180639"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali551.yousuf551@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali551",
            "lastName": "Yousuf551",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali551.yousuf551@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509503216"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 551, Street XYZ"
                }
            ],
            "createdAt": "2024-08-20T13:13:46.855969",
            "updatedAt": "2024-09-09T19:07:09.274950"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab552.nawaz552@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab552",
            "lastName": "Nawaz552",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab552.nawaz552@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505447981"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 552, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T11:33:29.745778",
            "updatedAt": "2025-01-11T23:11:36.890240"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha553.zahid553@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha553",
            "lastName": "Zahid553",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha553.zahid553@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507479019"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 553, Street XYZ"
                }
            ],
            "createdAt": "2024-12-28T00:23:26.092434",
            "updatedAt": "2024-06-03T19:29:38.621194"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali554.zahid554@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali554",
            "lastName": "Zahid554",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali554.zahid554@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505202319"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 554, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T05:36:13.409018",
            "updatedAt": "2024-11-28T06:00:47.538930"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha555.doe555@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha555",
            "lastName": "Doe555",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha555.doe555@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507614833"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 555, Street XYZ"
                }
            ],
            "createdAt": "2025-03-19T16:38:33.525371",
            "updatedAt": "2024-09-27T11:32:59.824005"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha556.zahid556@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha556",
            "lastName": "Zahid556",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha556.zahid556@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502116573"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 556, Street XYZ"
                }
            ],
            "createdAt": "2024-12-03T13:08:11.284354",
            "updatedAt": "2024-08-17T01:38:58.338253"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar557.sheikh557@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar557",
            "lastName": "Sheikh557",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar557.sheikh557@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504110865"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 557, Street XYZ"
                }
            ],
            "createdAt": "2024-08-02T08:13:20.738325",
            "updatedAt": "2024-10-18T14:29:16.626942"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john558.rauf558@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John558",
            "lastName": "Rauf558",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john558.rauf558@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508175137"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 558, Street XYZ"
                }
            ],
            "createdAt": "2025-01-17T23:39:27.351284",
            "updatedAt": "2024-09-23T12:34:01.216748"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima559.qureshi559@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima559",
            "lastName": "Qureshi559",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima559.qureshi559@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508268207"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 559, Street XYZ"
                }
            ],
            "createdAt": "2024-10-29T08:44:23.309693",
            "updatedAt": "2024-09-01T10:54:18.351109"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima560.doe560@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima560",
            "lastName": "Doe560",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima560.doe560@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506695185"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 560, Street XYZ"
                }
            ],
            "createdAt": "2024-09-26T18:32:43.339422",
            "updatedAt": "2025-02-02T03:40:03.674729"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan561.tariq561@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan561",
            "lastName": "Tariq561",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan561.tariq561@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501037727"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 561, Street XYZ"
                }
            ],
            "createdAt": "2024-10-10T20:38:45.651307",
            "updatedAt": "2025-01-04T13:50:57.397280"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor562.yousuf562@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor562",
            "lastName": "Yousuf562",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor562.yousuf562@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502608973"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 562, Street XYZ"
                }
            ],
            "createdAt": "2024-08-11T11:00:09.993017",
            "updatedAt": "2025-01-07T01:57:28.134169"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah563.khan563@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah563",
            "lastName": "Khan563",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah563.khan563@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509502993"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 563, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T01:26:24.714867",
            "updatedAt": "2024-07-10T13:25:44.845137"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed564.yousuf564@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed564",
            "lastName": "Yousuf564",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed564.yousuf564@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506596736"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 564, Street XYZ"
                }
            ],
            "createdAt": "2025-04-12T04:36:20.374203",
            "updatedAt": "2024-09-09T20:15:50.702899"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar565.nawaz565@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar565",
            "lastName": "Nawaz565",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar565.nawaz565@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507510901"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 565, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T05:23:42.058994",
            "updatedAt": "2024-07-31T20:06:46.875498"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah566.nawaz566@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah566",
            "lastName": "Nawaz566",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah566.nawaz566@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508815842"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 566, Street XYZ"
                }
            ],
            "createdAt": "2025-04-02T13:40:34.268281",
            "updatedAt": "2024-10-12T11:59:32.925735"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor567.rauf567@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor567",
            "lastName": "Rauf567",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor567.rauf567@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502787592"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 567, Street XYZ"
                }
            ],
            "createdAt": "2024-05-28T18:11:25.676707",
            "updatedAt": "2024-10-20T11:28:58.965534"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima568.yousuf568@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima568",
            "lastName": "Yousuf568",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima568.yousuf568@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506622844"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 568, Street XYZ"
                }
            ],
            "createdAt": "2024-11-27T14:11:27.164431",
            "updatedAt": "2025-03-01T07:09:29.063992"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar569.rauf569@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar569",
            "lastName": "Rauf569",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar569.rauf569@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509224302"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 569, Street XYZ"
                }
            ],
            "createdAt": "2024-08-16T04:50:14.205131",
            "updatedAt": "2025-01-03T08:02:21.068652"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab570.rauf570@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab570",
            "lastName": "Rauf570",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab570.rauf570@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503088955"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 570, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T23:46:28.599655",
            "updatedAt": "2024-10-14T21:44:05.289291"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar571.nawaz571@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar571",
            "lastName": "Nawaz571",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar571.nawaz571@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507638837"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 571, Street XYZ"
                }
            ],
            "createdAt": "2025-01-28T12:39:32.774741",
            "updatedAt": "2024-06-29T08:43:18.830225"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah572.rauf572@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah572",
            "lastName": "Rauf572",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah572.rauf572@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503955903"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 572, Street XYZ"
                }
            ],
            "createdAt": "2025-02-12T21:37:00.326566",
            "updatedAt": "2024-05-25T14:16:43.853438"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali573.tariq573@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali573",
            "lastName": "Tariq573",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali573.tariq573@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508296048"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 573, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T07:38:58.529529",
            "updatedAt": "2024-11-28T17:08:02.282399"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john574.ali574@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John574",
            "lastName": "Ali574",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john574.ali574@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502270965"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 574, Street XYZ"
                }
            ],
            "createdAt": "2025-01-15T17:40:35.057484",
            "updatedAt": "2024-11-06T16:41:20.489907"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima575.sheikh575@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima575",
            "lastName": "Sheikh575",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima575.sheikh575@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505727573"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 575, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T17:26:16.760456",
            "updatedAt": "2025-04-01T01:43:09.584378"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed576.doe576@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed576",
            "lastName": "Doe576",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed576.doe576@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501301035"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 576, Street XYZ"
                }
            ],
            "createdAt": "2025-01-18T19:36:04.349288",
            "updatedAt": "2024-07-28T22:56:37.823151"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor577.yousuf577@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor577",
            "lastName": "Yousuf577",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor577.yousuf577@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506771592"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 577, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T04:47:28.520530",
            "updatedAt": "2025-02-03T21:34:11.876236"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan578.rauf578@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan578",
            "lastName": "Rauf578",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan578.rauf578@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504496677"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 578, Street XYZ"
                }
            ],
            "createdAt": "2025-01-20T01:55:11.763421",
            "updatedAt": "2024-11-24T06:19:54.598425"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab579.doe579@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab579",
            "lastName": "Doe579",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab579.doe579@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508809173"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 579, Street XYZ"
                }
            ],
            "createdAt": "2024-09-07T01:23:51.563008",
            "updatedAt": "2024-12-18T05:54:49.391653"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan580.zahid580@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan580",
            "lastName": "Zahid580",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan580.zahid580@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503801883"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 580, Street XYZ"
                }
            ],
            "createdAt": "2024-06-12T01:13:35.442693",
            "updatedAt": "2024-12-11T13:09:37.604641"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali581.sheikh581@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali581",
            "lastName": "Sheikh581",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali581.sheikh581@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504807216"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 581, Street XYZ"
                }
            ],
            "createdAt": "2024-12-15T21:56:45.642599",
            "updatedAt": "2025-02-02T10:44:32.493919"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah582.zahid582@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah582",
            "lastName": "Zahid582",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah582.zahid582@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505888254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 582, Street XYZ"
                }
            ],
            "createdAt": "2024-07-17T06:13:44.773912",
            "updatedAt": "2025-03-13T17:57:54.507619"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab583.nawaz583@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab583",
            "lastName": "Nawaz583",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab583.nawaz583@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501705442"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 583, Street XYZ"
                }
            ],
            "createdAt": "2024-08-14T10:00:59.422737",
            "updatedAt": "2024-05-19T18:58:40.214335"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah584.zahid584@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah584",
            "lastName": "Zahid584",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah584.zahid584@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509038261"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 584, Street XYZ"
                }
            ],
            "createdAt": "2024-11-15T03:05:59.790468",
            "updatedAt": "2024-07-27T12:28:49.571023"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha585.zahid585@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha585",
            "lastName": "Zahid585",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha585.zahid585@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508891366"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 585, Street XYZ"
                }
            ],
            "createdAt": "2024-08-24T11:32:25.886611",
            "updatedAt": "2024-10-31T08:22:59.398299"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor586.tariq586@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor586",
            "lastName": "Tariq586",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor586.tariq586@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501864082"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 586, Street XYZ"
                }
            ],
            "createdAt": "2024-11-18T12:17:02.574651",
            "updatedAt": "2025-02-13T03:56:38.432112"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed587.rauf587@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed587",
            "lastName": "Rauf587",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed587.rauf587@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506418243"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 587, Street XYZ"
                }
            ],
            "createdAt": "2024-06-29T11:56:28.166365",
            "updatedAt": "2025-02-15T01:09:58.185986"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar588.sheikh588@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar588",
            "lastName": "Sheikh588",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar588.sheikh588@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508275599"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 588, Street XYZ"
                }
            ],
            "createdAt": "2024-11-10T20:40:14.248628",
            "updatedAt": "2025-01-28T23:02:31.704676"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali589.qureshi589@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali589",
            "lastName": "Qureshi589",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali589.qureshi589@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503749889"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 589, Street XYZ"
                }
            ],
            "createdAt": "2025-03-30T12:10:30.617332",
            "updatedAt": "2024-08-22T10:57:37.640707"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima590.khan590@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima590",
            "lastName": "Khan590",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima590.khan590@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503232658"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 590, Street XYZ"
                }
            ],
            "createdAt": "2024-11-07T06:31:40.296974",
            "updatedAt": "2024-05-19T15:57:24.743618"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor591.tariq591@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor591",
            "lastName": "Tariq591",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor591.tariq591@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504506568"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 591, Street XYZ"
                }
            ],
            "createdAt": "2024-06-17T12:39:58.136546",
            "updatedAt": "2024-07-15T08:41:09.235804"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor592.sheikh592@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor592",
            "lastName": "Sheikh592",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor592.sheikh592@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507495390"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 592, Street XYZ"
                }
            ],
            "createdAt": "2024-09-16T18:25:02.880445",
            "updatedAt": "2024-05-08T04:32:39.866455"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha593.yousuf593@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha593",
            "lastName": "Yousuf593",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha593.yousuf593@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509453324"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 593, Street XYZ"
                }
            ],
            "createdAt": "2024-09-20T14:04:33.838337",
            "updatedAt": "2024-05-15T21:19:47.463913"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan594.yousuf594@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan594",
            "lastName": "Yousuf594",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan594.yousuf594@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504928614"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 594, Street XYZ"
                }
            ],
            "createdAt": "2025-03-08T05:14:59.534728",
            "updatedAt": "2025-01-26T20:21:59.483282"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan595.nawaz595@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan595",
            "lastName": "Nawaz595",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan595.nawaz595@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504018924"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 595, Street XYZ"
                }
            ],
            "createdAt": "2025-03-25T15:36:21.809509",
            "updatedAt": "2024-07-17T13:44:16.854942"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah596.khan596@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah596",
            "lastName": "Khan596",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah596.khan596@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507909757"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 596, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T22:27:04.843914",
            "updatedAt": "2024-09-23T11:12:37.789858"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar597.khan597@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar597",
            "lastName": "Khan597",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar597.khan597@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509295839"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 597, Street XYZ"
                }
            ],
            "createdAt": "2025-02-23T21:21:15.867979",
            "updatedAt": "2024-12-09T11:29:15.293627"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha598.khan598@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha598",
            "lastName": "Khan598",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha598.khan598@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508813421"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 598, Street XYZ"
                }
            ],
            "createdAt": "2025-02-24T10:26:12.989061",
            "updatedAt": "2024-06-06T12:08:54.844472"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah599.qureshi599@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah599",
            "lastName": "Qureshi599",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah599.qureshi599@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507677324"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 599, Street XYZ"
                }
            ],
            "createdAt": "2024-09-13T01:55:30.848209",
            "updatedAt": "2024-09-21T03:53:21.734839"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima600.yousuf600@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima600",
            "lastName": "Yousuf600",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima600.yousuf600@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501701497"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 600, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T06:47:11.850483",
            "updatedAt": "2025-04-16T15:02:18.551223"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan601.rauf601@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan601",
            "lastName": "Rauf601",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan601.rauf601@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503539283"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 601, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T07:52:13.587298",
            "updatedAt": "2024-07-19T09:10:45.142205"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah602.zahid602@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah602",
            "lastName": "Zahid602",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah602.zahid602@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503820048"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 602, Street XYZ"
                }
            ],
            "createdAt": "2024-10-04T13:32:28.444288",
            "updatedAt": "2024-12-10T13:31:58.037786"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima603.zahid603@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima603",
            "lastName": "Zahid603",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima603.zahid603@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505834502"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 603, Street XYZ"
                }
            ],
            "createdAt": "2025-01-17T02:38:27.765519",
            "updatedAt": "2024-08-22T16:07:30.765291"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor604.rauf604@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor604",
            "lastName": "Rauf604",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor604.rauf604@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508163898"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 604, Street XYZ"
                }
            ],
            "createdAt": "2024-07-24T00:42:44.969245",
            "updatedAt": "2024-11-12T14:11:13.303295"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah605.yousuf605@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah605",
            "lastName": "Yousuf605",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah605.yousuf605@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508845015"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 605, Street XYZ"
                }
            ],
            "createdAt": "2025-02-22T00:59:30.088435",
            "updatedAt": "2024-05-26T22:57:05.087683"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor606.nawaz606@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor606",
            "lastName": "Nawaz606",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor606.nawaz606@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502125244"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 606, Street XYZ"
                }
            ],
            "createdAt": "2024-09-02T13:50:05.083939",
            "updatedAt": "2025-04-22T05:12:45.327823"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor607.nawaz607@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor607",
            "lastName": "Nawaz607",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor607.nawaz607@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509848779"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 607, Street XYZ"
                }
            ],
            "createdAt": "2024-06-21T22:03:20.726749",
            "updatedAt": "2024-10-15T20:24:17.539920"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan608.khan608@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan608",
            "lastName": "Khan608",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan608.khan608@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505765011"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 608, Street XYZ"
                }
            ],
            "createdAt": "2025-02-10T04:09:28.974297",
            "updatedAt": "2025-01-16T16:18:41.540534"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab609.nawaz609@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab609",
            "lastName": "Nawaz609",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab609.nawaz609@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504846840"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 609, Street XYZ"
                }
            ],
            "createdAt": "2024-05-13T05:25:36.976532",
            "updatedAt": "2024-09-21T18:26:42.708942"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan610.tariq610@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan610",
            "lastName": "Tariq610",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan610.tariq610@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502156303"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 610, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T16:04:15.651149",
            "updatedAt": "2024-07-17T05:03:46.323082"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah611.yousuf611@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah611",
            "lastName": "Yousuf611",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah611.yousuf611@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504945755"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 611, Street XYZ"
                }
            ],
            "createdAt": "2024-09-25T19:27:31.325348",
            "updatedAt": "2025-02-10T11:11:13.787938"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah612.qureshi612@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah612",
            "lastName": "Qureshi612",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah612.qureshi612@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501688814"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 612, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T06:47:33.216709",
            "updatedAt": "2024-06-07T19:41:32.902059"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed613.rauf613@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed613",
            "lastName": "Rauf613",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed613.rauf613@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502937016"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 613, Street XYZ"
                }
            ],
            "createdAt": "2024-07-15T22:09:59.092636",
            "updatedAt": "2024-12-23T11:46:33.142764"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john614.nawaz614@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John614",
            "lastName": "Nawaz614",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john614.nawaz614@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507963122"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 614, Street XYZ"
                }
            ],
            "createdAt": "2024-05-27T10:49:39.716759",
            "updatedAt": "2025-01-14T19:07:08.819764"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar615.ali615@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar615",
            "lastName": "Ali615",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar615.ali615@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503371347"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 615, Street XYZ"
                }
            ],
            "createdAt": "2024-10-11T19:39:12.734781",
            "updatedAt": "2024-09-03T03:57:09.212515"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah616.qureshi616@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah616",
            "lastName": "Qureshi616",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah616.qureshi616@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506886393"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 616, Street XYZ"
                }
            ],
            "createdAt": "2024-08-15T07:09:39.231813",
            "updatedAt": "2024-06-16T17:48:16.691467"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab617.qureshi617@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab617",
            "lastName": "Qureshi617",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab617.qureshi617@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507821150"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 617, Street XYZ"
                }
            ],
            "createdAt": "2025-03-17T13:40:14.219761",
            "updatedAt": "2024-11-03T12:34:23.855641"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha618.qureshi618@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha618",
            "lastName": "Qureshi618",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha618.qureshi618@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508993917"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 618, Street XYZ"
                }
            ],
            "createdAt": "2024-09-14T22:34:23.205970",
            "updatedAt": "2024-10-15T15:28:43.521542"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar619.sheikh619@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar619",
            "lastName": "Sheikh619",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar619.sheikh619@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506372390"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 619, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T06:45:49.586559",
            "updatedAt": "2024-07-22T21:37:21.453848"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah620.zahid620@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah620",
            "lastName": "Zahid620",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah620.zahid620@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502181822"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 620, Street XYZ"
                }
            ],
            "createdAt": "2025-04-20T05:57:24.861711",
            "updatedAt": "2024-08-22T14:56:47.863828"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar621.sheikh621@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar621",
            "lastName": "Sheikh621",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar621.sheikh621@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508417117"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 621, Street XYZ"
                }
            ],
            "createdAt": "2024-12-15T16:53:35.568983",
            "updatedAt": "2024-05-31T10:43:57.089214"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar622.doe622@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar622",
            "lastName": "Doe622",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar622.doe622@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506126011"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 622, Street XYZ"
                }
            ],
            "createdAt": "2024-10-02T11:46:51.039528",
            "updatedAt": "2024-08-19T03:21:16.545594"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah623.khan623@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah623",
            "lastName": "Khan623",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah623.khan623@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502623768"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 623, Street XYZ"
                }
            ],
            "createdAt": "2024-10-03T17:00:49.959872",
            "updatedAt": "2025-02-28T17:18:05.351038"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan624.nawaz624@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan624",
            "lastName": "Nawaz624",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan624.nawaz624@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501497199"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 624, Street XYZ"
                }
            ],
            "createdAt": "2025-03-13T11:58:02.966449",
            "updatedAt": "2025-01-05T20:23:26.029225"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john625.yousuf625@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John625",
            "lastName": "Yousuf625",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john625.yousuf625@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507197905"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 625, Street XYZ"
                }
            ],
            "createdAt": "2025-04-25T21:36:55.343811",
            "updatedAt": "2024-11-19T20:15:24.553316"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah626.doe626@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah626",
            "lastName": "Doe626",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah626.doe626@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502826846"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 626, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T06:00:44.681562",
            "updatedAt": "2025-01-26T23:39:59.250299"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah627.tariq627@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah627",
            "lastName": "Tariq627",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah627.tariq627@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502308913"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 627, Street XYZ"
                }
            ],
            "createdAt": "2024-10-30T04:35:50.516717",
            "updatedAt": "2024-09-22T10:07:35.830896"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan628.yousuf628@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan628",
            "lastName": "Yousuf628",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan628.yousuf628@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502513281"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 628, Street XYZ"
                }
            ],
            "createdAt": "2025-03-20T12:13:37.090841",
            "updatedAt": "2024-12-16T01:19:39.466691"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha629.doe629@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha629",
            "lastName": "Doe629",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha629.doe629@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505256639"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 629, Street XYZ"
                }
            ],
            "createdAt": "2025-03-31T04:43:04.824575",
            "updatedAt": "2024-07-09T03:36:44.916127"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar630.doe630@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar630",
            "lastName": "Doe630",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar630.doe630@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504602636"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 630, Street XYZ"
                }
            ],
            "createdAt": "2024-12-21T07:34:47.381493",
            "updatedAt": "2025-02-08T05:10:24.439397"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha631.yousuf631@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha631",
            "lastName": "Yousuf631",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha631.yousuf631@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508719890"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 631, Street XYZ"
                }
            ],
            "createdAt": "2024-06-30T11:24:34.230225",
            "updatedAt": "2024-05-07T17:32:32.501282"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab632.ali632@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab632",
            "lastName": "Ali632",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab632.ali632@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503020478"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 632, Street XYZ"
                }
            ],
            "createdAt": "2025-01-07T20:58:33.865922",
            "updatedAt": "2024-08-02T17:22:08.792869"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan633.sheikh633@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan633",
            "lastName": "Sheikh633",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan633.sheikh633@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507392704"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 633, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T15:40:10.864549",
            "updatedAt": "2025-02-28T06:04:26.421453"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan634.zahid634@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan634",
            "lastName": "Zahid634",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan634.zahid634@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502017045"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 634, Street XYZ"
                }
            ],
            "createdAt": "2024-05-26T04:21:08.353786",
            "updatedAt": "2024-06-13T04:41:09.779481"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah635.zahid635@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah635",
            "lastName": "Zahid635",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah635.zahid635@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503623243"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 635, Street XYZ"
                }
            ],
            "createdAt": "2025-03-30T17:11:40.885065",
            "updatedAt": "2024-06-17T03:33:34.159835"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor636.sheikh636@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor636",
            "lastName": "Sheikh636",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor636.sheikh636@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501474973"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 636, Street XYZ"
                }
            ],
            "createdAt": "2024-10-03T22:33:15.267562",
            "updatedAt": "2024-09-25T13:00:42.485722"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor637.yousuf637@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor637",
            "lastName": "Yousuf637",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor637.yousuf637@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501002536"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 637, Street XYZ"
                }
            ],
            "createdAt": "2024-05-14T09:23:36.507130",
            "updatedAt": "2024-11-08T18:18:53.434131"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john638.yousuf638@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John638",
            "lastName": "Yousuf638",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john638.yousuf638@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508978438"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 638, Street XYZ"
                }
            ],
            "createdAt": "2025-02-01T13:51:03.441573",
            "updatedAt": "2024-09-04T08:32:30.002604"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima639.ali639@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima639",
            "lastName": "Ali639",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima639.ali639@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504962555"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 639, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T19:13:55.176582",
            "updatedAt": "2024-09-16T05:51:07.828597"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan640.rauf640@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan640",
            "lastName": "Rauf640",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan640.rauf640@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501934217"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 640, Street XYZ"
                }
            ],
            "createdAt": "2024-05-23T05:05:25.060284",
            "updatedAt": "2024-09-05T10:51:01.359195"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah641.qureshi641@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah641",
            "lastName": "Qureshi641",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah641.qureshi641@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506350416"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 641, Street XYZ"
                }
            ],
            "createdAt": "2025-02-17T04:16:04.224463",
            "updatedAt": "2024-11-22T18:56:05.745113"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima642.zahid642@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima642",
            "lastName": "Zahid642",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima642.zahid642@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503187417"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 642, Street XYZ"
                }
            ],
            "createdAt": "2024-09-11T23:13:25.039578",
            "updatedAt": "2025-03-13T10:47:00.960252"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah643.zahid643@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah643",
            "lastName": "Zahid643",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah643.zahid643@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506396121"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 643, Street XYZ"
                }
            ],
            "createdAt": "2025-02-07T01:54:11.471804",
            "updatedAt": "2024-11-26T23:10:29.440507"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah644.nawaz644@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah644",
            "lastName": "Nawaz644",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah644.nawaz644@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502221874"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 644, Street XYZ"
                }
            ],
            "createdAt": "2024-11-08T23:11:18.684788",
            "updatedAt": "2024-05-19T20:52:28.254246"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali645.zahid645@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali645",
            "lastName": "Zahid645",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali645.zahid645@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506297782"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 645, Street XYZ"
                }
            ],
            "createdAt": "2025-05-04T12:44:05.044729",
            "updatedAt": "2025-03-17T10:53:15.167328"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali646.doe646@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali646",
            "lastName": "Doe646",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali646.doe646@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509487489"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 646, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T04:03:24.652330",
            "updatedAt": "2024-08-27T08:47:25.126404"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john647.doe647@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John647",
            "lastName": "Doe647",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john647.doe647@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505384578"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 647, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T22:33:10.385482",
            "updatedAt": "2024-08-31T21:03:11.042369"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john648.doe648@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John648",
            "lastName": "Doe648",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john648.doe648@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505916893"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 648, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T02:44:14.655798",
            "updatedAt": "2025-01-20T21:10:36.919621"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan649.zahid649@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan649",
            "lastName": "Zahid649",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan649.zahid649@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504976657"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 649, Street XYZ"
                }
            ],
            "createdAt": "2025-04-17T08:10:29.573762",
            "updatedAt": "2024-10-03T15:26:47.624435"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed650.yousuf650@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed650",
            "lastName": "Yousuf650",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed650.yousuf650@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504638691"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 650, Street XYZ"
                }
            ],
            "createdAt": "2024-10-21T19:51:30.158954",
            "updatedAt": "2024-10-13T02:14:04.849368"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah651.yousuf651@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah651",
            "lastName": "Yousuf651",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah651.yousuf651@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504472303"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 651, Street XYZ"
                }
            ],
            "createdAt": "2025-04-09T05:58:19.287344",
            "updatedAt": "2025-03-29T04:37:40.535704"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab652.sheikh652@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab652",
            "lastName": "Sheikh652",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab652.sheikh652@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502952571"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 652, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T10:49:10.233327",
            "updatedAt": "2025-02-15T07:56:36.155844"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali653.doe653@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali653",
            "lastName": "Doe653",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali653.doe653@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501946729"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 653, Street XYZ"
                }
            ],
            "createdAt": "2025-04-02T17:39:56.799382",
            "updatedAt": "2025-01-23T03:27:15.863143"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab654.nawaz654@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab654",
            "lastName": "Nawaz654",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab654.nawaz654@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505575003"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 654, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T11:53:36.046167",
            "updatedAt": "2024-06-12T10:09:26.836427"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima655.doe655@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima655",
            "lastName": "Doe655",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima655.doe655@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506676278"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 655, Street XYZ"
                }
            ],
            "createdAt": "2025-02-23T22:12:03.426902",
            "updatedAt": "2024-11-12T12:13:37.138980"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john656.zahid656@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John656",
            "lastName": "Zahid656",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john656.zahid656@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503011002"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 656, Street XYZ"
                }
            ],
            "createdAt": "2025-03-20T22:58:27.871034",
            "updatedAt": "2024-11-03T00:06:17.140262"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan657.tariq657@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan657",
            "lastName": "Tariq657",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan657.tariq657@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506808845"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 657, Street XYZ"
                }
            ],
            "createdAt": "2024-07-12T04:14:13.446110",
            "updatedAt": "2025-03-31T04:00:26.175269"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor658.doe658@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor658",
            "lastName": "Doe658",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor658.doe658@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504685813"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 658, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T14:57:51.376898",
            "updatedAt": "2024-08-03T09:30:34.444148"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed659.zahid659@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed659",
            "lastName": "Zahid659",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed659.zahid659@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505409101"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 659, Street XYZ"
                }
            ],
            "createdAt": "2025-03-14T16:36:25.330760",
            "updatedAt": "2024-09-11T06:26:44.622967"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan660.yousuf660@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan660",
            "lastName": "Yousuf660",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan660.yousuf660@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507204206"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 660, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T23:55:15.856210",
            "updatedAt": "2024-11-15T22:22:11.763121"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha661.tariq661@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha661",
            "lastName": "Tariq661",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha661.tariq661@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505175476"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 661, Street XYZ"
                }
            ],
            "createdAt": "2025-03-14T06:16:12.118613",
            "updatedAt": "2025-03-17T04:30:57.215331"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor662.yousuf662@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor662",
            "lastName": "Yousuf662",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor662.yousuf662@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504049117"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 662, Street XYZ"
                }
            ],
            "createdAt": "2024-09-12T14:17:27.083947",
            "updatedAt": "2024-08-26T19:13:53.105249"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab663.sheikh663@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab663",
            "lastName": "Sheikh663",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab663.sheikh663@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502973564"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 663, Street XYZ"
                }
            ],
            "createdAt": "2024-11-10T13:32:38.265023",
            "updatedAt": "2025-02-17T00:43:14.182506"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha664.qureshi664@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha664",
            "lastName": "Qureshi664",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha664.qureshi664@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505674978"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 664, Street XYZ"
                }
            ],
            "createdAt": "2025-02-14T03:59:55.643260",
            "updatedAt": "2024-09-01T14:14:35.235323"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab665.ali665@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab665",
            "lastName": "Ali665",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab665.ali665@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507442228"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 665, Street XYZ"
                }
            ],
            "createdAt": "2024-09-29T01:02:23.379531",
            "updatedAt": "2024-10-20T08:36:47.468587"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed666.nawaz666@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed666",
            "lastName": "Nawaz666",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed666.nawaz666@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507182623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 666, Street XYZ"
                }
            ],
            "createdAt": "2024-07-20T23:22:24.766098",
            "updatedAt": "2024-06-20T04:49:32.096941"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah667.ali667@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah667",
            "lastName": "Ali667",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah667.ali667@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508472623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 667, Street XYZ"
                }
            ],
            "createdAt": "2024-12-22T01:07:10.846699",
            "updatedAt": "2024-11-18T03:44:14.354074"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor668.khan668@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor668",
            "lastName": "Khan668",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor668.khan668@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502488703"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 668, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T13:18:08.441131",
            "updatedAt": "2024-06-07T19:35:02.485153"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed669.nawaz669@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed669",
            "lastName": "Nawaz669",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed669.nawaz669@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506576822"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 669, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T20:33:45.940009",
            "updatedAt": "2024-07-06T22:57:33.430365"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor670.khan670@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor670",
            "lastName": "Khan670",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor670.khan670@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505284635"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 670, Street XYZ"
                }
            ],
            "createdAt": "2025-02-05T23:22:56.214262",
            "updatedAt": "2024-08-16T16:16:28.807238"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed671.ali671@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed671",
            "lastName": "Ali671",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed671.ali671@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504763675"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 671, Street XYZ"
                }
            ],
            "createdAt": "2024-09-05T03:33:35.895716",
            "updatedAt": "2025-01-24T09:19:39.652915"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan672.sheikh672@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan672",
            "lastName": "Sheikh672",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan672.sheikh672@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509626185"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 672, Street XYZ"
                }
            ],
            "createdAt": "2024-08-26T07:52:12.919200",
            "updatedAt": "2024-06-08T17:58:49.973224"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan673.qureshi673@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan673",
            "lastName": "Qureshi673",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan673.qureshi673@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508802187"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 673, Street XYZ"
                }
            ],
            "createdAt": "2024-11-17T17:16:30.800510",
            "updatedAt": "2024-05-13T11:24:12.585670"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john674.yousuf674@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John674",
            "lastName": "Yousuf674",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john674.yousuf674@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503919582"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 674, Street XYZ"
                }
            ],
            "createdAt": "2025-03-04T22:27:10.153572",
            "updatedAt": "2025-02-04T07:54:07.043784"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali675.yousuf675@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali675",
            "lastName": "Yousuf675",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali675.yousuf675@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507378363"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 675, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T00:14:22.020174",
            "updatedAt": "2025-01-17T13:02:15.871691"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha676.zahid676@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha676",
            "lastName": "Zahid676",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha676.zahid676@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505199654"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 676, Street XYZ"
                }
            ],
            "createdAt": "2025-02-01T10:55:17.808830",
            "updatedAt": "2025-01-26T17:32:59.056698"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah677.tariq677@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah677",
            "lastName": "Tariq677",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah677.tariq677@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501167282"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 677, Street XYZ"
                }
            ],
            "createdAt": "2024-07-07T19:59:49.736715",
            "updatedAt": "2025-01-06T17:34:49.249260"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab678.sheikh678@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab678",
            "lastName": "Sheikh678",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab678.sheikh678@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508681030"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 678, Street XYZ"
                }
            ],
            "createdAt": "2025-05-03T00:18:42.576705",
            "updatedAt": "2024-07-11T22:48:38.615923"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima679.nawaz679@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima679",
            "lastName": "Nawaz679",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima679.nawaz679@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507315962"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 679, Street XYZ"
                }
            ],
            "createdAt": "2025-02-21T14:07:28.105590",
            "updatedAt": "2024-12-04T03:04:09.059370"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar680.yousuf680@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar680",
            "lastName": "Yousuf680",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar680.yousuf680@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501508123"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 680, Street XYZ"
                }
            ],
            "createdAt": "2025-04-26T21:17:23.190810",
            "updatedAt": "2025-02-09T20:53:08.020265"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john681.qureshi681@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John681",
            "lastName": "Qureshi681",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john681.qureshi681@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507851510"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 681, Street XYZ"
                }
            ],
            "createdAt": "2024-12-23T04:03:37.222687",
            "updatedAt": "2024-08-24T19:36:30.634802"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed682.zahid682@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed682",
            "lastName": "Zahid682",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed682.zahid682@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501903536"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 682, Street XYZ"
                }
            ],
            "createdAt": "2024-09-10T17:13:39.316647",
            "updatedAt": "2024-05-28T07:27:45.646702"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha683.doe683@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha683",
            "lastName": "Doe683",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha683.doe683@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506068686"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 683, Street XYZ"
                }
            ],
            "createdAt": "2024-06-19T11:27:36.932628",
            "updatedAt": "2024-09-28T02:20:52.029006"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor684.zahid684@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor684",
            "lastName": "Zahid684",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor684.zahid684@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507380449"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 684, Street XYZ"
                }
            ],
            "createdAt": "2024-11-12T13:19:13.265422",
            "updatedAt": "2024-10-28T15:50:42.219057"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha685.qureshi685@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha685",
            "lastName": "Qureshi685",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha685.qureshi685@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507853288"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 685, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T00:34:22.376132",
            "updatedAt": "2024-12-25T05:44:44.927303"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john686.sheikh686@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John686",
            "lastName": "Sheikh686",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john686.sheikh686@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501606622"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 686, Street XYZ"
                }
            ],
            "createdAt": "2024-11-22T00:32:06.033465",
            "updatedAt": "2024-07-17T02:29:49.504447"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab687.zahid687@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab687",
            "lastName": "Zahid687",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab687.zahid687@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507018688"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 687, Street XYZ"
                }
            ],
            "createdAt": "2024-05-17T14:04:44.849311",
            "updatedAt": "2024-09-26T14:51:33.481376"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john688.khan688@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John688",
            "lastName": "Khan688",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john688.khan688@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501455616"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 688, Street XYZ"
                }
            ],
            "createdAt": "2025-02-18T20:37:52.897903",
            "updatedAt": "2025-02-25T16:24:42.767782"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali689.sheikh689@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali689",
            "lastName": "Sheikh689",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali689.sheikh689@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509228904"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 689, Street XYZ"
                }
            ],
            "createdAt": "2024-10-15T22:57:40.734621",
            "updatedAt": "2024-12-19T00:50:49.983328"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed690.nawaz690@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed690",
            "lastName": "Nawaz690",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed690.nawaz690@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505126833"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 690, Street XYZ"
                }
            ],
            "createdAt": "2024-12-27T21:07:56.871308",
            "updatedAt": "2025-02-17T07:47:49.800764"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed691.ali691@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed691",
            "lastName": "Ali691",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed691.ali691@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502232142"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 691, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T18:20:12.813891",
            "updatedAt": "2025-02-22T12:19:34.088438"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john692.zahid692@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John692",
            "lastName": "Zahid692",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john692.zahid692@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508884813"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 692, Street XYZ"
                }
            ],
            "createdAt": "2025-03-22T03:45:09.107268",
            "updatedAt": "2025-04-27T08:20:15.714388"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar693.tariq693@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar693",
            "lastName": "Tariq693",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar693.tariq693@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509804654"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 693, Street XYZ"
                }
            ],
            "createdAt": "2025-03-25T13:25:40.597321",
            "updatedAt": "2024-12-24T15:50:15.571492"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar694.sheikh694@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar694",
            "lastName": "Sheikh694",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar694.sheikh694@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501609306"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 694, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T09:59:52.090888",
            "updatedAt": "2025-03-02T02:30:17.557744"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab695.tariq695@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab695",
            "lastName": "Tariq695",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab695.tariq695@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508600394"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 695, Street XYZ"
                }
            ],
            "createdAt": "2024-08-04T05:36:46.848483",
            "updatedAt": "2025-02-15T13:52:50.500864"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor696.qureshi696@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor696",
            "lastName": "Qureshi696",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor696.qureshi696@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503836389"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 696, Street XYZ"
                }
            ],
            "createdAt": "2024-05-11T12:22:03.542166",
            "updatedAt": "2025-01-26T21:38:29.882859"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar697.yousuf697@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar697",
            "lastName": "Yousuf697",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar697.yousuf697@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509678647"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 697, Street XYZ"
                }
            ],
            "createdAt": "2024-09-08T01:11:39.886743",
            "updatedAt": "2024-08-03T09:27:40.823604"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha698.nawaz698@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha698",
            "lastName": "Nawaz698",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha698.nawaz698@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502799930"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 698, Street XYZ"
                }
            ],
            "createdAt": "2025-03-03T06:15:57.045682",
            "updatedAt": "2025-01-22T13:19:51.933422"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor699.khan699@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor699",
            "lastName": "Khan699",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor699.khan699@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504652085"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 699, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T09:12:20.772070",
            "updatedAt": "2025-02-27T15:07:53.099048"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar700.zahid700@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar700",
            "lastName": "Zahid700",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar700.zahid700@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502646349"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 700, Street XYZ"
                }
            ],
            "createdAt": "2024-06-11T01:12:58.396575",
            "updatedAt": "2024-07-02T14:52:39.158007"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha701.sheikh701@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha701",
            "lastName": "Sheikh701",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha701.sheikh701@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507524414"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 701, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T22:25:24.356747",
            "updatedAt": "2024-11-23T07:11:58.563480"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john702.zahid702@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John702",
            "lastName": "Zahid702",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john702.zahid702@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501536518"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 702, Street XYZ"
                }
            ],
            "createdAt": "2024-08-12T01:36:22.528441",
            "updatedAt": "2024-09-11T16:53:04.957797"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah703.yousuf703@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah703",
            "lastName": "Yousuf703",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah703.yousuf703@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504846108"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 703, Street XYZ"
                }
            ],
            "createdAt": "2024-08-05T11:04:43.515105",
            "updatedAt": "2024-06-03T23:13:02.309817"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima704.qureshi704@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima704",
            "lastName": "Qureshi704",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima704.qureshi704@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507044547"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 704, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T07:13:55.436796",
            "updatedAt": "2025-04-07T15:47:46.756429"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed705.ali705@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed705",
            "lastName": "Ali705",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed705.ali705@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502809275"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 705, Street XYZ"
                }
            ],
            "createdAt": "2024-11-07T09:37:08.741805",
            "updatedAt": "2025-02-19T04:07:07.249184"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john706.sheikh706@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John706",
            "lastName": "Sheikh706",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john706.sheikh706@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503618601"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 706, Street XYZ"
                }
            ],
            "createdAt": "2025-01-31T23:00:18.052245",
            "updatedAt": "2024-11-03T15:52:32.971211"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar707.rauf707@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar707",
            "lastName": "Rauf707",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar707.rauf707@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502224270"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 707, Street XYZ"
                }
            ],
            "createdAt": "2025-03-10T16:59:49.063227",
            "updatedAt": "2024-08-01T16:29:43.333049"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor708.rauf708@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor708",
            "lastName": "Rauf708",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor708.rauf708@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507972711"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 708, Street XYZ"
                }
            ],
            "createdAt": "2024-10-20T02:03:43.379115",
            "updatedAt": "2024-07-23T14:56:36.164264"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan709.doe709@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan709",
            "lastName": "Doe709",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan709.doe709@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504889210"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 709, Street XYZ"
                }
            ],
            "createdAt": "2024-12-20T07:19:55.925625",
            "updatedAt": "2024-10-09T12:32:49.264577"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah710.tariq710@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah710",
            "lastName": "Tariq710",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah710.tariq710@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508134569"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 710, Street XYZ"
                }
            ],
            "createdAt": "2024-08-07T19:13:38.578447",
            "updatedAt": "2024-10-18T23:03:49.619016"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab711.sheikh711@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab711",
            "lastName": "Sheikh711",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab711.sheikh711@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507394871"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 711, Street XYZ"
                }
            ],
            "createdAt": "2025-04-06T21:36:49.398544",
            "updatedAt": "2024-05-14T13:59:38.593304"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali712.yousuf712@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali712",
            "lastName": "Yousuf712",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali712.yousuf712@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501468867"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 712, Street XYZ"
                }
            ],
            "createdAt": "2025-04-30T02:15:46.698859",
            "updatedAt": "2025-03-18T03:38:03.927830"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed713.zahid713@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed713",
            "lastName": "Zahid713",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed713.zahid713@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507149477"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 713, Street XYZ"
                }
            ],
            "createdAt": "2024-10-01T02:45:41.475340",
            "updatedAt": "2025-02-04T02:20:33.476590"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed714.nawaz714@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed714",
            "lastName": "Nawaz714",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed714.nawaz714@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506389030"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 714, Street XYZ"
                }
            ],
            "createdAt": "2024-11-01T04:38:10.118054",
            "updatedAt": "2025-02-25T11:05:46.242561"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john715.rauf715@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John715",
            "lastName": "Rauf715",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john715.rauf715@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505509108"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 715, Street XYZ"
                }
            ],
            "createdAt": "2025-05-05T13:27:56.046330",
            "updatedAt": "2024-12-02T09:51:57.331787"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed716.khan716@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed716",
            "lastName": "Khan716",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed716.khan716@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506861581"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 716, Street XYZ"
                }
            ],
            "createdAt": "2024-12-27T15:54:48.903683",
            "updatedAt": "2024-09-30T20:17:48.920173"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan717.rauf717@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan717",
            "lastName": "Rauf717",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan717.rauf717@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502097292"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 717, Street XYZ"
                }
            ],
            "createdAt": "2024-08-15T02:50:39.709522",
            "updatedAt": "2025-02-14T16:41:33.430205"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar718.yousuf718@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar718",
            "lastName": "Yousuf718",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar718.yousuf718@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503672883"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 718, Street XYZ"
                }
            ],
            "createdAt": "2025-02-21T04:06:43.698166",
            "updatedAt": "2024-10-08T00:50:38.966437"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab719.yousuf719@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab719",
            "lastName": "Yousuf719",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab719.yousuf719@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504858417"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 719, Street XYZ"
                }
            ],
            "createdAt": "2025-04-03T11:16:29.300163",
            "updatedAt": "2024-11-04T03:13:07.143188"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed720.sheikh720@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed720",
            "lastName": "Sheikh720",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed720.sheikh720@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509858234"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 720, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T15:17:22.797755",
            "updatedAt": "2025-04-18T19:27:40.229189"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed721.nawaz721@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed721",
            "lastName": "Nawaz721",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed721.nawaz721@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502333307"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 721, Street XYZ"
                }
            ],
            "createdAt": "2024-07-23T09:03:00.088883",
            "updatedAt": "2025-03-07T03:42:22.940127"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar722.zahid722@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar722",
            "lastName": "Zahid722",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar722.zahid722@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502023435"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 722, Street XYZ"
                }
            ],
            "createdAt": "2024-08-04T11:51:52.395184",
            "updatedAt": "2024-05-31T20:28:55.124968"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali723.sheikh723@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali723",
            "lastName": "Sheikh723",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali723.sheikh723@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501882968"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 723, Street XYZ"
                }
            ],
            "createdAt": "2024-08-29T15:10:15.449446",
            "updatedAt": "2024-08-14T03:25:41.348729"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab724.zahid724@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab724",
            "lastName": "Zahid724",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab724.zahid724@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509695939"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 724, Street XYZ"
                }
            ],
            "createdAt": "2024-12-25T22:40:48.997001",
            "updatedAt": "2024-11-06T18:26:26.419137"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john725.doe725@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John725",
            "lastName": "Doe725",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john725.doe725@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507243044"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 725, Street XYZ"
                }
            ],
            "createdAt": "2024-08-16T15:13:21.011817",
            "updatedAt": "2024-11-08T21:41:43.899799"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab726.qureshi726@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab726",
            "lastName": "Qureshi726",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab726.qureshi726@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503020815"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 726, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T09:21:12.115554",
            "updatedAt": "2025-02-08T08:50:05.911861"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor727.tariq727@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor727",
            "lastName": "Tariq727",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor727.tariq727@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501109226"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 727, Street XYZ"
                }
            ],
            "createdAt": "2024-11-03T06:42:42.476084",
            "updatedAt": "2025-02-13T07:46:42.205404"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima728.ali728@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima728",
            "lastName": "Ali728",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima728.ali728@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505951371"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 728, Street XYZ"
                }
            ],
            "createdAt": "2024-07-09T18:29:33.536772",
            "updatedAt": "2024-08-29T19:29:13.665371"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john729.nawaz729@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John729",
            "lastName": "Nawaz729",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john729.nawaz729@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501139049"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 729, Street XYZ"
                }
            ],
            "createdAt": "2024-08-24T05:59:24.133160",
            "updatedAt": "2024-12-06T08:16:45.731394"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab730.sheikh730@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab730",
            "lastName": "Sheikh730",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab730.sheikh730@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509965623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 730, Street XYZ"
                }
            ],
            "createdAt": "2025-01-06T09:21:51.940095",
            "updatedAt": "2024-10-07T01:51:01.844609"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan731.qureshi731@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan731",
            "lastName": "Qureshi731",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan731.qureshi731@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509547333"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 731, Street XYZ"
                }
            ],
            "createdAt": "2024-12-21T18:25:29.446756",
            "updatedAt": "2024-10-23T19:59:58.576172"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima732.tariq732@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima732",
            "lastName": "Tariq732",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima732.tariq732@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506343468"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 732, Street XYZ"
                }
            ],
            "createdAt": "2024-09-20T12:37:22.272196",
            "updatedAt": "2025-04-19T20:43:56.173942"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john733.nawaz733@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John733",
            "lastName": "Nawaz733",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john733.nawaz733@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507094347"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 733, Street XYZ"
                }
            ],
            "createdAt": "2024-12-18T08:37:09.294491",
            "updatedAt": "2024-11-13T19:03:26.808510"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab734.doe734@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab734",
            "lastName": "Doe734",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab734.doe734@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509906817"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 734, Street XYZ"
                }
            ],
            "createdAt": "2024-05-08T10:07:18.022664",
            "updatedAt": "2024-10-26T22:50:02.897516"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab735.rauf735@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab735",
            "lastName": "Rauf735",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab735.rauf735@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505385749"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 735, Street XYZ"
                }
            ],
            "createdAt": "2024-06-09T07:38:21.024645",
            "updatedAt": "2025-03-27T05:47:10.475498"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab736.qureshi736@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab736",
            "lastName": "Qureshi736",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab736.qureshi736@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502383206"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 736, Street XYZ"
                }
            ],
            "createdAt": "2024-06-04T04:46:39.959072",
            "updatedAt": "2025-03-13T08:23:55.103075"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed737.sheikh737@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed737",
            "lastName": "Sheikh737",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed737.sheikh737@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505328857"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 737, Street XYZ"
                }
            ],
            "createdAt": "2024-08-14T08:17:04.189089",
            "updatedAt": "2024-09-13T23:51:29.630183"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima738.qureshi738@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima738",
            "lastName": "Qureshi738",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima738.qureshi738@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506470069"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 738, Street XYZ"
                }
            ],
            "createdAt": "2024-10-05T18:12:24.389990",
            "updatedAt": "2024-10-02T02:42:53.168095"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar739.khan739@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar739",
            "lastName": "Khan739",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar739.khan739@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503756567"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 739, Street XYZ"
                }
            ],
            "createdAt": "2024-12-27T22:45:18.664011",
            "updatedAt": "2024-06-20T00:39:00.604163"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed740.sheikh740@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed740",
            "lastName": "Sheikh740",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed740.sheikh740@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503446988"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 740, Street XYZ"
                }
            ],
            "createdAt": "2024-10-08T10:24:25.515314",
            "updatedAt": "2024-09-26T16:35:22.624809"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed741.qureshi741@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed741",
            "lastName": "Qureshi741",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed741.qureshi741@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505588492"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 741, Street XYZ"
                }
            ],
            "createdAt": "2025-02-24T19:35:53.518621",
            "updatedAt": "2024-07-25T10:04:29.943877"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar742.qureshi742@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar742",
            "lastName": "Qureshi742",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar742.qureshi742@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501821700"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 742, Street XYZ"
                }
            ],
            "createdAt": "2024-06-11T02:58:24.466515",
            "updatedAt": "2024-06-04T15:28:22.933420"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima743.khan743@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima743",
            "lastName": "Khan743",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima743.khan743@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507928780"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 743, Street XYZ"
                }
            ],
            "createdAt": "2025-03-05T11:55:53.286236",
            "updatedAt": "2024-05-26T02:18:05.514714"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor744.yousuf744@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor744",
            "lastName": "Yousuf744",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor744.yousuf744@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509903742"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 744, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T12:30:23.449455",
            "updatedAt": "2024-12-24T20:17:56.702994"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima745.rauf745@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima745",
            "lastName": "Rauf745",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima745.rauf745@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501146385"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 745, Street XYZ"
                }
            ],
            "createdAt": "2025-01-08T19:31:35.335704",
            "updatedAt": "2024-10-14T08:20:05.391911"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed746.sheikh746@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed746",
            "lastName": "Sheikh746",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed746.sheikh746@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507945007"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 746, Street XYZ"
                }
            ],
            "createdAt": "2025-01-05T04:34:52.955019",
            "updatedAt": "2024-07-07T18:47:47.719766"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha747.ali747@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha747",
            "lastName": "Ali747",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha747.ali747@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502513310"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 747, Street XYZ"
                }
            ],
            "createdAt": "2024-06-17T21:42:42.993801",
            "updatedAt": "2024-06-10T02:49:25.024163"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john748.zahid748@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John748",
            "lastName": "Zahid748",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john748.zahid748@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501259832"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 748, Street XYZ"
                }
            ],
            "createdAt": "2025-03-16T00:58:10.486708",
            "updatedAt": "2025-05-01T11:26:46.257898"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah749.khan749@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah749",
            "lastName": "Khan749",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah749.khan749@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506332777"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 749, Street XYZ"
                }
            ],
            "createdAt": "2025-01-17T09:39:58.651413",
            "updatedAt": "2025-04-26T05:53:27.108981"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali750.sheikh750@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali750",
            "lastName": "Sheikh750",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali750.sheikh750@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506232689"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 750, Street XYZ"
                }
            ],
            "createdAt": "2024-09-10T16:39:11.687819",
            "updatedAt": "2024-11-22T08:39:02.443086"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab751.khan751@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab751",
            "lastName": "Khan751",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab751.khan751@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505399289"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 751, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T22:40:16.320883",
            "updatedAt": "2025-03-13T14:03:38.976942"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan752.zahid752@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan752",
            "lastName": "Zahid752",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan752.zahid752@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506400610"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 752, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T07:43:54.598578",
            "updatedAt": "2025-03-06T23:10:24.914568"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed753.tariq753@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed753",
            "lastName": "Tariq753",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed753.tariq753@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501803334"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 753, Street XYZ"
                }
            ],
            "createdAt": "2025-02-09T00:32:23.991083",
            "updatedAt": "2024-06-19T07:10:57.698730"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan754.yousuf754@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan754",
            "lastName": "Yousuf754",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan754.yousuf754@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501246536"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 754, Street XYZ"
                }
            ],
            "createdAt": "2024-06-16T07:47:05.705509",
            "updatedAt": "2024-09-09T19:15:33.947753"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab755.zahid755@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab755",
            "lastName": "Zahid755",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab755.zahid755@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507287582"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 755, Street XYZ"
                }
            ],
            "createdAt": "2024-05-22T23:11:04.461136",
            "updatedAt": "2025-03-07T12:13:14.343564"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed756.yousuf756@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed756",
            "lastName": "Yousuf756",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed756.yousuf756@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508873765"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 756, Street XYZ"
                }
            ],
            "createdAt": "2024-10-21T03:19:21.791201",
            "updatedAt": "2024-09-25T23:45:24.711219"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali757.doe757@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali757",
            "lastName": "Doe757",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali757.doe757@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505766771"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 757, Street XYZ"
                }
            ],
            "createdAt": "2024-07-20T14:25:17.408020",
            "updatedAt": "2025-03-10T13:19:49.478921"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor758.yousuf758@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor758",
            "lastName": "Yousuf758",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor758.yousuf758@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501281797"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 758, Street XYZ"
                }
            ],
            "createdAt": "2024-07-12T06:22:20.092995",
            "updatedAt": "2024-07-11T12:00:49.848210"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar759.khan759@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar759",
            "lastName": "Khan759",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar759.khan759@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503437799"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 759, Street XYZ"
                }
            ],
            "createdAt": "2024-10-26T13:30:26.478844",
            "updatedAt": "2025-02-07T11:32:26.075011"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed760.yousuf760@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed760",
            "lastName": "Yousuf760",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed760.yousuf760@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507076923"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 760, Street XYZ"
                }
            ],
            "createdAt": "2024-06-18T18:27:46.527539",
            "updatedAt": "2024-12-09T13:21:56.297302"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah761.doe761@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah761",
            "lastName": "Doe761",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah761.doe761@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501631915"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 761, Street XYZ"
                }
            ],
            "createdAt": "2025-01-12T06:54:52.676497",
            "updatedAt": "2025-02-13T11:33:29.250981"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali762.zahid762@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali762",
            "lastName": "Zahid762",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali762.zahid762@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504261355"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 762, Street XYZ"
                }
            ],
            "createdAt": "2024-12-10T23:24:01.595035",
            "updatedAt": "2024-10-09T17:54:51.139114"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john763.ali763@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John763",
            "lastName": "Ali763",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john763.ali763@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504723911"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 763, Street XYZ"
                }
            ],
            "createdAt": "2025-02-19T15:48:07.941931",
            "updatedAt": "2025-01-26T13:12:07.486846"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john764.khan764@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John764",
            "lastName": "Khan764",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john764.khan764@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502845981"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 764, Street XYZ"
                }
            ],
            "createdAt": "2025-03-14T13:28:05.400659",
            "updatedAt": "2025-01-20T20:19:27.957963"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima765.nawaz765@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima765",
            "lastName": "Nawaz765",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima765.nawaz765@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508390577"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 765, Street XYZ"
                }
            ],
            "createdAt": "2024-06-18T19:18:39.993550",
            "updatedAt": "2024-12-13T11:30:21.662556"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed766.yousuf766@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed766",
            "lastName": "Yousuf766",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed766.yousuf766@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503647728"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 766, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T18:13:39.217503",
            "updatedAt": "2024-07-18T00:44:35.086119"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar767.rauf767@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar767",
            "lastName": "Rauf767",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar767.rauf767@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509542332"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 767, Street XYZ"
                }
            ],
            "createdAt": "2025-03-28T04:28:06.655406",
            "updatedAt": "2025-03-10T09:04:53.204119"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima768.doe768@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima768",
            "lastName": "Doe768",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima768.doe768@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508937258"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 768, Street XYZ"
                }
            ],
            "createdAt": "2024-12-28T13:17:19.224123",
            "updatedAt": "2025-02-13T11:29:23.487490"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima769.rauf769@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima769",
            "lastName": "Rauf769",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima769.rauf769@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509666599"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 769, Street XYZ"
                }
            ],
            "createdAt": "2025-03-26T07:25:47.263406",
            "updatedAt": "2024-12-23T06:52:03.402528"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali770.sheikh770@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali770",
            "lastName": "Sheikh770",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali770.sheikh770@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505287884"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 770, Street XYZ"
                }
            ],
            "createdAt": "2024-09-21T04:59:21.738750",
            "updatedAt": "2025-04-13T21:27:59.613552"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah771.zahid771@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah771",
            "lastName": "Zahid771",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah771.zahid771@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504367065"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 771, Street XYZ"
                }
            ],
            "createdAt": "2024-08-09T04:33:52.537610",
            "updatedAt": "2024-07-04T05:41:26.250135"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar772.yousuf772@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar772",
            "lastName": "Yousuf772",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar772.yousuf772@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502327548"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 772, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T17:07:45.432180",
            "updatedAt": "2024-05-22T08:54:40.457041"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali773.yousuf773@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali773",
            "lastName": "Yousuf773",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali773.yousuf773@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504745214"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 773, Street XYZ"
                }
            ],
            "createdAt": "2025-02-06T09:28:10.907729",
            "updatedAt": "2024-11-09T18:02:45.363698"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab774.ali774@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab774",
            "lastName": "Ali774",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab774.ali774@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509369733"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 774, Street XYZ"
                }
            ],
            "createdAt": "2024-06-28T06:09:51.414051",
            "updatedAt": "2025-04-29T12:18:05.646639"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed775.khan775@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed775",
            "lastName": "Khan775",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed775.khan775@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506377437"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 775, Street XYZ"
                }
            ],
            "createdAt": "2025-02-10T14:44:55.820696",
            "updatedAt": "2025-03-13T23:12:17.788292"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed776.ali776@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed776",
            "lastName": "Ali776",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed776.ali776@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503381054"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 776, Street XYZ"
                }
            ],
            "createdAt": "2024-11-27T12:56:33.708590",
            "updatedAt": "2025-04-10T10:41:39.856857"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha777.zahid777@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha777",
            "lastName": "Zahid777",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha777.zahid777@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507713706"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 777, Street XYZ"
                }
            ],
            "createdAt": "2024-07-23T11:47:49.228712",
            "updatedAt": "2024-12-14T22:52:11.052207"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar778.sheikh778@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar778",
            "lastName": "Sheikh778",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar778.sheikh778@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502836608"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 778, Street XYZ"
                }
            ],
            "createdAt": "2025-04-02T15:30:59.736139",
            "updatedAt": "2024-10-25T02:24:58.180924"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab779.khan779@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab779",
            "lastName": "Khan779",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab779.khan779@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509124523"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 779, Street XYZ"
                }
            ],
            "createdAt": "2024-10-27T12:23:01.259999",
            "updatedAt": "2025-04-04T03:24:51.949207"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john780.doe780@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John780",
            "lastName": "Doe780",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john780.doe780@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506498778"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 780, Street XYZ"
                }
            ],
            "createdAt": "2025-04-01T22:35:03.312591",
            "updatedAt": "2025-04-18T17:50:08.098772"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha781.qureshi781@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha781",
            "lastName": "Qureshi781",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha781.qureshi781@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505316902"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 781, Street XYZ"
                }
            ],
            "createdAt": "2024-05-24T23:14:16.905710",
            "updatedAt": "2025-03-12T07:51:02.199055"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan782.nawaz782@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan782",
            "lastName": "Nawaz782",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan782.nawaz782@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509133806"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 782, Street XYZ"
                }
            ],
            "createdAt": "2025-01-20T02:33:17.540422",
            "updatedAt": "2024-07-24T05:17:56.237491"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor783.doe783@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor783",
            "lastName": "Doe783",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor783.doe783@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502756995"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 783, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T12:26:55.745894",
            "updatedAt": "2024-05-21T03:41:33.090052"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah784.doe784@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah784",
            "lastName": "Doe784",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah784.doe784@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508141223"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 784, Street XYZ"
                }
            ],
            "createdAt": "2024-08-10T07:12:22.047778",
            "updatedAt": "2024-06-10T11:10:01.290573"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar785.qureshi785@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar785",
            "lastName": "Qureshi785",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar785.qureshi785@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502064673"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 785, Street XYZ"
                }
            ],
            "createdAt": "2024-05-26T03:45:09.450222",
            "updatedAt": "2024-11-27T17:01:18.673036"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima786.zahid786@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima786",
            "lastName": "Zahid786",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima786.zahid786@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504069348"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 786, Street XYZ"
                }
            ],
            "createdAt": "2024-08-24T10:32:37.601329",
            "updatedAt": "2024-09-23T07:19:00.992822"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan787.zahid787@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan787",
            "lastName": "Zahid787",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan787.zahid787@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502519913"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 787, Street XYZ"
                }
            ],
            "createdAt": "2024-12-16T16:50:37.109034",
            "updatedAt": "2024-12-24T02:31:45.609726"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah788.tariq788@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah788",
            "lastName": "Tariq788",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah788.tariq788@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508763126"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 788, Street XYZ"
                }
            ],
            "createdAt": "2024-09-15T15:41:06.556449",
            "updatedAt": "2024-06-30T03:08:40.746221"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab789.zahid789@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab789",
            "lastName": "Zahid789",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab789.zahid789@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506832544"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 789, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T10:41:21.580505",
            "updatedAt": "2025-04-11T09:40:25.747954"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima790.khan790@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima790",
            "lastName": "Khan790",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima790.khan790@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509473549"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 790, Street XYZ"
                }
            ],
            "createdAt": "2025-03-08T12:39:57.386882",
            "updatedAt": "2024-12-23T03:00:22.318613"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar791.qureshi791@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar791",
            "lastName": "Qureshi791",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar791.qureshi791@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507796618"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 791, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T06:51:46.677346",
            "updatedAt": "2024-09-21T22:36:37.335251"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed792.tariq792@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed792",
            "lastName": "Tariq792",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed792.tariq792@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508076750"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 792, Street XYZ"
                }
            ],
            "createdAt": "2024-12-15T06:57:00.830634",
            "updatedAt": "2024-07-27T23:17:01.203844"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali793.tariq793@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali793",
            "lastName": "Tariq793",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali793.tariq793@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506400542"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 793, Street XYZ"
                }
            ],
            "createdAt": "2024-09-25T16:58:03.741981",
            "updatedAt": "2025-04-04T14:09:19.876633"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima794.ali794@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima794",
            "lastName": "Ali794",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima794.ali794@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509331003"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 794, Street XYZ"
                }
            ],
            "createdAt": "2025-02-05T22:41:03.819539",
            "updatedAt": "2025-04-16T08:47:16.136872"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab795.sheikh795@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab795",
            "lastName": "Sheikh795",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab795.sheikh795@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507110396"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 795, Street XYZ"
                }
            ],
            "createdAt": "2024-09-13T14:37:09.565563",
            "updatedAt": "2024-07-29T23:16:20.823337"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima796.qureshi796@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima796",
            "lastName": "Qureshi796",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima796.qureshi796@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505849344"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 796, Street XYZ"
                }
            ],
            "createdAt": "2024-10-30T04:01:52.863859",
            "updatedAt": "2025-01-03T05:48:19.957800"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali797.sheikh797@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali797",
            "lastName": "Sheikh797",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali797.sheikh797@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505325630"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 797, Street XYZ"
                }
            ],
            "createdAt": "2024-10-12T21:02:41.486910",
            "updatedAt": "2024-12-09T07:20:25.036321"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha798.rauf798@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha798",
            "lastName": "Rauf798",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha798.rauf798@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504604764"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 798, Street XYZ"
                }
            ],
            "createdAt": "2024-10-10T15:03:37.321746",
            "updatedAt": "2025-01-12T02:43:33.037400"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john799.nawaz799@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John799",
            "lastName": "Nawaz799",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john799.nawaz799@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503444266"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 799, Street XYZ"
                }
            ],
            "createdAt": "2025-02-25T00:30:19.601731",
            "updatedAt": "2024-12-25T04:45:51.147237"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha800.doe800@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha800",
            "lastName": "Doe800",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha800.doe800@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503983565"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 800, Street XYZ"
                }
            ],
            "createdAt": "2024-05-28T19:46:50.471918",
            "updatedAt": "2025-03-16T08:29:07.658949"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali801.nawaz801@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali801",
            "lastName": "Nawaz801",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali801.nawaz801@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502995092"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 801, Street XYZ"
                }
            ],
            "createdAt": "2024-08-18T13:25:54.064006",
            "updatedAt": "2025-04-04T08:41:09.388985"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar802.yousuf802@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar802",
            "lastName": "Yousuf802",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar802.yousuf802@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501438184"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 802, Street XYZ"
                }
            ],
            "createdAt": "2024-07-25T21:53:18.986564",
            "updatedAt": "2024-09-09T22:18:15.988054"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha803.doe803@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha803",
            "lastName": "Doe803",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha803.doe803@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502445008"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 803, Street XYZ"
                }
            ],
            "createdAt": "2024-11-04T20:42:49.207075",
            "updatedAt": "2024-09-04T18:30:30.234352"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor804.khan804@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor804",
            "lastName": "Khan804",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor804.khan804@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503721032"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 804, Street XYZ"
                }
            ],
            "createdAt": "2025-01-15T11:32:01.352662",
            "updatedAt": "2025-01-14T20:50:47.016105"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan805.qureshi805@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan805",
            "lastName": "Qureshi805",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan805.qureshi805@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509911178"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 805, Street XYZ"
                }
            ],
            "createdAt": "2024-09-02T13:22:47.000540",
            "updatedAt": "2025-02-13T14:29:15.171844"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar806.zahid806@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar806",
            "lastName": "Zahid806",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar806.zahid806@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506359254"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 806, Street XYZ"
                }
            ],
            "createdAt": "2024-06-24T18:14:08.042773",
            "updatedAt": "2024-08-02T06:40:47.747524"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan807.tariq807@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan807",
            "lastName": "Tariq807",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan807.tariq807@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508833193"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 807, Street XYZ"
                }
            ],
            "createdAt": "2024-07-28T19:21:32.838666",
            "updatedAt": "2024-05-28T22:54:27.526026"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed808.rauf808@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed808",
            "lastName": "Rauf808",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed808.rauf808@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509979122"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 808, Street XYZ"
                }
            ],
            "createdAt": "2025-01-30T17:32:37.520854",
            "updatedAt": "2024-07-23T07:51:20.448691"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed809.doe809@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed809",
            "lastName": "Doe809",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed809.doe809@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502053071"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 809, Street XYZ"
                }
            ],
            "createdAt": "2025-01-12T11:27:19.408332",
            "updatedAt": "2024-06-08T11:07:56.293602"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan810.khan810@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan810",
            "lastName": "Khan810",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan810.khan810@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504821951"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 810, Street XYZ"
                }
            ],
            "createdAt": "2024-07-07T02:01:17.141316",
            "updatedAt": "2024-06-09T22:38:04.170117"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha811.zahid811@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha811",
            "lastName": "Zahid811",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha811.zahid811@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508693576"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 811, Street XYZ"
                }
            ],
            "createdAt": "2024-12-19T10:09:50.519286",
            "updatedAt": "2024-08-01T19:54:44.291658"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan812.doe812@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan812",
            "lastName": "Doe812",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan812.doe812@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501269902"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 812, Street XYZ"
                }
            ],
            "createdAt": "2025-03-08T23:29:59.549986",
            "updatedAt": "2025-03-07T05:44:27.382690"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab813.sheikh813@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab813",
            "lastName": "Sheikh813",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab813.sheikh813@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504149995"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 813, Street XYZ"
                }
            ],
            "createdAt": "2025-01-13T23:46:09.366943",
            "updatedAt": "2024-06-14T14:21:16.480869"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali814.zahid814@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali814",
            "lastName": "Zahid814",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali814.zahid814@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508147615"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 814, Street XYZ"
                }
            ],
            "createdAt": "2024-11-06T13:00:18.601062",
            "updatedAt": "2025-01-26T23:12:20.459676"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali815.rauf815@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali815",
            "lastName": "Rauf815",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali815.rauf815@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504350824"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 815, Street XYZ"
                }
            ],
            "createdAt": "2024-09-09T19:34:21.365836",
            "updatedAt": "2025-03-18T06:12:55.079584"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah816.sheikh816@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah816",
            "lastName": "Sheikh816",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah816.sheikh816@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503587940"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 816, Street XYZ"
                }
            ],
            "createdAt": "2024-10-21T08:37:08.064136",
            "updatedAt": "2025-01-30T13:54:45.270780"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan817.qureshi817@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan817",
            "lastName": "Qureshi817",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan817.qureshi817@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506001759"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 817, Street XYZ"
                }
            ],
            "createdAt": "2024-10-08T14:07:05.080566",
            "updatedAt": "2024-10-22T11:55:09.063403"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah818.tariq818@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah818",
            "lastName": "Tariq818",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah818.tariq818@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506221722"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 818, Street XYZ"
                }
            ],
            "createdAt": "2025-03-06T07:26:49.485293",
            "updatedAt": "2024-09-21T19:47:53.899450"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima819.qureshi819@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima819",
            "lastName": "Qureshi819",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima819.qureshi819@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506249160"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 819, Street XYZ"
                }
            ],
            "createdAt": "2024-07-05T13:07:16.316132",
            "updatedAt": "2024-06-24T20:11:21.316125"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab820.qureshi820@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab820",
            "lastName": "Qureshi820",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab820.qureshi820@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503334752"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 820, Street XYZ"
                }
            ],
            "createdAt": "2024-12-12T06:45:03.497741",
            "updatedAt": "2025-01-31T20:43:46.048238"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha821.ali821@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha821",
            "lastName": "Ali821",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha821.ali821@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506958005"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 821, Street XYZ"
                }
            ],
            "createdAt": "2024-07-16T17:38:45.580593",
            "updatedAt": "2025-04-11T19:09:54.998426"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar822.sheikh822@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar822",
            "lastName": "Sheikh822",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar822.sheikh822@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509963885"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 822, Street XYZ"
                }
            ],
            "createdAt": "2025-04-13T12:11:38.704409",
            "updatedAt": "2024-06-26T21:29:39.464574"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima823.zahid823@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima823",
            "lastName": "Zahid823",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima823.zahid823@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502827429"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 823, Street XYZ"
                }
            ],
            "createdAt": "2024-12-26T08:40:20.959496",
            "updatedAt": "2024-06-09T00:26:51.571042"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john824.yousuf824@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John824",
            "lastName": "Yousuf824",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john824.yousuf824@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509570884"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 824, Street XYZ"
                }
            ],
            "createdAt": "2025-03-17T04:13:45.586599",
            "updatedAt": "2024-09-06T16:05:39.406084"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali825.zahid825@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali825",
            "lastName": "Zahid825",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali825.zahid825@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509327909"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 825, Street XYZ"
                }
            ],
            "createdAt": "2024-08-19T11:59:50.518103",
            "updatedAt": "2025-03-30T18:10:45.511038"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima826.rauf826@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima826",
            "lastName": "Rauf826",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima826.rauf826@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503061549"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 826, Street XYZ"
                }
            ],
            "createdAt": "2024-07-13T00:51:17.024713",
            "updatedAt": "2024-12-12T03:36:04.238069"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali827.khan827@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali827",
            "lastName": "Khan827",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali827.khan827@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501427249"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 827, Street XYZ"
                }
            ],
            "createdAt": "2025-03-08T23:13:31.513350",
            "updatedAt": "2024-10-08T09:33:21.303879"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha828.ali828@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha828",
            "lastName": "Ali828",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha828.ali828@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503556017"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 828, Street XYZ"
                }
            ],
            "createdAt": "2024-09-05T07:57:11.282777",
            "updatedAt": "2024-11-10T00:34:32.681948"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar829.tariq829@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar829",
            "lastName": "Tariq829",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar829.tariq829@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505244756"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 829, Street XYZ"
                }
            ],
            "createdAt": "2025-03-29T16:03:37.561044",
            "updatedAt": "2024-07-12T02:51:08.695120"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima830.ali830@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima830",
            "lastName": "Ali830",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima830.ali830@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506382445"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 830, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T01:44:04.552297",
            "updatedAt": "2024-09-28T17:59:24.968340"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha831.sheikh831@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha831",
            "lastName": "Sheikh831",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha831.sheikh831@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507217037"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 831, Street XYZ"
                }
            ],
            "createdAt": "2025-01-11T08:21:05.101498",
            "updatedAt": "2024-10-08T11:36:23.718113"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima832.rauf832@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima832",
            "lastName": "Rauf832",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima832.rauf832@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506484558"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 832, Street XYZ"
                }
            ],
            "createdAt": "2024-07-22T18:23:20.687433",
            "updatedAt": "2025-02-03T07:15:50.152462"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali833.khan833@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali833",
            "lastName": "Khan833",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali833.khan833@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502508913"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 833, Street XYZ"
                }
            ],
            "createdAt": "2025-01-16T11:18:07.821187",
            "updatedAt": "2024-05-18T20:29:48.722267"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali834.ali834@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali834",
            "lastName": "Ali834",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali834.ali834@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502172442"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 834, Street XYZ"
                }
            ],
            "createdAt": "2025-04-16T12:55:49.195973",
            "updatedAt": "2024-11-07T21:27:11.048403"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab835.tariq835@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab835",
            "lastName": "Tariq835",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab835.tariq835@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509393420"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 835, Street XYZ"
                }
            ],
            "createdAt": "2024-08-19T12:46:34.142105",
            "updatedAt": "2024-09-15T06:06:38.653880"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima836.yousuf836@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima836",
            "lastName": "Yousuf836",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima836.yousuf836@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504678913"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 836, Street XYZ"
                }
            ],
            "createdAt": "2025-01-11T12:16:56.283554",
            "updatedAt": "2024-06-19T05:43:21.948588"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar837.khan837@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar837",
            "lastName": "Khan837",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar837.khan837@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508919238"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 837, Street XYZ"
                }
            ],
            "createdAt": "2024-09-29T21:07:29.976578",
            "updatedAt": "2024-11-26T18:30:19.840056"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah838.nawaz838@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah838",
            "lastName": "Nawaz838",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah838.nawaz838@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504282012"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 838, Street XYZ"
                }
            ],
            "createdAt": "2024-12-08T19:12:13.094318",
            "updatedAt": "2024-10-04T12:08:58.413228"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john839.doe839@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John839",
            "lastName": "Doe839",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john839.doe839@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507823732"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 839, Street XYZ"
                }
            ],
            "createdAt": "2024-08-27T05:23:02.916735",
            "updatedAt": "2024-12-03T07:47:41.760857"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan840.rauf840@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan840",
            "lastName": "Rauf840",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan840.rauf840@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507731965"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 840, Street XYZ"
                }
            ],
            "createdAt": "2024-10-10T14:04:12.548650",
            "updatedAt": "2024-09-07T02:45:17.232316"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john841.zahid841@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John841",
            "lastName": "Zahid841",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john841.zahid841@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504512683"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 841, Street XYZ"
                }
            ],
            "createdAt": "2024-12-29T05:48:14.329168",
            "updatedAt": "2024-08-21T22:25:28.382669"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima842.sheikh842@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima842",
            "lastName": "Sheikh842",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima842.sheikh842@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507359734"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 842, Street XYZ"
                }
            ],
            "createdAt": "2024-06-09T21:21:06.885306",
            "updatedAt": "2024-08-28T08:26:12.166877"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar843.zahid843@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar843",
            "lastName": "Zahid843",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar843.zahid843@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506013824"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 843, Street XYZ"
                }
            ],
            "createdAt": "2024-11-18T11:43:22.068460",
            "updatedAt": "2025-01-07T07:12:16.151601"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha844.doe844@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha844",
            "lastName": "Doe844",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha844.doe844@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505235995"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 844, Street XYZ"
                }
            ],
            "createdAt": "2024-09-24T21:17:28.725988",
            "updatedAt": "2024-10-30T22:12:19.658855"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan845.nawaz845@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan845",
            "lastName": "Nawaz845",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan845.nawaz845@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505384876"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 845, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T20:29:01.307423",
            "updatedAt": "2024-10-02T11:08:32.712880"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan846.rauf846@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan846",
            "lastName": "Rauf846",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan846.rauf846@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503208911"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 846, Street XYZ"
                }
            ],
            "createdAt": "2024-10-02T13:36:37.620350",
            "updatedAt": "2025-03-15T06:23:15.542780"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john847.doe847@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John847",
            "lastName": "Doe847",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john847.doe847@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507620628"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 847, Street XYZ"
                }
            ],
            "createdAt": "2024-12-05T14:59:19.418402",
            "updatedAt": "2024-07-15T04:02:08.899951"
        },
        {
            "eligible": true,
            "status": false,
            "email": "omar848.zahid848@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar848",
            "lastName": "Zahid848",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar848.zahid848@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506784878"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 848, Street XYZ"
                }
            ],
            "createdAt": "2024-09-06T16:22:50.499510",
            "updatedAt": "2025-01-25T13:52:04.698625"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah849.ali849@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah849",
            "lastName": "Ali849",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah849.ali849@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508291017"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 849, Street XYZ"
                }
            ],
            "createdAt": "2024-07-05T04:47:08.598721",
            "updatedAt": "2024-05-14T18:35:23.904150"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor850.yousuf850@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor850",
            "lastName": "Yousuf850",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor850.yousuf850@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502894586"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 850, Street XYZ"
                }
            ],
            "createdAt": "2025-04-28T03:13:22.387833",
            "updatedAt": "2025-02-16T10:52:03.832360"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab851.qureshi851@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab851",
            "lastName": "Qureshi851",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab851.qureshi851@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505620367"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 851, Street XYZ"
                }
            ],
            "createdAt": "2024-11-13T05:17:30.783219",
            "updatedAt": "2024-12-31T04:59:08.360844"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha852.rauf852@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha852",
            "lastName": "Rauf852",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha852.rauf852@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502957580"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 852, Street XYZ"
                }
            ],
            "createdAt": "2024-06-04T02:19:45.344511",
            "updatedAt": "2025-03-09T06:03:15.578145"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab853.qureshi853@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab853",
            "lastName": "Qureshi853",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab853.qureshi853@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506692390"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 853, Street XYZ"
                }
            ],
            "createdAt": "2024-12-30T07:43:24.793810",
            "updatedAt": "2024-12-05T01:19:08.080912"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah854.sheikh854@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah854",
            "lastName": "Sheikh854",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah854.sheikh854@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502682717"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 854, Street XYZ"
                }
            ],
            "createdAt": "2024-10-30T12:27:22.114969",
            "updatedAt": "2024-10-02T01:02:09.310818"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan855.rauf855@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan855",
            "lastName": "Rauf855",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan855.rauf855@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506675152"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 855, Street XYZ"
                }
            ],
            "createdAt": "2024-08-21T10:05:45.295096",
            "updatedAt": "2024-09-16T05:56:02.207927"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor856.qureshi856@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor856",
            "lastName": "Qureshi856",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor856.qureshi856@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503887904"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 856, Street XYZ"
                }
            ],
            "createdAt": "2024-12-09T19:15:03.578281",
            "updatedAt": "2025-05-05T06:48:10.358826"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed857.doe857@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed857",
            "lastName": "Doe857",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed857.doe857@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504563610"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 857, Street XYZ"
                }
            ],
            "createdAt": "2025-03-03T21:47:27.656262",
            "updatedAt": "2024-05-11T19:09:19.994965"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah858.yousuf858@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah858",
            "lastName": "Yousuf858",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah858.yousuf858@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508367621"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 858, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T02:00:00.162914",
            "updatedAt": "2024-05-31T14:38:33.675757"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha859.sheikh859@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha859",
            "lastName": "Sheikh859",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha859.sheikh859@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505382444"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 859, Street XYZ"
                }
            ],
            "createdAt": "2024-12-14T04:29:15.855648",
            "updatedAt": "2024-08-16T12:38:31.473161"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali860.tariq860@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali860",
            "lastName": "Tariq860",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali860.tariq860@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502803820"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 860, Street XYZ"
                }
            ],
            "createdAt": "2024-07-23T12:24:27.178014",
            "updatedAt": "2025-02-21T18:30:39.347358"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha861.khan861@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha861",
            "lastName": "Khan861",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha861.khan861@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506231572"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 861, Street XYZ"
                }
            ],
            "createdAt": "2025-03-24T03:00:16.099175",
            "updatedAt": "2024-06-17T04:34:24.458387"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima862.ali862@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima862",
            "lastName": "Ali862",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima862.ali862@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503630635"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 862, Street XYZ"
                }
            ],
            "createdAt": "2024-08-25T06:50:32.803737",
            "updatedAt": "2024-11-16T16:22:33.870468"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali863.khan863@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali863",
            "lastName": "Khan863",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali863.khan863@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505275827"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 863, Street XYZ"
                }
            ],
            "createdAt": "2024-11-23T17:58:36.072653",
            "updatedAt": "2024-12-18T06:00:13.617809"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima864.khan864@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima864",
            "lastName": "Khan864",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima864.khan864@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501029050"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 864, Street XYZ"
                }
            ],
            "createdAt": "2024-08-28T19:17:21.692299",
            "updatedAt": "2024-05-10T03:08:08.376265"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar865.khan865@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar865",
            "lastName": "Khan865",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar865.khan865@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505421390"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 865, Street XYZ"
                }
            ],
            "createdAt": "2024-08-09T01:53:56.211115",
            "updatedAt": "2024-05-10T05:08:16.975423"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar866.qureshi866@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar866",
            "lastName": "Qureshi866",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar866.qureshi866@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504872647"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 866, Street XYZ"
                }
            ],
            "createdAt": "2024-10-20T01:36:42.008375",
            "updatedAt": "2024-07-27T06:23:31.860020"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab867.doe867@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab867",
            "lastName": "Doe867",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab867.doe867@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508357422"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 867, Street XYZ"
                }
            ],
            "createdAt": "2024-05-15T09:30:39.970662",
            "updatedAt": "2025-02-13T05:39:14.645616"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab868.sheikh868@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab868",
            "lastName": "Sheikh868",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab868.sheikh868@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501365049"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 868, Street XYZ"
                }
            ],
            "createdAt": "2024-09-26T20:36:36.750439",
            "updatedAt": "2025-04-17T11:31:08.841848"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed869.zahid869@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed869",
            "lastName": "Zahid869",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed869.zahid869@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509785256"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 869, Street XYZ"
                }
            ],
            "createdAt": "2025-04-11T19:12:16.815376",
            "updatedAt": "2024-08-29T14:48:56.071926"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah870.doe870@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah870",
            "lastName": "Doe870",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah870.doe870@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502713559"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 870, Street XYZ"
                }
            ],
            "createdAt": "2025-05-02T17:54:28.192038",
            "updatedAt": "2024-05-18T11:26:20.216409"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab871.sheikh871@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab871",
            "lastName": "Sheikh871",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab871.sheikh871@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508083899"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 871, Street XYZ"
                }
            ],
            "createdAt": "2024-12-19T17:52:41.092470",
            "updatedAt": "2025-01-03T07:06:19.119122"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed872.zahid872@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed872",
            "lastName": "Zahid872",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed872.zahid872@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505944678"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 872, Street XYZ"
                }
            ],
            "createdAt": "2024-08-28T22:24:36.385269",
            "updatedAt": "2025-03-18T06:32:09.359974"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed873.doe873@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed873",
            "lastName": "Doe873",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed873.doe873@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509203940"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 873, Street XYZ"
                }
            ],
            "createdAt": "2024-12-11T11:56:44.062884",
            "updatedAt": "2024-05-13T15:08:52.978328"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed874.sheikh874@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed874",
            "lastName": "Sheikh874",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed874.sheikh874@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503233761"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 874, Street XYZ"
                }
            ],
            "createdAt": "2025-02-03T03:22:13.989811",
            "updatedAt": "2025-03-04T04:54:08.106959"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john875.sheikh875@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John875",
            "lastName": "Sheikh875",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john875.sheikh875@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509802485"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 875, Street XYZ"
                }
            ],
            "createdAt": "2024-08-06T08:24:56.585914",
            "updatedAt": "2024-11-24T01:29:22.950216"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima876.yousuf876@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima876",
            "lastName": "Yousuf876",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima876.yousuf876@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509359678"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 876, Street XYZ"
                }
            ],
            "createdAt": "2024-11-23T20:20:03.982384",
            "updatedAt": "2024-10-01T08:12:32.961430"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali877.tariq877@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali877",
            "lastName": "Tariq877",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali877.tariq877@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509398943"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 877, Street XYZ"
                }
            ],
            "createdAt": "2024-12-19T00:22:46.579711",
            "updatedAt": "2024-07-17T14:01:19.108377"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima878.nawaz878@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima878",
            "lastName": "Nawaz878",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima878.nawaz878@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509232818"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 878, Street XYZ"
                }
            ],
            "createdAt": "2024-08-08T23:08:36.172790",
            "updatedAt": "2024-05-11T07:07:33.061940"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar879.sheikh879@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar879",
            "lastName": "Sheikh879",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar879.sheikh879@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504725261"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 879, Street XYZ"
                }
            ],
            "createdAt": "2024-12-21T21:28:18.499793",
            "updatedAt": "2024-11-16T22:10:45.802010"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed880.zahid880@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed880",
            "lastName": "Zahid880",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed880.zahid880@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508337528"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 880, Street XYZ"
                }
            ],
            "createdAt": "2024-07-20T13:13:27.352182",
            "updatedAt": "2025-01-19T01:04:24.234591"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john881.sheikh881@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John881",
            "lastName": "Sheikh881",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john881.sheikh881@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509674564"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 881, Street XYZ"
                }
            ],
            "createdAt": "2025-04-11T19:14:18.371757",
            "updatedAt": "2024-11-13T22:58:38.103036"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima882.sheikh882@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima882",
            "lastName": "Sheikh882",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima882.sheikh882@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505868172"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 882, Street XYZ"
                }
            ],
            "createdAt": "2025-05-01T07:58:00.356817",
            "updatedAt": "2025-01-30T22:44:31.377112"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor883.nawaz883@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor883",
            "lastName": "Nawaz883",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor883.nawaz883@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503170103"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 883, Street XYZ"
                }
            ],
            "createdAt": "2024-09-21T13:16:37.912548",
            "updatedAt": "2025-04-19T02:47:08.419695"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali884.nawaz884@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali884",
            "lastName": "Nawaz884",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali884.nawaz884@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505574147"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 884, Street XYZ"
                }
            ],
            "createdAt": "2024-08-24T16:50:24.100514",
            "updatedAt": "2024-10-27T06:57:18.970096"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha885.sheikh885@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha885",
            "lastName": "Sheikh885",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha885.sheikh885@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505858761"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 885, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T03:54:20.151254",
            "updatedAt": "2024-08-21T01:57:54.112442"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah886.doe886@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah886",
            "lastName": "Doe886",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah886.doe886@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507953948"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 886, Street XYZ"
                }
            ],
            "createdAt": "2024-09-06T06:58:52.079703",
            "updatedAt": "2025-04-11T17:39:04.256127"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali887.sheikh887@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali887",
            "lastName": "Sheikh887",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali887.sheikh887@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501759660"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 887, Street XYZ"
                }
            ],
            "createdAt": "2024-12-23T17:25:27.453133",
            "updatedAt": "2024-08-27T22:28:25.341152"
        },
        {
            "eligible": true,
            "status": true,
            "email": "fatima888.yousuf888@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima888",
            "lastName": "Yousuf888",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima888.yousuf888@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507176358"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 888, Street XYZ"
                }
            ],
            "createdAt": "2024-06-11T00:29:02.568983",
            "updatedAt": "2024-10-23T06:45:07.495612"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john889.rauf889@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John889",
            "lastName": "Rauf889",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john889.rauf889@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507292797"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 889, Street XYZ"
                }
            ],
            "createdAt": "2024-06-10T01:56:15.708867",
            "updatedAt": "2024-11-16T00:11:59.615691"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab890.sheikh890@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab890",
            "lastName": "Sheikh890",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab890.sheikh890@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501200714"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 890, Street XYZ"
                }
            ],
            "createdAt": "2024-09-27T12:12:01.165989",
            "updatedAt": "2025-02-06T01:27:43.840650"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah891.tariq891@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah891",
            "lastName": "Tariq891",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah891.tariq891@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507879825"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 891, Street XYZ"
                }
            ],
            "createdAt": "2025-01-16T14:43:27.390375",
            "updatedAt": "2025-02-24T00:12:06.430275"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed892.sheikh892@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed892",
            "lastName": "Sheikh892",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed892.sheikh892@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505414188"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 892, Street XYZ"
                }
            ],
            "createdAt": "2025-04-04T14:39:10.737017",
            "updatedAt": "2024-09-05T06:40:17.573284"
        },
        {
            "eligible": true,
            "status": true,
            "email": "omar893.nawaz893@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar893",
            "lastName": "Nawaz893",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar893.nawaz893@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508269618"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 893, Street XYZ"
                }
            ],
            "createdAt": "2024-07-26T19:19:00.186634",
            "updatedAt": "2024-11-21T19:21:52.540784"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah894.qureshi894@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah894",
            "lastName": "Qureshi894",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah894.qureshi894@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505792440"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 894, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T07:58:36.202119",
            "updatedAt": "2024-09-04T09:28:40.701613"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha895.yousuf895@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha895",
            "lastName": "Yousuf895",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha895.yousuf895@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501724113"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 895, Street XYZ"
                }
            ],
            "createdAt": "2024-09-30T01:11:33.912655",
            "updatedAt": "2024-06-20T20:25:00.171750"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha896.rauf896@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha896",
            "lastName": "Rauf896",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha896.rauf896@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509553402"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 896, Street XYZ"
                }
            ],
            "createdAt": "2024-06-24T16:30:18.978635",
            "updatedAt": "2024-05-17T09:58:39.235504"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima897.qureshi897@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima897",
            "lastName": "Qureshi897",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima897.qureshi897@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504645883"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 897, Street XYZ"
                }
            ],
            "createdAt": "2024-11-12T16:19:40.579411",
            "updatedAt": "2024-07-25T15:16:07.543230"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah898.khan898@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah898",
            "lastName": "Khan898",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah898.khan898@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503877050"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 898, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T05:45:25.193860",
            "updatedAt": "2025-01-12T00:19:39.427917"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha899.doe899@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha899",
            "lastName": "Doe899",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha899.doe899@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503099100"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 899, Street XYZ"
                }
            ],
            "createdAt": "2025-04-19T00:03:33.501872",
            "updatedAt": "2024-12-02T12:17:59.144341"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor900.zahid900@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor900",
            "lastName": "Zahid900",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor900.zahid900@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502441096"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 900, Street XYZ"
                }
            ],
            "createdAt": "2024-07-18T19:26:14.252905",
            "updatedAt": "2024-05-22T04:35:49.854440"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor901.doe901@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor901",
            "lastName": "Doe901",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor901.doe901@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504558000"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 901, Street XYZ"
                }
            ],
            "createdAt": "2024-09-03T09:37:44.003005",
            "updatedAt": "2024-06-04T23:19:51.123587"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab902.khan902@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab902",
            "lastName": "Khan902",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab902.khan902@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509665735"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 902, Street XYZ"
                }
            ],
            "createdAt": "2024-10-30T19:17:34.966836",
            "updatedAt": "2025-01-22T23:18:11.635802"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali903.ali903@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali903",
            "lastName": "Ali903",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali903.ali903@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507282806"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 903, Street XYZ"
                }
            ],
            "createdAt": "2024-05-11T07:08:39.610396",
            "updatedAt": "2024-06-05T15:27:38.546200"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab904.tariq904@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab904",
            "lastName": "Tariq904",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab904.tariq904@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508223590"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 904, Street XYZ"
                }
            ],
            "createdAt": "2024-05-17T11:49:04.980326",
            "updatedAt": "2024-12-03T13:20:21.187229"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah905.nawaz905@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah905",
            "lastName": "Nawaz905",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah905.nawaz905@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503719326"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 905, Street XYZ"
                }
            ],
            "createdAt": "2024-05-12T21:33:17.608867",
            "updatedAt": "2024-10-25T12:23:26.776254"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john906.sheikh906@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John906",
            "lastName": "Sheikh906",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john906.sheikh906@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502972256"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 906, Street XYZ"
                }
            ],
            "createdAt": "2025-04-28T20:28:20.657294",
            "updatedAt": "2024-07-13T02:13:21.161141"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha907.tariq907@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha907",
            "lastName": "Tariq907",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha907.tariq907@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501669769"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 907, Street XYZ"
                }
            ],
            "createdAt": "2024-10-15T03:55:59.909892",
            "updatedAt": "2025-02-17T09:47:48.731140"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed908.doe908@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed908",
            "lastName": "Doe908",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed908.doe908@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503751615"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 908, Street XYZ"
                }
            ],
            "createdAt": "2025-04-02T06:48:37.365998",
            "updatedAt": "2024-08-18T20:58:08.278911"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali909.tariq909@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali909",
            "lastName": "Tariq909",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali909.tariq909@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509888023"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 909, Street XYZ"
                }
            ],
            "createdAt": "2024-06-05T17:05:11.764121",
            "updatedAt": "2025-04-07T22:31:17.167133"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah910.khan910@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah910",
            "lastName": "Khan910",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah910.khan910@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508686373"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 910, Street XYZ"
                }
            ],
            "createdAt": "2025-01-04T09:52:51.526123",
            "updatedAt": "2024-09-30T14:17:30.965796"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima911.nawaz911@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima911",
            "lastName": "Nawaz911",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima911.nawaz911@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509392217"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 911, Street XYZ"
                }
            ],
            "createdAt": "2024-12-29T14:35:00.646833",
            "updatedAt": "2025-03-20T07:42:54.443416"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar912.qureshi912@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar912",
            "lastName": "Qureshi912",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar912.qureshi912@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505269566"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 912, Street XYZ"
                }
            ],
            "createdAt": "2024-07-13T17:38:57.275505",
            "updatedAt": "2024-11-25T19:16:19.758650"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ali913.zahid913@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali913",
            "lastName": "Zahid913",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali913.zahid913@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501364394"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 913, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T18:10:29.668799",
            "updatedAt": "2025-04-19T05:34:47.508116"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima914.tariq914@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima914",
            "lastName": "Tariq914",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima914.tariq914@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507412755"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 914, Street XYZ"
                }
            ],
            "createdAt": "2024-05-22T22:31:10.858234",
            "updatedAt": "2024-11-25T05:04:30.353769"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali915.doe915@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ali915",
            "lastName": "Doe915",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali915.doe915@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508154077"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 915, Street XYZ"
                }
            ],
            "createdAt": "2025-04-23T09:27:10.791362",
            "updatedAt": "2025-03-07T06:07:57.903430"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed916.zahid916@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed916",
            "lastName": "Zahid916",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed916.zahid916@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502895116"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 916, Street XYZ"
                }
            ],
            "createdAt": "2024-11-04T12:08:36.253049",
            "updatedAt": "2024-11-20T12:19:31.907075"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed917.zahid917@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed917",
            "lastName": "Zahid917",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed917.zahid917@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501937118"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 917, Street XYZ"
                }
            ],
            "createdAt": "2024-08-19T03:44:47.961776",
            "updatedAt": "2025-05-03T03:41:06.534886"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali918.sheikh918@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali918",
            "lastName": "Sheikh918",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali918.sheikh918@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502130273"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 918, Street XYZ"
                }
            ],
            "createdAt": "2024-07-28T18:28:21.785425",
            "updatedAt": "2024-11-08T06:49:26.977030"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed919.doe919@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed919",
            "lastName": "Doe919",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed919.doe919@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507693881"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 919, Street XYZ"
                }
            ],
            "createdAt": "2024-09-18T07:29:25.104555",
            "updatedAt": "2024-07-10T04:12:21.051864"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor920.doe920@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor920",
            "lastName": "Doe920",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor920.doe920@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506692695"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 920, Street XYZ"
                }
            ],
            "createdAt": "2025-04-29T14:36:40.169682",
            "updatedAt": "2024-11-28T23:21:03.209611"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ali921.tariq921@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali921",
            "lastName": "Tariq921",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali921.tariq921@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509542319"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 921, Street XYZ"
                }
            ],
            "createdAt": "2025-02-13T16:57:21.638600",
            "updatedAt": "2024-11-28T19:13:50.406407"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed922.rauf922@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed922",
            "lastName": "Rauf922",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed922.rauf922@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504136910"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 922, Street XYZ"
                }
            ],
            "createdAt": "2025-02-18T05:44:30.241449",
            "updatedAt": "2024-08-19T00:40:20.246775"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab923.tariq923@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab923",
            "lastName": "Tariq923",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab923.tariq923@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503657025"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 923, Street XYZ"
                }
            ],
            "createdAt": "2025-04-05T12:08:10.358295",
            "updatedAt": "2024-11-28T17:50:59.793711"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali924.rauf924@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali924",
            "lastName": "Rauf924",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali924.rauf924@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507570153"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 924, Street XYZ"
                }
            ],
            "createdAt": "2024-06-13T13:28:03.773903",
            "updatedAt": "2025-01-08T16:46:35.701213"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab925.doe925@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab925",
            "lastName": "Doe925",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab925.doe925@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505338443"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 925, Street XYZ"
                }
            ],
            "createdAt": "2025-04-07T02:20:57.284565",
            "updatedAt": "2024-06-03T18:28:53.309036"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor926.zahid926@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor926",
            "lastName": "Zahid926",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor926.zahid926@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501437290"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 926, Street XYZ"
                }
            ],
            "createdAt": "2024-07-27T14:10:35.170470",
            "updatedAt": "2025-03-17T03:02:51.107836"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha927.zahid927@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha927",
            "lastName": "Zahid927",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha927.zahid927@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502473000"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 927, Street XYZ"
                }
            ],
            "createdAt": "2024-10-14T02:29:17.707705",
            "updatedAt": "2024-06-22T00:44:29.182901"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar928.sheikh928@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar928",
            "lastName": "Sheikh928",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar928.sheikh928@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508653041"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 928, Street XYZ"
                }
            ],
            "createdAt": "2024-06-16T05:19:42.439520",
            "updatedAt": "2024-05-31T00:41:19.622347"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab929.ali929@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab929",
            "lastName": "Ali929",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab929.ali929@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504406781"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 929, Street XYZ"
                }
            ],
            "createdAt": "2025-04-10T13:41:54.237967",
            "updatedAt": "2024-10-12T03:11:44.899765"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor930.sheikh930@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor930",
            "lastName": "Sheikh930",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor930.sheikh930@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503720508"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 930, Street XYZ"
                }
            ],
            "createdAt": "2024-06-15T22:02:06.653426",
            "updatedAt": "2025-02-10T05:38:53.803058"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah931.khan931@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah931",
            "lastName": "Khan931",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah931.khan931@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508098779"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 931, Street XYZ"
                }
            ],
            "createdAt": "2025-04-06T20:41:59.861313",
            "updatedAt": "2024-08-02T01:07:31.897846"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ahmed932.rauf932@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed932",
            "lastName": "Rauf932",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed932.rauf932@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509392938"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 932, Street XYZ"
                }
            ],
            "createdAt": "2025-05-02T05:47:45.612639",
            "updatedAt": "2025-03-21T03:06:57.955057"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima933.khan933@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima933",
            "lastName": "Khan933",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima933.khan933@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505099686"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 933, Street XYZ"
                }
            ],
            "createdAt": "2024-06-19T16:49:27.659146",
            "updatedAt": "2025-01-27T15:46:46.879353"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed934.sheikh934@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed934",
            "lastName": "Sheikh934",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed934.sheikh934@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506629899"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 934, Street XYZ"
                }
            ],
            "createdAt": "2024-12-13T22:17:15.727403",
            "updatedAt": "2024-11-13T09:10:06.597200"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima935.nawaz935@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima935",
            "lastName": "Nawaz935",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima935.nawaz935@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507744599"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 935, Street XYZ"
                }
            ],
            "createdAt": "2024-10-26T22:18:54.259132",
            "updatedAt": "2025-02-03T13:51:34.098161"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha936.yousuf936@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha936",
            "lastName": "Yousuf936",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha936.yousuf936@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508579745"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 936, Street XYZ"
                }
            ],
            "createdAt": "2024-08-14T12:05:35.721498",
            "updatedAt": "2025-01-09T03:08:14.420863"
        },
        {
            "eligible": false,
            "status": true,
            "email": "noor937.ali937@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor937",
            "lastName": "Ali937",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor937.ali937@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508398536"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 937, Street XYZ"
                }
            ],
            "createdAt": "2024-11-07T21:36:05.742432",
            "updatedAt": "2025-01-05T09:20:39.176012"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar938.ali938@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar938",
            "lastName": "Ali938",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar938.ali938@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509415458"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 938, Street XYZ"
                }
            ],
            "createdAt": "2025-02-19T08:39:06.416122",
            "updatedAt": "2024-09-15T08:34:44.207522"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor939.nawaz939@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor939",
            "lastName": "Nawaz939",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor939.nawaz939@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506869530"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 939, Street XYZ"
                }
            ],
            "createdAt": "2024-10-12T05:00:51.528735",
            "updatedAt": "2024-07-11T03:08:03.013898"
        },
        {
            "eligible": true,
            "status": false,
            "email": "sarah940.rauf940@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah940",
            "lastName": "Rauf940",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah940.rauf940@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504083572"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 940, Street XYZ"
                }
            ],
            "createdAt": "2025-01-10T02:34:43.245110",
            "updatedAt": "2024-06-25T01:15:00.185672"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima941.rauf941@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima941",
            "lastName": "Rauf941",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima941.rauf941@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504696292"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 941, Street XYZ"
                }
            ],
            "createdAt": "2024-06-21T12:29:40.126677",
            "updatedAt": "2024-11-21T11:13:54.982633"
        },
        {
            "eligible": false,
            "status": true,
            "email": "maha942.ali942@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha942",
            "lastName": "Ali942",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha942.ali942@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502678745"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 942, Street XYZ"
                }
            ],
            "createdAt": "2024-08-01T14:45:29.583494",
            "updatedAt": "2024-05-26T20:28:07.419803"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john943.zahid943@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John943",
            "lastName": "Zahid943",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john943.zahid943@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502954973"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 943, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T08:28:27.732739",
            "updatedAt": "2025-02-26T06:05:13.471009"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor944.khan944@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor944",
            "lastName": "Khan944",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor944.khan944@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505053773"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 944, Street XYZ"
                }
            ],
            "createdAt": "2024-08-22T17:08:10.096645",
            "updatedAt": "2024-10-14T11:19:28.710101"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha945.qureshi945@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha945",
            "lastName": "Qureshi945",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha945.qureshi945@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505364242"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 945, Street XYZ"
                }
            ],
            "createdAt": "2025-03-03T20:16:51.940863",
            "updatedAt": "2024-12-31T11:56:07.937846"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha946.nawaz946@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha946",
            "lastName": "Nawaz946",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha946.nawaz946@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508627575"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 946, Street XYZ"
                }
            ],
            "createdAt": "2024-08-09T02:09:43.493426",
            "updatedAt": "2024-08-06T03:08:39.952459"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah947.rauf947@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah947",
            "lastName": "Rauf947",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah947.rauf947@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506727279"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 947, Street XYZ"
                }
            ],
            "createdAt": "2025-04-09T06:36:15.572182",
            "updatedAt": "2024-07-31T12:21:00.814542"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor948.ali948@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor948",
            "lastName": "Ali948",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor948.ali948@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501020247"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 948, Street XYZ"
                }
            ],
            "createdAt": "2024-08-26T08:24:29.248767",
            "updatedAt": "2024-08-13T22:04:41.274212"
        },
        {
            "eligible": true,
            "status": true,
            "email": "ali949.zahid949@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali949",
            "lastName": "Zahid949",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali949.zahid949@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501051346"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 949, Street XYZ"
                }
            ],
            "createdAt": "2024-07-02T18:48:26.572909",
            "updatedAt": "2024-09-09T11:35:47.137789"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor950.khan950@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor950",
            "lastName": "Khan950",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor950.khan950@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502775131"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 950, Street XYZ"
                }
            ],
            "createdAt": "2024-10-19T16:05:11.338331",
            "updatedAt": "2025-04-29T15:38:12.830431"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab951.qureshi951@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab951",
            "lastName": "Qureshi951",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab951.qureshi951@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503802411"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 951, Street XYZ"
                }
            ],
            "createdAt": "2024-09-07T05:35:02.242344",
            "updatedAt": "2024-08-17T02:39:06.008702"
        },
        {
            "eligible": true,
            "status": true,
            "email": "hassan952.doe952@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Hassan952",
            "lastName": "Doe952",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan952.doe952@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506730854"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 952, Street XYZ"
                }
            ],
            "createdAt": "2024-08-23T19:06:28.256441",
            "updatedAt": "2024-07-04T04:13:13.532770"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan953.sheikh953@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan953",
            "lastName": "Sheikh953",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan953.sheikh953@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502005704"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 953, Street XYZ"
                }
            ],
            "createdAt": "2024-06-16T12:12:44.746982",
            "updatedAt": "2025-04-05T03:23:57.193463"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah954.rauf954@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah954",
            "lastName": "Rauf954",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah954.rauf954@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501887465"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 954, Street XYZ"
                }
            ],
            "createdAt": "2024-09-01T20:41:00.148006",
            "updatedAt": "2025-04-27T08:50:43.724776"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed955.sheikh955@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed955",
            "lastName": "Sheikh955",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed955.sheikh955@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505440403"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 955, Street XYZ"
                }
            ],
            "createdAt": "2024-11-13T15:00:44.209322",
            "updatedAt": "2024-06-07T07:55:12.884668"
        },
        {
            "eligible": true,
            "status": false,
            "email": "zainab956.doe956@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab956",
            "lastName": "Doe956",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab956.doe956@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504610525"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 956, Street XYZ"
                }
            ],
            "createdAt": "2025-01-07T08:04:03.150780",
            "updatedAt": "2025-02-09T16:28:37.631891"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar957.khan957@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Omar957",
            "lastName": "Khan957",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar957.khan957@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508398575"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 957, Street XYZ"
                }
            ],
            "createdAt": "2025-03-01T07:07:13.396784",
            "updatedAt": "2024-10-16T04:52:57.259301"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor958.yousuf958@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor958",
            "lastName": "Yousuf958",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor958.yousuf958@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506448427"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 958, Street XYZ"
                }
            ],
            "createdAt": "2025-01-08T05:18:58.807551",
            "updatedAt": "2024-09-17T19:31:50.320454"
        },
        {
            "eligible": false,
            "status": false,
            "email": "fatima959.nawaz959@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima959",
            "lastName": "Nawaz959",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima959.nawaz959@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501597273"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 959, Street XYZ"
                }
            ],
            "createdAt": "2024-09-28T22:11:39.764960",
            "updatedAt": "2024-11-21T10:51:46.476433"
        },
        {
            "eligible": true,
            "status": true,
            "email": "john960.khan960@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "John960",
            "lastName": "Khan960",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john960.khan960@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507210172"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 960, Street XYZ"
                }
            ],
            "createdAt": "2024-10-01T22:52:18.070210",
            "updatedAt": "2024-07-22T23:51:56.757812"
        },
        {
            "eligible": true,
            "status": true,
            "email": "maha961.yousuf961@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha961",
            "lastName": "Yousuf961",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha961.yousuf961@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504447020"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 961, Street XYZ"
                }
            ],
            "createdAt": "2024-12-18T11:05:40.576529",
            "updatedAt": "2024-11-13T00:24:08.759642"
        },
        {
            "eligible": false,
            "status": true,
            "email": "sarah962.sheikh962@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah962",
            "lastName": "Sheikh962",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah962.sheikh962@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505557180"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 962, Street XYZ"
                }
            ],
            "createdAt": "2024-07-24T12:37:24.052126",
            "updatedAt": "2025-03-24T14:41:51.835149"
        },
        {
            "eligible": true,
            "status": false,
            "email": "hassan963.nawaz963@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan963",
            "lastName": "Nawaz963",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan963.nawaz963@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502019623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 963, Street XYZ"
                }
            ],
            "createdAt": "2024-05-12T04:34:47.003733",
            "updatedAt": "2024-11-19T21:47:03.053138"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab964.yousuf964@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab964",
            "lastName": "Yousuf964",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab964.yousuf964@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504929823"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 964, Street XYZ"
                }
            ],
            "createdAt": "2025-03-10T12:45:07.347020",
            "updatedAt": "2024-09-21T09:11:30.931672"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ahmed965.qureshi965@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Ahmed965",
            "lastName": "Qureshi965",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed965.qureshi965@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501103855"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 965, Street XYZ"
                }
            ],
            "createdAt": "2024-10-03T07:20:42.084323",
            "updatedAt": "2024-09-17T23:34:32.581103"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor966.yousuf966@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor966",
            "lastName": "Yousuf966",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor966.yousuf966@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "504033206"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 966, Street XYZ"
                }
            ],
            "createdAt": "2025-01-18T01:48:47.059101",
            "updatedAt": "2024-09-22T05:47:30.055338"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha967.ali967@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Maha967",
            "lastName": "Ali967",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha967.ali967@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502087716"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 967, Street XYZ"
                }
            ],
            "createdAt": "2025-04-12T00:27:06.435573",
            "updatedAt": "2024-08-31T12:29:23.059194"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed968.yousuf968@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed968",
            "lastName": "Yousuf968",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed968.yousuf968@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502522182"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 968, Street XYZ"
                }
            ],
            "createdAt": "2025-04-08T01:13:13.513942",
            "updatedAt": "2025-03-01T02:02:34.911057"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha969.zahid969@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha969",
            "lastName": "Zahid969",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha969.zahid969@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508718352"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 969, Street XYZ"
                }
            ],
            "createdAt": "2025-02-22T22:14:10.218848",
            "updatedAt": "2025-04-20T18:19:52.584261"
        },
        {
            "eligible": true,
            "status": true,
            "email": "sarah970.qureshi970@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah970",
            "lastName": "Qureshi970",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah970.qureshi970@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503348815"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 970, Street XYZ"
                }
            ],
            "createdAt": "2025-01-25T18:35:29.148495",
            "updatedAt": "2025-03-31T02:54:02.126388"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah971.yousuf971@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Sarah971",
            "lastName": "Yousuf971",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah971.yousuf971@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501875300"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 971, Street XYZ"
                }
            ],
            "createdAt": "2024-08-17T03:34:03.980371",
            "updatedAt": "2025-01-08T13:06:24.935883"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor972.tariq972@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor972",
            "lastName": "Tariq972",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor972.tariq972@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501285455"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 972, Street XYZ"
                }
            ],
            "createdAt": "2024-07-10T06:40:44.859022",
            "updatedAt": "2025-03-02T08:56:26.951837"
        },
        {
            "eligible": false,
            "status": true,
            "email": "omar973.zahid973@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar973",
            "lastName": "Zahid973",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar973.zahid973@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502463365"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 973, Street XYZ"
                }
            ],
            "createdAt": "2025-02-15T09:34:38.649240",
            "updatedAt": "2025-03-30T14:27:15.041113"
        },
        {
            "eligible": true,
            "status": true,
            "email": "noor974.zahid974@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor974",
            "lastName": "Zahid974",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor974.zahid974@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503658585"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 974, Street XYZ"
                }
            ],
            "createdAt": "2025-01-07T11:01:43.697170",
            "updatedAt": "2024-12-18T03:18:38.496112"
        },
        {
            "eligible": false,
            "status": false,
            "email": "omar975.rauf975@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Omar975",
            "lastName": "Rauf975",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "omar975.rauf975@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503899819"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 975, Street XYZ"
                }
            ],
            "createdAt": "2024-09-29T07:38:01.807133",
            "updatedAt": "2024-05-27T22:13:23.946639"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah976.khan976@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah976",
            "lastName": "Khan976",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah976.khan976@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502673869"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 976, Street XYZ"
                }
            ],
            "createdAt": "2025-02-24T09:55:10.380679",
            "updatedAt": "2025-01-27T13:40:29.314873"
        },
        {
            "eligible": false,
            "status": false,
            "email": "ahmed977.khan977@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed977",
            "lastName": "Khan977",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed977.khan977@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506566312"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 977, Street XYZ"
                }
            ],
            "createdAt": "2024-11-27T02:33:50.114194",
            "updatedAt": "2024-10-20T17:18:19.531758"
        },
        {
            "eligible": false,
            "status": false,
            "email": "hassan978.yousuf978@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan978",
            "lastName": "Yousuf978",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan978.yousuf978@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505133408"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 978, Street XYZ"
                }
            ],
            "createdAt": "2024-05-14T06:42:43.015494",
            "updatedAt": "2024-10-27T16:10:14.267469"
        },
        {
            "eligible": false,
            "status": true,
            "email": "ali979.doe979@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ali979",
            "lastName": "Doe979",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ali979.doe979@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505037723"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 979, Street XYZ"
                }
            ],
            "createdAt": "2024-05-31T14:44:47.229877",
            "updatedAt": "2025-03-11T18:17:08.806690"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima980.sheikh980@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Fatima980",
            "lastName": "Sheikh980",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima980.sheikh980@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505200641"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 980, Street XYZ"
                }
            ],
            "createdAt": "2024-08-10T08:48:49.122247",
            "updatedAt": "2025-01-07T16:52:08.981114"
        },
        {
            "eligible": false,
            "status": false,
            "email": "john981.qureshi981@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John981",
            "lastName": "Qureshi981",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john981.qureshi981@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501017436"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 981, Street XYZ"
                }
            ],
            "createdAt": "2025-04-19T01:58:30.965771",
            "updatedAt": "2025-02-15T04:48:13.918871"
        },
        {
            "eligible": false,
            "status": true,
            "email": "hassan982.qureshi982@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Hassan982",
            "lastName": "Qureshi982",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "hassan982.qureshi982@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501181291"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 982, Street XYZ"
                }
            ],
            "createdAt": "2025-02-04T10:37:41.656038",
            "updatedAt": "2025-04-07T12:33:44.201063"
        },
        {
            "eligible": true,
            "status": false,
            "email": "maha983.ali983@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha983",
            "lastName": "Ali983",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha983.ali983@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508736404"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 983, Street XYZ"
                }
            ],
            "createdAt": "2024-06-08T12:51:34.042971",
            "updatedAt": "2024-06-06T01:49:11.700136"
        },
        {
            "eligible": false,
            "status": true,
            "email": "john984.zahid984@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John984",
            "lastName": "Zahid984",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john984.zahid984@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507078567"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 984, Street XYZ"
                }
            ],
            "createdAt": "2025-01-14T20:07:55.696727",
            "updatedAt": "2024-12-15T08:13:15.284421"
        },
        {
            "eligible": true,
            "status": false,
            "email": "noor985.ali985@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor985",
            "lastName": "Ali985",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor985.ali985@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502537946"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 985, Street XYZ"
                }
            ],
            "createdAt": "2025-03-04T05:09:13.691261",
            "updatedAt": "2025-03-28T21:39:43.903902"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor986.nawaz986@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Noor986",
            "lastName": "Nawaz986",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor986.nawaz986@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502753623"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 986, Street XYZ"
                }
            ],
            "createdAt": "2024-09-28T11:49:51.764593",
            "updatedAt": "2024-06-10T13:49:10.751498"
        },
        {
            "eligible": false,
            "status": true,
            "email": "fatima987.zahid987@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima987",
            "lastName": "Zahid987",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima987.zahid987@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505258224"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 987, Street XYZ"
                }
            ],
            "createdAt": "2025-03-20T01:42:18.742041",
            "updatedAt": "2024-11-09T20:17:33.431807"
        },
        {
            "eligible": false,
            "status": false,
            "email": "noor988.ali988@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Noor988",
            "lastName": "Ali988",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "noor988.ali988@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "509232738"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 988, Street XYZ"
                }
            ],
            "createdAt": "2024-12-06T10:26:23.252023",
            "updatedAt": "2024-08-15T00:53:53.801660"
        },
        {
            "eligible": true,
            "status": false,
            "email": "fatima989.qureshi989@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Fatima989",
            "lastName": "Qureshi989",
            "jobTitle": "System Admin",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "fatima989.qureshi989@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503560597"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 989, Street XYZ"
                }
            ],
            "createdAt": "2024-12-07T19:22:52.986451",
            "updatedAt": "2024-12-20T01:47:44.961165"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab990.qureshi990@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab990",
            "lastName": "Qureshi990",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab990.qureshi990@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "506336919"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 990, Street XYZ"
                }
            ],
            "createdAt": "2025-02-07T08:43:48.939061",
            "updatedAt": "2024-11-25T20:41:36.871222"
        },
        {
            "eligible": true,
            "status": false,
            "email": "john991.qureshi991@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "John991",
            "lastName": "Qureshi991",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "john991.qureshi991@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505396367"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 991, Street XYZ"
                }
            ],
            "createdAt": "2024-12-30T23:59:02.140758",
            "updatedAt": "2024-08-13T15:08:50.865433"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah992.doe992@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah992",
            "lastName": "Doe992",
            "jobTitle": "Software Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah992.doe992@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508543771"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 992, Street XYZ"
                }
            ],
            "createdAt": "2025-05-05T04:03:49.954745",
            "updatedAt": "2024-10-03T12:14:42.938675"
        },
        {
            "eligible": false,
            "status": false,
            "email": "zainab993.nawaz993@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Zainab993",
            "lastName": "Nawaz993",
            "jobTitle": "Network Engineer",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab993.nawaz993@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "505584703"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 993, Street XYZ"
                }
            ],
            "createdAt": "2024-05-12T02:09:31.366990",
            "updatedAt": "2024-10-26T20:42:22.979235"
        },
        {
            "eligible": true,
            "status": false,
            "email": "ahmed994.sheikh994@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Ahmed994",
            "lastName": "Sheikh994",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "ahmed994.sheikh994@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507388978"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 994, Street XYZ"
                }
            ],
            "createdAt": "2024-11-09T21:17:43.152834",
            "updatedAt": "2025-02-17T15:39:53.241967"
        },
        {
            "eligible": false,
            "status": false,
            "email": "sarah995.ali995@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Sarah995",
            "lastName": "Ali995",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "sarah995.ali995@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "508167062"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 995, Street XYZ"
                }
            ],
            "createdAt": "2025-04-12T22:47:43.023809",
            "updatedAt": "2024-08-10T02:30:10.868422"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab996.qureshi996@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab996",
            "lastName": "Qureshi996",
            "jobTitle": "Cybersecurity Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab996.qureshi996@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "507527628"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 996, Street XYZ"
                }
            ],
            "createdAt": "2024-05-21T15:59:29.972963",
            "updatedAt": "2024-08-19T20:55:58.260377"
        },
        {
            "eligible": true,
            "status": true,
            "email": "zainab997.qureshi997@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab997",
            "lastName": "Qureshi997",
            "jobTitle": "IT Manager",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab997.qureshi997@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "501393027"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 997, Street XYZ"
                }
            ],
            "createdAt": "2025-04-12T06:59:50.274413",
            "updatedAt": "2025-02-06T10:39:47.689758"
        },
        {
            "eligible": false,
            "status": true,
            "email": "zainab998.zahid998@nwc.com.sa",
            "prefix": "Mr.",
            "firstName": "Zainab998",
            "lastName": "Zahid998",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "zainab998.zahid998@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "503013719"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 998, Street XYZ"
                }
            ],
            "createdAt": "2024-09-23T05:26:06.886908",
            "updatedAt": "2024-10-01T21:53:46.273296"
        },
        {
            "eligible": false,
            "status": false,
            "email": "maha999.qureshi999@nwc.com.sa",
            "prefix": "Ms.",
            "firstName": "Maha999",
            "lastName": "Qureshi999",
            "jobTitle": "Data Analyst",
            "country": "Saudi Arabia",
            "emails": [
                {
                    "type": "work",
                    "value": "maha999.qureshi999@nwc.com.sa"
                }
            ],
            "phones": [
                {
                    "type": "work",
                    "dialCode": "+966",
                    "value": "502241437"
                }
            ],
            "socials": [],
            "addresses": [
                {
                    "type": "home",
                    "value": "Building 999, Street XYZ"
                }
            ],
            "createdAt": "2025-02-17T16:55:29.309427",
            "updatedAt": "2024-10-16T04:18:42.410133"
        }
    ]
}
  ];
}

module.exports = getEmployees;
