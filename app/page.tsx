import RecommendationForm from './components/RecommendationForm'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Get Fish Recommendations</h2>
      <RecommendationForm />
    </div>
  )
}

