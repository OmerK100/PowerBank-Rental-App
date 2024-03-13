import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import bcrypt from "bcrypt";
import { object, string, number, date, array } from "yup";
import pkg from "twilio"

const {twilio} = pkg;

var userSchemaRegister = object({
  username: string().required(),
  password: string().min(8).required(),
  phone: string().min(10).max(10).required(),
});

var userSchemaLogin = object({
  username: string().required(),
  password: string().min(8).required(),
});

const userRegisterValidation = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const userLoginValidation = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "inpowerTest",
  password: "12345678",
  port: 5432,
});

db.connect();

const app = express();
const port = 4000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function sendSMS() {

  const client = new twilio('AC75ccb3b021ea084609bea4bc53f02889', '45ad76e4d728b0d65188ba9744dbe5e1');

  client.messages.create({body: 'Hey this is a message', to: '+972533313350', from: '+972533313350'})
  .then(message => {
    console.log(message, "message sent")
  }).catch(err => console.log(err, "message failed"))

}

app.post("/register", userRegisterValidation(userSchemaRegister),  async (req, res) => {
  try {

    console.log(54638543436)

    console.log(req.body)

    console.log(req.body.username)
    console.log(req.body.password)
    console.log(req.body.phone)

    //sendSMS();

    const result = await db.query("SELECT * FROM users");
    var flag = false;
    for (var i = 0 ; i < result.rows.length && flag === false ; i++) {
      if (result.rows[i].phone === req.body.phone) {
        flag = true;
      } else if (result.rows[i].username === req.body.username) {
        flag = true;
      }
    }
    console.log(flag);
    console.log(checkLegitPhone(req.body.phone))
    if (flag === false && checkLegitPhone(req.body.phone)) { // legit

      const hashedPass = await bcrypt.hash(req.body.password, 10);
      await db.query("INSERT INTO users (username, password, phone) VALUES ($1, $2, $3)", [
        req.body.username, hashedPass, req.body.phone
      ]);
      res.sendStatus(200);
    }

    res.sendStatus(200);

  } catch (error) {

  }
});

function checkLegitPhone(phone) {
  if (phone.substring(0, 3) === '050' || phone.substring(0, 3) === '052' || phone.substring(0, 3) === '053' || phone.substring(0, 3) === '054' || phone.substring(0, 3) === '058') {
    for (let i = 3; i < phone.length; i++) {
      if (phone.charAt(i) < '0' || phone.charAt(i) > '9') {
        return false;
      }
    }
    return true;
  }

  return false;
}






app.post("/login", userLoginValidation(userSchemaLogin),  async (req, res) => {
  try {

    console.log(54636)

    console.log(req.body)

    console.log(req.body.username)
    console.log(req.body.password)

    const hashedPass = await bcrypt.hash(req.body.password , 10); 

    let flag = false;
    const result = await db.query("SELECT * FROM users");



    for (let i = 0 ; i < result.rows.length && flag === false ; i++) {
      if (result.rows[i].username === req.body.username && await bcrypt.compare(req.body.password, result.rows[i].password)) {
        flag = true;

        res.sendStatus(200);
        
        //res.render(__dirname + "/views/shop.ejs" , {username: req.session.user, amount: result.rows[i].account_money, message: ""});
      }
    }

    if (flag === false) {
      res.sendStatus(400);
    }
    /*if (flag === false) {
      res.render(__dirname + "/views/fail.ejs" , {message: "Invalid user name or password"});
    }*/




    //sendSMS();

    

  } catch (error) {

  }
});







app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
