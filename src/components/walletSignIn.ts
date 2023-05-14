import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'
import { ethers, verifyMessage } from 'ethers'
import session from './../@types/express-session/index'

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
        const { address, chainId, signature, message } = req.body

        // Verify signature with Message
        const recoveredAddress = verifyMessage(message as string, signature)
        const isValidSignature = recoveredAddress === address

        // Validate user signature
        if (!isValidSignature) {
            throw new Error('Invalid signature')
        }

        // TODO:  --## Check session types ##--
        // Store user data in the session

        req.session.user = {
            address: address,
            chainId: chainId,
            signature: signature,
        }

        res.status(200).send('Successfully authenticated')
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed' })
    }
}
