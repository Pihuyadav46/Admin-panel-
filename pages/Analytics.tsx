import React from 'react';
import { Card } from '../components/Card';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  BarChart, Bar, ScatterChart, Scatter, ZAxis, LineChart, Line, 
  CartesianGrid, Cell, Legend, PieChart, Pie, Radar, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar,
  Treemap, ComposedChart
} from 'recharts';
import { 
  Play, MousePointer2, Fingerprint, Users, Globe, Target, 
  Zap, Search, Mic, Smile, Ban, Share2, Smartphone, 
  ArrowDown, LogOut, TrendingUp, MessageCircle, Radar as RadarIcon, 
  Layers, GitMerge, Map, Activity, Wind, Eye, Bot, Split, 
  Clock, Network, UserCheck, Accessibility, Palette, 
  RefreshCcw, ThumbsUp, Glasses, Cpu, Magnet, TrendingDown,
  FileBarChart, DollarSign, Link, Video, Cloud, LayoutTemplate,
  AlertTriangle, Send, Share, BrainCircuit, Heart, Lightbulb,
  GitPullRequest, Shield, Mail, Image, Cookie, PenTool, Coffee,
  Anchor, Battery, Scale, Thermometer, UserMinus, Radio, ShieldCheck, 
  Languages, Leaf, Server, UserPlus, FileWarning, MoveRight, XCircle,
  AlertOctagon
} from 'lucide-react';

// --- MOCK DATA ---

const trafficData = [
  { name: 'Mon', visits: 4000, competitor: 3200 }, 
  { name: 'Tue', visits: 3000, competitor: 2800 }, 
  { name: 'Wed', visits: 5000, competitor: 4100 },
  { name: 'Thu', visits: 2780, competitor: 2500 }, 
  { name: 'Fri', visits: 6890, competitor: 5900 }, 
  { name: 'Sat', visits: 8390, competitor: 7200 },
  { name: 'Sun', visits: 7490, competitor: 6800 },
];

const forecastData = [
  { name: 'W1', actual: 4000, predicted: 4000 },
  { name: 'W2', actual: 5000, predicted: 4800 },
  { name: 'W3', actual: 6500, predicted: 6200 },
  { name: 'W4', actual: null, predicted: 7800, range: [7000, 8600] },
  { name: 'W5', actual: null, predicted: 8500, range: [7500, 9500] },
  { name: 'W6', actual: null, predicted: 9200, range: [8000, 10400] },
];

const funnelData = [
  { name: 'Impressions', value: 100, fill: '#3b82f6' },
  { name: 'Click', value: 45, fill: '#6366f1' },
  { name: 'Read > 1m', value: 25, fill: '#8b5cf6' },
  { name: 'Subscribe', value: 8, fill: '#ec4899' },
];

const keywordData = [
  { x: 100, y: 200, z: 200, name: 'AI Tools' },
  { x: 120, y: 100, z: 260, name: 'Crypto' },
  { x: 170, y: 300, z: 400, name: 'Travel' },
  { x: 140, y: 250, z: 280, name: 'Recipes' },
  { x: 150, y: 400, z: 500, name: 'Tech' },
  { x: 110, y: 280, z: 200, name: 'Reviews' },
];

const scrollData = [
  { depth: '0-25%', users: 100 },
  { depth: '25-50%', users: 85 },
  { depth: '50-75%', users: 60 },
  { depth: '75-100%', users: 35 },
];

const sentimentData = [
  { point: '0s', sentiment: 50 },
  { point: '15s', sentiment: 65 },
  { point: '30s', sentiment: 80 },
  { point: '45s', sentiment: 75 },
  { point: '60s', sentiment: 90 },
];

const botData = [
  { name: 'Humans', value: 82, fill: '#3b82f6' },
  { name: 'Crawlers', value: 12, fill: '#10b981' },
  { name: 'Bad Bots', value: 6, fill: '#ef4444' },
];

const socialRadarData = [
  { subject: 'Twitter', A: 120, fullMark: 150 },
  { subject: 'LinkedIn', A: 98, fullMark: 150 },
  { subject: 'Insta', A: 86, fullMark: 150 },
  { subject: 'FB', A: 50, fullMark: 150 },
  { subject: 'Reddit', A: 85, fullMark: 150 },
  { subject: 'Pinterest', A: 65, fullMark: 150 },
];

const abData = [
  { name: 'Variant A (Short)', rate: 2.4, fill: '#64748b' },
  { name: 'Variant B (Power)', rate: 4.8, fill: '#3b82f6' },
];

const decayData = [
  { month: 'M1', traffic: 100 },
  { month: 'M2', traffic: 85 },
  { month: 'M3', traffic: 60 },
  { month: 'M4', traffic: 45 },
  { month: 'M5', traffic: 30 },
  { month: 'M6', traffic: 25 },
];

const returnRateData = [
  { name: 'Return Rate', uv: 35, fill: '#8b5cf6' }
];

const topicData = [
  { name: 'Tech', size: 1200, fill: '#3b82f6' },
  { name: 'AI', size: 900, fill: '#8b5cf6' },
  { name: 'Crypto', size: 600, fill: '#10b981' },
  { name: 'Design', size: 400, fill: '#f59e0b' },
  { name: 'Lifestyle', size: 300, fill: '#ef4444' },
];

const ltvData = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 22 },
  { month: 'Apr', value: 28 },
  { month: 'May', value: 35 },
  { month: 'Jun', value: 42 },
];

const attributionData = [
    { channel: 'Organic', first: 40, last: 30 },
    { channel: 'Social', first: 30, last: 20 },
    { channel: 'Email', first: 10, last: 35 },
    { channel: 'Direct', first: 20, last: 15 },
];

const intentData = [
    { name: 'Info', value: 65, fill: '#3b82f6' },
    { name: 'Trans', value: 20, fill: '#10b981' },
    { name: 'Nav', value: 15, fill: '#8b5cf6' },
];

