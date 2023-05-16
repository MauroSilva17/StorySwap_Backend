import UserType from '@user/types/UserType'

declare module 'express-session' {
    interface SessionData {
        user: UserType
    }
}
