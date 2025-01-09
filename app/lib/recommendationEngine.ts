import { Fish, fishDatabase } from './fishDatabase'

interface RecommendationCriteria {
  purpose: string;
  environment: string;
  preferredSize: number;
  careLevel?: string;
  tankSize?: number;
  waterTemperature?: number;
  waterPH?: number;
}

function calculateScore(fish: Fish, criteria: RecommendationCriteria): number {
  let score = 0;

  // Purpose and environment are must-match criteria
  if (!fish.purpose.includes(criteria.purpose) || fish.environment !== criteria.environment) {
    return 0;
  }

  // Size score (closer to preferred size is better)
  const sizeDifference = Math.abs(fish.size - criteria.preferredSize);
  score += Math.max(0, 10 - sizeDifference / 2);

  // Care level score
  if (criteria.careLevel) {
    score += fish.careLevel === criteria.careLevel ? 5 : 0;
  }

  // Tank size score
  if (criteria.tankSize) {
    score += criteria.tankSize >= fish.minTankSize ? 5 : 0;
  }

  // Water temperature score
  if (criteria.waterTemperature) {
    if (criteria.waterTemperature >= fish.idealTemperature.min && criteria.waterTemperature <= fish.idealTemperature.max) {
      score += 5;
    }
  }

  // Water pH score
  if (criteria.waterPH) {
    if (criteria.waterPH >= fish.idealPH.min && criteria.waterPH <= fish.idealPH.max) {
      score += 5;
    }
  }

  // Sustainability score
  score += fish.sustainabilityIndex;

  return score;
}

export function getRecommendations(criteria: RecommendationCriteria): Fish[] {
  return fishDatabase
    .map(fish => ({ fish, score: calculateScore(fish, criteria) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.fish);
}

