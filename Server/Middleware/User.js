export const emailCheck = (email) => {
  // const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const regex = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/g);
  return email.match(regex);
};

export const passwordCheck = (password) => {
  // Minimum eight characters, at least one letter and one number:
  const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g);
  return password.match(regex);
};

export const nameCheck = (name) => {
  const regex = new RegExp(/[a-zA-Z]{2,}/g);
  return name.match(regex);
};

export const phoneCheck = (phone) => {
  const regex = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g);
  return phone.match(regex);
};

export const registerValidate = async (req, res, next) => {
  try {
    const email = await emailCheck(req.body.email);
    const password = await passwordCheck(req.body.password);
    const name = await nameCheck(req.body.name);
    const phone = await phoneCheck(req.body.phone);

    if (!name && !email && !phone && !password) {
      res.status(400).json({ message: "Please fill in all required fields" });
    } else if (!email) {
      res.status(400).json({ message: "Email is not valid!" });
    } else if (!password) {
      res.status(400).json({
        message:
          "Password minimum eight characters, at least one letter and one number",
      });
    } else if (!name) {
      res.status(400).json({ message: "Username at least two letter" });
    } else if (!phone) {
      res.status(400).json({ message: "Phone is not valid" });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "message: error.message" });
  }
};

export const loginValidate = async (req, res, next) => {
  try {
    const email = await emailCheck(req.body.email);
    const password = await passwordCheck(req.body.password);
    if (!email && !password) {
      res.status(400).json({ message: "Please fill in all required fields" });
    } else if (!email) {
      res.status(400).json({ message: "Email is not valid!" });
    } else if (!password) {
      res.status(400).json({
        message: "Password is not valid",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const orderValidate = () => {};
