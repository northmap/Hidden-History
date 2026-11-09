
const config = {
    style: "mapbox://styles/jbamford/cl7ylpomb007715qotuwdm3gy",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "data.csv",
    center: [-6.438,55.233], //Lng, Lat
    zoom: 12.7, //Default zoom
    pitch: 5,
   
    title: "",
    sideBarInfo: ["Title/Name", "Theme"],
    popupInfo: ["Title/Name",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Theme",
            listItems: ["Industry & Farming", "Tourism", "Local Figures & Memories", "Cultural/Folklore or Placenames", "Maritime Heritage", "Built Heritage", "Natural Heritage/Geology"]
        }
    ]

};
