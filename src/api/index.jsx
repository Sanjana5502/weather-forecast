const baseURL ="https://api.weatherapi.com/v1/current.json?key=cb4f894c332b4f148dc144042243103";

export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${baseURL}&q=${city}&api=yes`)
    return await response.json();
};

export const getWeatherDataLocation = async (lat, lon)=>{
    const response = await fetch(`${baseURL}&q=${lat},${lat}&api=yes`)
    return await response.json();
};