export const createExampleElement = (index: number, name: string, value: string) => {
  
  const el = document.createElement('div')
  
  const description = document.createElement('span')
  description.innerText = `${index}. ${name}`
  description.style.paddingRight = '20px'
  description.style.display = 'inline-block'
  description.style.width = '200px'

  const result = document.createElement('span')
  result.innerText = ''
  result.style.paddingLeft = '50px'

  const button = document.createElement('button')
  button.innerText = 'Run'
  button.onclick = () => {
    result.innerText = value
  }

  el.appendChild(description)
  el.appendChild(button)
  el.appendChild(result)
  el.appendChild(document.createElement('br'))
  el.appendChild(document.createElement('br'))
  
  return el
}