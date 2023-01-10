export const endDateCheck = (req, res, next) => {
    let now = new Date();
    let endDate = now.setDate(now.getDate() + req.body.validityTime);
    try {
      if (endDate >= now) {
        next();
      } else {
        res
          .status(500)
          .json({ message: "End date must be more than start date" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  