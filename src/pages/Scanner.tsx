import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Grid3x3, Camera } from "lucide-react";

const Scanner = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice functionality will be implemented later
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">ALDO</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Sales Associate</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/products")}
          >
            <Grid3x3 className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Camera View */}
      <div className="flex-1 relative bg-black/10 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-primary rounded-lg relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-foreground text-sm mb-2">Position barcode within frame</p>
          <p className="text-muted-foreground text-xs">Camera will activate when app is deployed</p>
        </div>
      </div>

      {/* Voice Button */}
      <div className="p-6 pb-8 bg-background border-t border-border">
        <Button
          onClick={handleVoiceToggle}
          size="lg"
          className={`w-full h-16 text-lg font-semibold transition-all ${
            isListening
              ? "bg-destructive hover:bg-destructive/90 animate-pulse"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          <Mic className="h-6 w-6 mr-2" />
          {isListening ? "Listening..." : "Tap to Speak"}
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Ask about products, sizes, or inventory
        </p>
      </div>
    </div>
  );
};

export default Scanner;
