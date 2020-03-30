import { useEffect, useState } from 'react'

export const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErrorMessage(err.message)
    )
  }, [])

  return [lat, errorMessage]
}