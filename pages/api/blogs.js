import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogdata")
    res.status(200).json(data);












    
  // fs.readdir('blogdata', function (err,data) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   res.status(200).json(data)
  // });
}
