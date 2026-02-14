import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { BrainCircuit, DollarSign, FileText, Bell, Settings as SettingsIcon, Shield, Key, FileBarChart, Download, Palette, TrendingUp, CreditCard, Webhook, Globe, Lock, Calculator, Database, EyeOff, Scale, Kanban, MessageCircle, AlertTriangle, FileSpreadsheet, Briefcase, Gem, Landmark, PieChart, Coins, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, BarChart, Bar, Pie, Cell, PieChart as RePieChart, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export const Revenue: React.FC = () => {
  const [liveEarnings, setLiveEarnings] = useState(142392.00);

  useEffect(() => {
    const interval = setInterval(() => {
        setLiveEarnings(prev => prev + (Math.random() * 2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const forecastData = [
    { month: 'Jan', actual: 42000, projected: 41000 },
    { month: 'Feb', actual: 45000, projected: 44000 },
    { month: 'Mar', actual: 48000, projected: 47000 },
    { month: 'Apr', actual: 52000, projected: 50000 },
    { month: 'May', actual: null, projected: 55000 },
    { month: 'Jun', actual: null, projected: 59000 },
  ];

  const adNetworkData = [
    { name: 'AdSense', cpm: 2.4, revenue: 12000 },
    { name: 'Mediavine', cpm: 15.2, revenue: 28500 },
    { name: 'Ezoic', cpm: 8.5, revenue: 5400 },
  ];

  const expenseData = [
    { name: 'Servers', value: 1200, color: '#3b82f6' },
    { name: 'Content', value: 3500, color: '#a855f7' },
    { name: 'Tools', value: 800, color: '#22c55e' },
    { name: 'Marketing', value: 2100, color: '#f97316' },
  ];

  return (
  <div className="space-y-8 animate-fade-in pb-10">
    <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 animate-gradient-x">Monetization Intelligence</h2>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-bold border border-green-500/20 flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Live Revenue
            </span>
        </div>
    </div>

    {/* Top Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 relative overflow-hidden hover-lift cursor-default group">
         <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform duration-500"><DollarSign className="w-16 h-16 text-green-400" /></div>
         <p className="text-green-300 font-medium mb-1">Total Earnings (YTD)</p>
         <h3 className="text-4xl font-bold text-white mb-2">${liveEarnings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
         <p className="text-xs text-green-200">+18.4% vs last year</p>
      </div>
      <Card className="p-6 hover-lift">
         <div className="flex justify-between items-start mb-2">
            <p className="text-slate-400">Earnings This Month</p>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">+12%</span>
         </div>
         <h3 className="text-3xl font-bold text-white">$42,890.00</h3>
         <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="w-[75%] bg-blue-500 h-full rounded-full animate-shimmer"></div>
         </div>
         <p className="text-xs text-slate-500 mt-2">75% of monthly goal reached</p>
      </Card>
      <Card className="p-6 hover-lift">
         <p className="text-slate-400 mb-1">Earnings Today</p>
         <h3 className="text-3xl font-bold text-white mb-2">$1,892.00</h3>
         <div className="flex items-center gap-2 text-xs text-slate-400">
             <TrendingUp className="w-3 h-3 text-green-400" /> 
             <span>Highest Tuesday in 3 months</span>
         </div>
      </Card>
    </div>

    {/* Feature 1: Predictive Revenue Forecasting */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 hover-lift">
            <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-purple-400 animate-pulse-slow" /> AI Revenue Forecast
                 </h3>
                 <span className="text-xs text-slate-500">Confidence: 94%</span>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={forecastData}>
                        <defs>
                            <linearGradient id="colorAct" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorProj" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                        <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155'}} />
                        <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={3} fill="url(#colorAct)" name="Actual" animationDuration={2000} />
                        <Area type="monotone" dataKey="projected" stroke="#a855f7" strokeWidth={3} strokeDasharray="5 5" fill="url(#colorProj)" name="AI Projected" animationDuration={2000} animationBegin={1000} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>

        {/* Feature 2: Ad Network Arbitrage */}
        <Card className="p-6 hover-lift">
             <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Scale className="w-5 h-5 text-orange-400" /> Ad Network Arbitrage
                 </h3>
                 <button className="text-xs text-blue-400 hover:text-white transition-colors">Optimize</button>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={adNetworkData} layout="vertical">
                         <XAxis type="number" hide />
                         <YAxis dataKey="name" type="category" width={80} tick={{fill: '#94a3b8', fontSize: 11}} />
                         <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                         <Bar dataKey="revenue" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} animationDuration={1500} />
                         <Bar dataKey="cpm" fill="#a855f7" radius={[0, 4, 4, 0]} barSize={10} animationDuration={1500} animationBegin={500} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs mt-2">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded"></div> Revenue</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded"></div> CPM</span>
            </div>
        </Card>
    </div>

    {/* Feature 3: Expense Ratio & Smart Pricing */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 4: Expense Ratio Analyzer */}
        <Card className="p-6 hover-lift">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-red-400" /> Profit Margins
            </h3>
            <div className="h-40 w-full flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                     <RePieChart>
                         <Pie data={expenseData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                             {expenseData.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                         </Pie>
                         <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                     </RePieChart>
                 </ResponsiveContainer>
            </div>
            <div className="text-center">
                <p className="text-2xl font-bold text-white">82%</p>
                <p className="text-xs text-slate-500">Net Profit Margin</p>
            </div>
        </Card>

        {/* Feature 5: Smart Pricing Engine */}
        <Card className="p-6 bg-gradient-to-br from-[#131B2D] to-indigo-900/20 border-indigo-500/20 hover-lift">
             <div className="flex justify-between items-start mb-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Gem className="w-5 h-5 text-indigo-400 animate-pulse-slow" /> Smart Pricing
                 </h3>
                 <span className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded">AI Suggestion</span>
             </div>
             <p className="text-sm text-slate-300 mb-6">Increasing your "Pro Plan" from <span className="line-through text-slate-500">$10</span> to <span className="text-white font-bold">$12</span> could increase revenue by <span className="text-green-400 font-bold">15%</span> without churn impact.</p>
             <div className="flex gap-3">
                 <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors active-press shadow-lg shadow-indigo-600/30">Apply Change</button>
                 <button className="flex-1 py-2 bg-white/5 text-slate-400 rounded-lg text-sm hover:text-white transition-colors active-press">Simulate</button>
             </div>
        </Card>

        {/* Feature 6: Tax Vault */}
        <Card className="p-6 hover-lift">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-yellow-500" /> Tax Vault
            </h3>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 mb-4">
                <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">Est. Tax (20%)</span>
                    <span className="text-white font-bold">$8,578.00</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="w-[45%] bg-yellow-500 h-full rounded-full"></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 text-right">45% Set Aside</p>
            </div>
            <button className="w-full py-2 bg-white/5 text-slate-300 rounded-lg text-sm hover:bg-white/10 flex items-center justify-center gap-2 transition-colors active-press">
                <Download className="w-4 h-4" /> Download Report
            </button>
        </Card>
    </div>

    {/* Feature 12 (Existing): Sponsorship Deal CRM */}
    <Card className="p-6 hover-lift">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Kanban className="w-5 h-5 text-purple-400" /> Sponsorship Pipeline
            </h3>
            <button className="text-xs text-blue-400 hover:text-white">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Leads</p>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer active-press">
                    <p className="text-sm font-bold text-white">TechGear Co.</p>
                    <p className="text-xs text-slate-400">$2,500 • Q4 Review</p>
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Negotiation</p>
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors cursor-pointer active-press">
                    <p className="text-sm font-bold text-white">NordVPN</p>
                    <p className="text-xs text-slate-400">$5,000 • 3 Posts</p>
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Signed</p>
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors cursor-pointer active-press">
                    <p className="text-sm font-bold text-white">HelloFresh</p>
                    <p className="text-xs text-slate-400">$8,200 • Video Series</p>
                </div>
            </div>
        </div>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature 13 (Existing): Ad Bidding Simulator */}
        <Card className="p-6 hover-lift">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" /> Real-time Ad Bidding
            </h3>
            <div className="h-40 w-full mb-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                        {name: '12:00', bid: 0.4}, {name: '12:05', bid: 0.6}, {name: '12:10', bid: 0.8}, 
                        {name: '12:15', bid: 1.2}, {name: '12:20', bid: 0.9}, {name: '12:25', bid: 0.7}
                    ]}>
                        <Bar dataKey="bid" fill="#4ade80" radius={[4, 4, 0, 0]} animationDuration={1000} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
                <span>Avg CPM: $0.85</span>
                <span>Fill Rate: 98%</span>
            </div>
        </Card>

        {/* Feature 7 & 8: Currency Wallet & Payment Pulse */}
        <Card className="p-6 grid grid-cols-2 gap-4 hover-lift">
             <div className="col-span-2 flex justify-between items-center mb-2">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-slate-400" /> Wallet & Pulse
                 </h3>
             </div>
             
             {/* Crypto/Fiat Breakdown */}
             <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                 <div className="flex items-center gap-2 mb-2">
                     <Coins className="w-4 h-4 text-orange-400" />
                     <span className="text-xs text-slate-400 uppercase">Crypto</span>
                 </div>
                 <p className="text-lg font-bold text-white">1.24 BTC</p>
                 <p className="text-xs text-green-400">+$250 (24h)</p>
             </div>

             {/* Payment Health */}
             <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                     <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                     <span className="text-xs text-slate-400 uppercase">Success Rate</span>
                 </div>
                 <p className="text-lg font-bold text-white">99.2%</p>
                 <p className="text-xs text-slate-500">Stripe API OK</p>
             </div>
        </Card>
    </div>
  </div>
  );
};