import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoApi'

const Exchanges = () => {

  const { data: cryptosList, isFetching } = useGetExchangesQuery({});

  console.log(cryptosList)
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges