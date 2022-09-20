# Earthquake API!

The api used was https://earthquake.usgs.gov/

## QUERY #1 Top 5 earthquakes with the biggest magnitudes in Japan in 2022. 

To know the location of Japan, I used the rectangle parameters, and with google maps, I was able to identify the minimum and maximum latitude and longitude (+-0.05 degrees).
Since I am collecting the date from 2022, the result may change if an earthquake happens between the submission date and the date you test the API. (If I limit the date my query would not be of 2022 but just half of the year).


### QUERY : 
https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01 01&minlatitude=31.3&maxlatitude=45.45&minlongitude=130&maxlongitude=146.8&limit=5&orderby=magnitude)

## QUERY #2 The low earthquakes in Hawaii in 2020: alert level green, max magnitude of 3.5, max depth of 70km and within a 300km radius, ordering by date ascending.

Usually, to qualify an earthquake as low, they should have a magnetite of 3.5 or less and depth of maximum 70km, therefore these were the parameters used.

### QUERY : 

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-12-31&latitude=19.741755&longitude=-155.844437&maxradiuskm=300&alertlevel=green&maxdepth=70&maxmagnitude=3.5&orderby=time-asc





