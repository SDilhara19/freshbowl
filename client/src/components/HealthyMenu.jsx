import React, { useEffect, useState } from 'react'
import { getHealthyMenus } from '../services/HealthyMenus'

const HealthyMenu = () => {

    const [healthyMenus, setHealthyMenus] = useState([])

    useEffect(() => {
        getHealthyMenus().then((response) => {
            setHealthyMenus(response.data)
        }).catch((error) => {
            console.error('Error:', error)
        })
    }, [])

  return (
    <div>
        <h1>{healthyMenus}</h1>
        <h2>Healthyfv Menu</h2>
    </div>
  )
}

export default HealthyMenu