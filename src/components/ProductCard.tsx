import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  sizes: string[];
  inStock: boolean;
  onViewSimilar: (id: string) => void;
}

export const ProductCard = ({
  id,
  name,
  category,
  price,
  image,
  sizes,
  inStock,
  onViewSimilar,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="secondary" className="text-sm">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
          <h3 className="font-semibold text-card-foreground line-clamp-1">{name}</h3>
          <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Available Sizes:</span>
            <Badge variant={inStock ? "default" : "secondary"} className="text-xs">
              {inStock ? "In Stock" : "Unavailable"}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-1 text-xs border border-border rounded bg-card hover:bg-muted transition-colors"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        
        <Button
          onClick={() => onViewSimilar(id)}
          variant="outline"
          size="sm"
          className="w-full group/btn"
          disabled={!inStock}
        >
          <Sparkles className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
          Explore Similar
        </Button>
      </CardContent>
    </Card>
  );
};
