import express from 'express'

const router = express.Router();

router.get("/" ,(req, res) => {
    res.send('Get All Student Details')
})

router.get("/:id" ,(req, res) => {
    res.send('Get Specific  Student Detail')
})

router.put("/:id" ,(req, res) => {
    res.send('Update Specific  Student Detail')
})

router.post("/" ,(req, res) => {
    res.send('Add  Student Details')
})

router.delete("/:id" ,(req, res) => {
    res.send('Delete Student Detail')
})


export default router