const vitalsHistory = [
    { date: 'W1', lcp: 2.5, cls: 0.1 },
    { date: 'W2', lcp: 2.2, cls: 0.08 },
    { date: 'W3', lcp: 1.8, cls: 0.05 },
    { date: 'W4', lcp: 1.5, cls: 0.02 },
];

const videoData = [
    { name: '0%', value: 100 },
    { name: '25%', value: 85 },
    { name: '50%', value: 60 },
    { name: '75%', value: 40 },
    { name: '100%', value: 25 },
];

const linkNodes = [
    { x: 100, y: 200, z: 100, fill: '#3b82f6' }, // Hub
    { x: 120, y: 100, z: 30, fill: '#64748b' },
    { x: 170, y: 300, z: 30, fill: '#64748b' },
    { x: 80, y: 150, z: 30, fill: '#64748b' },
    { x: 150, y: 250, z: 30, fill: '#64748b' },
];

// --- NEW MOCK DATA (Features 47-61) ---

const sentimentTrendData = [
    { day: 'Mon', pos: 40, neu: 30, neg: 10 },
    { day: 'Tue', pos: 55, neu: 25, neg: 5 },
    { day: 'Wed', pos: 45, neu: 35, neg: 12 },
    { day: 'Thu', pos: 60, neu: 20, neg: 8 },
    { day: 'Fri', pos: 70, neu: 15, neg: 5 },
];

const contentGapData = [
    { subject: 'Tech', A: 120, B: 110, fullMark: 150 },
    { subject: 'Lifestyle', A: 98, B: 130, fullMark: 150 },
    { subject: 'Crypto', A: 86, B: 130, fullMark: 150 },
    { subject: 'Health', A: 99, B: 100, fullMark: 150 },
    { subject: 'Finance', A: 85, B: 90, fullMark: 150 },
    { subject: 'Travel', A: 65, B: 85, fullMark: 150 },
];

const latencyBounceData = [
    { x: 100, y: 20, z: 200 }, 
    { x: 200, y: 25, z: 200 },
    { x: 500, y: 45, z: 200 },
    { x: 800, y: 60, z: 200 },
    { x: 1200, y: 85, z: 200 },
];

const viralVelocityData = [
    { name: 'Velocity', uv: 85, fill: '#ef4444' }
];

const syndicationData = [
    { name: 'Medium', value: 4000, fill: '#1e293b' },
    { name: 'LinkedIn', value: 3000, fill: '#0ea5e9' },
    { name: 'Apple News', value: 2000, fill: '#ef4444' },
    { name: 'Flipboard', value: 1500, fill: '#ef4444' },
];

const consentData = [
    { name: 'Accept All', value: 65, fill: '#22c55e' },
    { name: 'Partial', value: 25, fill: '#eab308' },
    { name: 'Reject', value: 10, fill: '#ef4444' },
];

