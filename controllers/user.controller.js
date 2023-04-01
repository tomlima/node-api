import * as user from '../models/user.model.js'
import { hashSync, genSaltSync } from 'bcrypt'

/*----------------------------
Create a new user
----------------------------*/
export async function createUser(req, res) {
  try {
    req.body.password = hashSync(body.password, genSaltSync(10))
    const result = user.createUser(req.body)
    return res.status(200).json({
      success: 1,
      data: result
    })
  } catch (err) {
    return res.status(500).json({
      success: 0,
      message: err
    })
  }
}

/*----------------------------
Get all users
----------------------------*/
export async function getUsers(req, res) {
  try {
    const result = await user.getUsers()
    return res.json({
      success: 1,
      data: result
    })
  } catch (err) {
    return res.status(500).json({
      success: 0,
      message: err
    })
  }
}

/*----------------------------
Update a user
----------------------------*/
export async function updateUser(req, res) {
  try {
    const user = await user.getUserById(req.params.id)
    if (req.body.password !== '') {
      req.body.password = hashSync(req.body.password, genSaltSync(10))
    }
    const result = await user.updateUser(req.params.id, req.body)
    return res.json({
      success: 1,
      data: result
    })
  } catch (err) {
    return res.status(500).json({
      success: 0,
      message: err
    })
  }
}

/*----------------------------
Delete a user
----------------------------*/
export async function deleteUser(req, res) {
  try {
    const result = await user.deleteUser(req.params.id)
    return res.json({
      success: 1,
      data: result
    })
  } catch (err) {
    return res.status(500).json({
      success: 0,
      message: err
    })
  }
}