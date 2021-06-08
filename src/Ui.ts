import { ReturnValue } from './ReturnValue';

export class Output {
  constructor(
    private container: HTMLUListElement
  ){}

  render(item: ReturnValue) {
    const li = document.createElement('li')
    const text = document.createElement('p')
    text.innerText = item.returnVal()
    li.append(text)
    this.container.prepend(li)
  }
}