import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogdata")
  
    // itterate the data from the directory using for loop
    let myfile;
    let alldata=[];
    for (let i = 0; i < data.length; i++) {
        let file = data[i];
        let myfile = await fs.promises.readFile((`blogdata/${file}`),('utf-8'));
        alldata.push(JSON.parse(myfile));
    }   
    res.status(200).json(alldata);
  }