// src/components/FlavorSimulator.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, UtensilsCrossed, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

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
  const [loading, setLoading] = useState(false);

  const handleFlavorClick = (flavor: Flavor) => {
    setLoading(true);
    setSelectedFlavor(null); // Reset previous flavor
    setTimeout(() => {
      setSelectedFlavor(flavor);
      setLoading(false);
    }, 2000); // 2-second tasting delay
  };

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
            onClick={() => handleFlavorClick(flavor)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-5xl mb-2">{flavor.icon}</div>
              <h2 className="text-xl font-semibold">{flavor.name}</h2>
              <p className="text-sm text-gray-700 mt-1">{flavor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {loading && (
        <div className="text-center mt-8 p-4 border rounded-lg bg-white shadow flex flex-col items-center">
          <Loader2 className="w-6 h-6 animate-spin mb-2 text-gray-500" />
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            Tasting...
          </motion.p>
        </div>
      )}

      {selectedFlavor && !loading && (
        <motion.div
          className="text-center mt-8 p-4 border rounded-lg bg-white shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-2">
            Simulated Taste: {selectedFlavor.name}
          </h3>
          <p className="text-gray-600 mb-4">{selectedFlavor.description}</p>
          <Button onClick={() => setSelectedFlavor(null)}>
            <Sparkles className="w-4 h-4 mr-2" />
            Taste Another
          </Button>
        </motion.div>
      )}
    </div>
  );
}
