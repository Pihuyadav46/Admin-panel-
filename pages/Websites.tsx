import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { 
  CheckCircle, AlertCircle, RefreshCw, Trash2, Edit3, ExternalLink, Plus, SearchCheck, 
  Zap, Smartphone, Link as LinkIcon, Gauge, Activity, AlertTriangle, Mic, ShieldCheck, 
  Lock, Bug, Server, Globe2, Database, HardDrive, Clock, History, CloudLightning,
  Wifi, BarChart3, Users, Fingerprint, Layers, Cpu, Radio, Anchor, Eye,
  Signal, Command, Shuffle, ArrowUpRight, ArrowDownRight, Accessibility, ScanFace,
  GitBranch, Terminal, Container, FileCode, Cookie, ToggleRight, Key, StopCircle, 
  PlayCircle, Siren, Braces, Boxes, ShieldAlert, Network, Share2,
  Bot, Umbrella, FileWarning, Sigma, Shield, Minimize2, Image, Repeat, Unlink, Unlock, Timer, Paintbrush, LayoutTemplate,
  Leaf, Map, Scale, FileCheck, Globe
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, Cell, PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis } from 'recharts';
import { Website } from '../types';

const initialWebsites: Website[] = [
  { id: '1', name: 'Tech Chronicles', url: 'techchronicles.com', status: 'Connected', visitorsToday: 12500, revenueToday: 450, growth: 12, lastSynced: '2 mins ago', seoScore: 92 },
  { id: '2', name: 'Daily Recipes', url: 'dailyrecipes.net', status: 'Connected', visitorsToday: 8200, revenueToday: 210, growth: 5, lastSynced: '5 mins ago', seoScore: 85 },
  { id: '3', name: 'Travel Bug', url: 'travelbug.io', status: 'Syncing', visitorsToday: 4100, revenueToday: 150, growth: -2, lastSynced: 'Syncing...', seoScore: 78 },
];

const latencyData = [
    { time: '1s', ms: 24 }, { time: '2s', ms: 22 }, { time: '3s', ms: 28 }, 
    { time: '4s', ms: 24 }, { time: '5s', ms: 20 }, { time: '6s', ms: 25 },
    { time: '7s', ms: 22 }, { time: '8s', ms: 18 }, { time: '9s', ms: 24 },
];

const errorRateData = [
  { t: '10am', err: 2 }, { t: '11am', err: 1 }, { t: '12pm', err: 5 },
  { t: '1pm', err: 0 }, { t: '2pm', err: 2 }, { t: '3pm', err: 1 }
];

const bandwidthData = [
  { t: '1', usage: 40 }, { t: '2', usage: 65 }, { t: '3', usage: 50 },
  { t: '4', usage: 85 }, { t: '5', usage: 60 }, { t: '6', usage: 75 },
  { t: '7', usage: 55 }, { t: '8', usage: 45 }, { t: '9', usage: 65 }
];

const logData = [
  { t: '1', val: 20 }, { t: '2', val: 45 }, { t: '3', val: 30 }, { t: '4', val: 80 }, { t: '5', val: 50 }, { t: '6', val: 40 }
];

const heapData = [
  { t: '1', val: 60 }, { t: '2', val: 65 }, { t: '3', val: 62 }, { t: '4', val: 68 }, { t: '5', val: 64 }, { t: '6', val: 70 }
];

const wafData = [
  { t: '1', val: 12 }, { t: '2', val: 18 }, { t: '3', val: 8 }, { t: '4', val: 24 }, { t: '5', val: 15 }, { t: '6', val: 20 }
];

const ipv6Data = [
  { t: '1', val: 10 }, { t: '2', val: 25 }, { t: '3', val: 40 }, { t: '4', val: 55 }, { t: '5', val: 65 }, { t: '6', val: 80 }
];

const botPieData = [
  { name: 'Human', value: 75, color: '#3b82f6' },
  { name: 'Good Bot', value: 20, color: '#22c55e' },
  { name: 'Bad Bot', value: 5, color: '#ef4444' },
];

