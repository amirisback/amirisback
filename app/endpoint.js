const server1 = 'https://amirisback.github.io/'
const server2 = 'https://xeonidas-xcreator.github.io/'

const data = [
    {
        base_url: server1,
        social_media: "",
        link: ""
    },
    {
        base_url: server2,
        social_media: "",
        link: "" 
    }      
]

const rand = Math.floor(Math.random() * data.length)
console.log(data[rand])