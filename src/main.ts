import { Invoice } from './Invoice'
import { Remittance } from './Remittance'
import { Output } from './Ui'

const invoiceDate = document.querySelector('.invoice-date') as HTMLInputElement
const invoiceDetails = document.querySelector('.invoice-details') as HTMLInputElement
const invoiceAmount = document.querySelector('.invoice-amount') as HTMLInputElement
const invoiceForm = document.querySelector('.invoice-section') as HTMLFormElement
const invoiceList = document.querySelector('.invoice-list') as HTMLUListElement

const remittanceDate = document.querySelector('.remittance-date') as HTMLInputElement
const remittanceDetails = document.querySelector('.remittance-details') as HTMLInputElement
const remittanceAmount = document.querySelector('.remittance-amount') as HTMLInputElement
const remittanceForm = document.querySelector('.remittance-section') as HTMLFormElement
const remittanceList = document.querySelector('.remittance-list') as HTMLUListElement

const invoiceOutput = new Output(invoiceList)
const remittanceOutput = new Output(remittanceList)

invoiceForm.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number]
  values = [invoiceDate.value, invoiceDetails.value, invoiceAmount.valueAsNumber]

  let invoice = new Invoice(...values)

  invoiceOutput.render(invoice)
})

remittanceForm.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number]
  values = [remittanceDate.value, remittanceDetails.value, remittanceAmount.valueAsNumber]

  let remittance = new Remittance(...values)

  remittanceOutput.render(remittance)
})
