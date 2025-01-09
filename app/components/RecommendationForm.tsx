'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecommendationForm() {
  const router = useRouter()
  const { data: session } = useSession()
  const [purpose, setPurpose] = useState('')
  const [environment, setEnvironment] = useState('')
  const [preferredSize, setPreferredSize] = useState('')
  const [careLevel, setCareLevel] = useState('')
  const [tankSize, setTankSize] = useState('')
  const [waterTemperature, setWaterTemperature] = useState('')
  const [waterPH, setWaterPH] = useState('')

  useEffect(() => {
    if (session) {
      // Fetch user preferences
      fetch('/api/user-preferences')
        .then(res => res.json())
        .then(data => {
          setPurpose(data.purpose || '')
          setEnvironment(data.environment || '')
          setPreferredSize(data.preferredSize?.toString() || '')
          setCareLevel(data.careLevel || '')
          setTankSize(data.tankSize?.toString() || '')
          setWaterTemperature(data.waterTemperature?.toString() || '')
          setWaterPH(data.waterPH?.toString() || '')
        })
    }
  }, [session])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const preferences = {
      purpose,
      environment,
      preferredSize: parseInt(preferredSize),
      careLevel,
      tankSize: parseInt(tankSize),
      waterTemperature: parseFloat(waterTemperature),
      waterPH: parseFloat(waterPH)
    }

    if (session) {
      // Save user preferences
      await fetch('/api/user-preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences)
      })
    }

    const searchParams = new URLSearchParams(preferences as any)
    router.push(`/recommendations?${searchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="purpose">Purpose</Label>
        <Select onValueChange={setPurpose} required>
          <SelectTrigger>
            <SelectValue placeholder="Select purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consumption">Consumption</SelectItem>
            <SelectItem value="aquaculture">Aquaculture</SelectItem>
            <SelectItem value="aquarium">Aquarium</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="environment">Environment</Label>
        <Select onValueChange={setEnvironment} required>
          <SelectTrigger>
            <SelectValue placeholder="Select environment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="freshwater">Freshwater</SelectItem>
            <SelectItem value="saltwater">Saltwater</SelectItem>
            <SelectItem value="brackish">Brackish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="preferredSize">Preferred Size (cm)</Label>
        <Input 
          type="number" 
          id="preferredSize" 
          value={preferredSize} 
          onChange={(e) => setPreferredSize(e.target.value)}
          min="1"
          required
        />
      </div>
      <div>
        <Label htmlFor="careLevel">Care Level</Label>
        <Select onValueChange={setCareLevel} required>
          <SelectTrigger>
            <SelectValue placeholder="Select care level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="tankSize">Tank Size (liters)</Label>
        <Input
          type="number"
          id="tankSize"
          value={tankSize}
          onChange={(e) => setTankSize(e.target.value)}
          min="1"
          required
        />
      </div>
      <div>
        <Label htmlFor="waterTemperature">Water Temperature (°C)</Label>
        <Input
          type="number"
          id="waterTemperature"
          value={waterTemperature}
          onChange={(e) => setWaterTemperature(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="waterPH">Water pH</Label>
        <Input
          type="number"
          id="waterPH"
          value={waterPH}
          onChange={(e) => setWaterPH(e.target.value)}
          step="0.1"
          min="0"
          max="14"
          required
        />
      </div>
      <Button type="submit">Get Recommendations</Button>
    </form>
  )
}

