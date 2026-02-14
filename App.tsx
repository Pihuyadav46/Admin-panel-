import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Websites } from './pages/Websites';
import { Analytics } from './pages/Analytics';
import { Calendar } from './pages/Calendar';
import { Team } from './pages/Team';
import { Integrations } from './pages/Integrations';
import { ContentStudio } from './pages/ContentStudio';
import { Campaigns } from './pages/Campaigns';
import { Page } from './types';
import { Card } from './components/Card';
import { BrainCircuit, DollarSign, FileText, Bell, Settings as SettingsIcon, Shield, Key, FileBarChart, Download, Palette, TrendingUp, CreditCard, Webhook, Globe, Lock, Calculator, Database, EyeOff, Scale, Kanban, MessageCircle, AlertTriangle, FileSpreadsheet, Briefcase, Gem, Landmark, PieChart, Coins, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, BarChart, Bar, Pie, Cell, PieChart as RePieChart, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const Revenue = () => {
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
        <h2 className="text-3xl font-bold text-white tracking-tight">Monetization Intelligence</h2>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-bold border border-green-500/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Live Revenue
            </span>
        </div>
    </div>

    {/* Top Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-20"><DollarSign className="w-16 h-16 text-green-400" /></div>
         <p className="text-green-300 font-medium mb-1">Total Earnings (YTD)</p>
         <h3 className="text-4xl font-bold text-white mb-2">$142,392.00</h3>
         <p className="text-xs text-green-200">+18.4% vs last year</p>
      </div>
      <Card className="p-6">
         <div className="flex justify-between items-start mb-2">
            <p className="text-slate-400">Earnings This Month</p>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">+12%</span>
         </div>
         <h3 className="text-3xl font-bold text-white">$42,890.00</h3>
         <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="w-[75%] bg-blue-500 h-full rounded-full"></div>
         </div>
         <p className="text-xs text-slate-500 mt-2">75% of monthly goal reached</p>
      </Card>
      <Card className="p-6">
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
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-purple-400" /> AI Revenue Forecast
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
                        <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={3} fill="url(#colorAct)" name="Actual" />
                        <Area type="monotone" dataKey="projected" stroke="#a855f7" strokeWidth={3} strokeDasharray="5 5" fill="url(#colorProj)" name="AI Projected" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>

        {/* Feature 2: Ad Network Arbitrage */}
        <Card className="p-6">
             <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Scale className="w-5 h-5 text-orange-400" /> Ad Network Arbitrage
                 </h3>
                 <button className="text-xs text-blue-400 hover:text-white">Optimize</button>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={adNetworkData} layout="vertical">
                         <XAxis type="number" hide />
                         <YAxis dataKey="name" type="category" width={80} tick={{fill: '#94a3b8', fontSize: 11}} />
                         <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                         <Bar dataKey="revenue" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                         <Bar dataKey="cpm" fill="#a855f7" radius={[0, 4, 4, 0]} barSize={10} />
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
        <Card className="p-6">
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
        <Card className="p-6 bg-gradient-to-br from-[#131B2D] to-indigo-900/20 border-indigo-500/20">
             <div className="flex justify-between items-start mb-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Gem className="w-5 h-5 text-indigo-400" /> Smart Pricing
                 </h3>
                 <span className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded">AI Suggestion</span>
             </div>
             <p className="text-sm text-slate-300 mb-6">Increasing your "Pro Plan" from <span className="line-through text-slate-500">$10</span> to <span className="text-white font-bold">$12</span> could increase revenue by <span className="text-green-400 font-bold">15%</span> without churn impact.</p>
             <div className="flex gap-3">
                 <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">Apply Change</button>
                 <button className="flex-1 py-2 bg-white/5 text-slate-400 rounded-lg text-sm hover:text-white">Simulate</button>
             </div>
        </Card>

        {/* Feature 6: Tax Vault */}
        <Card className="p-6">
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
            <button className="w-full py-2 bg-white/5 text-slate-300 rounded-lg text-sm hover:bg-white/10 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Report
            </button>
        </Card>
    </div>

    {/* Feature 12 (Existing): Sponsorship Deal CRM */}
    <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Kanban className="w-5 h-5 text-purple-400" /> Sponsorship Pipeline
            </h3>
            <button className="text-xs text-blue-400">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Leads</p>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-sm font-bold text-white">TechGear Co.</p>
                    <p className="text-xs text-slate-400">$2,500 • Q4 Review</p>
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Negotiation</p>
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <p className="text-sm font-bold text-white">NordVPN</p>
                    <p className="text-xs text-slate-400">$5,000 • 3 Posts</p>
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase font-bold">Signed</p>
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                    <p className="text-sm font-bold text-white">HelloFresh</p>
                    <p className="text-xs text-slate-400">$8,200 • Video Series</p>
                </div>
            </div>
        </div>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature 13 (Existing): Ad Bidding Simulator */}
        <Card className="p-6">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" /> Real-time Ad Bidding
            </h3>
            <div className="h-40 w-full mb-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                        {name: '12:00', bid: 0.4}, {name: '12:05', bid: 0.6}, {name: '12:10', bid: 0.8}, 
                        {name: '12:15', bid: 1.2}, {name: '12:20', bid: 0.9}, {name: '12:25', bid: 0.7}
                    ]}>
                        <Bar dataKey="bid" fill="#4ade80" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
                <span>Avg CPM: $0.85</span>
                <span>Fill Rate: 98%</span>
            </div>
        </Card>

        {/* Feature 7 & 8: Currency Wallet & Payment Pulse */}
        <Card className="p-6 grid grid-cols-2 gap-4">
             <div className="col-span-2 flex justify-between items-center mb-2">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-slate-400" /> Wallet & Pulse
                 </h3>
             </div>
             
             {/* Crypto/Fiat Breakdown */}
             <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                 <div className="flex items-center gap-2 mb-2">
                     <Coins className="w-4 h-4 text-orange-400" />
                     <span className="text-xs text-slate-400 uppercase">Crypto</span>
                 </div>
                 <p className="text-lg font-bold text-white">1.24 BTC</p>
                 <p className="text-xs text-green-400">+$250 (24h)</p>
             </div>

             {/* Payment Health */}
             <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                     <Activity className="w-4 h-4 text-blue-400" />
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

