https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react

async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);



let nodemailer = Nodemailer;
    
  async function wrapedSendMail(mailOptions){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: 'Gmail',
            auth: {
              type: 'OAuth2',
              user: "dhirajindurthy",
              accessToken: "AIzaSyD0kc3uHWoyW22eJki8RW0g7xYMzVc1FGE"
              //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
            }
        });

        mailOptions = {
            from: "youremail@gmail.com",
            to: "dhirajindurthy@gmail.com",
            subject: "Sending Email using Node.js",
            text: "That was easy!"
          };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log("error is "+error);
               resolve(false); // or use rejcet(false) but then you will have to handle errors
            } 
           else {
               console.log('Email sent: ' + info.response);
               resolve(true);
            }
        });


        });

        let resp= await wrapedSendMail(mailOptions);
        // lo or process resp;
         return resp;
   }

wrapedSendMail();