import config from './config.json'

interface IEnvironment {
    express: {
        port: number
    }
}

class Environment {
    config: IEnvironment

    constructor() {
        this.config = config
    }
}

export default new Environment().config
