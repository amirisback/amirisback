// const fs = require('fs');
const server1 = "https://amirisback.github.io/"; // server1
const server2 = "https://xeonidas-xcreator.github.io/"; // server2

class Endpoind {
  base_url; 
  social_media; 
  link;
  
  constructor(base_url, social_media, link) {
    this.base_url = base_url;
    this.social_media = social_media;
    this.link = link;
  }

}

const endpoint1 = new Endpoind(server1, "Github", "");
const endpoint2 = new Endpoind(server2, "Github", "");

const data = [endpoint1, endpoint2];
const json = JSON.stringify(data);

// fs.writeFileSync('data/baru.json', json, 'utf8');
// const rand = Math.floor(Math.random() * data.length)

console.log(json)