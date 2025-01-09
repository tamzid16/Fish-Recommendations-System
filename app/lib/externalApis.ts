export async function getMarketData(species: string) {
  const response = await fetch(`https://www.fishwatch.gov/api/species/${species}`)
  const data = await response.json()
  return data[0]
}

export async function getEnvironmentalData(lat: number, lon: number) {
  const response = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=8454000&product=water_temperature&units=metric&time_zone=gmt&application=fish_recommendations&format=json&lat=${lat}&lon=${lon}`)
  const data = await response.json()
  return data.data[0]
}

