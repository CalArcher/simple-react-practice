const albumArea = document.querySelector('.new-coins')

const apiUrl = 'https://top-coin.herokuapp.com/api/coindata'

const button = document.querySelector('button')

let numberOfCoins = document.querySelector('#input')

const fetchStuff = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const buildData = async () => {
  let amount = numberOfCoins.value
  const coins = await fetchStuff(apiUrl)

  for (let i = 0; i < amount; i++) {
    const coinCont = document.createElement('div')
    const coinImg = document.createElement('img')
    coinImg.src = coins[i].currencyLogo
    const coinName = document.createElement('h2')
    coinName.innerText = coins[i].name
    coinCont.append(coinImg, coinName)
    albumArea.append(coinCont)
  }
}

button.addEventListener('click', buildData)
