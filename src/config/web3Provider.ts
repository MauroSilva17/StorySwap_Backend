import * as dotenv from 'dotenv'

interface Iweb3Provider {
    contractAddress: string
    apiKey: string
    privateKey: string
}

export const web3Provider: Iweb3Provider = {
    contractAddress: process.env.CONTRACT_ADRESS as string,
    apiKey: process.env.ALCHEMY_API_KEY as string,
    privateKey: process.env.PRIVATE_KEY as string,
}
