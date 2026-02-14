import React, { useState } from 'react';
import { Card } from '../components/Card';
import { ChevronLeft, ChevronRight, Plus, Share2, FileText, Wand2 } from 'lucide-react';

export const Calendar: React.FC = () => {
  const [viewMode, setViewMode] = useState<'blog' | 'social'>('blog');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1); // Mock dates for grid

  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Content Calendar</h2>
                <p className="text-slate-400">Schedule and manage posts across all your blogs.</p>
            </div>
            
            <div className="flex items-center gap-4">
                 {/* Feature 9 (New): Smart Auto-Scheduler */}
                 <button className="bg-purple-600/10 text-purple-400 border border-purple-500/20 hover:bg-purple-600/20 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <Wand2 className="w-3 h-3" /> Auto-Fill Slots
                 </button>

                 {/* Feature 7: Social Media Toggle */}
                <div className="bg-[#131B2D] border border-white/10 rounded-lg p-1 flex">
                    <button 
                        onClick={() => setViewMode('blog')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'blog' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                    >
                        <FileText className="w-3 h-3" /> Blog Posts
                    </button>
                    <button 
                        onClick={() => setViewMode('social')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'social' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                    >
                        <Share2 className="w-3 h-3" /> Social Media
                    </button>
                </div>

                <div className="flex gap-2">
                    <button className="bg-[#131B2D] border border-white/10 hover:bg-white/5 text-white p-2 rounded-lg transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <span className="bg-[#131B2D] border border-white/10 text-white px-4 py-2 rounded-lg font-medium flex items-center">October 2025</span>
                    <button className="bg-[#131B2D] border border-white/10 hover:bg-white/5 text-white p-2 rounded-lg transition-colors"><ChevronRight className="w-5 h-5" /></button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium ml-2 flex items-center gap-2">
                        <Plus className="w-4 h-4" /> New Post
                    </button>
                </div>
            </div>
        </div>

        <Card className="p-6">
            <div className="grid grid-cols-7 gap-4 mb-4">
                {days.map(day => (
                    <div key={day} className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
                {dates.map((date, i) => {
                    const isToday = date === 24;
                    // Logic depends on viewMode
                    const hasEvent = viewMode === 'blog' 
                        ? [2, 8, 15, 22, 24, 28].includes(date)
                        : [1, 3, 5, 10, 15, 20, 24, 25, 30].includes(date);
                    
                    const eventTitle = viewMode === 'blog'
                        ? (date === 24 ? "Tech Review" : date === 8 ? "Recipe Post" : "Weekly Update")
                        : (date === 24 ? "Tweet Thread" : date === 1 ? "Instagram Reel" : "LinkedIn Post");
                    
                    if (date > 31) return <div key={i} className="h-32 rounded-xl bg-white/0"></div>;

                    return (
                        <div key={i} className={`h-32 rounded-xl border p-2 flex flex-col justify-between transition-colors cursor-pointer group hover:border-blue-500/50
                            ${isToday ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}
                        `}>
                            <span className={`text-sm font-medium ${isToday ? 'text-blue-400' : 'text-slate-400'}`}>{date}</span>
                            {hasEvent && (
                                <div className={`text-xs p-2 rounded-lg font-medium truncate shadow-sm
                                    ${viewMode === 'blog' 
                                        ? (date % 2 === 0 ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300')
                                        : (date % 2 === 0 ? 'bg-sky-500/20 text-sky-300' : 'bg-pink-500/20 text-pink-300')
                                    }
                                `}>
                                    {eventTitle}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Card>
    </div>
  );
};