const imageSeoData = [
    { name: 'Optimized', value: 82, fill: '#3b82f6' },
    { name: 'Large Size', value: 12, fill: '#f59e0b' },
    { name: 'Missing Alt', value: 6, fill: '#ef4444' },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Website Analytics Intelligence</h2>
           <p className="text-slate-400">Advanced telemetry and AI-driven behavioral insights.</p>
        </div>
        <select className="bg-[#131B2D] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-500">
          <option>All Websites</option>
          <option>Tech Chronicles</option>
          <option>Daily Recipes</option>
        </select>
      </div>

      {/* --- SECTION 1: GEO & REAL-TIME --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-0 overflow-hidden relative min-h-[400px] bg-[#020617]">
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" /> Live Visitor Map
                </h3>
                <div className="flex items-center gap-2 mt-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-2xl font-bold text-white">1,248</span>
                    <span className="text-xs text-slate-400 uppercase tracking-widest">Active Now</span>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center opacity-60">
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-900/40 to-slate-900 border border-white/5 shadow-[0_0_100px_rgba(37,99,235,0.2)] animate-pulse-slow">
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateX(60deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateY(60deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotate(45deg)' }}></div>
                    <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] animate-ping"></div>
                    <div className="absolute top-[50%] left-[70%] w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-ping delay-75"></div>
                    <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping delay-150"></div>
                </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-4">
                 <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                     <p className="text-[10px] text-slate-400 uppercase">Top Country</p>
                     <p className="text-sm font-bold text-white">USA (45%)</p>
                 </div>
                 <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                     <p className="text-[10px] text-slate-400 uppercase">Fastest Region</p>
                     <p className="text-sm font-bold text-white">Europe</p>
                 </div>
                 <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                     <p className="text-[10px] text-slate-400 uppercase">New Users</p>
                     <p className="text-sm font-bold text-green-400">+12%</p>
                 </div>
            </div>
        </Card>

        <Card className="p-6 bg-gradient-to-b from-[#0F1623] to-purple-900/10 border-purple-500/10">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <RadarIcon className="w-5 h-5 text-purple-400" /> AI Forecast
                </h3>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">Beta Model</span>
             </div>
             <div className="h-48 w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={forecastData}>
                        <defs>
                            <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px'}} itemStyle={{color: '#e2e8f0'}} />
                        <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} fill="transparent" name="Actual" />
                        <Area type="monotone" dataKey="predicted" stroke="#a855f7" strokeWidth={2} strokeDasharray="5 5" fill="url(#colorPred)" name="AI Prediction" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
             <p className="text-xs text-slate-400 text-center">
                 Projected <span className="text-white font-bold">18% Growth</span> over next 3 weeks.
             </p>
        </Card>
      </div>

      {/* --- SECTION 2: BEHAVIORAL DEEP DIVE --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" /> Conversion Funnel
              </h3>
              <div className="space-y-3">
                  {funnelData.map((stage, i) => (
                      <div key={i} className="relative group">
                          <div className="flex justify-between text-xs mb-1 relative z-10">
                              <span className="text-white font-medium">{stage.name}</span>
                              <span className="text-slate-400">{stage.value}%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-6 rounded overflow-hidden relative">
                              <div 
                                className="h-full rounded transition-all duration-1000 group-hover:brightness-110" 
                                style={{ width: `${stage.value}%`, backgroundColor: stage.fill }}
                              ></div>
                          </div>
                      </div>
                  ))}
              </div>
          </Card>

          <Card className="p-6 col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4 flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-orange-400" /> Common User Path
              </h3>
              <div className="flex flex-col items-center justify-center h-full space-y-2 py-4">
                  <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white w-32 text-center">Landing Page</div>
                  <ArrowDown className="w-4 h-4 text-slate-600" />
                  <div className="flex gap-4">
                      <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs text-blue-300 w-24 text-center">Blog Post</div>
                      <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-500 w-24 text-center">Pricing</div>
                  </div>
                  <div className="flex gap-16">
                      <ArrowDown className="w-4 h-4 text-slate-600" />
                      <ArrowDown className="w-4 h-4 text-slate-600 opacity-20" />
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-xs text-green-300 w-32 text-center shadow-[0_0_10px_rgba(34,197,94,0.2)]">Signup</div>
              </div>
          </Card>

          <Card className="p-6 col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-white" /> Scroll Depth
              </h3>
              <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={scrollData} layout="vertical">
                          <XAxis type="number" hide />
                          <YAxis dataKey="depth" type="category" width={50} tick={{fontSize: 10, fill: '#94a3b8'}} />
                          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                          <Bar dataKey="users" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                  </ResponsiveContainer>
              </div>
          </Card>

          <Card className="p-6 col-span-2 md:col-span-1">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-slate-300 uppercase flex items-center gap-2">
                      <LogOut className="w-4 h-4 text-red-400" /> Exit Intent
                  </h3>
                  <span className="text-xs text-red-400">High Risk</span>
              </div>
              <div className="relative h-40 bg-slate-900 rounded-lg border border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ef4444_0%,_transparent_50%)] opacity-30"></div>
                  <div className="absolute top-2 right-4 text-[10px] text-white bg-black/50 px-2 py-1 rounded">Cursor Velocity > 800px/s</div>
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
                      <p className="text-xs text-slate-400">Most users exit from:</p>
                      <p className="text-sm font-bold text-white">Pricing Page (Desktop)</p>
                  </div>
              </div>
          </Card>
      </div>

      {/* --- SECTION 3: SEO & CONTENT INTELLIGENCE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-yellow-400" /> Keyword Opportunity
              </h3>
              <div className="h-64 w-full bg-[#0B0F19] rounded-xl border border-white/5 p-2">
                  <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                          <XAxis type="number" dataKey="x" name="Volume" stroke="#64748b" fontSize={10} />
                          <YAxis type="number" dataKey="y" name="Difficulty" stroke="#64748b" fontSize={10} />
                          <ZAxis type="number" dataKey="z" range={[50, 400]} />
                          <Tooltip cursor={{strokeDasharray: '3 3'}} contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', color: '#fff'}} />
                          <Scatter name="Keywords" data={keywordData} fill="#facc15" />
                      </ScatterChart>
                  </ResponsiveContainer>
              </div>
          </Card>

          <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Smile className="w-5 h-5 text-pink-400" /> Reader Sentiment Arc
              </h3>
              <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sentimentData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                          <XAxis dataKey="point" stroke="#64748b" fontSize={10} />
                          <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155'}} />
                          <Line type="monotone" dataKey="sentiment" stroke="#ec4899" strokeWidth={3} dot={{r: 4, fill: '#ec4899'}} />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
              <div className="mt-2 text-center text-xs text-slate-400">Peak engagement at <span className="text-white font-bold">60s</span> mark.</div>
          </Card>

          <div className="flex flex-col gap-6">
              <Card className="p-6 flex-1 bg-gradient-to-br from-[#1e293b] to-blue-900/20 border-blue-500/20">
                  <div className="flex justify-between items-start">
                      <div>
                          <p className="text-xs text-blue-300 font-bold uppercase mb-1">Voice Search Traffic</p>
                          <h4 className="text-3xl font-bold text-white">12.5%</h4>
                      </div>
                      <Mic className="w-6 h-6 text-blue-400" />
                  </div>
              </Card>

              <Card className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <Wind className="w-4 h-4 text-cyan-400" /> Content Velocity
                      </h3>
                      <span className="text-xs text-green-400 font-bold">High</span>
                  </div>
                  <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">4.2 Hrs</span>
                      <span className="text-xs text-green-400 mb-1">▼ 1.5h faster</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="w-[85%] bg-cyan-500 h-full rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                  </div>
              </Card>
          </div>
      </div>

      {/* --- SECTION 4: REVENUE PROTECTION & VIRALITY --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-5 border-l-4 border-l-red-500">
              <div className="flex justify-between items-start mb-2">
                  <Ban className="w-5 h-5 text-red-500" />
                  <span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">Lost Rev</span>
              </div>
              <p className="text-xs text-slate-400">Ad Blocker Impact</p>
              <p className="text-xl font-bold text-white mt-1">$1,240</p>
          </Card>

          <Card className="p-5 border-l-4 border-l-green-500">
              <div className="flex justify-between items-start mb-2">
                  <Share2 className="w-5 h-5 text-green-500" />
                  <span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">Trending</span>
              </div>
              <p className="text-xs text-slate-400">Virality Score</p>
              <p className="text-xl font-bold text-white mt-1">92/100</p>
          </Card>

          <Card className="p-5 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">New</span>
              </div>
              <p className="text-xs text-slate-400">Brand Mentions</p>
              <p className="text-xl font-bold text-white mt-1">145</p>
          </Card>

          <Card className="p-5 border-l-4 border-l-purple-500">
              <div className="flex justify-between items-start mb-2">
                  <Smartphone className="w-5 h-5 text-purple-500" />
                  <span className="text-[10px] text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">Mobile First</span>
              </div>
              <p className="text-xs text-slate-400">Top Device</p>
              <p className="text-xl font-bold text-white mt-1">iPhone 15</p>
          </Card>
      </div>

      {/* --- SECTION 5: COMPETITIVE LANDSCAPE --- */}
      <div className="grid grid-cols-1">
          <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Activity className="w-5 h-5 text-red-400" /> Competitor Traffic Overlay
                  </h3>
                  <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-300">You</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-slate-300">Competitor A</span>
                      </div>
                  </div>
              </div>
              <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trafficData}>
                          <defs>
                              <linearGradient id="colorYou" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                              </linearGradient>
                          </defs>
                          <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                          <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px'}} itemStyle={{color: '#e2e8f0'}} />
                          <Area type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} fill="url(#colorYou)" />
                          <Area type="monotone" dataKey="competitor" stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" fill="url(#colorComp)" />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
          </Card>
      </div>

      {/* --- SECTION 6: CONTENT STRATEGY & OPTIMIZATION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-orange-400" /> Content Decay Analysis
              </h3>
              <p className="text-xs text-slate-400 mb-4">Tracking traffic drop-off for posts older than 6 months.</p>
              <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={decayData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                          <XAxis dataKey="month" stroke="#64748b" fontSize={10} />
                          <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155'}} />
                          <Line type="stepAfter" dataKey="traffic" stroke="#f97316" strokeWidth={2} dot={false} />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
              <div className="bg-orange-500/10 p-2 rounded text-xs text-orange-300 mt-2 text-center">
                  Action: Refresh 3 high-value posts to recover 25% traffic.
              </div>
          </Card>

          <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Split className="w-5 h-5 text-blue-400" /> A/B Headline Performance
              </h3>
              <div className="space-y-4">
                  {abData.map((variant, i) => (
                      <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                              <span className="text-white">{variant.name}</span>
                              <span className="text-slate-400">{variant.rate}% CTR</span>
                          </div>
                          <div className="w-full bg-slate-800 h-8 rounded-lg overflow-hidden relative">
                              <div 
                                className="h-full rounded-lg flex items-center justify-end px-2 text-[10px] font-bold text-white" 
                                style={{ width: `${(variant.rate / 5) * 100}%`, backgroundColor: variant.fill }}
                              >
                                  {variant.rate}%
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <p className="text-xs text-green-400 mt-4 flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> Winner: Variant B (+100% improvement)
              </p>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" /> Topic Cluster Heatmap
              </h3>
              <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <Treemap
                          data={topicData}
                          dataKey="size"
                          stroke="#0F1623"
                          fill="#8884d8"
                          content={({ root, depth, x, y, width, height, index, name }) => (
                             <g>
                                <rect x={x} y={y} width={width} height={height} style={{ fill: topicData[index % topicData.length].fill, stroke: '#0f172a', strokeWidth: 2 }} />
                                {width > 30 && height > 30 && (
                                    <text x={x + width / 2} y={y + height / 2 + 5} textAnchor="middle" fill="#fff" fontSize={10} fontWeight="bold">
                                        {name}
                                    </text>
                                )}
                             </g>
                          )}
                      />
                  </ResponsiveContainer>
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Glasses className="w-5 h-5 text-teal-400" /> Readability Correlation
              </h3>
              <div className="flex items-center justify-center h-32 space-x-8">
                   <div className="text-center">
                       <div className="text-3xl font-bold text-white">Grade 8</div>
                       <div className="text-xs text-slate-400">Avg Readability</div>
                   </div>
                   <div className="h-12 w-px bg-white/10"></div>
                   <div className="text-center">
                       <div className="text-3xl font-bold text-green-400">42%</div>
                       <div className="text-xs text-slate-400">Bounce Rate</div>
                   </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-2">Simpler content is retaining 15% more users.</p>
          </Card>
      </div>

      {/* --- SECTION 7: AUDIENCE & ENGAGEMENT DEEP DIVE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 col-span-1 lg:col-span-3">
               <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-indigo-400" /> Reader Personas (AI Generated)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                      { title: "The Deep Diver", icon: Glasses, desc: "Reads 100% of long-form content. Clicks sources.", percent: "15%" },
                      { title: "The Skimmer", icon: Wind, desc: "Scans headlines. Stays < 30s. Exits quickly.", percent: "45%" },
                      { title: "The Loyalist", icon: Fingerprint, desc: "Returns weekly. Comments often. High value.", percent: "20%" },
                  ].map((p, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300">
                                  <p.icon className="w-5 h-5" />
                              </div>
                              <span className="text-xl font-bold text-white">{p.percent}</span>
                          </div>
                          <h4 className="font-bold text-white mb-1">{p.title}</h4>
                          <p className="text-xs text-slate-400">{p.desc}</p>
                      </div>
                  ))}
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-pink-400" /> Social Radar
              </h3>
              <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={socialRadarData}>
                          <PolarGrid stroke="#334155" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                          <Radar name="Shares" dataKey="A" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
                      </RadarChart>
                  </ResponsiveContainer>
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-400" /> Engagement Heatgrid
              </h3>
              <div className="grid grid-cols-7 gap-1">
                  {[...Array(28)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded ${
                            [3, 11, 15, 22].includes(i) ? 'bg-yellow-500' : 
                            [4, 12, 16].includes(i) ? 'bg-yellow-500/60' : 
                            'bg-white/5'
                        }`}
                        title="Activity Level"
                      ></div>
                  ))}
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">Best time: Wed 2 PM</p>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <RefreshCcw className="w-5 h-5 text-green-400" /> Return Rate
              </h3>
              <div className="h-40 w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={10} data={returnRateData} startAngle={180} endAngle={0}>
                          <RadialBar background dataKey="uv" cornerRadius={10} />
                          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-3xl font-bold">35%</text>
                          <text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-400 text-xs">Returning</text>
                      </RadialBarChart>
                  </ResponsiveContainer>
              </div>
          </Card>
      </div>

      {/* --- SECTION 8: TECHNICAL & COMPLIANCE INTELLIGENCE --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-red-400" /> Bot Traffic
              </h3>
              <div className="h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                          <Pie data={botData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={5} dataKey="value">
                              {botData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                          </Pie>
                          <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} itemStyle={{color: '#fff'}} />
                      </PieChart>
                  </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Human</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> Bot</span>
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-teal-400" /> Accessibility
              </h3>
              <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-teal-400">98</span>
                  <span className="text-xs text-slate-500 block">WCAG 2.1 AA</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between"><span className="text-slate-500">Contrast</span> <span>Pass</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Alt Tags</span> <span>Pass</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">ARIA</span> <span>Pass</span></div>
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-purple-400" /> Theme Pref
              </h3>
              <div className="flex items-center justify-center gap-4 h-full pb-8">
                   <div className="text-center">
                       <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-2 border-4 border-slate-700">30%</div>
                       <span className="text-xs text-slate-400">Light</span>
                   </div>
                   <div className="text-center">
                       <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-2 border-4 border-blue-600 shadow-lg shadow-blue-900/50">70%</div>
                       <span className="text-xs font-bold text-white">Dark</span>
                   </div>
              </div>
          </Card>

           <Card className="p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-orange-400" /> Load Waterfall
              </h3>
              <div className="space-y-1 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
                  <div className="flex items-center gap-2 text-[10px]">
                      <span className="w-8 text-slate-500 text-right">DNS</span>
                      <div className="h-1.5 bg-blue-500 rounded w-4 ml-0"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                      <span className="w-8 text-slate-500 text-right">SSL</span>
                      <div className="h-1.5 bg-purple-500 rounded w-6 ml-4"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                      <span className="w-8 text-slate-500 text-right">TTFB</span>
                      <div className="h-1.5 bg-green-500 rounded w-10 ml-10"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                      <span className="w-8 text-slate-500 text-right">FCP</span>
                      <div className="h-1.5 bg-orange-500 rounded w-16 ml-20"></div>
                  </div>
              </div>
          </Card>
      </div>

      {/* --- SECTION 9: ADVANCED MONETIZATION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Magnet className="w-5 h-5 text-red-400" /> Top Affiliate Links
                  </h3>
                  <button className="text-xs text-blue-400">View All</button>
              </div>
              <div className="space-y-3">
                  {[
                      { name: "NordVPN Promo", clicks: 1204, conv: "4.2%", earn: "$450" },
                      { name: "Amazon Camera Gear", clicks: 890, conv: "2.1%", earn: "$120" },
                      { name: "Bluehost Hosting", clicks: 450, conv: "8.5%", earn: "$890" },
                  ].map((link, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <span className="text-sm text-slate-300 font-medium">{link.name}</span>
                          <div className="flex gap-4 text-xs">
                              <span className="text-slate-500">{link.clicks} clicks</span>
                              <span className="text-blue-400">{link.conv}</span>
                              <span className="text-green-400 font-bold">{link.earn}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </Card>

          <Card className="p-6">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-400" /> Ad Viewability
              </h3>
              <div className="flex items-center justify-between">
                  <div className="flex-1 text-center border-r border-white/10">
                      <p className="text-3xl font-bold text-white">82%</p>
                      <p className="text-xs text-slate-400">Above Fold</p>
                  </div>
                  <div className="flex-1 text-center">
                      <p className="text-3xl font-bold text-slate-500">45%</p>
                      <p className="text-xs text-slate-400">Below Fold</p>
                  </div>
              </div>
              <div className="mt-4 bg-white/5 p-3 rounded-lg text-xs text-slate-400 flex gap-2">
                  <Activity className="w-4 h-4 text-orange-400" />
                  <span>Recommendation: Move sidebar ad unit up 200px.</span>
              </div>
          </Card>
      </div>

       {/* --- NEW SECTION 10: PREDICTIVE FINANCIAL MODELS (Features 31-32) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Feature 31: LTV Projection */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <TrendingUp className="w-5 h-5 text-green-400" /> Lifetime Value (LTV) Projection
                </h3>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ltvData}>
                            <defs>
                                <linearGradient id="colorLtv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155'}} />
                            <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#colorLtv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
           </Card>

           {/* Feature 32: Lost Revenue Calculator */}
           <Card className="p-6 bg-gradient-to-br from-red-900/10 to-slate-900 border-red-500/10">
                <div className="flex justify-between items-start mb-4">
                     <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-400" /> Lost Revenue Opps
                     </h3>
                     <span className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded">High Priority</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">$3,420</div>
                <p className="text-sm text-slate-400 mb-6">Estimated annual loss due to 404 errors & slow load times.</p>
                <button className="w-full py-2 bg-red-600/20 text-red-300 rounded-lg text-sm hover:bg-red-600/30 transition-colors">Fix Issues</button>
           </Card>
       </div>

       {/* --- NEW SECTION 11: ADVANCED ATTRIBUTION (Features 33-34) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Feature 33: Multi-Touch Attribution */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Split className="w-5 h-5 text-blue-400" /> Multi-Touch Attribution
                </h3>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attributionData}>
                            <XAxis dataKey="channel" stroke="#64748b" fontSize={10} />
                            <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                            <Legend />
                            <Bar dataKey="first" name="First Touch" fill="#3b82f6" stackId="a" />
                            <Bar dataKey="last" name="Last Touch" fill="#8b5cf6" stackId="a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
           </Card>

           {/* Feature 34: Dark Social Estimator */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <MessageCircle className="w-5 h-5 text-purple-400" /> Dark Social Traffic
                </h3>
                <div className="flex items-center gap-8">
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="#1e293b" strokeWidth="12" fill="none" />
                            <circle cx="64" cy="64" r="56" stroke="#a855f7" strokeWidth="12" fill="none" strokeDasharray="350" strokeDashoffset="100" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">72%</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 mb-2">Estimated traffic from private channels (WhatsApp, Slack, SMS).</p>
                        <div className="text-xs text-purple-400 font-bold">+12% vs last month</div>
                    </div>
                </div>
           </Card>
       </div>

       {/* --- NEW SECTION 12: CONTENT ECOLOGY (Features 35-37) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Feature 35: Internal Link Flow */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Link className="w-5 h-5 text-slate-400" /> Link Juice Flow
                </h3>
                <div className="h-40 bg-[#0F1623] border border-white/5 rounded-xl relative overflow-hidden">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart>
                             <Scatter data={linkNodes} fill="#8884d8">
                                {linkNodes.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                             </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-[10px] text-slate-500">Interactive Graph</span>
                    </div>
                </div>
           </Card>

           {/* Feature 36: Search Intent Classification */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <BrainCircuit className="w-5 h-5 text-pink-400" /> Search Intent
                </h3>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={intentData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value">
                                {intentData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-2 text-[10px] text-slate-400 mt-2">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Info</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Trans</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Nav</span>
                </div>
           </Card>

           {/* Feature 37: Video Engagement */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Video className="w-5 h-5 text-red-500" /> Video Retention
                </h3>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={videoData}>
                             <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-center text-xs text-slate-500 mt-2">Avg drop-off at 1:45</div>
           </Card>
       </div>

       {/* --- NEW SECTION 13: COMMUNITY & LOYALTY (Features 38-40) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Feature 38: Reader Loyalty Pyramid */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Heart className="w-5 h-5 text-red-500" /> Loyalty Tiers
                </h3>
                <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-16 h-8 bg-red-500 rounded-t-lg flex items-center justify-center text-[10px] text-white font-bold">VIP (5%)</div>
                    <div className="w-32 h-8 bg-red-500/60 flex items-center justify-center text-[10px] text-white font-bold">Fans (20%)</div>
                    <div className="w-48 h-8 bg-red-500/30 flex items-center justify-center text-[10px] text-white font-bold">Casual (35%)</div>
                    <div className="w-64 h-8 bg-red-500/10 rounded-b-lg flex items-center justify-center text-[10px] text-white font-bold">New (40%)</div>
                </div>
           </Card>

           {/* Feature 39: Sentiment Cloud */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Cloud className="w-5 h-5 text-blue-400" /> Sentiment Cloud
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-xl text-green-400 font-bold">Insightful</span>
                    <span className="text-sm text-slate-400">Long</span>
                    <span className="text-lg text-blue-400 font-bold">Helpful</span>
                    <span className="text-xs text-slate-500">Confusing</span>
                    <span className="text-md text-purple-400 font-bold">Detailed</span>
                    <span className="text-sm text-slate-300">Great</span>
                </div>
           </Card>

           {/* Feature 40: VoC Highlights */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Lightbulb className="w-5 h-5 text-yellow-400" /> Voice of Customer
                </h3>
                <ul className="space-y-2">
                    <li className="text-xs text-slate-300 bg-white/5 p-2 rounded border-l-2 border-green-500">"More tutorials on React please!"</li>
                    <li className="text-xs text-slate-300 bg-white/5 p-2 rounded border-l-2 border-red-500">"Dark mode is hard to read."</li>
                    <li className="text-xs text-slate-300 bg-white/5 p-2 rounded border-l-2 border-blue-500">"Love the new layout."</li>
                </ul>
           </Card>
       </div>

       {/* --- NEW SECTION 14: REAL-TIME ATTENTION (Features 41-42) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Feature 41: Attention Index */}
           <Card className="p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                       <Zap className="w-5 h-5 text-yellow-500" /> Attention Index
                    </h3>
                    <p className="text-xs text-slate-400">Real-time user focus level.</p>
                </div>
                <div className="text-right">
                    <div className="text-4xl font-bold text-white">8.4<span className="text-lg text-slate-500">/10</span></div>
                    <div className="text-xs text-green-400">High Focus</div>
                </div>
           </Card>

           {/* Feature 42: Newsletter Heatmap */}
           <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                   <LayoutTemplate className="w-5 h-5 text-slate-400" /> Newsletter Heatmap
                </h3>
                <div className="w-full h-20 bg-slate-800 rounded-lg flex relative overflow-hidden">
                    <div className="absolute top-2 right-4 w-4 h-4 rounded-full bg-red-500/80 animate-pulse"></div>
                    <div className="absolute bottom-2 left-10 w-8 h-8 rounded-full bg-yellow-500/50 blur-md"></div>
                    <div className="m-auto text-xs text-slate-500">Conversion Hotspots</div>
                </div>
           </Card>
       </div>

       {/* --- NEW SECTION 15: OPERATIONAL HEALTH & EXPORT (Features 43-45) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 43: Web Vitals History */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Activity className="w-5 h-5 text-green-400" /> Vitals History
                </h3>
                <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={vitalsHistory}>
                            <Line type="step" dataKey="lcp" stroke="#22c55e" strokeWidth={2} />
                            <Line type="step" dataKey="cls" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Feature 44: Smart Anomaly Feed */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-orange-400" /> Anomalies
                </h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span> Spike in 404s (10:00 AM)
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Slow LCP on /pricing
                    </div>
                </div>
            </Card>

            {/* Feature 45: Stakeholder Share View */}
            <Card className="p-6 lg:col-span-1 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/20 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/10 rounded-full mb-3">
                    <Share className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-1">Share Dashboard</h3>
                <p className="text-xs text-slate-400">Create read-only view for stakeholders.</p>
            </Card>
       </div>

       {/* --- NEW SECTION 16: USER RETENTION & LOYALTY (Features 47-49) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Feature 47: Cohort Retention Analysis */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Users className="w-5 h-5 text-indigo-400" /> Cohort Retention
                </h3>
                <div className="space-y-1">
                    <div className="flex text-xs text-slate-400 justify-between px-2 mb-1">
                        <span>Date</span><span>W1</span><span>W2</span><span>W3</span>
                    </div>
                    {[
                        { date: 'Oct 01', w1: 100, w2: 45, w3: 25 },
                        { date: 'Oct 08', w1: 100, w2: 48, w3: 30 },
                        { date: 'Oct 15', w1: 100, w2: 52, w3: null },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-4 gap-1">
                            <span className="text-[10px] text-slate-500 py-1">{row.date}</span>
                            <div className="bg-blue-600/90 rounded h-6 flex items-center justify-center text-[9px] text-white">100%</div>
                            <div className="bg-blue-600/50 rounded h-6 flex items-center justify-center text-[9px] text-white">{row.w2}%</div>
                            {row.w3 ? <div className="bg-blue-600/30 rounded h-6 flex items-center justify-center text-[9px] text-white">{row.w3}%</div> : <div className="bg-white/5 rounded h-6"></div>}
                        </div>
                    ))}
                </div>
           </Card>

           {/* Feature 48: Brand Sentiment Trend */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Heart className="w-5 h-5 text-pink-400" /> Sentiment Trend
                </h3>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sentimentTrendData}>
                            <defs>
                                <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                            <Area type="monotone" dataKey="pos" stackId="1" stroke="#22c55e" fill="url(#colorPos)" />
                            <Area type="monotone" dataKey="neu" stackId="1" stroke="#94a3b8" fill="#475569" />
                            <Area type="monotone" dataKey="neg" stackId="1" stroke="#ef4444" fill="#ef4444" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
           </Card>

           {/* Feature 49: Content Gap Radar */}
           <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Target className="w-5 h-5 text-orange-400" /> Content Gap
                </h3>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                         <RadarChart cx="50%" cy="50%" outerRadius="70%" data={contentGapData}>
                            <PolarGrid stroke="#334155" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 9 }} />
                            <Radar name="You" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                            <Radar name="Comp" dataKey="B" stroke="#f97316" fill="#f97316" fillOpacity={0.1} />
                            <Legend wrapperStyle={{fontSize: '10px'}} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
           </Card>
       </div>

       {/* --- SECTION 17: SEO TECHNICAL & PERFORMANCE (Features 50-52) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 50: Keyword Cannibalization */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <AlertOctagon className="w-5 h-5 text-red-400" /> Cannibalization
                </h3>
                <div className="space-y-3">
                    <div className="p-2 bg-white/5 rounded border border-white/5">
                        <p className="text-xs text-white font-bold mb-1">Keyword: "AI Tools"</p>
                        <div className="flex justify-between text-[10px] text-slate-400">
                            <span>/blog/ai-tools-2025</span>
                            <span className="text-yellow-400">Pos 4</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                            <span>/blog/best-ai-software</span>
                            <span className="text-yellow-400">Pos 6</span>
                        </div>
                    </div>
                    <button className="w-full py-1.5 bg-red-500/10 text-red-400 text-xs rounded hover:bg-red-500/20">Review Conflict</button>
                </div>
            </Card>

            {/* Feature 51: Viral Velocity Gauge */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-yellow-400" /> Viral Velocity
                </h3>
                <div className="h-32 w-full relative">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={10} data={viralVelocityData} startAngle={180} endAngle={0}>
                             <RadialBar background dataKey="uv" cornerRadius={10} />
                        </RadialBarChart>
                     </ResponsiveContainer>
                     <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                         <span className="text-3xl font-bold text-white">85</span>
                         <span className="text-[10px] text-slate-400 uppercase">Momentum</span>
                     </div>
                </div>
            </Card>

            {/* Feature 52: Journey Drop-off Nodes */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <UserMinus className="w-5 h-5 text-red-400" /> Journey Leaks
                </h3>
                <div className="flex flex-col items-center gap-2">
                     <div className="w-full p-2 bg-white/5 rounded text-xs text-center border-l-2 border-green-500">Landing (100%)</div>
                     <ArrowDown className="w-3 h-3 text-slate-600" />
                     <div className="w-full p-2 bg-white/5 rounded text-xs text-center border-l-2 border-yellow-500">Pricing (40%)</div>
                     <ArrowDown className="w-3 h-3 text-slate-600" />
                     <div className="w-full p-2 bg-red-900/20 rounded text-xs text-center border-l-2 border-red-500 text-red-200">Checkout (5%) <span className="font-bold text-red-400">-35% Drop</span></div>
                </div>
            </Card>
       </div>

       {/* --- SECTION 18: GROWTH & RECOVERY (Features 53-55) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 53: Ad Blocker Recovery */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-green-400" /> AdBlock Recovery
                </h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">Detected</span>
                    <span className="text-xs font-bold text-white">1,240</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-400">Recovered</span>
                    <span className="text-xs font-bold text-green-400">340 (27%)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="w-[27%] bg-green-500 h-full rounded-full"></div>
                </div>
            </Card>

            {/* Feature 54: Newsletter Attribution */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Mail className="w-5 h-5 text-blue-400" /> Sub Drivers
                </h3>
                <div className="space-y-2">
                    {[
                        { title: "React Guide", count: 45, width: "80%" },
                        { title: "AI Future", count: 32, width: "60%" },
                        { title: "Crypto Tips", count: 12, width: "25%" },
                    ].map((post, i) => (
                        <div key={i} className="text-xs">
                            <div className="flex justify-between mb-1">
                                <span className="text-slate-300">{post.title}</span>
                                <span className="text-white font-bold">{post.count}</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1 rounded-full">
                                <div style={{width: post.width}} className="bg-blue-500 h-full rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Feature 55: Voice Search Readiness */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Mic className="w-5 h-5 text-purple-400" /> Voice Readiness
                </h3>
                <div className="flex items-center justify-center py-2">
                     <div className="relative w-24 h-24 rounded-full border-4 border-slate-700 flex items-center justify-center">
                         <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent transform rotate-45"></div>
                         <div className="text-center">
                             <span className="text-2xl font-bold text-white">72</span>
                             <span className="block text-[9px] text-slate-400 uppercase">Score</span>
                         </div>
                     </div>
                </div>
                <p className="text-xs text-center text-slate-400 mt-2">Schema markup detected.</p>
            </Card>
       </div>

       {/* --- SECTION 19: ASSET & PRIVACY HEALTH (Features 56-58) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 56: Image SEO Health */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Image className="w-5 h-5 text-teal-400" /> Image SEO
                </h3>
                <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={imageSeoData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={5} dataKey="value">
                                {imageSeoData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-center text-xs text-slate-400">82% Optimized</div>
            </Card>

            {/* Feature 57: Latency vs Bounce Correlation */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Activity className="w-5 h-5 text-orange-400" /> Speed vs Bounce
                </h3>
                <div className="h-32 w-full bg-slate-900/50 rounded border border-white/5">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart>
                             <XAxis type="number" dataKey="x" name="ms" hide />
                             <YAxis type="number" dataKey="y" name="bounce" hide />
                             <Scatter data={latencyBounceData} fill="#f97316" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-[10px] text-center text-slate-500 mt-2">Correlation: High (0.85)</p>
            </Card>

            {/* Feature 58: GDPR Consent Rate */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Cookie className="w-5 h-5 text-blue-400" /> GDPR Consent
                </h3>
                <div className="space-y-3">
                    {consentData.map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.fill}}></div>
                                <span className="text-slate-300">{item.name}</span>
                            </div>
                            <span className="text-white font-bold">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </Card>
       </div>

       {/* --- SECTION 20: ECOSYSTEM REACH (Features 59-61) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 59: Author Leaderboard */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <PenTool className="w-5 h-5 text-yellow-400" /> Top Authors
                </h3>
                <div className="space-y-3">
                    {[
                        { name: "Sarah J.", views: "45k", trend: "+12%" },
                        { name: "Mike R.", views: "32k", trend: "+5%" },
                        { name: "Alex D.", views: "12k", trend: "-2%" },
                    ].map((auth, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
                            <span className="text-xs font-bold text-white">{auth.name}</span>
                            <div className="text-right">
                                <span className="block text-xs text-slate-400">{auth.views}</span>
                                <span className={`text-[9px] ${auth.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{auth.trend}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Feature 60: Syndication Reach */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Share2 className="w-5 h-5 text-indigo-400" /> Syndication
                </h3>
                <div className="h-32 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={syndicationData}>
                            <XAxis dataKey="name" tick={{fontSize: 9, fill: '#64748b'}} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {syndicationData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                     </ResponsiveContainer>
                </div>
            </Card>

            {/* Feature 61: Reader Fatigue Analysis */}
            <Card className="p-6 lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <Coffee className="w-5 h-5 text-orange-400" /> Reader Fatigue
                </h3>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-400">Avg Read Time</span>
                    <span className="text-sm font-bold text-white">4m 12s</span>
                </div>
                <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-gradient-to-r from-green-500 to-orange-500"></div>
                </div>
                <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                    <span>Engaged</span>
                    <span>Fatigue Zone (>5m)</span>
                </div>
            </Card>
       </div>

       {/* Feature 46: Automated Report Generator (Existing but kept for continuity) */}
       <Card className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-500/30">
                    <FileBarChart className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Monthly Report Ready</h3>
                    <p className="text-xs text-slate-400">Generated automatically based on this month's data.</p>
                </div>
            </div>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors">
                Download PDF
            </button>
       </Card>

      {/* --- EXISTING BASE FEATURES --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/5">
         <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Play className="w-5 h-5 text-blue-400" /> Session Replay
                </h3>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Live</span>
            </div>
            <div className="aspect-video bg-black/40 rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 z-20 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                </div>
                <div className="p-4 opacity-50">
                    <div className="h-4 w-1/3 bg-slate-600 rounded mb-4"></div>
                    <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                     <MousePointer2 className="w-4 h-4 text-blue-500 fill-blue-500 drop-shadow-lg" />
                </div>
            </div>
         </Card>

         <Card className="p-6">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-orange-400" /> UX Heatmap
                </h3>
             </div>
             <div className="aspect-video bg-[#0B0F19] rounded-xl border border-white/10 relative overflow-hidden">
                 <div className="p-4 space-y-4 opacity-30">
                     <div className="flex justify-between">
                         <div className="h-8 w-8 rounded-full bg-slate-600"></div>
                         <div className="h-4 w-20 bg-slate-600 rounded"></div>
                     </div>
                     <div className="h-32 bg-slate-700 rounded-lg"></div>
                 </div>
                 <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-red-500/40 blur-xl rounded-full"></div>
                 <div className="absolute top-[25%] left-[15%] w-12 h-12 bg-yellow-500/50 blur-lg rounded-full"></div>
                 <div className="absolute bottom-[30%] right-[20%] w-32 h-32 bg-blue-500/30 blur-xl rounded-full"></div>
             </div>
         </Card>
      </div>
    </div>
  );
};