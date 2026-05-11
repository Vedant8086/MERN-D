import { Link } from "react-router-dom";
import { BookOpen, Upload, SunMoon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 relative min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans">
      <div className="z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#27272a] border border-[#3f3f46] text-xs font-medium text-[#d4d4d8] mb-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#f4f4f5]"></span>
            8 reading themes available
          </div>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#f4f4f5] font-serif">
            Read without distractions
          </h1>
          
          <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
            A minimalist, client-side PDF reader. Upload your document and choose from eye-comfort themes like sepia, dark mode, or pure AMOLED black.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            to="/reader"
            className="flex items-center gap-2 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Open Reader
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-16 border-t border-[#27272a] text-left"
        >
          <div className="space-y-2">
            <div className="text-[#a1a1aa] mb-3">
              <Upload className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-[#f4f4f5]">Local Processing</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">Files are rendered directly in your browser. No server uploads required.</p>
          </div>
          <div className="space-y-2">
            <div className="text-[#a1a1aa] mb-3">
              <SunMoon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-[#f4f4f5]">Eye-Comfort</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">Toggle between light, dark, and sepia modes to reduce eye strain.</p>
          </div>
          <div className="space-y-2">
            <div className="text-[#a1a1aa] mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-[#f4f4f5]">Auto-Save</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">Your reading progress is automatically saved to your device.</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
