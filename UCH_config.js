
const config = {
    style: "mapbox://styles/jbamford/cl7ylpomb007715qotuwdm3gy",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "27744145-ae97-4724-afaa-408169578b05.usrfiles.com/ugd/277441_7b442e86198f4b0c933a049db2fec1f2.csv",
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
