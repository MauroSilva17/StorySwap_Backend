import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'
import { ethers, verifyMessage } from 'ethers'

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

        // test
        const secretCode = process.env.SIGNATURE_KEY as string
        const secretSignature = `Message for address: ${address} and chain ${chainId} with code: ${secretCode}`
        //

        // Verify signature with Message
        const recoveredAddress = verifyMessage(secretSignature as string, signature)
        const isValidSignature = recoveredAddress === address

        // Validate user signature
        if (!isValidSignature) {
            throw new Error('Invalid signature')
        }

        res.cookie(
            'user',
            {
                address: address,
                chainId: chainId,
                signature: signature,
            },
            {
                httpOnly: true,
                secure: false, // set to true in production
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24,
            },
        )
        // TODO:  --## Check session types ##--
        // // Store user data in the session
        // req.session.user = {
        //     address: address,
        //     chainId: chainId,
        //     signature: signature,
        // }

        res.status(200).send('Successfully authenticated')
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed' })
    }
}
