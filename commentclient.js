import sqlite3 from "sqlite3";
const buggyclient = Object.create(null);
buggyclient.init = function(name, comment) {


    let db = new sqlite3.Database('./db/buggycommentstest.sqlite', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the subscribers SQlite database.');
      });
    
    let sql = `SELECT * FROM comment`;
    let ins = `INSERT INTO comment(name, comment) VALUES('${name}', '${comment}')`;
    const namearray = [];
    const commentarray = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row, row2) => {
        //   console.log(row.name);
        //   console.log(row.comment);
          namearray.push(row.name);
          commentarray.push(row.comment);
        });
    });
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Closed the database connection.');
      });
    // console.log([namearray, commentarray]);
    return [namearray, commentarray];
};



export default Object.freeze(buggyclient);