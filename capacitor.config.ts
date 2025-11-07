import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.587353c255d440c894c1397f34826d9e',
  appName: 'aldo-shopper-style',
  webDir: 'dist',
  server: {
    url: 'https://587353c2-55d4-40c8-94c1-397f34826d9e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
