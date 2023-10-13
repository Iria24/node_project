const express = require("express")
const router = express.Router()
const { postCerveza, getCerveza, updateCerveza, deleteCerveza, getCervezabyName } = require("../controllers/cerveza.controllers")

router.post("/register", postCerveza) // crear//
router.get("/", getCerveza);
router.get("/:nameCerveza", getCervezabyName);
router.put("/update/:id", updateCerveza)
router.delete("/delete/:id", deleteCerveza)





module.exports = router