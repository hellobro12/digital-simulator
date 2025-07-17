// src/components/FlavorSimulator.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, UtensilsCrossed } from "lucide-react";

type Flavor = {
  name: string;
  description: string;
  color: string;
  icon: string;
};

const flavors: Flavor[] = [
  {
    name: "Strawberry",
    description: "Sweet, juicy and fresh like a summer breeze.",
    color: "bg-rose-200",
    icon: "🍓",
  },
  {
    name: "Pizza",
    description: "Savory, cheesy, with a hint of oregano and crust.",
    color: "bg-orange-200",
    icon: "🍕",
  },
  {
    name: "Lemon",
    description: "Tangy, citrusy and electrifying.",
    color: "bg-yellow-200",
    icon: "🍋",
  },
  {
    name: "Chocolate",
    description: "Rich, creamy, and deeply satisfying.",
    color: "bg-brown-200",
    icon: "🍫",
  },
  {
    name: "Mint",
    description: "Cool, refreshing, and invigorating.",
    color: "bg-emerald-200",
    icon: "🌿",
  },
];

export default function FlavorSimulator() {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
        <UtensilsCrossed className="w-6 h-6" />
        Digital Flavor Simulator
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {flavors.map((flavor) => (
          <Card
            key={flavor.name}
            className={`cursor-pointer transition-transform duration-200 hover:scale-105 ${flavor.color}`}
            onClick={() => setSelectedFlavor(flavor)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-5xl mb-2">{flavor.icon}</div>
              <h2 className="text-xl font-semibold">{flavor.name}</h2>
              <p className="text-sm text-gray-700 mt-1">{flavor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedFlavor && (
        <div className="text-center mt-8 p-4 border rounded-lg bg-white shadow">
          <h3 className="text-xl font-bold mb-2">
            Simulating Taste: {selectedFlavor.name}
          </h3>
          <p className="text-gray-600 mb-4">{selectedFlavor.description}</p>
          <Button onClick={() => setSelectedFlavor(null)}>
            <Sparkles className="w-4 h-4 mr-2" />
            Taste Another
          </Button>
        </div>
      )}
    </div>
  );
}
