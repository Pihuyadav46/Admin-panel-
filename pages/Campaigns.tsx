import React from 'react';
import { Card } from '../components/Card';
import { Megaphone, Calendar, TrendingUp, MoreHorizontal, Plus, DollarSign, PieChart, Users, Star, Workflow, AlertTriangle, ShieldAlert } from 'lucide-react';

export const Campaigns: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Marketing Campaigns</h2>
                <p className="text-slate-400">Track budgets, ROI, and promotional activities.</p>
            </div>
            <div className="flex gap-3">
                {/* Feature 8 (New): Crisis Management Mode */}
                <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-colors">
                    <ShieldAlert className="w-4 h-4" /> Crisis Mode
                </button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20">
                    <Plus className="w-4 h-4" /> New Campaign
                </button>
            </div>
        </div>

        {/* Feature 1: Campaign Budget Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
                { title: "Black Friday Sale", status: "Active", progress: 65, color: "blue", budget: 5000, spent: 3250 },
                { title: "Summer Travel Guide", status: "Scheduled", progress: 0, color: "purple", budget: 2500, spent: 0 },
                { title: "Tech Trends Q4", status: "Completed", progress: 100, color: "green", budget: 1000, spent: 980 },
                { title: "Newsletter Push", status: "Active", progress: 42, color: "orange", budget: 500, spent: 450 },
            ].map((camp, i) => {
                const budgetPercent = Math.min((camp.spent / camp.budget) * 100, 100);
                const isOverBudget = budgetPercent > 90;

                return (
                <Card key={i} className="p-6 hover:border-blue-500/30 transition-all cursor-pointer group flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg bg-${camp.color}-500/10 text-${camp.color}-400`}>
                                <Megaphone className="w-5 h-5" />
                            </div>
                            <button className="text-slate-500 hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{camp.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 24 - Nov 01</span>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Budget</p>
                                    <p className="text-white font-bold">${camp.budget.toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Spent</p>
                                    <p className={`${isOverBudget ? 'text-red-400' : 'text-slate-300'} font-bold`}>${camp.spent.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span className={`font-semibold ${isOverBudget ? 'text-red-400' : 'text-slate-400'}`}>
                                        {budgetPercent.toFixed(0)}% Used
                                    </span>
                                    <span className="text-slate-500">${(camp.budget - camp.spent).toLocaleString()} Remaining</span>
                                </div>
                                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${isOverBudget ? 'bg-red-500' : `bg-${camp.color}-500`}`} 
                                        style={{ width: `${budgetPercent}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 pt-4 border-t border-white/5 flex justify-between items-center">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#131B2D]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#131B2D]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#131B2D] flex items-center justify-center text-[10px] text-white">+2</div>
                        </div>
                        <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> ROI: 240%
                        </span>
                    </div>
                </Card>
                );
            })}
        </div>

        {/* Feature 7 (New): Email Workflow Automation */}
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-blue-400" /> Email Automation Workflow
                 </h3>
                 <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">Active Campaign</span>
            </div>
            <div className="relative w-full h-40 bg-[#0F1623] rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_1px,_transparent_1px)] bg-[length:15px_15px] opacity-30"></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="px-4 py-2 bg-blue-600 rounded-lg text-white text-xs font-bold shadow-lg">Signup</div>
                    <div className="w-8 h-0.5 bg-slate-600"></div>
                    <div className="px-4 py-2 bg-slate-700 rounded-lg text-white text-xs font-bold border border-white/10">Wait 2d</div>
                    <div className="w-8 h-0.5 bg-slate-600"></div>
                    <div className="px-4 py-2 bg-purple-600 rounded-lg text-white text-xs font-bold shadow-lg">Send Welcome</div>
                    <div className="w-8 h-0.5 bg-slate-600"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-dashed border-slate-500 flex items-center justify-center text-slate-500">+</div>
                </div>
            </div>
        </Card>

        {/* Feature 2: Influencer Outreach Module */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-400" /> Influencer Outreach
                    </h3>
                    <button className="text-xs text-blue-400 hover:text-white">Find More</button>
                </div>
                <div className="space-y-4">
                    {[
                        { name: "Jessica Tech", platform: "YouTube", followers: "1.2M", status: "Negotiating", rate: "$1,500" },
                        { name: "Foodie Mike", platform: "Instagram", followers: "850K", status: "Contract Sent", rate: "$800" },
                        { name: "Travel With Sarah", platform: "TikTok", followers: "2.1M", status: "Accepted", rate: "$2,200" },
                    ].map((inf, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                                    {inf.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">{inf.name}</h4>
                                    <p className="text-xs text-slate-400">{inf.platform} • {inf.followers}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                    inf.status === 'Accepted' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                                }`}>{inf.status}</span>
                                <p className="text-xs text-slate-500 mt-1">{inf.rate}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </Card>

             {/* Feature 3: Campaign Performance Prediction */}
             <Card className="p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-3">
                     <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-blue-400" /> Predictive Performance
                 </h3>
                 <div className="space-y-6">
                    <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                        <p className="text-sm text-blue-300 mb-1">Estimated Reach</p>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold text-white">4.2M</span>
                            <span className="text-xs text-green-400 mb-1">▲ 12% vs Avg</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl">
                            <p className="text-xs text-slate-400">Proj. Conversion</p>
                            <p className="text-xl font-bold text-white">2.8%</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl">
                            <p className="text-xs text-slate-400">Est. CPC</p>
                            <p className="text-xl font-bold text-white">$0.45</p>
                        </div>
                    </div>
                 </div>
             </Card>
        </div>
    </div>
  );
};