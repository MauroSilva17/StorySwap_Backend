import UserType from '../../components/user/types/UserType'
import session from 'express-session'

declare module 'express-session' {
    interface SessionData {
        user: {
            address: string
            chainId: string
            signature: string
        }
    }
}
