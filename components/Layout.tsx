import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { 
  LayoutDashboard, Globe, BarChart2, DollarSign, FileText, BrainCircuit, 
  Bell, Settings, LogOut, Menu, Calendar, Users, Layers, Search, Command, 
  PenTool, Megaphone, ChevronDown, HelpCircle, Maximize2, Minimize2, Clock,
  Sparkles, MessageSquare, X, Send, Zap, Activity
} from 'lucide-react';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

// --- NEW COMPONENTS (Inline for simplicity) ---

interface NotificationToastProps {
    message: string;
    type: 'success' | 'info';
    onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="flex items-center gap-3 p-3 mb-3 rounded-xl glass-panel animate-slide-in-right border-l-4 border-l-blue-500 shadow-2xl relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-r ${type === 'success' ? 'from-green-500/10' : 'from-blue-500/10'} to-transparent opacity-50`}></div>
            <div className={`p-2 rounded-full ${type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {type === 'success' ? <Zap className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
            </div>
            <div className="relative z-10 pr-4">
                <p className="text-xs font-bold text-white uppercase tracking-wide opacity-70">System Alert</p>
                <p className="text-sm font-medium text-slate-100">{message}</p>
            </div>
            <button onClick={onClose} className="absolute top-2 right-2 text-slate-500 hover:text-white"><X className="w-3 h-3" /></button>
        </div>
    );
};

const CommandPalette = ({ isOpen, onClose, onNavigate }: { isOpen: boolean, onClose: () => void, onNavigate: (p: Page) => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="w-full max-w-xl glass-panel rounded-2xl p-4 shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
                <div className="flex items-center gap-3 px-3 pb-3 border-b border-white/10">
                    <Command className="w-5 h-5 text-blue-400" />
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="Type a command or search..." 
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 text-lg"
                    />
                    <div className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">ESC</div>
                </div>
                <div className="py-2 space-y-1">
                    <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-2 mb-1">Navigation</p>
                    {[
                        { label: 'Go to Dashboard', icon: LayoutDashboard, page: Page.DASHBOARD },
                        { label: 'View Revenue', icon: DollarSign, page: Page.REVENUE },
                        { label: 'Analytics Overview', icon: BarChart2, page: Page.ANALYTICS },
                        { label: 'Manage Websites', icon: Globe, page: Page.WEBSITES },
                    ].map((item, i) => (
                        <button 
                            key={i} 
                            onClick={() => { onNavigate(item.page); onClose(); }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:border hover:border-white/5 text-slate-300 hover:text-white transition-all group"
                        >
                            <item.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                            {item.label}
                        </button>
                    ))}
                    <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-4 mb-1">System Actions</p>
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-red-400 transition-all group">
                        <LogOut className="w-4 h-4 text-slate-500 group-hover:text-red-400" />
                        Log Out System
                    </button>
                </div>
            </div>
        </div>
    );
};

const AuroraAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
        { role: 'ai', text: "Hello Admin. I'm Aurora. I've analyzed your traffic and noticed a 15% spike in organic reach. Would you like a breakdown?" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setInput("");
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "Processing your request... I'm connecting to the neural core to fetch live data." }]);
        }, 800);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 h-96 glass-panel rounded-2xl flex flex-col z-50 animate-scale-in origin-bottom-right shadow-2xl border border-blue-500/20">
                    <div className="flex justify-between items-center p-4 border-b border-white/10 bg-blue-600/5">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-bold text-white text-sm tracking-wide">AURORA AI</span>
                        </div>
                        <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-slate-400 hover:text-white" /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                                    m.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-br-none' 
                                    : 'bg-white/5 text-slate-300 border border-white/5 rounded-bl-none'
                                }`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-3 border-t border-white/10 flex gap-2">
                        <input 
                            type="text" 
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/50"
                            placeholder="Ask Aurora..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-colors">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 active:scale-95 group
                    ${isOpen ? 'bg-slate-800 text-slate-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'}
                `}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                )}
            </button>
        </>
    );
};

export const Layout: React.FC<LayoutProps> = ({ currentPage, onNavigate, onLogout, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [toasts, setToasts] = useState<Array<{id: number, msg: string, type: 'success' | 'info'}>>([]);
  const [time, setTime] = useState(new Date());

  // Random Toast Generator for "Live" feel
  useEffect(() => {
      const messages = [
          "New Subscriber: alex@tech.io",
          "Revenue Spike: +$120 in 5m",
          "Server Load: Optimal",
          "Backup Completed Successfully",
          "Analysis: Conversion Rate Up 2%"
      ];
      const interval = setInterval(() => {
          if (Math.random() > 0.7) {
              const msg = messages[Math.floor(Math.random() * messages.length)];
              const id = Date.now();
              setToasts(prev => [...prev, { id, msg, type: Math.random() > 0.5 ? 'success' : 'info' }]);
          }
      }, 5000);
      return () => clearInterval(interval);
  }, []);

  const removeToast = (id: number) => {
      setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Clock Update
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Cmd+K Listener
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault();
              setIsCmdOpen(prev => !prev);
          }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const NavItem = ({ page, icon: Icon, label, isNew = false }: { page: Page; icon: any; label: string; isNew?: boolean }) => {
    const isActive = currentPage === page;
    return (
      <button
        onClick={() => {
          onNavigate(page);
          setIsMobileMenuOpen(false);
        }}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden active-press hover-lift
          ${isActive 
            ? 'bg-blue-600/10 text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] border border-blue-500/20' 
            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`}
      >
        <div className="flex items-center gap-3 relative z-10">
          <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]' : 'text-slate-500 group-hover:text-blue-400 group-hover:scale-110'} transition-all duration-300`} />
          <span className="font-medium tracking-wide text-sm">{label}</span>
        </div>
        
        {isActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
        )}
        
        {isNew && !isActive && (
            <span className="text-[10px] font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30 animate-pulse">NEW</span>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans overflow-hidden flex relative selection:bg-blue-500/30 selection:text-blue-200">
      
      <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} onNavigate={onNavigate} />
      <AuroraAssistant />

      {/* Toast Container */}
      <div className="fixed top-20 right-6 z-[60] flex flex-col items-end pointer-events-none">
          <div className="pointer-events-auto">
            {toasts.map(t => (
                <NotificationToast key={t.id} message={t.msg} type={t.type} onClose={() => removeToast(t.id)} />
            ))}
          </div>
      </div>

      {/* --- ANIMATED BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="bg-noise absolute inset-0 z-10"></div>
          <div className="bg-grid animate-[grid-scroll_20s_linear_infinite] absolute inset-0 z-0"></div>
          <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] animate-blob z-0 transition-opacity duration-700 ${focusMode ? 'opacity-10' : 'opacity-40'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px] animate-blob animation-delay-2000 z-0 transition-opacity duration-700 ${focusMode ? 'opacity-10' : 'opacity-40'}`}></div>
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 flex justify-around items-end opacity-20 px-10 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-gradient-to-t from-blue-500/20 to-transparent rounded-t-lg animate-breathing-city"
                    style={{
                        height: `${Math.random() * 60 + 20}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`
                    }}
                  ></div>
              ))}
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden transition-opacity" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Hidden in Focus Mode */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#080C14]/70 backdrop-blur-2xl border-r border-white/5 
        transform transition-all duration-500 ease-in-out md:translate-x-0 md:static shadow-2xl
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        ${focusMode ? 'md:-ml-72 opacity-0' : 'md:ml-0 opacity-100'}
      `}>
        <div className="h-full flex flex-col p-5">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-8 px-2 mt-2">
            <div className="relative group cursor-pointer" onClick={() => onNavigate(Page.DASHBOARD)}>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-10 h-10 rounded-xl bg-[#0F1623] border border-white/10 flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 font-black text-xl">A</span>
                </div>
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-white">
                AURORA
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="px-4 pb-2">
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Overview</p>
            </div>
            <NavItem page={Page.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
            <NavItem page={Page.WEBSITES} icon={Globe} label="Websites" />
            <NavItem page={Page.ANALYTICS} icon={BarChart2} label="Analytics" />
            <NavItem page={Page.REVENUE} icon={DollarSign} label="Revenue" />
            
            <div className="py-4">
              <p className="px-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Studio</p>
              <NavItem page={Page.CONTENT_STUDIO} icon={PenTool} label="Content AI" isNew />
              <NavItem page={Page.CAMPAIGNS} icon={Megaphone} label="Campaigns" />
              <NavItem page={Page.CALENDAR} icon={Calendar} label="Calendar" />
              <NavItem page={Page.POSTS} icon={FileText} label="Posts" />
            </div>

            <div className="py-2">
              <p className="px-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">System</p>
              <NavItem page={Page.AI_INSIGHTS} icon={BrainCircuit} label="AI Insights" />
              <NavItem page={Page.TEAM} icon={Users} label="Team" />
              <NavItem page={Page.INTEGRATIONS} icon={Layers} label="Integrations" />
            </div>
          </nav>

          {/* User Profile Snippet */}
          <div className="mt-auto pt-4 border-t border-white/5">
             <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group active-press">
                 <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px] group-hover:rotate-12 transition-transform">
                     <div className="w-full h-full rounded-full bg-[#0B0F19] flex items-center justify-center">
                         <span className="font-bold text-xs">AD</span>
                     </div>
                 </div>
                 <div className="flex-1">
                     <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Admin User</p>
                     <p className="text-[10px] text-slate-500">Enterprise Plan</p>
                 </div>
                 <Settings className="w-4 h-4 text-slate-500 group-hover:rotate-90 transition-transform duration-500" onClick={() => onNavigate(Page.SETTINGS)} />
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10 transition-all duration-500">
        
        {/* Top Navbar */}
        <header className={`h-16 border-b border-white/5 bg-[#030712]/50 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 transition-all duration-500 ${focusMode ? '-mt-16 opacity-0 pointer-events-none' : 'mt-0 opacity-100'}`}>
             <div className="flex items-center gap-4 flex-1">
                 <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-slate-400 hover:text-white">
                    <Menu className="w-6 h-6" />
                 </button>
                 
                 {/* Global Command Search */}
                 <div className="hidden md:flex items-center relative group w-full max-w-md">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 group-hover:text-blue-400 transition-colors" />
                    <input 
                        type="text" 
                        readOnly
                        onClick={() => setIsCmdOpen(true)}
                        placeholder="Search assets, posts, or settings..." 
                        className="w-full bg-[#0F1623]/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none cursor-pointer hover:bg-[#0F1623] transition-all placeholder:text-slate-600"
                    />
                    <div className="absolute right-3 hidden lg:flex gap-1 pointer-events-none">
                        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-500 bg-white/5 border border-white/10 rounded">⌘</kbd>
                        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-500 bg-white/5 border border-white/10 rounded">K</kbd>
                    </div>
                 </div>
             </div>

             <div className="flex items-center gap-6">
                 {/* Real-Time Clock Feature */}
                 <div className="hidden lg:flex flex-col items-end group cursor-default hover-lift">
                     <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <div className="text-xl font-bold font-mono text-white tracking-widest">
                            {formatTime(time)}
                         </div>
                     </div>
                     <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">
                        {formatDate(time)}
                     </div>
                 </div>

                 <div className="h-8 w-px bg-white/10 mx-1 hidden lg:block"></div>

                 <div className="flex items-center gap-2">
                     <button 
                        onClick={() => setFocusMode(true)}
                        className="relative p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-full transition-all active-press"
                        title="Enter Focus Mode"
                     >
                         <Maximize2 className="w-5 h-5" />
                     </button>
                     <button className="relative p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all active-press">
                         <HelpCircle className="w-5 h-5" />
                     </button>
                     <button 
                        onClick={() => onNavigate(Page.NOTIFICATIONS)}
                        className="relative p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all active-press"
                     >
                         <Bell className="w-5 h-5" />
                         <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#030712] animate-pulse"></span>
                     </button>
                 </div>
                 
                 <div className="h-6 w-px bg-white/10 mx-1"></div>
                 
                 <button onClick={onLogout} className="text-xs font-medium text-slate-400 hover:text-red-400 transition-colors active-press">
                     Sign Out
                 </button>
             </div>
        </header>

        {/* Feature 1: Focus Mode Exit Button (Floating) */}
        {focusMode && (
            <button 
                onClick={() => setFocusMode(false)}
                className="fixed top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/20 transition-all shadow-lg animate-fade-in group hover-lift active-press"
            >
                <Minimize2 className="w-5 h-5 group-hover:scale-90 transition-transform" />
            </button>
        )}

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 lg:p-10 scroll-smooth relative z-20">
          <div className={`max-w-7xl mx-auto space-y-8 animate-fade-in-up pb-10 transition-all duration-500 ${focusMode ? 'max-w-5xl' : ''}`}>
            {children}
            
            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>© 2026 AURORA Intelligence. All rights reserved.</p>
              <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};