import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'
import { ethers, verifyMessage } from 'ethers'
import { userToVerify } from './generateSignMessage'

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
        const { address, chainId, signature } = req.body

        // Verify signature with Message
        const recoveredAddress = verifyMessage(userToVerify.rawSignature as string, signature)
        const isValidSignature = recoveredAddress === address

        // Validate user signature
        if (!isValidSignature) {
            throw new Error('Invalid signature')
        }

        res.status(200).send('Successfully authenticated')
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed' })
    }
}
