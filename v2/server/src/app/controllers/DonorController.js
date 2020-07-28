import * as Yup from 'yup'
import Donor from '../../app/models/Donor'

class DonorController {
    async index(req, res) {
        const donors = await Donor.findAll({
            attributes: ['id', 'name', 'email', 'blood']
        })

        return res.json(donors)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            blood: Yup.string().required()
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' })
        }

        const { id, name, email, blood } = await Donor.create(req.body)

        return res.json({
            id,
            name,
            email,
            blood
        })
    }
}

export default new DonorController()