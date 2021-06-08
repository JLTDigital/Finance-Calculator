import { ReturnValue } from './ReturnValue'

export class Remittance implements ReturnValue {
  constructor(
    readonly date: string,
    readonly details: string,
    readonly amount: number
  ){}

  returnVal() {
    return `${this.date}: ${this.amount} received from ${this.details}`
  }
}