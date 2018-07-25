import express from 'express'
import authCtrl from '../controllers/auth.controller'
import wellstatusCtrl from '../controllers/wellstatus.controller'

const router = express.Router()

//routes for all wellstatuse
router.route("/api/wellstatus")
    .get(wellstatusCtrl.findAll)
    .post(wellstatusCtrl.create);

// obviously by id
router.route("/api/wellstatus/:id")
    .get(wellstatusCtrl.findById)
    .put(wellstatusCtrl.update)
    .delete(wellstatusCtrl.remove);

    
// router.param('id', wellstatusCtrl.wellstatusId);

export default router;