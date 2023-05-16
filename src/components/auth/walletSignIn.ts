import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'
import { ethers, verifyMessage } from 'ethers'
import session from './../../../@types/express-session/index' // TODO check typescript config

// API KEYS:
const apiKey: string = process.env.ALCHEMY_API_KEY as string
const privateKey: string = process.env.PRIVATE_KEY as string
// Alchemy provider
const alchemyProvider = new ethers.AlchemyProvider('goerli', apiKey)
// Signer
const signer = new ethers.Wallet(privateKey, alchemyProvider)

export const walletSignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // receiving user's data
        const { signature, nonceCode } = req.body

        const message = `***->> Private code :: ${nonceCode} :: Do you wish to sign ? :: ->>`
        // Verify signature with Message
        const address = verifyMessage(message, signature)

        // Validate user signature
        if (!address) {
            throw new Error('Invalid signature')
        }

        // Store data in the session
        req.session.user = {
            address: address,
            signature: signature,
        }

        res.status(200).send('Successfully authenticated')
    } catch (error) {
        console.error(error)
        res.status(401).json({ error: 'Authentication failed' })
    }
}
