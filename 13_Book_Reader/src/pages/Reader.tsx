import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { 
  Upload, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize,
  Palette,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ReaderPage() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);
  const { theme, setTheme } = useTheme();

  // Close theme menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load progress
  useEffect(() => {
    if (file) {
      const savedPage = localStorage.getItem(`pdf-progress-${file.name}`);
      if (savedPage) {
        setPageNumber(parseInt(savedPage, 10));
      } else {
        setPageNumber(1);
      }
    }
  }, [file]);

  // Save progress
  useEffect(() => {
    if (file && pageNumber > 0) {
      localStorage.setItem(`pdf-progress-${file.name}`, pageNumber.toString());
    }
  }, [pageNumber, file]);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Swipe and Trackpad Gestures
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return;
    
    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    
    // Only trigger swipe if horizontal swipe is greater than vertical swipe (avoid triggering on vertical scroll)
    if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > minSwipeDistance && pageNumber < numPages) {
        setPageNumber(p => p + 1);
      } else if (distanceX < -minSwipeDistance && pageNumber > 1) {
        setPageNumber(p => p - 1);
      }
    }
    
    // reset values
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    // Only trigger for significant horizontal trackpad swipes
    if (Math.abs(e.deltaX) > 40 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      const now = Date.now();
      // Debounce trackpad swipe (1 second cooldown)
      if (now - lastWheelTime.current > 1000) {
        if (e.deltaX > 0 && pageNumber < numPages) {
          setPageNumber(p => p + 1);
          lastWheelTime.current = now;
        } else if (e.deltaX < 0 && pageNumber > 1) {
          setPageNumber(p => p - 1);
          lastWheelTime.current = now;
        }
      }
    }
  };

  if (!file) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans">
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
        
        <div className="w-full max-w-md p-10 rounded-2xl bg-[#18181b] border border-[#27272a] flex flex-col items-center text-center space-y-8 shadow-sm">
          <div className="p-4 bg-[#27272a] rounded-full text-[#a1a1aa]">
            <Upload className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-medium font-serif text-[#f4f4f5]">Open a Document</h2>
            <p className="text-[#a1a1aa] text-sm">Select a PDF file from your device</p>
          </div>
          
          <label className="w-full py-3 px-6 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-lg font-medium cursor-pointer transition-colors shadow-sm">
            Choose PDF File
            <input 
              type="file" 
              accept=".pdf" 
              onChange={onFileChange} 
              className="hidden" 
            />
          </label>
        </div>
      </main>
    );
  }

  const themes: { id: "light" | "sepia" | "dark" | "amoled" | "warm-night" | "forest" | "ocean" | "rose", label: string, swatch: string }[] = [
    { id: "light", label: "Light", swatch: "#ffffff" },
    { id: "sepia", label: "Sepia", swatch: "#f4ecd8" },
    { id: "dark", label: "Dark", swatch: "#18181b" },
    { id: "amoled", label: "AMOLED", swatch: "#000000" },
    { id: "warm-night", label: "Warm Night", swatch: "#2b2118" },
    { id: "forest", label: "Forest", swatch: "#1a2e1a" },
    { id: "ocean", label: "Ocean", swatch: "#141e2e" },
    { id: "rose", label: "Rose", swatch: "#2a1a22" },
  ];

  return (
    <div ref={containerRef} className="flex flex-col h-screen overflow-hidden bg-[var(--background)] transition-colors duration-300">
      {/* Header / Toolbar */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-black/20 backdrop-blur-md border-b border-white/5 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => setFile(null)} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Close PDF">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-medium text-sm truncate max-w-[150px] md:max-w-xs" title={file.name}>
            {file.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-lg p-1">
            <button 
              onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
              className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
            <button 
              onClick={() => setScale(s => Math.min(3, s + 0.1))}
              className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Selector */}
          <div className="relative" ref={themeMenuRef}>
            <button 
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
            >
              <Palette className="w-5 h-5" />
            </button>
            {isThemeOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 w-48 z-50">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/30 font-medium">Reading Theme</div>
                {themes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsThemeOpen(false);
                    }}
                    className={`px-3 py-2 text-sm text-left rounded-lg transition-colors flex items-center gap-3 ${theme === t.id ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/5 text-white/80'}`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full shrink-0 ring-1 ring-white/20" 
                      style={{ backgroundColor: t.swatch }}
                    />
                    {t.label}
                    {theme === t.id && <span className="ml-auto text-[10px] text-blue-400">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fullscreen */}
          <button onClick={toggleFullscreen} className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden md:block">
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* PDF Viewer Area */}
      <div 
        className="flex-1 overflow-auto bg-black/10 relative pdf-canvas-wrapper p-4 md:p-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
      >
        <div className="w-full h-full flex min-h-max min-w-max items-center justify-center">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="w-8 h-8 border-4 border-[#27272a] border-t-[#f4f4f5] rounded-full animate-spin"></div>
                <p className="text-[#a1a1aa] text-sm animate-pulse">Loading Document...</p>
              </div>
            }
            className="flex flex-col items-center m-auto"
          >
            <div className="shadow-2xl ring-1 ring-white/5 rounded-sm overflow-hidden bg-white">
              <Page 
                pageNumber={pageNumber} 
                scale={scale} 
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={<div className="w-full h-full bg-white animate-pulse" style={{ minHeight: '800px', minWidth: '600px' }} />}
              />
            </div>
          </Document>
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-black/20 backdrop-blur-md border-t border-white/5 z-10">
        <div className="text-sm text-white/50 hidden md:block">
          {pageNumber} of {numPages || '--'}
        </div>
        
        <div className="flex items-center gap-4 w-full justify-center md:w-auto md:justify-end">
          <button 
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(p => p - 1)}
            className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-sm font-medium w-24 text-center md:hidden">
            {pageNumber} / {numPages || '--'}
          </div>

          <button 
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(p => p + 1)}
            className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center gap-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
}
