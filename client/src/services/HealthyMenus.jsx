import axios from 'axios'

const RESR_API_URL = 'http://localhost:8081/healthy_menus'

export const getHealthyMenus = () => axios.get(RESR_API_URL)
 