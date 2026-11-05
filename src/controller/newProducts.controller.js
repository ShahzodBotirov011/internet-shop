import { getData, setData } from "../helpers/fileData.js"

class NewProductsController {
    async getAll(req, res) {
        try {
            const products = await getData('newProducts.json')

            return res.status(200).json({
                success: true,
                data: products
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async getId(req, res) {
        try {
            const products = await getData('newProducts.json')
            const id = +req.params.id
            const product = products.find(el => el.id === id)

            if (!product) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            return res.status(200).json({ success: true, data: product })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async create(req, res) {
        try {
            const products = await getData('newProducts.json')
            const newProduct = {
                ...req.body,
                id: products.length ? products.at(-1).id + 1 : 1
            }

            products.push(newProduct)
            await setData('newProducts.json', products)

            return res.status(201).json({
                success: true,
                message: "Yangi mahsulot qo'shildi",
                data: newProduct
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async update(req, res) {
        try {
            const id = +req.params.id
            const products = await getData('newProducts.json')
            const index = products.findIndex(el => el.id === id)

            if (index === -1) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            products[index] = { ...req.body, id }
            await setData('newProducts.json', products)

            return res.status(200).json({
                success: true,
                message: "o'zgartirildi",
                data: products[index]
            })
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ success: false, message: "Serverda xatolik" })
        }
    }

    async deleteItem(req, res) {
        try {
            const id = +req.params.id
            const products = await getData('newProducts.json')
            const index = products.findIndex(el => el.id === id)

            if (index === -1) {
                return res.status(404).json({ success: false, message: "topilmadi" })
            }

            products.splice(index, 1)
            await setData('newProducts.json', products)

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

export default new NewProductsController()