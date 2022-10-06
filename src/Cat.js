import { useState } from "react"

const Cat = () => {
  const [dataArray, setDataArray] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const [data, setData] = useState(null)
  const fetchData = async () => {
    for (let i = 0; i < 3; i++) {
      console.log(i)
      const response = await fetch("https://catfact.ninja/fact")
      const data = await response.json()
      console.log(data)

      setData(data)
      setDataArray(...dataArray, data)
      console.log(dataArray)

      //   return data
    }
    setDataLoaded(true)
  }

  //   useEffect(() => {
  //     fetchData() // do something when rendering first time!
  //   }, [])

  return (
    <div>
      {dataLoaded ? (
        <>
          <p>{data.fact}</p>
          <p>{data.fact}</p>
          <p>{data.fact}</p>
          {/* <p>{data.data[1].fact}</p>
          <p>{data.data[2].fact}</p>
          <p>{data.data[3].fact}</p>
          <p>{data.data[4].fact}</p> */}
        </>
      ) : (
        <p>We will have data here... later</p>
      )}

      <button onClick={fetchData}>New fact</button>
    </div>
  )
}

export default Cat
