export interface Fish {
  id: number;
  name: string;
  scientificName: string;
  environment: string;
  size: number;
  purpose: string[];
  sustainabilityIndex: number;
  careLevel: string;
  diet: string;
  lifespan: number;
  temperament: string;
  minTankSize: number;
  idealTemperature: {
    min: number;
    max: number;
  };
  idealPH: {
    min: number;
    max: number;
  };
}

export const fishDatabase: Fish[] = [
  {
    id: 1,
    name: "Tilapia",
    scientificName: "Oreochromis niloticus",
    environment: "freshwater",
    size: 30,
    purpose: ["consumption", "aquaculture"],
    sustainabilityIndex: 8,
    careLevel: "Easy",
    diet: "Omnivore",
    lifespan: 10,
    temperament: "Peaceful",
    minTankSize: 55,
    idealTemperature: { min: 24, max: 28 },
    idealPH: { min: 6.5, max: 8.0 }
  },
  {
    id: 2,
    name: "Atlantic Salmon",
    scientificName: "Salmo salar",
    environment: "saltwater",
    size: 75,
    purpose: ["consumption", "aquaculture"],
    sustainabilityIndex: 6,
    careLevel: "Moderate",
    diet: "Carnivore",
    lifespan: 13,
    temperament: "Aggressive",
    minTankSize: 100,
    idealTemperature: { min: 6, max: 14 },
    idealPH: { min: 6.5, max: 8.5 }
  },
  {
    id: 3,
    name: "Guppy",
    scientificName: "Poecilia reticulata",
    environment: "freshwater",
    size: 5,
    purpose: ["aquarium"],
    sustainabilityIndex: 9,
    careLevel: "Easy",
    diet: "Omnivore",
    lifespan: 2,
    temperament: "Peaceful",
    minTankSize: 5,
    idealTemperature: { min: 22, max: 28 },
    idealPH: { min: 6.8, max: 7.8 }
  },
  {
    id: 4,
    name: "Clownfish",
    scientificName: "Amphiprioninae",
    environment: "saltwater",
    size: 10,
    purpose: ["aquarium"],
    sustainabilityIndex: 7,
    careLevel: "Moderate",
    diet: "Omnivore",
    lifespan: 6,
    temperament: "Semi-aggressive",
    minTankSize: 20,
    idealTemperature: { min: 23, max: 28 },
    idealPH: { min: 7.8, max: 8.4 }
  },
  {
    id: 5,
    name: "Channel Catfish",
    scientificName: "Ictalurus punctatus",
    environment: "freshwater",
    size: 60,
    purpose: ["consumption", "aquaculture"],
    sustainabilityIndex: 7,
    careLevel: "Easy",
    diet: "Omnivore",
    lifespan: 15,
    temperament: "Peaceful",
    minTankSize: 75,
    idealTemperature: { min: 20, max: 30 },
    idealPH: { min: 6.0, max: 8.0 }
  },
  {
    id: 6,
    name: "Neon Tetra",
    scientificName: "Paracheirodon innesi",
    environment: "freshwater",
    size: 3,
    purpose: ["aquarium"],
    sustainabilityIndex: 8,
    careLevel: "Easy",
    diet: "Omnivore",
    lifespan: 5,
    temperament: "Peaceful",
    minTankSize: 10,
    idealTemperature: { min: 20, max: 26 },
    idealPH: { min: 6.0, max: 7.0 }
  },
  {
    id: 7,
    name: "Rainbow Trout",
    scientificName: "Oncorhynchus mykiss",
    environment: "freshwater",
    size: 45,
    purpose: ["consumption", "aquaculture"],
    sustainabilityIndex: 7,
    careLevel: "Moderate",
    diet: "Carnivore",
    lifespan: 7,
    temperament: "Aggressive",
    minTankSize: 100,
    idealTemperature: { min: 10, max: 18 },
    idealPH: { min: 6.5, max: 8.0 }
  }
]

