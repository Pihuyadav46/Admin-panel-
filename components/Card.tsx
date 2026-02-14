import React, { useRef, useState, useEffect } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`
      relative group isolate rounded-2xl
      bg-[#0F1623]/40 backdrop-blur-xl 
      border border-white/5 
      shadow-lg hover:shadow-2xl hover:shadow-blue-900/10
      transition-all duration-500 ease-out
      hover:bg-[#0F1623]/60 hover:border-white/10
      spotlight-card
      ${glow ? 'shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] border-blue-500/20' : ''}
      ${className}
    `}
      style={{ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties}
    >
      {/* Specular Highlight Gradient at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Dynamic Glow Effect */}
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      )}
      
      {/* Glass Sheen Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="glass-sheen opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Animated Number Component for Metric Cards
const AnimatedNumber = ({ value }: { value: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const isCurrency = value.includes('$');
    const isPercentage = value.includes('%');
    const suffix = value.replace(/[^a-zA-Z%]/g, '');

    useEffect(() => {
        let start = 0;
        const end = numericPart;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            
            setDisplayValue(start + (end - start) * ease);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [numericPart]);

    const formatted = displayValue.toLocaleString(undefined, { maximumFractionDigits: 1 });
    
    return (
        <span>
            {isCurrency && '$'}{formatted}{suffix}
        </span>
    );
};

export const MetricCard: React.FC<{
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: any;
}> = ({ title, value, change, isPositive, icon: Icon }) => (
  <Card className="p-6 cursor-default">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 text-blue-400 group-hover:scale-110 group-hover:text-white group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 shadow-inner">
        <Icon className="w-5 h-5" />
      </div>
      {change && (
        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${isPositive ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
          {change}
        </span>
      )}
    </div>
    <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1 group-hover:text-slate-300 transition-colors">{title}</h3>
    <p className="text-2xl font-bold text-white tracking-tight">
        <AnimatedNumber value={value} />
    </p>
  </Card>
);