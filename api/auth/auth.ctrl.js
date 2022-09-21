// https://expressjs.com/en/api.html#res

import Joi from "joi";
import UserSchema from "@SCHEMA/UserSchema";

export const register = (req, res) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).json(result).end();
  }

  res.json(result);
};
export const login = async (ctx) => {};
export const check = async (ctx) => {};
export const logout = async (ctx) => {};
