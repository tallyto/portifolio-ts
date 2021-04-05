import { Request, Response } from 'express'
import joi from 'joi'
import userSchema from '../schemas/user'
import { handlerValidationError } from '../util/utils'
export default class UserController {

  static async createUser(req: Request, res: Response) {
    const userValidation = joi.object({
      username: joi.string().alphanum().min(4).max(15).required(),
      email: joi.string().email().max(50).required(),
      password: joi.string().alphanum().min(4).max(15).required(),
    })

    try {
      userValidation.validateAsync(req.body, { abortEarly: false }).catch(error => {
        res.status(401).json({
          message: handlerValidationError(error)
        })
      })
      const user = await userSchema.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: 'internal server error'
      })
    }

  }
}