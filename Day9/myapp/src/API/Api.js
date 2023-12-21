import axios from 'axios'

const URL='https://localhost:3000'
const getuser =()=> axios.get(`${URL}/user`)

export {getuser}