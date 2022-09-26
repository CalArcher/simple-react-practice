const albumArea = document.querySelector('.new-coins')

const apiUrl = 'https://top-coin.herokuapp.com/api/coindata'

const button = document.querySelector('button')

let numberOfCoins = document.querySelector('#input')

let count = 0
let previousCount = 0

//updates range of the coins array that needs to be appended to DOM
const updateCount = () => {
  previousCount = count
  const current = numberOfCoins.value
  count += Number(current)
  numberOfCoins.value = 0
}

//gets list of coins
const fetchStuff = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const alertNoMore = () => {
  const noMoreCoins = document.querySelector('.no-more')
  noMoreCoins.innerText = 'No more coins'
}

//definite improvements could be made here to make it fetch once, broken into helper functions
const buildData = async () => {
  const coins = await fetchStuff(apiUrl)
  updateCount()
  const lastIdx = count < coins.length - 1 ? count : coins.length - 1

  for (let i = previousCount; i < lastIdx; i++) {
    const coinCont = document.createElement('div')
    coinCont.classList.add('coin-cont')

    const coinImg = document.createElement('img')
    coinImg.src = coins[i].currencyLogo

    const coinName = document.createElement('h2')
    coinName.innerText = coins[i].name

    coinCont.append(coinImg, coinName)
    albumArea.append(coinCont)
  }

  if (count > coins.length - 1) {
    alertNoMore()
  }
}

button.addEventListener('click', buildData)
