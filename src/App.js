import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import  "./app.css";

const query1_API = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&minlatitude=31.3&maxlatitude=45.45&minlongitude=130&maxlongitude=146.8&limit=5&orderby=magnitude";
const query2_API = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-12-31&latitude=19.741755&longitude=-155.844437&maxradiuskm=300&alertlevel=green&maxdepth=70&maxmagnitude=3.5&orderby=time-asc";


const App = () =>{

    // Query One variables
    const [stateOne, setStateOne] = useState(true);
    const [resultOne, setResultOne] = useState([]);
    const [counter, setCounter] = useState(1);

    //Query Two variables

    const [stateTwo, setStateTwo] = useState(true);
    const [resultTwo, setResultTwo] = useState([]);
    const [counterTwo, setCounterTwo] = useState(1);

    const fetchDataQueryOne = async () => {
    const response = await fetch(`${query1_API}`)

    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }


  const fetchDataQueryTwo = async () => {
    const response = await fetch(`${query2_API}`)

    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }

  useEffect(() => {
    fetchDataQueryOne()
      .then((res) => {
        setResultOne(res.features)
        console.log(res.features)
        setStateOne(false);
      })
      .catch((e) => {
        console.log(e.message)
      })

      fetchDataQueryTwo()
      .then((res) => {
        setResultTwo(res.features)
        console.log(res.features)
        setStateTwo(false);
      })
      .catch((e) => {
        console.log(e.message)
      })


  }, [])


    return (

        
        <div className="container">

            <h1> Assigment #1 : API_Earthquake</h1>

            <h2> Query 1 : Top 5 earthquakes with the biggest magnitudes in Japan in 2022. </h2>
            
            <div className="result">
                {stateOne  ? (
                    <h2 className="loading">loading..</h2>
                ):(
                    
                    resultOne.map((item, count)=>(
                        <>
                        <div className="response">
                            <h2 className="title-position"> # {count+1}</h2>

                            <h3 className="title-response">Place : {item.properties.place} </h3>
                            <h3 className="title-response">Magnitude : {item.properties.mag} </h3>
                            <h3 className="title-response">Alert level : {item.properties.alert} </h3>
                            <h3 className="title-response">Latitude : {item.geometry.coordinates[0]} </h3>
                            <h3 className="title-response">Longitude : {item.geometry.coordinates[1]} </h3>

                        </div>
                        </>
                       
                    ))
                )}
            </div>

            <h2> QUERY #2 The low earthquakes in Hawaii in 2020: alert level green, max magnitude of 3.5, max depth of 70km and within a 300km radius, ordering by date ascending.</h2>

            <div className="result">

                {stateTwo ? (
                    <h2 className="loading">loading...</h2>
                ) : (
                    resultTwo.map((item, count) =>(
                        <>
                        <div className="response">
                        <h2 className="title-position"> # {count+1}</h2>
                        <h3 className="title-response">Place : {item.properties.place} </h3>
                        <h3 className="title-response">Magnitude : {item.properties.mag} </h3>
                        <h3 className="title-response">Alert level : {item.properties.alert} </h3>
                        <h3 className="title-response">Latitude : {item.geometry.coordinates[0]} </h3>
                        <h3 className="title-response">Longitude : {item.geometry.coordinates[1]} </h3>
                        </div>
                        </>
                        
                    ))
                    
                )}

            </div>
       
        </div>
    );
}

export default App;