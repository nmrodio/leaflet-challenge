# *leaflet-challenge* #
-------------------------

## **Project Goal:** ##
* This project aims to develop an interactive map to visualize earthquake data provided by the United States Geological Survey (USGS). The USGS is a critical government agency responsible for monitoring and understanding natural hazards like earthquakes. This visualization tool will empower the USGS to effectively communicate earthquake patterns and educate the public and policymakers. This interactive map will be a valuable asset for the USGS to raise public awareness about earthquakes, their impact, and the importance of preparedness.

## **Key Features / Elements of The Map:** ##
* **Data Source:** Leverages real-time earthquake data from USGS GeoJSON feeds, ensuring users have access to the latest information.

* **Interactive Map:** Utilizes Leaflet.js to create a user-friendly map where earthquake locations are plotted based on latitude and longitude.

* **Magnitude and Depth Visualization:** Marker size reflects earthquake magnitude, providing an immediate visual representation of the earthquake's strength. Marker color is linked to earthquake depth, with darker colors indicating deeper earthquakes.

* **Informative Popups:** Clicking on a marker reveals detailed information about the specific earthquake, including magnitude, depth, location, and time.

* **Legend:** Provides a clear explanation of marker color scales, enhancing usability and data interpretation.

----------

## **Interactive Map Layout:** ##

### **Map** ###
![Screenshot 2024-05-20 100132](https://github.com/nmrodio/leaflet-challenge/assets/157527614/04b1d6fb-0ef8-4d41-9bbb-5a64971da770)


### **Informative Popups** ###
![Screenshot 2024-05-20 100514](https://github.com/nmrodio/leaflet-challenge/assets/157527614/5407733c-d063-4b28-b39c-7ea42962ea57)

### **Legend** ###
![Screenshot 2024-05-20 100537](https://github.com/nmrodio/leaflet-challenge/assets/157527614/4ab39ac7-ea6f-4f9e-8ae9-54fe9b412111)

-------------------

## **How does the code work?** ##
### *logic.js* ###

**Map Setup:**
1. Creates a Leaflet map centered on specific coordinates (adjustable).
2. Adds a base layer using OpenStreetMap tiles.

**Data Acquisition:**
1. Defines the URL for USGS earthquake data feed in GeoJSON format (changeable for different datasets).
2. Uses D3.js to fetch the earthquake data as JSON.

**Earthquake Marker Styling:**
1. Defines a function "earthquakeMarkerColors" to assign colors based on earthquake depth.
2. Colors range from green (shallow) to red (deep).

**Earthquake Marker Creation:**
1. Loops through each earthquake in the fetched data.
2. Extracts latitude, longitude, and depth from the GeoJSON features.
3. Creates circle markers using Leaflet, positioning them based on extracted coordinates.
* Sets marker properties:
4. Fill color determined by depth using the "earthquakeMarkerColors" function.
5. Radius scaled based on earthquake magnitude (larger magnitude = larger radius).
* Popups for Markers:
6. Binds a popup to each marker displaying location, magnitude, and depth information.

**Legend Creation:**
1. Defines a legend control positioned in the bottom right corner of the map.
2. Creates a legend element listing depth ranges and corresponding colors.
3. Dynamically adds HTML elements to the legend for each depth range and color.
4. Adds the created legend to the Leaflet map for visualization.

-----

### *style.css* ###

**Map Size:**
1. "height: 100%" ensures that the map occupies 100% of the screen 

**Defines styles for the legend:**
1. Text color set to black (#555).
2. Padding and font weight applied.
3. White background with slight transparency (opacity of 0.8).
4. Adds a subtle shadow effect.
5. Rounded corners with a 5px radius.

**Legend Icon Styling:**
1. Styles icons within the legend (.legend i class):
2. Sets them to float left for horizontal positioning.
3. Defines dimensions (width and height) for the icons.
4. Adds a margin to the right of each icon.