const Posts = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white tracking-tight">All Blog Posts</h2>
        <div className="flex gap-2">
            <input type="text" placeholder="Search posts..." className="bg-[#131B2D] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
            <select className="bg-[#131B2D] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none">
                <option>Sort by Views</option>
                <option>Sort by Date</option>
            </select>
        </div>
    </div>

    {/* Feature 14 (New): Smart Comment Moderation */}
    <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" /> Smart Moderation Queue
            </h3>
            <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded">2 Flagged</span>
        </div>
        <div className="space-y-3">
            <div className="p-3 bg-red-900/10 border border-red-500/20 rounded-lg flex justify-between items-start">
                <div>
                    <p className="text-xs text-red-300 font-bold mb-1">Spam Detected (98%)</p>
                    <p className="text-sm text-slate-300 italic">"Buy cheap crypto now at..."</p>
                </div>
                <div className="flex gap-2">
                    <button className="text-xs text-slate-400 hover:text-white">Approve</button>
                    <button className="text-xs text-red-400 hover:text-red-300 font-bold">Delete</button>
                </div>
            </div>
            <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start">
                 <div>
                    <p className="text-xs text-green-300 font-bold mb-1">Positive Feedback</p>
                    <p className="text-sm text-slate-300 italic">"Great article! Really helped me."</p>
                </div>
                <button className="text-xs text-blue-400 hover:text-white">Reply</button>
            </div>
        </div>
    </Card>

    <Card className="overflow-hidden p-0">
        <table className="w-full text-left">
        <thead className="bg-white/5 text-slate-400 text-xs uppercase">
          <tr>
            <th className="px-6 py-4 font-semibold">Post Title</th>
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Views</th>
            <th className="px-6 py-4 font-semibold">Score</th>
            <th className="px-6 py-4 font-semibold text-right">Revenue</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm text-slate-300">
          {[
            { title: "Top 10 Gadgets of 2025", date: "Oct 24, 2025", views: "45,200", score: 92, rev: "$450" },
            { title: "React vs Vue: The Final Battle", date: "Oct 22, 2025", views: "32,100", score: 88, rev: "$320" },
            { title: "How to Cook Perfect Pasta", date: "Oct 20, 2025", views: "128,500", score: 98, rev: "$1,200" },
            { title: "Budget Travel Guide: Tokyo", date: "Oct 18, 2025", views: "12,400", score: 75, rev: "$120" },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-medium text-white">{row.title}</td>
              <td className="px-6 py-4 text-slate-500">{row.date}</td>
              <td className="px-6 py-4">{row.views}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-md text-xs font-bold ${row.score > 90 ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>{row.score}</span>
              </td>
              <td className="px-6 py-4 text-right font-medium text-white">{row.rev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

const AIInsights = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-3xl font-bold text-white tracking-tight">AI Performance Intelligence</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
            { title: "Traffic Drop Alert", desc: "Unusual dip in traffic for 'Tech Chronicles' detected.", type: "warning" },
            { title: "Revenue Spike", desc: "Revenue is up 40% compared to last Tuesday.", type: "success" },
            { title: "SEO Opportunity", desc: "Keyword 'AI Tools' is trending. Write a post about it.", type: "info" },
            { title: "Best Publish Time", desc: "Your audience is most active at 2:00 PM EST today.", type: "info" },
            { title: "Content Gap", desc: "You haven't posted about 'Security' in 2 months.", type: "warning" },
            { title: "Predicted Revenue", desc: "Forecast suggests $55k revenue next month.", type: "success" },
        ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300
                ${item.type === 'warning' ? 'bg-orange-500/10 border-orange-500/30' : 
                  item.type === 'success' ? 'bg-green-500/10 border-green-500/30' : 
                  'bg-blue-500/10 border-blue-500/30'}`}>
                <div className={`absolute top-0 right-0 w-20 h-20 blur-2xl rounded-full -mr-10 -mt-10
                    ${item.type === 'warning' ? 'bg-orange-500/20' : 
                      item.type === 'success' ? 'bg-green-500/20' : 
                      'bg-blue-500/20'}`}></div>
                <h3 className={`font-bold text-lg mb-2 ${
                     item.type === 'warning' ? 'text-orange-400' : 
                     item.type === 'success' ? 'text-green-400' : 
                     'text-blue-400'
                }`}>{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
            </div>
        ))}
    </div>
  </div>
);

const Notifications = () => (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">Activity & Alerts</h2>
            <button className="text-sm text-slate-400 hover:text-white">Clear All</button>
        </div>
        <div className="space-y-4">
            {[
                { title: "Website Connected Successfully", desc: "Tech Chronicles was added to your dashboard.", time: "2 mins ago", new: true },
                { title: "Revenue Drop Warning", desc: "Daily revenue is 15% lower than average.", time: "1 hour ago", new: true },
                { title: "Sync Completed", desc: "All websites have been synchronized.", time: "4 hours ago", new: false },
                { title: "Traffic Spike", desc: "High traffic detected on 'Daily Recipes'.", time: "Yesterday", new: false },
            ].map((n, i) => (
                <Card key={i} className="p-4 flex items-center justify-between group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${n.new ? 'bg-blue-500' : 'bg-slate-600'}`}></div>
                        <div>
                            <h4 className="font-bold text-white text-sm">{n.title}</h4>
                            <p className="text-slate-400 text-xs">{n.desc}</p>
                        </div>
                    </div>
                    <span className="text-xs text-slate-500">{n.time}</span>
                </Card>
            ))}
        </div>
    </div>
);

