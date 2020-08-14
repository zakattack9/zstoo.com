// imageUrls must be relative to "public" folder
const PROJECT_DATA = [
  {
    id: 1,
    name: "Stockup",
    shortDesc: "Stock market news web scraper",
    fullDesc: "An application leveraging web scraping and APIs to gather news about stocks from various sources into one place.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",
    techStack: ['React', 'CSS', 'Node.js', 'Heroku'],
    githubLink: 'https://github.com/zakattack9/stockup',
    projectLink: 'http://stockup.zaksakata.com',
    imageUrls: ['images/projects/stockup1.png', 'images/projects/stockup1.png'],
    year: 2019,
    role: 'Full Stack',
    colors: {
      header: '#00D35E',
      text: '#AFD560',
      textShadow: '#769434',
      border: '#49CC59',
      borderShadow: '#067c14',
    }
  },
  {
    id: 2,
    name: "Lanakila Meals on Wheels",
    shortDesc: "Mass medium communication tool",
    fullDesc: "A mass medium communication tool that can broadcast various types of messages to members of the Lanakila Meals on Wheels elderly meal service.\n\nAWS SNS is used to create groups and subscribers that messages can be pushed out to; additionally, AWS Polly was used to convert broadcasted messages to audio for recipients to listen to. All data is stored using a PostgreSQL DB on AWS RDS.",
    techStack: ['AWS', 'HTML', 'CSS', 'JS'],
    githubLink: 'https://github.com/zakattack9/Lanakila-Meals-on-Wheels-Project',
    projectLink: 'https://zakattack9.github.io/Lanakila-Meals-on-Wheels-Project/index.html',
    imageUrls: ['images/projects/lanakila1.png', 'images/projects/lanakila2.png', 'images/projects/lanakila3.png'],
    year: 2018,
    role: 'Full Stack',
    colors: {
      header: '#15A280',
      text: '#dd7f26',
      textShadow: '#a75a13',
      border: '#06ac85',
      borderShadow: '#058d6d',
    }
  },
  {
    id: 3,
    name: "Power Outage Tracker",
    shortDesc: "Tracks facilities for risk of power outages",
    fullDesc: "Helps track the risk of multiple facilities undergoing a power outage through a nice graphical visualization using D3.js.\n\nPower outage risk and status is determined through a combination of factors including data from PowerOutage API, user submitted outage reports, and the latest weather data in the area.",
    techStack: ['React', 'D3.js', 'AWS', 'CSS'],
    githubLink: 'https://github.com/zakattack9/SF-Hack',
    projectLink: 'https://github.com/zakattack9/SF-Hack',
    imageUrls: ['images/projects/power1.png', 'images/projects/power2.png', 'images/projects/power3.png'],
    year: 2019,
    role: 'Full Stack',
    colors: {
      header: '#FF1973',
      text: '#FFB200',
      textShadow: '#aa7905',
      border: '#c20654',
      borderShadow: '#940641',
    }
  },
  {
    id: 4,
    name: "Zak Sakata Photos",
    shortDesc: "My photography and videography portfolio",
    fullDesc: "Personal website showcasing my photography and videography portfolio. It’s built with various libraries including AOS, Masonry.js, and TwentyTwenty.\n\nThe site is deployed in a static AWS S3 bucket with the contact page using DynamoDB to store contact messages and AWS SNS to push out notifications to my devices.",
    techStack: ['Bootstrap', 'jQuery', 'HTML', 'AWS'],
    githubLink: 'https://github.com/zakattack9/photos.zaksakata.com',
    projectLink: 'https://photos.zaksakata.com',
    imageUrls: ['images/projects/zak1.png', 'images/projects/zak2.png', 'images/projects/zak3.png'],
    year: 2018,
    role: 'Full Stack',
    colors: {
      header: '#9F45FF',
      text: '#ff682c',
      textShadow: '#cc3c02',
      border: '#7a1af7',
      borderShadow: '#6b24c7',
    }
  },
  {
    id: 5,
    name: "Chroma Vibez",
    shortDesc: "Finds Spotify playlists based off mood and color",
    fullDesc: "A unique twist on music and color, with the driving thought of what color would sound like?\n\nUsers can upload any picture that is then processed through a color recognition algorithm that helps Chroma Vibez determine what Spotify playlist to return based off the mood and colors of the picture uploaded.",
    techStack: ['Spotify', 'HTML', 'CSS', 'JS'],
    githubLink: 'https://github.com/zakattack9/chromaVibez',
    projectLink: 'https://zakattack9.github.io/chromaVibez/index.html',
    imageUrls: ['images/projects/chroma1.png', 'images/projects/chroma2.png', 'images/projects/chroma3.png'],
    year: 2017,
    role: 'Front End',
    colors: {
      header: '#16D1E4',
      text: '#0785fc',
      textShadow: '#0078bd',
      border: '#16D1E4',
      borderShadow: '#0a6974',
    }
  },
];

export default PROJECT_DATA;