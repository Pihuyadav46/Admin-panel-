import React, { useEffect, useState } from 'react';
import { Card, MetricCard } from '../components/Card';
import { Users, Eye, DollarSign, TrendingUp, Activity, Layout, MousePointer, Clock, Zap, Target, Globe, ArrowUpRight, AlertOctagon, Flame, Hash, Server, Swords } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const chartData = [
  { name: 'Jan', val: 400 }, { name: 'Feb', val: 300 }, { name: 'Mar', val: 550 },
  { name: 'Apr', val: 450 }, { name: 'May', val: 650 }, { name: 'Jun', val: 500 },
  { name: 'Jul', val: 750 },
];

export const Dashboard: React.FC = () => {
  // Live Data Simulation State
  const [liveVisitors, setLiveVisitors] = useState(842500);
  const [liveRevenue, setLiveRevenue] = useState(42890);
  const [activeNow, setActiveNow] = useState(1248);
  const [data, setData] = useState(chartData);

  // Effect to simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate visitors slightly
      setLiveVisitors(prev => prev + Math.floor(Math.random() * 10) - 3);
      
      // Increase revenue slowly
      if (Math.random() > 0.7) {
        setLiveRevenue(prev => prev + Math.floor(Math.random() * 50) + 10);
      }

      // Active users fluctuate
      setActiveNow(prev => prev + Math.floor(Math.random() * 5) - 2);

      // Smooth chart update: modifying the last data point slightly to create a breathing effect
      setData(currentData => {
          const newData = [...currentData];
          const lastItem = {...newData[newData.length - 1]};
          lastItem.val = 750 + Math.floor(Math.random() * 50 - 25); 
          newData[newData.length - 1] = lastItem;
          return newData;
      });

    }, 2000); // Update every 2 seconds matching animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-gradient-x">
            Dashboard
          </h2>
          <p className="text-slate-400 text-lg">Real-time overview of your digital empire.</p>
        </div>
        <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-2 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-shadow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                System Operational
            </span>
        </div>
      </div>

      {/* Global Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Websites" value="12" change="+2" isPositive={true} icon={Layout} />
        <MetricCard title="Total Visitors" value={liveVisitors.toLocaleString()} change="+12.5%" isPositive={true} icon={Users} />
        <MetricCard title="Monthly Revenue" value={`$${liveRevenue.toLocaleString()}`} change="+22.4%" isPositive={true} icon={DollarSign} />
        <MetricCard title="Active Now" value={activeNow.toString()} change="Live" isPositive={true} icon={Activity} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Real-Time Performance */}
        <Card className="lg:col-span-2 p-6 hover-lift" glow>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 animate-pulse-slow">
                    <Activity className="w-5 h-5" />
                 </div>
                 <h3 className="text-lg font-bold text-white">Traffic Growth</h3>
            </div>
            <select className="bg-[#0B0F19] border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-300 outline-none focus:border-blue-500/50 hover:bg-white/5 transition-colors">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <Tooltip 
                    cursor={{stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1}}
                    contentStyle={{ backgroundColor: 'rgba(15, 22, 35, 0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                    itemStyle={{ color: '#e2e8f0', fontWeight: 600 }}
                />
                <Area 
                    type="monotone" 
                    dataKey="val" 
                    stroke="#3B82F6" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorVal)" 
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Growth Summary & Goals */}
        <div className="space-y-6">
           {/* Feature 8: Predictive Churn Analysis */}
           <Card className="p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 text-orange-400 animate-pulse-slow" /> Churn Risk
                 </h3>
                 <span className="text-xs font-bold bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20">Moderate</span>
              </div>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">AI predicts <span className="text-white font-bold">145 subscribers</span> at risk of leaving this month.</p>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                 <div className="w-[35%] bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-shimmer"></div>
              </div>
              <p className="text-xs text-right text-slate-500 font-mono">35% Risk Level</p>
           </Card>

           {/* Feature 1 (New): AI Trend Watch */}
           <Card className="p-6 bg-gradient-to-br from-[#131B2D] to-purple-900/20 border-purple-500/10 hover-lift">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)] animate-pulse-fast" /> AI Trend Watch
                 </h3>
                 <span className="flex items-center gap-1.5 text-[10px] text-red-400 font-bold uppercase tracking-wider bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                    Live
                 </span>
              </div>
              <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group active-press">
                      <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                            <Hash className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">GenerativeAI</span>
                      </div>
                      <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" /> 240%
                      </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group active-press">
                      <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-colors">
                             <Hash className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">SustainableTech</span>
                      </div>
                      <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" /> 115%
                      </span>
                  </div>
              </div>
           </Card>
        </div>
      </div>

      {/* Feature 2 & 3: Competitor Intelligence & Infrastructure Health */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card className="p-6 hover-lift">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Swords className="w-5 h-5 text-red-400" /> Competitor Intelligence
                  </h3>
                  <button className="text-xs text-blue-400 hover:text-white hover:underline transition-all">View Report</button>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead className="text-xs uppercase text-slate-500 bg-white/5 rounded-lg">
                          <tr>
                              <th className="px-4 py-3 rounded-l-lg">Rival</th>
                              <th className="px-4 py-3">Traffic</th>
                              <th className="px-4 py-3">Market Share</th>
                              <th className="px-4 py-3 rounded-r-lg text-right">Trend</th>
                          </tr>
                      </thead>
                      <tbody className="text-sm text-slate-300">
                          <tr className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                              <td className="px-4 py-4 font-medium text-white">TheVerge.com</td>
                              <td className="px-4 py-4">4.2M</td>
                              <td className="px-4 py-4">
                                  <div className="flex items-center gap-2">
                                      <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                          <div className="w-[65%] h-full bg-blue-500"></div>
                                      </div>
                                      <span className="text-xs">65%</span>
                                  </div>
                              </td>
                              <td className="px-4 py-4 text-right text-green-400 font-bold">+2.4%</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors cursor-pointer">
                              <td className="px-4 py-4 font-medium text-white">TechCrunch.com</td>
                              <td className="px-4 py-4">3.8M</td>
                              <td className="px-4 py-4">
                                  <div className="flex items-center gap-2">
                                      <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                          <div className="w-[45%] h-full bg-slate-400"></div>
                                      </div>
                                      <span className="text-xs">45%</span>
                                  </div>
                              </td>
                              <td className="px-4 py-4 text-right text-red-400 font-bold">-1.2%</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </Card>

          <Card className="p-6 hover-lift">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Server className="w-5 h-5 text-green-400 animate-pulse-slow" /> Infrastructure Health
                  </h3>
                  <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs text-green-400 font-bold">100% Uptime</span>
                  </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                      { region: "US-East", latency: "24ms", status: "ok" },
                      { region: "EU-West", latency: "89ms", status: "ok" },
                      { region: "Asia-Pac", latency: "145ms", status: "warn" },
                      { region: "SA-East", latency: "110ms", status: "ok" }
                  ].map((server, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-default group">
                          <div className={`w-2 h-2 rounded-full mb-2 group-hover:scale-125 transition-transform ${server.status === 'ok' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]'}`}></div>
                          <span className="text-xs font-bold text-slate-300">{server.region}</span>
                          <span className="text-[10px] text-slate-500 font-mono mt-1">{server.latency}</span>
                      </div>
                  ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
                  <span>Last check: Just now</span>
                  <span>Provider: AWS Cloud</span>
              </div>
          </Card>
      </div>
    </div>
  );
};