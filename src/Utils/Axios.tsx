import axios from 'axios'
import React from 'react'

const Instance = axios.create({
    baseURL:'https://fakestoreapi.com/'
})

export default Instance