# Earthquake API!



## QUERY #1 Top 5 earthquakes with the biggest magnitudes in Japan in 2022. 

To know the location of Japan, I used the rectangle parameters, and with google maps, I was able to identify the minimum and maximum latitude and longitude (+-0.05 degrees).
Since I am collecting the date from 2022, the result may change if an earthquake happens between the submission date and the date you test the API. (If I limit the date my query would not be of 2022 but just half of the year).


### QUERY : 
https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&minlatitude=31.3&maxlatitude=45.45&minlongitude=130&maxlongitude=146.8&limit=5&orderby![image](https://user-images.githubusercontent.com/96051289/191340467-1460f0d5-509a-41e1-9072-8654b09300a6.png)
=magnitude)

