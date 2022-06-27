import { UserModel } from '../models/UserModel.js'

export const getUsers = async (req, res) => {
  try {
    // create sample

    // const user = new UserModel({
    //   username: 'test',
    //   password: 'test',
    //   email: 'test'
    // })
    // user.save()

    // --------------------------------------------------------

    const users = await UserModel.find()

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}