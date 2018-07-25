import Wellstatus from '../models/wellstatus.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'

const create = (req, res) => {
    const wellstatus = new Wellstatus(req.body)
    wellstatus.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Row inserted into database :-|"
      })
    })
  }

  // const findById = (req, res,  id) => {
  //   Wellstatus.findById(id).exec((err, wellstatuses) => {
  //     if (err || !wellstatus)
  //       return res.status('400').json({
  //         error: "User not found"
  //       })
  //     res.json(wells)
  //   //   next()
  //   })
  // }


  export default {
    create
  }
  