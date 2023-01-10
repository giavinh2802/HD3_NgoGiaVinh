import nodemailer from "nodemailer";

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "gmail", //i use outlook
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// SEND EMAIL
const EmailRegisterSender = ({ name, email, phone }) => {
  const options = {
    from: `PandaSneakerShop 🛍️ <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message From PandaSneakerShop",
    html: `
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
      <div style="width: 100%; background-color: #349eff; padding: 20px 0">
      <a href="${process.env.CLIENT_URL}" ><img
          src="https://res.cloudinary.com/drdfg8wp1/image/upload/v1670389884/LogoSneaker_o0pmhg.png"
          style="width: 100%; height: 70px; object-fit: contain"
        /></a> 
      
      </div>
      <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
          Sign Up Successfully !!!
        </p>
        <p style="font-weight: 700; font-size: 1rem; padding: 0 30px">
        Thank you!
    
        Thanks for signing up. Welcome to our shop. We are happy to have you on board.
      </p>
        <div style="font-size: .8rem; margin: 0 30px">
          <p>Your UserName: <b>${name}</b></p>
          <p>Your Email: <b>${email}</b></p>
          <p>Your Phone: <b>${phone}</b></p>
        </div>
        <div style="font-weight: 700; font-size: .8rem; margin: 0 30px">
          <p>Why don’t you follow us on our social media as well?</b></p>
          <div href="${process.env.CLIENT_URL} style=" display:flex;flex-direction:row font-weight: 700; font-size: .4rem; margin: 0 30px>
              <a href="${process.env.CLIENT_URL}" ><img style="width: 40px; height: auto" src="https://res.cloudinary.com/drdfg8wp1/image/upload/v1670389884/LogoSneaker_o0pmhg.png"
              style="width: 100%; height: 60px; object-fit: contain"
              /></a> 
          </div>
        </div>
        </div>
      </div>
        `,
  };

  Email(options);
};

export default EmailRegisterSender;
