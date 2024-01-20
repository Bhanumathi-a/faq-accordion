const faqHeader = document.querySelectorAll('.faq-header')

faqHeader.forEach((faqHeader) => {
  faqHeader.addEventListener('click', (e) => {
    faqHeader.classList.toggle('active')
    const faqBody = faqHeader.nextElementSibling
    if (faqHeader.classList.contains('active')) {      
      faqBody.classList.add('block')
    } else {     
      faqBody.classList.remove('block')
    }
  })
})
