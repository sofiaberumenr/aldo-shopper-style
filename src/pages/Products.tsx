import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterTabs } from "@/components/FilterTabs";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { toast } from "sonner";
import { Search, SlidersHorizontal, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewSimilar = (productId: string) => {
    const product = products.find(p => p.id === productId);
    toast.success(`Finding similar products to ${product?.name}`, {
      description: "This feature would show related items in the same category.",
    });
  };

  const handleFilterClick = () => {
    toast.info("Advanced Filters", {
      description: "Filter options would appear here for price, size, and availability.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center gap-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <Camera className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">ALDO</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Sales Associate</p>
            </div>
          </div>
          
          <div className="flex flex-1 items-center gap-2 ml-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-9 bg-muted/50"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleFilterClick}
              className="shrink-0"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <FilterTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <main className="container px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {activeCategory === "all" ? "All Products" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h2>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onViewSimilar={handleViewSimilar}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
