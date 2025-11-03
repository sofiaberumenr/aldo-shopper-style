import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { value: "all", label: "All Products" },
  { value: "shoes", label: "Shoes" },
  { value: "boots", label: "Boots" },
  { value: "sneakers", label: "Sneakers" },
  { value: "accessories", label: "Accessories" },
];

export const FilterTabs = ({ activeCategory, onCategoryChange }: FilterTabsProps) => {
  return (
    <div className="border-b border-border bg-background">
      <div className="container px-4 py-3">
        <Tabs value={activeCategory} onValueChange={onCategoryChange}>
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b-0 h-auto p-0 space-x-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm whitespace-nowrap"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
