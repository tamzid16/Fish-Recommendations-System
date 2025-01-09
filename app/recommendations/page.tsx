import { getRecommendations } from '../lib/recommendationEngine'
import FishCard from '../components/FishCard'
import SustainabilityInfo from '../components/SustainabilityInfo'

export default function Recommendations({
  searchParams,
}: {
  searchParams: { 
    purpose: string; 
    environment: string; 
    size: string;
    careLevel?: string;
    tankSize?: string;
    waterTemperature?: string;
    waterPH?: string;
  }
}) {
  const { purpose, environment, size, careLevel, tankSize, waterTemperature, waterPH } = searchParams
  const recommendations = getRecommendations({
    purpose,
    environment,
    preferredSize: parseInt(size, 10),
    careLevel,
    tankSize: tankSize ? parseInt(tankSize, 10) : undefined,
    waterTemperature: waterTemperature ? parseFloat(waterTemperature) : undefined,
    waterPH: waterPH ? parseFloat(waterPH) : undefined
  })

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Fish Recommendations</h2>
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map(fish => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </div>
      ) : (
        <p>No recommendations found based on your criteria. Please try adjusting your preferences.</p>
      )}
      <SustainabilityInfo />
    </div>
  )
}

