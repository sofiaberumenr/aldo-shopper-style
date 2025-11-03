import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterTabs } from "@/components/FilterTabs";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { toast } from "sonner";

const Index = () => {
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
      <Header onSearch={setSearchQuery} onFilterClick={handleFilterClick} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default Index;
