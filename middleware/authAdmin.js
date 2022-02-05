import { findOne } from "../models/userModel";

const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await findOne({
      _id: req.user.id,
    });
    // Schema Fields role 0 is assigned for Users and role 1 is assigned for admin
    if (user.role === 0)
      return res.status(400).json({ msg: "Admin resources access denied" });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export default authAdmin;
