const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'isaac.lem@activate.sg',
    subject: 'Thanks for joining us!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'isaac.lem@activate.sg',
    subject: 'Sorry to see you go!',
    text: `It's our lost to see you decided to leave us, ${name}`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}