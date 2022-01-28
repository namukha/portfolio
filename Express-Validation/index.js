// const express = require('express');
// const app = express();
// const port = 3002;
// app.use(express.json());
// app.use(express.static('public'));

// // RegEx
// const ageVal = /[0-9]{1,2}/;
// const numVal = /^[0-9]{8}$/ ;
// const nameVal = /^[A-Z][a-z]{2,25}/;
// const mailVal = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]*/;
// const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


// app.post("/register", (req, res) => {
//     const data = req.body;
//     const validAge = ageVal.test(data.age)
//     const validNum = numVal.test(data.num)
//     const validName = nameVal.test(data.name)
//     const validMail = mailVal.test(data.mail)
//     const validPass = passVal.test(data.password)
//     if( validAge & validNum & validName & validMail & validPass ) {
//         const arr = [data.name, data.age, data.num, data.mail, data.password]
//         res.send(arr)
//     }
// })

// app.listen(port, () => {
//     console.log((`Example app listening at http://localhost:${port}`));
// })

const express = require('express')
const { body, validationResult } = require('express-validator')

const app = express();
app.use(express.json());
const port = 3002;


const validate = () => {
    return [
        body("name").not().isEmpty(),
        body("email")
            .isEmail()
            .custom((value) => {
                if (!value.includes("mstars")) throw new Error("Not Appropriate email!");
                return true;
            }),
        body("phone").isNumeric().isLength({ min: 8, max: 20 }),
        body("password")
            .isLength({ min: 6, max: 12 })
            .withMessage("Must be at least 6 chars long")
    ]
}

app.post(
    '/register',
    validate(),
    (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array })
        } else {
            res.json({
                success: true
            })
        }
    })

app.post(
    "/sanitize",
    body("type").replace(["js"], "javascript"),
    body("username").toLowerCase(),
    body("extension").default("png"),
    body("trimMe").trim(),
    (req, res) => {
        const data = req.body;
        res.json({
            success: true,
            data: data,
            message: "Successfully Recieved data",
        })
    }
)

app.listen(port)