const Settings = () => (
    <div className="space-y-8 animate-fade-in max-w-4xl pb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <Card className="p-6 space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">Profile Settings</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs uppercase text-slate-400 font-semibold">Full Name</label>
                            <input type="text" defaultValue="Admin User" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase text-slate-400 font-semibold">Email</label>
                            <input type="email" defaultValue="admin@aurora.com" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                    </div>
                </Card>
                
                {/* Premium Feature: White Labeling */}
                <Card className="p-6 space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-purple-400" /> White Label Branding
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs uppercase text-slate-400 font-semibold">Brand Name</label>
                            <input type="text" defaultValue="AURORA" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase text-slate-400 font-semibold">Accent Color</label>
                            <div className="flex gap-2 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-offset-[#0B0F19] ring-blue-600"></div>
                                <div className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer"></div>
                                <div className="w-6 h-6 rounded-full bg-green-600 cursor-pointer"></div>
                            </div>
                        </div>
                    </div>
                </Card>

                 {/* Feature 10: Automated Backups */}
                 <Card className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                         <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Database className="w-4 h-4 text-blue-400" /> Automated Backups
                         </h3>
                         <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">Daily</span>
                    </div>
                    <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-lg">
                        <span className="text-slate-400">Last Snapshot</span>
                        <span className="text-white font-medium">Oct 24, 03:00 AM</span>
                    </div>
                    <button className="w-full py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-sm transition-colors">
                        Restore from Backup
                    </button>
                 </Card>
            </div>

            <div className="space-y-6">
                 {/* Feature 15 (New): Custom Report Builder */}
                 <Card className="p-6">
                     <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                         <FileSpreadsheet className="w-4 h-4 text-orange-400" /> Report Builder
                     </h3>
                     <p className="text-xs text-slate-400 mb-4">Create custom analytics reports via drag-and-drop.</p>
                     <button className="w-full py-2 bg-white/10 text-white rounded-lg text-xs hover:bg-white/20">Launch Builder</button>
                 </Card>

                 <Card className="p-6">
                     <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                         <Lock className="w-4 h-4 text-red-400" /> Security
                     </h3>
                     <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Two-Factor Auth</span>
                            <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded">Enabled</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">SSO</span>
                            <button className="text-xs text-blue-400">Configure</button>
                         </div>
                     </div>
                 </Card>

                 {/* Feature 12: Dark Web Monitoring */}
                 <Card className="p-6 bg-gradient-to-br from-[#1e1e24] to-[#131316] border border-red-900/20">
                     <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                         <EyeOff className="w-4 h-4 text-red-500" /> Dark Web Monitor
                     </h3>
                     <p className="text-xs text-slate-400 mb-3">Scans for leaked credentials.</p>
                     <div className="flex items-center gap-2 text-sm text-green-400">
                         <Shield className="w-4 h-4" />
                         <span>No breaches found</span>
                     </div>
                 </Card>

                 {/* Feature 13: Webhooks */}
                 <Card className="p-6 space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4 flex items-center gap-2">
                        <Webhook className="w-5 h-5 text-orange-400" /> Webhooks
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                            <div>
                                <div className="text-sm font-medium text-white">Post Published</div>
                                <div className="text-xs text-slate-500">https://api.myapp.com/events</div>
                            </div>
                            <div className="w-8 h-4 bg-green-500/20 rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-green-500 rounded-full absolute right-0"></div></div>
                        </div>
                        <button className="text-xs text-blue-400 hover:text-white">+ Add Webhook</button>
                    </div>
                </Card>

                 {/* Feature 14: Billing */}
                 <Card className="p-6 space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-green-400" /> Billing & Plan
                    </h3>
                    <div className="flex items-center justify-between">
                         <div>
                            <p className="text-white font-bold">Enterprise Plan</p>
                            <p className="text-xs text-slate-500">$299/month • Next billing Nov 1</p>
                         </div>
                         <button className="px-3 py-1 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">Manage</button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.DASHBOARD);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case Page.DASHBOARD: return <Dashboard />;
      case Page.WEBSITES: return <Websites />;
      case Page.ANALYTICS: return <Analytics />;
      case Page.CALENDAR: return <Calendar />;
      case Page.CONTENT_STUDIO: return <ContentStudio />;
      case Page.CAMPAIGNS: return <Campaigns />;
      case Page.TEAM: return <Team />;
      case Page.INTEGRATIONS: return <Integrations />;
      case Page.REVENUE: return <Revenue />;
      case Page.POSTS: return <Posts />;
      case Page.AI_INSIGHTS: return <AIInsights />;
      case Page.NOTIFICATIONS: return <Notifications />;
      case Page.SETTINGS: return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage} 
      onLogout={() => setIsLoggedIn(false)}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;