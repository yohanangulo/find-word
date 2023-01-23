const input = document.querySelector('input')

input.addEventListener('keyup', () => {
  
  const paragraph = document.querySelector('p')

  const textToSearch = input.value
  const regularExp = new RegExp(textToSearch, 'gi') // g -> not just one match, i -> no case sensitive
  
  let counter = 0
  paragraph.innerHTML = paragraph.innerText.replace(regularExp, match => {
    counter++
    return `<span>${match}</span>`
  })

  const results = document.querySelector('.result_info')
  if (textToSearch.length > 0) {
    results.innerHTML = `Matches: ${counter}`
  } else {
    results.innerHTML = ''
  }
  
})





