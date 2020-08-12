const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationController');
const {check} = require('express-validator');

router.get('/',
    locationController.getLocations
);

router.get('/:id',
    locationController.getLocationById
);

router.post('/',
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty(),
        check('area','El área del proyecto es obligatoria').not().isEmpty(),
    ],
    locationController.createLocation
);

router.put('/:id',
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty(),
        check('area','El área del proyecto es obligatoria').not().isEmpty(),
    ],
    locationController.updateLocation
);

router.delete('/:id',
    locationController.deleteLocation
);
module.exports = router;