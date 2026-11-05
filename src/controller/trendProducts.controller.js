import { getData, setData } from "../helpers/fileData.js"

class TrendProductsController {
    getAll = async (req, res) => {
        try {
            const data = await getData("trendProducts.json")
            res.json(data)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    getId = async (req, res) => {
        try {
            const data = await getData("trendProducts.json")
            const product = data.find(el => el.id == req.params.id)

            if (!product) {
                return res.status(404).json({ message: "Mahsulot topilmadi" })
            }

            res.json(product)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    create = async (req, res) => {
        try {
            const data = await getData("trendProducts.json")

            const newProduct = {
                id: data.length ? data[data.length - 1].id + 1 : 1,
                ...req.body
            }

            data.push(newProduct)
            await setData("trendProducts.json", data)

            res.status(201).json(newProduct)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    update = async (req, res) => {
        try {
            const data = await getData("trendProducts.json")
            const index = data.findIndex(el => el.id == req.params.id)

            if (index === -1) {
                return res.status(404).json({ message: "Mahsulot topilmadi" })
            }

            data[index] = { ...data[index], ...req.body }
            await setData("trendProducts.json", data)

            res.json(data[index])
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    deleteItem = async (req, res) => {
        try {
            const data = await getData("trendProducts.json")
            const newData = data.filter(el => el.id != req.params.id)

            if (data.length === newData.length) {
                return res.status(404).json({ message: "Mahsulot topilmadi" })
            }

            await setData("trendProducts.json", newData)
            res.json({ message: "Mahsulot o'chirildi" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

export default new TrendProductsController()