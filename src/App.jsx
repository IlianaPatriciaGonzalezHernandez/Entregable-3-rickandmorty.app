
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import image1 from './assets/img/image1.png'
import image2 from './assets/img/image2.png'
import image4 from './assets/img/image4.png'


function App() {

  //para guardar location
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  //paga guardar la sugerencia de la api
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState()

  console.log(searchInput)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })

      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {
    if (e.target.value === '') {
      setSuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="App">

      <section className='card__title__container'>
        <img className='card_image1' src={image1} alt="" />
        <img className='card_img_title' src={image2} alt="" />
        <img className='card_imgage2' src={image4} alt="" />
      </section>

      <form className='card__form' onSubmit={handleSubmit}>

        <input
          id='idLocation'
          className='input-text' placeholder='Enter a number from 1 to 126'
          type="text"
          onChange={handleChange} />

        <button className='card__btn'>Search</button>
        <div className='card__filterList'>
          <FilterList
            suggestedList={suggestedList}
            setSearchInput={setSearchInput} />
        </div>
      </form>
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            <LocationInfo location={location} />

            <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident key={url} url={url} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
