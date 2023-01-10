import axios from "axios";

//SEND EMAIL REGISTER
export const SendEmailRegister = async ({ name, email, phone, setSend }) => {
  try {
    const datas = { name, email, phone };
    let res = await axios.post(`http://localhost:5000/registersend`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
