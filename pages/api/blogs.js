import * as fs from 'fs';

export default function handler(req, res) {
  fs.readdir('blogdata', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.status(200).json(data)
  });
}
