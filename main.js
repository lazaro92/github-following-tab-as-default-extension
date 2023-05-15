const panel2 = document.getElementById('panel-2')
const panel1 = document.getElementById('panel-1')
const btnFeedForYou = document.getElementById('feed-next')
const btnFeedOriginal = document.getElementById('feed-original')

if (panel2 && panel1 && btnFeedForYou && btnFeedOriginal) {
  panel2.setAttribute('hidden', '')
  panel1.removeAttribute('hidden')

  btnFeedForYou.setAttribute('aria-selected', 'false')
  btnFeedOriginal.setAttribute('aria-selected', 'true')
}