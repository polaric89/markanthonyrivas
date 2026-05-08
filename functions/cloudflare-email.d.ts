declare module 'cloudflare:email' {
  class EmailMessage {
    constructor(from: string, to: string, raw: string)
  }
  export { EmailMessage }
}