const CircularProgress = ({ value, color, icon: Icon, label }: { value: number; color: string; icon: any; label: string }) => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r={radius} stroke="#1e293b" strokeWidth="3" fill="none" />
                    <circle 
                        cx="24" cy="24" r={radius} 
                        stroke={color} 
                        strokeWidth="3" 
                        fill="none" 
                        strokeDasharray={circumference} 
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <Icon className="w-4 h-4 text-slate-400 absolute" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase">{label}</div>
            <div className="text-xs font-bold text-white">{value}%</div>
        </div>
    );
};

export const Websites: React.FC = () => {
  const [websites, setWebsites] = useState<Website[]>(initialWebsites);

  useEffect(() => {
    const interval = setInterval(() => {
      setWebsites(prev => prev.map(site => {
        if (site.status === 'Connected') {
          const change = Math.random() > 0.5 ? 1 : -1;
          const newScore = Math.min(100, Math.max(50, site.seoScore + change));
          return { ...site, seoScore: newScore };
        }
        return site;
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Infrastructure Command Center</h2>
           <p className="text-slate-400">Real-time telemetry and management for connected properties.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all">
             <Plus className="w-4 h-4" /> Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {websites.map((site) => (
          <Card key={site.id} className="p-0 overflow-hidden border border-white/5 bg-[#0B0F19]/80 group">
            
            {/* Header Section */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent relative overflow-hidden">
                {site.status === 'Connected' && (
                    <div className="absolute top-0 right-0 p-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <Activity className="w-3 h-3 text-green-400 animate-pulse" />
                            <span className="text-xs font-bold text-green-400">Live</span>
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-2xl shadow-inner border border-white/10">
                        {site.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            {site.name} <ExternalLink className="w-4 h-4 text-slate-500 hover:text-blue-400 cursor-pointer" />
                        </h3>
                        <p className="text-sm text-blue-400 font-mono">{site.url}</p>
                    </div>
                </div>
            </div>

            {/* Premium Features Grid (1-15) */}
            <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-white/5">
                
                {/* 1. Resource Cockpit */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                            <Server className="w-3 h-3 text-blue-400" /> Resource Cockpit
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                    </div>
                    <div className="flex justify-between px-2">
                        <CircularProgress value={42} color="#3b82f6" icon={Cpu} label="CPU" />
                        <CircularProgress value={68} color="#a855f7" icon={Layers} label="RAM" />
                        <CircularProgress value={25} color="#22c55e" icon={HardDrive} label="SSD" />
                    </div>
                </div>

                {/* 2. Global Latency Matrix */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                     <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                            <Globe2 className="w-3 h-3 text-cyan-400" /> Global Latency
                        </span>
                        <span className="text-[10px] text-cyan-400 font-mono">24ms avg</span>
                    </div>
                    <div className="h-12 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={latencyData}>
                                <defs>
                                    <linearGradient id="colorLat" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="ms" stroke="#06b6d4" strokeWidth={2} fill="url(#colorLat)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                        <span>US-East</span>
                        <span>EU-West</span>
                        <span>Asia-Pac</span>
                    </div>
                </div>

                {/* 3. Threat Shield */}
                <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10 flex flex-col justify-between group/shield hover:bg-red-500/10 transition-colors">
                     <div className="flex justify-between items-start">
                         <ShieldCheck className="w-5 h-5 text-red-400" />
                         <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                     </div>
                     <div>
                         <div className="text-2xl font-bold text-white group-hover/shield:scale-105 transition-transform">12</div>
                         <div className="text-[9px] text-red-300 font-bold uppercase">Threats Blocked</div>
                     </div>
                </div>

                {/* 4. Database Pulse */}
                <div className="bg-blue-500/5 rounded-xl p-3 border border-blue-500/10 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                         <Database className="w-5 h-5 text-blue-400" />
                         <span className="text-[9px] text-blue-400 font-mono">4ms</span>
                     </div>
                     <div>
                         <div className="text-lg font-bold text-white">98/100</div>
                         <div className="text-[9px] text-blue-300 font-bold uppercase">Conn. Pool</div>
                     </div>
                </div>

                {/* 5. SSL Lifecycle */}
                <div className="bg-green-500/5 rounded-xl p-3 border border-green-500/10 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                         <Lock className="w-5 h-5 text-green-400" />
                         <div className="w-4 h-4 rounded-full border-2 border-green-500/30 border-t-green-500 animate-spin"></div>
                     </div>
                     <div>
                         <div className="text-lg font-bold text-white">240d</div>
                         <div className="text-[9px] text-green-300 font-bold uppercase">SSL Valid</div>
                     </div>
                </div>

                {/* 6. Cache Efficiency */}
                <div className="bg-purple-500/5 rounded-xl p-3 border border-purple-500/10 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                         <Zap className="w-5 h-5 text-purple-400" />
                         <span className="text-[9px] text-purple-400">CDN</span>
                     </div>
                     <div>
                         <div className="text-lg font-bold text-white">94.5%</div>
                         <div className="text-[9px] text-purple-300 font-bold uppercase">Cache Hit</div>
                     </div>
                </div>

                {/* 7. API Gateway Status */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-3 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Command className="w-4 h-4 text-orange-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">API Gateway</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[9px] font-bold border border-green-500/30">REST: OK</span>
                        <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[9px] font-bold border border-green-500/30">GQL: OK</span>
                    </div>
                </div>

                {/* 8. Error Anomaly Monitor */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-3 border border-white/5 relative">
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-red-400" /> Error Rate
                        </span>
                        <span className="text-[9px] text-slate-500">Last 6h</span>
                    </div>
                    <div className="h-8 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={errorRateData}>
                                <Bar dataKey="err" fill="#ef4444" radius={[2, 2, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 9. Backup Time Machine */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-3 border border-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <History className="w-4 h-4 text-blue-400" />
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase">Last Backup</div>
                            <div className="text-[9px] text-slate-500">Immutable Snapshot</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold text-white">2h 15m ago</div>
                        <div className="text-[9px] text-green-400">Verified Integrity</div>
                    </div>
                </div>

                {/* 10. Content Velocity */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-3 border border-white/5">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                            <CloudLightning className="w-3 h-3 text-yellow-400" /> Velocity
                        </span>
                        <span className="text-[9px] text-yellow-400">FCP: 0.8s</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="w-[85%] bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full"></div>
                    </div>
                </div>

                {/* 11. Keyword Alpha */}
                <div className="bg-[#080C14] rounded-xl p-3 border border-white/5 flex flex-col justify-center">
                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><SearchCheck className="w-3 h-3" /> SEO Alpha</div>
                     <div className="flex items-center gap-2">
                         <span className="text-green-400 text-xs font-bold flex items-center"><ArrowUpRight className="w-3 h-3" /> 12</span>
                         <span className="text-red-400 text-xs font-bold flex items-center"><ArrowDownRight className="w-3 h-3" /> 3</span>
                     </div>
                </div>

                {/* 12. Sentiment AI */}
                <div className="bg-[#080C14] rounded-xl p-3 border border-white/5 flex flex-col justify-center relative overflow-hidden">
                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><ScanFace className="w-3 h-3" /> Sentiment</div>
                     <div className="text-blue-400 text-sm font-bold">Positive</div>
                     <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-blue-500/20 blur-xl rounded-full"></div>
                </div>

                {/* 13. Bandwidth Meter */}
                <div className="col-span-2 bg-[#080C14] rounded-xl p-3 border border-white/5">
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                            <Wifi className="w-3 h-3 text-indigo-400" /> Bandwidth
                        </span>
                        <span className="text-[9px] text-indigo-400 animate-pulse">24 MB/s</span>
                    </div>
                    <div className="h-8 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={bandwidthData}>
                                <Line type="monotone" dataKey="usage" stroke="#6366f1" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 14. Accessibility (a11y) */}
                <div className="bg-[#080C14] rounded-xl p-3 border border-white/5 flex flex-col justify-center">
                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><Accessibility className="w-3 h-3" /> a11y</div>
                     <div className="text-white text-sm font-bold">AA Pass</div>
                </div>

                {/* 15. Mobile Health */}
                <div className="bg-[#080C14] rounded-xl p-3 border border-white/5 flex flex-col justify-center">
                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><Smartphone className="w-3 h-3" /> Mobile</div>
                     <div className="text-green-400 text-sm font-bold">100%</div>
                </div>
            </div>

            {/* Advanced Telemetry Section (16-30) */}
            <div className="p-4 bg-[#0B0F19]/50 border-b border-white/5">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-blue-400" /> Advanced Systems Telemetry
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    
                    {/* 16. DNS Propagation */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">DNS Prop.</span><Globe2 className="w-3 h-3 text-blue-400" /></div>
                        <div className="text-xs font-bold text-white mb-1">100% Global</div>
                        <div className="flex gap-0.5">
                            {[1,2,3,4,5,6].map(i => <div key={i} className="flex-1 h-1 rounded-full bg-blue-500/50"></div>)}
                        </div>
                    </div>

                    {/* 17. Git State */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-orange-500/30 transition-colors">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Git State</span><GitBranch className="w-3 h-3 text-orange-400" /></div>
                        <div className="text-xs font-bold text-white mb-0.5">main</div>
                        <div className="text-[9px] text-slate-500 font-mono">2f8a9d • 2m ago</div>
                    </div>

                    {/* 18. Cron Monitor */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-green-500/30 transition-colors">
                         <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Cron Jobs</span><Clock className="w-3 h-3 text-green-400" /></div>
                         <div className="flex items-center gap-1.5 mt-2">
                             {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>)}
                             <span className="text-[9px] text-slate-500 ml-1">Running</span>
                         </div>
                    </div>

                    {/* 19. Firewall Rules */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-red-500/30 transition-colors">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Firewall</span><ShieldCheck className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">402 Active</div>
                        <div className="text-[9px] text-green-400 mt-0.5">Protected</div>
                    </div>

                    {/* 20. Kubernetes Pods */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">K8s Pods</span><Container className="w-3 h-3 text-blue-400" /></div>
                         <div className="flex gap-1 flex-wrap mt-1">
                             {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i===6 ? 'bg-red-500' : 'bg-blue-500'}`}></div>)}
                         </div>
                    </div>

                    {/* 21. Edge Regions */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 hover:border-purple-500/30 transition-colors">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Edge Cache</span><Network className="w-3 h-3 text-purple-400" /></div>
                        <div className="text-xs font-bold text-white">24/24 Regions</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden"><div className="w-full bg-purple-500 h-full"></div></div>
                    </div>

                    {/* 22. Log Ingestion */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between mb-1 relative z-10"><span className="text-[9px] text-slate-400 uppercase font-bold">Log Stream</span><FileCode className="w-3 h-3 text-slate-400" /></div>
                        <div className="h-6 w-full relative z-10 -ml-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={logData}>
                                    <Bar dataKey="val" fill="#64748b" radius={[1,1,0,0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 23. Deadlocks */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Deadlocks</span><Braces className="w-3 h-3 text-yellow-400" /></div>
                        <div className="text-xs font-bold text-white">0 Detected</div>
                        <div className="text-[9px] text-green-400 mt-0.5">Optimal</div>
                    </div>

                     {/* 24. 3rd Party APIs */}
                     <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Ext APIs</span><Share2 className="w-3 h-3 text-pink-400" /></div>
                        <div className="flex justify-between items-center mt-1">
                             <span className="text-[9px] text-slate-300">Stripe</span>
                             <span className="text-[9px] text-green-400 font-mono">120ms</span>
                        </div>
                    </div>

                    {/* 25. Disk I/O */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Disk I/O</span><HardDrive className="w-3 h-3 text-cyan-400" /></div>
                        <div className="text-xs font-bold text-white">4.2k IOPS</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5"><div className="w-[40%] bg-cyan-500 h-full rounded-full"></div></div>
                    </div>

                    {/* 26. Heap Memory */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Heap Mem</span><Boxes className="w-3 h-3 text-indigo-400" /></div>
                        <div className="h-6 w-full -ml-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={heapData}>
                                    <Area type="monotone" dataKey="val" stroke="#818cf8" fill="#312e81" strokeWidth={1} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 27. Active Sessions */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Sessions</span><Users className="w-3 h-3 text-green-400" /></div>
                        <div className="text-xs font-bold text-white">1,204</div>
                        <div className="text-[9px] text-slate-500">Authenticated</div>
                    </div>

                    {/* 28. Feature Flags */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Flags</span><ToggleRight className="w-3 h-3 text-orange-400" /></div>
                        <div className="text-xs font-bold text-white">6 Active</div>
                        <div className="text-[9px] text-orange-400">Experimental</div>
                    </div>

                    {/* 29. Compliance */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Compliance</span><Cookie className="w-3 h-3 text-blue-400" /></div>
                        <div className="flex items-center gap-1 mt-1">
                             <CheckCircle className="w-3 h-3 text-green-500" />
                             <span className="text-[9px] text-white">GDPR OK</span>
                        </div>
                    </div>

                    {/* 30. SSR Time */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">SSR Time</span><StopCircle className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">45ms</div>
                        <div className="text-[9px] text-green-400">Fast</div>
                    </div>

                </div>
            </div>

             {/* Security & Performance Forensics (31-45) */}
             <div className="p-4 bg-[#0B0F19]/80 border-b border-white/5">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-3 h-3 text-red-400" /> Security & Performance Forensics
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    
                    {/* 31. Bot Traffic Breakdown */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Bot Traffic</span><Bot className="w-3 h-3 text-blue-400" /></div>
                        <div className="flex h-1.5 w-full rounded-full overflow-hidden mt-2">
                            <div className="bg-blue-500 w-[75%]"></div>
                            <div className="bg-green-500 w-[20%]"></div>
                            <div className="bg-red-500 w-[5%]"></div>
                        </div>
                        <div className="flex justify-between text-[8px] text-slate-500 mt-1">
                             <span>Human</span><span>Good</span><span>Bad</span>
                        </div>
                    </div>

                    {/* 32. DDoS Shield */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">DDoS Shield</span><Umbrella className="w-3 h-3 text-purple-400" /></div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                            <span className="text-xs font-bold text-white">Active</span>
                        </div>
                        <div className="text-[9px] text-slate-500 mt-0.5">2.4 TB Absorbed</div>
                    </div>

                    {/* 33. WAF Events */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                         <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">WAF Events</span><Shield className="w-3 h-3 text-orange-400" /></div>
                         <div className="h-6 w-full -ml-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={wafData}>
                                    <Bar dataKey="val" fill="#f97316" radius={[1,1,0,0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 34. Edge Functions */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Edge Fn</span><Sigma className="w-3 h-3 text-indigo-400" /></div>
                        <div className="text-xs font-bold text-white">1.2M Invocations</div>
                        <div className="text-[9px] text-green-400">0.01% Error Rate</div>
                    </div>

                    {/* 35. Origin Shield */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Origin Shield</span><Minimize2 className="w-3 h-3 text-cyan-400" /></div>
                        <div className="text-xs font-bold text-white">99.8% Shield Hit</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5"><div className="w-[99%] bg-cyan-500 h-full rounded-full"></div></div>
                    </div>

                    {/* 36. TLS Handshake */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">TLS Handshake</span><Key className="w-3 h-3 text-yellow-400" /></div>
                        <div className="text-xs font-bold text-white">12ms</div>
                        <div className="text-[9px] text-green-400">1.3 Early Data</div>
                    </div>

                    {/* 37. Compression */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Compression</span><FileCode className="w-3 h-3 text-blue-400" /></div>
                        <div className="text-xs font-bold text-white">Brotli (br)</div>
                        <div className="text-[9px] text-slate-500">65% Size Savings</div>
                    </div>

                    {/* 38. Asset Health */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Assets</span><Image className="w-3 h-3 text-pink-400" /></div>
                        <div className="flex items-center gap-1.5 mt-1">
                             <div className="radial-progress text-green-400 text-[8px] font-bold" style={{"--value":92, "--size": "20px"} as any}>92</div>
                             <span className="text-[9px] text-slate-300">Optimized</span>
                        </div>
                    </div>

                    {/* 39. Redirect Loops */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Redirects</span><Repeat className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">0 Loops</div>
                        <div className="text-[9px] text-green-400">Healthy Config</div>
                    </div>

                    {/* 40. 404 Monitor */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">404 Monitor</span><Unlink className="w-3 h-3 text-orange-400" /></div>
                        <div className="text-xs font-bold text-white">12 / Hour</div>
                        <div className="text-[9px] text-orange-400">Investigate</div>
                    </div>

                    {/* 41. CSP Violations */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">CSP Reports</span><FileWarning className="w-3 h-3 text-purple-400" /></div>
                        <div className="text-xs font-bold text-white">2 Reports</div>
                        <div className="text-[9px] text-slate-500">script-src-elem</div>
                    </div>

                    {/* 42. Mixed Content */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Mixed Content</span><Unlock className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">0 Issues</div>
                        <div className="text-[9px] text-green-400">Strict HTTPS</div>
                    </div>

                    {/* 43. TTFB */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">TTFB</span><Timer className="w-3 h-3 text-green-400" /></div>
                        <div className="text-xs font-bold text-white">45ms</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5"><div className="w-[15%] bg-green-500 h-full rounded-full"></div></div>
                    </div>

                    {/* 44. LCP */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">LCP</span><Paintbrush className="w-3 h-3 text-blue-400" /></div>
                        <div className="text-xs font-bold text-white">1.2s</div>
                        <div className="text-[9px] text-green-400">Good</div>
                    </div>

                    {/* 45. CLS */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">CLS</span><LayoutTemplate className="w-3 h-3 text-yellow-400" /></div>
                        <div className="text-xs font-bold text-white">0.02</div>
                        <div className="text-[9px] text-green-400">Stable</div>
                    </div>

                </div>
            </div>

            {/* Global Network & Sustainability (New 46-60) */}
             <div className="p-4 bg-[#0B0F19]/80">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Globe className="w-3 h-3 text-green-400" /> Global Network & Sustainability
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    
                    {/* 46. Eco-Impact */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Eco-Impact</span><Leaf className="w-3 h-3 text-green-400" /></div>
                        <div className="text-xs font-bold text-white">0.2g CO2</div>
                        <div className="flex items-center gap-1 mt-1">
                             <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden"><div className="w-[15%] bg-green-500 h-full"></div></div>
                             <span className="text-[8px] text-green-400">A+</span>
                        </div>
                    </div>

                    {/* 47. Data Sovereignty */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Data Residency</span><Map className="w-3 h-3 text-blue-400" /></div>
                        <div className="flex gap-1 mt-1">
                            <span className="px-1 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[8px] border border-blue-500/30">EU</span>
                            <span className="px-1 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[8px] border border-blue-500/30">US</span>
                            <span className="px-1 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[8px] border border-blue-500/30">APAC</span>
                        </div>
                        <div className="text-[8px] text-green-400 mt-1">Compliant</div>
                    </div>

                    {/* 48. Anycast Network */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Anycast</span><Globe2 className="w-3 h-3 text-purple-400" /></div>
                        <div className="text-xs font-bold text-white">180 PoPs</div>
                        <div className="text-[9px] text-slate-500">Global Active</div>
                    </div>

                    {/* 49. HTTP/3 */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">HTTP/3</span><Zap className="w-3 h-3 text-yellow-400" /></div>
                        <div className="text-xs font-bold text-white">Enabled</div>
                        <div className="text-[9px] text-slate-500">QUIC Protocol</div>
                    </div>

                    {/* 50. IPv6 Adoption */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">IPv6</span><Network className="w-3 h-3 text-indigo-400" /></div>
                        <div className="h-6 w-full -ml-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={ipv6Data}>
                                    <Area type="monotone" dataKey="val" stroke="#818cf8" fill="#312e81" strokeWidth={1} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 51. BGP Stability */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">BGP Route</span><Activity className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">99.99%</div>
                        <div className="text-[9px] text-green-400">Stable</div>
                    </div>

                    {/* 52. DNSSEC */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">DNSSEC</span><ShieldCheck className="w-3 h-3 text-green-400" /></div>
                        <div className="text-xs font-bold text-white">Signed</div>
                        <div className="text-[9px] text-slate-500">Algorithm 13</div>
                    </div>

                    {/* 53. Edge Compute */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Edge Workers</span><Cpu className="w-3 h-3 text-cyan-400" /></div>
                        <div className="text-xs font-bold text-white">28ms Avg</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5"><div className="w-[85%] bg-cyan-500 h-full rounded-full"></div></div>
                    </div>

                    {/* 54. Smart Routing */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Smart Route</span><Shuffle className="w-3 h-3 text-orange-400" /></div>
                        <div className="text-xs font-bold text-white">AI Optimized</div>
                        <div className="text-[9px] text-slate-500">Latency -15%</div>
                    </div>

                    {/* 55. Cache Purge */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Purge Time</span><RefreshCw className="w-3 h-3 text-pink-400" /></div>
                        <div className="text-xs font-bold text-white">124ms</div>
                        <div className="text-[9px] text-green-400">Global Sync</div>
                    </div>

                    {/* 56. Zero Trust */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Zero Trust</span><Lock className="w-3 h-3 text-red-400" /></div>
                        <div className="text-xs font-bold text-white">Enforced</div>
                        <div className="text-[9px] text-slate-500">Identity Aware</div>
                    </div>

                    {/* 57. TLS 1.3 */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Encryption</span><Key className="w-3 h-3 text-yellow-400" /></div>
                        <div className="text-xs font-bold text-white">TLS 1.3</div>
                        <div className="text-[9px] text-green-400">Strict</div>
                    </div>

                    {/* 58. SRI */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Integrity</span><FileCheck className="w-3 h-3 text-blue-400" /></div>
                        <div className="text-xs font-bold text-white">Verified</div>
                        <div className="text-[9px] text-slate-500">Subresources</div>
                    </div>

                    {/* 59. Legal Hold */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Legal Hold</span><Scale className="w-3 h-3 text-slate-300" /></div>
                        <div className="text-xs font-bold text-white">Active</div>
                        <div className="text-[9px] text-orange-400">Retain Logs</div>
                    </div>

                    {/* 60. Quantum Safe */}
                    <div className="bg-[#080C14] rounded-lg p-3 border border-white/5">
                        <div className="flex justify-between mb-1"><span className="text-[9px] text-slate-400 uppercase font-bold">Quantum</span><Boxes className="w-3 h-3 text-purple-400" /></div>
                        <div className="text-xs font-bold text-white">PQC Ready</div>
                        <div className="text-[9px] text-slate-500">NIST Stds</div>
                    </div>

                </div>
            </div>

            {/* Footer Action Bar */}
            <div className="bg-[#080C14] p-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex gap-4 text-slate-400">
                    <span className="hover:text-white cursor-pointer transition-colors">Logs</span>
                    <span className="hover:text-white cursor-pointer transition-colors">DNS</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Firewall</span>
                </div>
                <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"><RefreshCw className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-blue-400 transition-colors"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};