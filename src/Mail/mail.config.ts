class ConfigMail {
    public host: any = process.env.HOST_MAIL || 'smtp.mailtrap.io'
    public port: any = process.env.PORT_MAIL || 2525
    public user: any = process.env.AUTH_USER_MAIL || 'b5acc5d7cb254f'
    public password: any = process.env.AUTH_PASSWORD_MAIL || '930bef89c4a717'
}

export default new ConfigMail