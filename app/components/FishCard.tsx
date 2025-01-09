'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fish } from '../lib/fishDatabase'
import { getMarketData, getEnvironmentalData } from '../lib/externalApis'

export default function FishCard({ fish }: { fish: Fish }) {
  const [marketData, setMarketData] = useState<any>(null)
  const [environmentalData, setEnvironmentalData] = useState<any>(null)

  useEffect(() => {
    getMarketData(fish.name).then(setMarketData)
    getEnvironmentalData(40.7128, -74.0060).then(setEnvironmentalData) // Example coordinates for New York City
  }, [fish.name])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{fish.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Scientific Name:</strong> {fish.scientificName}</p>
        <p><strong>Environment:</strong> {fish.environment}</p>
        <p><strong>Size:</strong> {fish.size} cm</p>
        <p><strong>Sustainability Index:</strong> {fish.sustainabilityIndex}/10</p>
        {marketData && (
          <div>
            <h3 className="font-bold mt-4">Market Data</h3>
            <p><strong>Availability:</strong> {marketData.Availability}</p>
            <p><strong>Price:</strong> {marketData.Price}</p>
          </div>
        )}
        {environmentalData && (
          <div>
            <h3 className="font-bold mt-4">Environmental Data</h3>
            <p><strong>Water Temperature:</strong> {environmentalData.v}°C</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

