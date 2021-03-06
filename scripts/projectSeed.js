const mongoose = require('mongoose')
const db = require('../models')
const dotenv = require('dotenv'). config();


mongoose.connect(process.env.MONGO_URI);

const projectSeed = [
    {
        "id": 1,
        "title": "Amouyal Sisters - Social Media",
        "role": "Content Creator",
        "agency": "Amouyal Sisters",
        "year": "2022",
        "text": "Social media coordinator for the Amouyal Sisters Real Estate Group. Tasked with leading a digital marketing growth initiative. Filmed and edited unique video and photo content using Adobe Photoshop, Adobe Lightroom and DJI tech.",
        "thumbnail": 'uploads/Real_Estate_Main.jpg',
        "images": [
            "uploads/Sold_226_Lady_Valentina_Ave.jpg",
            "uploads/Sold_Bronte_Ave.jpg",
            "uploads/laurendale_recordsale.jpg",
            "uploads/balsamwood_open_house_2.jpg",
            "uploads/226_Lady_Valentina.jpg",
            "uploads/14_bobolink_dr.jpg"
        ]
    },
    {
        "id": 2,
        "title": "NodeJS Mock Database",
        "role": "Back-End Developer",
        "agency": "Personal Project",
        "year": "2021",
        "text": "As a Back-End Developer, I developed a ready-to-use command-line-interface that any business can adopt in managing their employee database. The database and command-line-interface was built using Node, InquirerJS library and MySQL.",
        "thumbnail": "uploads/Node_Backend_Main.jpg",
        "images": [
            "uploads/node_backend_sample.png"
        ],
        "githubUrl": "https://github.com/nsuroghon/Employee-Database"
    },
    {
        "id": 3,
        "title": "Fitness +",
        "role": "Full-Stack Developer",
        "agency": "Personal Project",
        "year": "2021",
        "text": "Full-Stack Developer building a fitness app passion project for personal use. Built with HTML, CSS, Javascript, ExpressJS and MongoDB. The goal was to build a web application that tracks user workouts and display fitness progress on a nice U/I.",
        "thumbnail": "uploads/Fitness_App_Main.jpg",
        "images": [
            "uploads/Fitness_1.png",
            "uploads/Fitness_2.png"
        ],
        "githubUrl": "https://github.com/nsuroghon/Workout-Tracker"
    },
    {
        "id": 4,
        "title": "Dev-Web",
        "role": "Full-Stack Developer",
        "agency": "Dev-Web",
        "year": "2021",
        "text": "Full-Stack Developer, created a platform for fellow developers to access tech news and media. Built on the MERN stack and multiple libraries, gathers content from various API's.",
        "thumbnail": "uploads/Dev-Web_Main.jpg",
        "images": [
            "uploads/Dev_Web.png",
            "uploads/Dev_Web_2.jpg",
            "uploads/Dev_Web_3.png",
            "uploads/Dev_Web_4.png"
        ],
        "githubUrl": "https://github.com/nsuroghon/Dev-Web",
        "visitUrl": "https://dev-web3.herokuapp.com"
    },
    {
        "id": 5,
        "title": "Budget",
        "role": "Full-Stack Developer",
        "agency": "Personal Project",
        "year": "2021",
        "text": "Developed a web application that tracks deposits and withdrawals to a user's budget. Passion project with the purpose of implementing IndexedDB and Service Workers technologies. Utilized these technologies to create an application that can still track transactions while a user is away from internet connection, and populate the database once the user gets online connection.",
        "thumbnail": "uploads/Budget_Main.jpg",
        "images": [
            "uploads/Budget.png"
        ],
        "githubUrl": "https://github.com/nsuroghon/Budget-Tracker",
        "visitUrl": "https://fierce-reef-41934.herokuapp.com"
    },
    {
        "id": 6,
        "title": "5 O'Clock Somewhere",
        "role": "Front-End Developer",
        "agency": "5 O'Clock",
        "year": "2020",
        "text": "Full-Stack Developer building a cocktail themed web app. Built using a traditional HTML, Css and Javascript tech stack, and utilizing Materialize CSS framework. Working alongside other developers, the goal was to retrieve data from two third-party API's, and to build a fun, yet simple to interact with U/I.",
        "thumbnail": "uploads/5_Oclock_Main.jpg",
        "images": [
            "uploads/5_Oclock_1.png",
            "uploads/5_Oclock_2.png",
            "uploads/5_Oclock_3.png"
        ],
        "githubUrl": "https://github.com/nsuroghon/5-o-Clock-Somewhere",
        "visitUrl": "https://nsuroghon.github.io/5-o-Clock-Somewhere/"
    }
]

db.Project.deleteMany({ })
    .then( () => db.Project.insertMany(projectSeed))
    .then(data => {
        console.log(data + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })