import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Performance monitoring for Web Vitals
if (window.location.hostname !== 'localhost') {
  // Report Web Vitals to analytics
  if ('PerformanceObserver' in window) {
    try {
      // Monitor Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', (entry as any).processingDuration);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        let clsSum = 0;
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsSum += (entry as any).value;
          }
        });
        console.log('CLS:', clsSum);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Silently fail if PerformanceObserver not available
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
