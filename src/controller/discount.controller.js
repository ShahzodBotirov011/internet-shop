import { getData, setData } from "../helpers/fileData.js"

class DiscountController {
    async getAll(req, res) {
        try {
            const discounts = await getData('discount.json')
            return res.status(200).json({
                success: true,
                data: discounts
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async getId(req, res) {
        try {
            const discounts = await getData('discount.json')
            const id = +req.params.id
            const discount = discounts.find(el => el.id === id)

            if (!discount) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            return res.status(200).json({ success: true, data: discount })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async create(req, res) {
        try {
            const discounts = await getData('discount.json')
            const newDiscount = {
                ...req.body,
                id: discounts.length ? discounts.at(-1).id + 1 : 1
            }

            discounts.push(newDiscount)
            await setData('discount.json', discounts)

            return res.status(201).json({
                success: true,
                message: "Chegirma qo'shildi",
                data: newDiscount
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async update(req, res) {
        try {
            const id = +req.params.id
            const discounts = await getData('discount.json')
            const index = discounts.findIndex(el => el.id === id)

            if (index === -1) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            discounts[index] = { ...req.body, id }
            await setData('discount.json', discounts)

            return res.status(200).json({
                success: true,
                message: "o'zgartirildi",
                data: discounts[index]
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async deleteItem(req, res) {
        try {
            const id = +req.params.id
            const discounts = await getData('discount.json')
            const index = discounts.findIndex(el => el.id === id)

            if (index === -1) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            discounts.splice(index, 1)
            await setData('discount.json', discounts)

            return res.status(200).json({
                success: true,
                message: "o'chirildi"
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }
}

export default new DiscountController()