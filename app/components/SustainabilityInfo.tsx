import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from 'lucide-react'

export default function SustainabilityInfo() {
  return (
    <Alert className="mt-8">
      <Info className="h-4 w-4" />
      <AlertTitle>Sustainability Information</AlertTitle>
      <AlertDescription>
        <p>Our sustainability index ranges from 1 to 10, with 10 being the most sustainable. This index takes into account factors such as:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Fishing methods and their impact on marine ecosystems</li>
          <li>Population health and reproduction rates of the species</li>
          <li>Bycatch rates and their impact on other marine life</li>
          <li>Environmental impact of farming practices for aquaculture species</li>
          <li>Management effectiveness and regulations in place</li>
        </ul>
        <p className="mt-2">We encourage choosing fish with higher sustainability indices to support responsible fishing and aquaculture practices. For more detailed information on sustainable seafood choices, visit <a href="https://www.seafoodwatch.org/" className="text-blue-600 hover:underline">Seafood Watch</a>.</p>
      </AlertDescription>
    </Alert>
  )
}

