const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const fs = require('fs')
const auth = JSON.parse(fs.readFileSync('auth.json'));

const app = express()

app.use(history())
app.use(cors())
app.use(bodyParser())
app.use(serveStatic(path.join(__dirname + "/dist")))

app.post('/', (req, res) => {
  if (req.body.gotcha.length) {
    let msg = 'Your message has been sent'
    res.send(msg)
  }
  else {
    let output = ` 
    <p>You have recieved a new message</p>
    <h3>Contact Details<h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.messageBody}</p>`

    console.log(output)

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'mailgun',
      auth: {
        user: auth.user,
        pass: auth.pass
      },
      tls: {
        rejectUnathorized: false
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'Tony Oliver-Paull Contact <tony.paull.dev1@gmail.com>', // sender address
      to: 'toliverpaull@gmail.com', // list of receivers
      subject: 'Portfolio Page Message', // Subject line
      text: "You've recieved a new message!", // plain text body
      html: output
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      let msg = 'Your Message has been sent'
      res.send(msg)
    })
  }
})

const port = process.env.PORT || 5000
app.listen(port)
console.log(`Server started on port ${port}`)
