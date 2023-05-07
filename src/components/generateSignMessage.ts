import { Request, Response, NextFunction } from 'express'

interface IuserToVerify {
    address: string
    rawSignature: string
}
export let userToVerify: IuserToVerify = {
    address: '',
    rawSignature: '',
}

export const generateSignMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { address } = req.body
        const random = Math.floor(Math.random() * 10000000)
        const randomString = random.toString()
        const message = `Message for address: ${address}, with code: ${randomString}`

        // Save user's data to validate on walletSignIn
        userToVerify = {
            address: address,
            rawSignature: message,
        }

        res.json({ message })
    } catch (error) {
        res.status(500).json({ error: 'Signing message generation failed' })
    }
}
