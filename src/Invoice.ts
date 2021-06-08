import { ReturnValue } from './ReturnValue'

export class Invoice implements ReturnValue {
  constructor(
    readonly date: string,
    readonly details: string,
    readonly amount: number
  ){}

  returnVal() {
    return `${this.date}: ${this.amount} is owed to ${this.details}`
  }
}