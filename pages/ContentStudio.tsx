import React from 'react';
import { Card } from '../components/Card';
import { Sparkles, Save, Send, Image as ImageIcon, Type, Wand2, Mic, ShieldCheck, FileSearch, Globe2, Image, Activity, Smile, Frown, Meh, Gauge } from 'lucide-react';

export const ContentStudio: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Content Studio</h2>
                <p className="text-slate-400">Generate, edit, and optimize blog content with AI.</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2 text-sm font-medium transition-colors">
                    <Save className="w-4 h-4" /> Save Draft
                </button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center gap-2 text-sm font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                    <Send className="w-4 h-4" /> Publish
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card className="p-6 min-h-[600px] flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Enter Post Title..." 
                        className="text-3xl font-bold bg-transparent border-none outline-none text-white placeholder-slate-600 mb-6 w-full"
                    />
                    
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 mb-4 p-2 bg-white/5 rounded-lg border border-white/5 overflow-x-auto">
                        <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white"><Type className="w-4 h-4" /></button>
                        <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white font-bold">B</button>
                        <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white italic">I</button>
                        <div className="w-px h-4 bg-white/10 mx-2"></div>
                        <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white flex items-center gap-1 text-xs">
                            <ImageIcon className="w-3 h-3" /> Add Media
                        </button>
                        <div className="w-px h-4 bg-white/10 mx-2"></div>
                        <button className="px-3 py-1.5 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 rounded text-xs font-medium flex items-center gap-1 ml-auto">
                            <Wand2 className="w-3 h-3" /> AI Rephrase
                        </button>
                    </div>

                    <textarea 
                        className="flex-1 bg-transparent border-none outline-none text-slate-300 text-lg leading-relaxed resize-none p-2 custom-scrollbar"
                        placeholder="Start writing or use AI commands..."
                    ></textarea>
                </Card>

                 {/* Feature: Digital Asset Manager */}
                 <Card className="p-6">
                     <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Image className="w-5 h-5 text-blue-400" /> Digital Asset Manager
                     </h3>
                     <div className="grid grid-cols-4 gap-3">
                         {[1,2,3,4].map((i) => (
                             <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/5 relative group cursor-pointer overflow-hidden">
                                 <div className="absolute inset-0 flex items-center justify-center text-slate-600 group-hover:bg-white/5 transition-colors">
                                     <ImageIcon className="w-6 h-6" />
                                 </div>
                                 <div className="absolute bottom-1 left-1 bg-black/60 px-1.5 rounded text-[9px] text-white">IMG_{i}</div>
                             </div>
                         ))}
                     </div>
                     <button className="w-full mt-4 py-2 bg-white/5 text-xs text-slate-400 rounded-lg hover:text-white transition-colors">Open Library</button>
                 </Card>
            </div>

            <div className="space-y-6">
                {/* Feature: Headline Optimizer */}
                <Card className="p-6 bg-gradient-to-br from-[#131B2D] to-green-900/10 border-green-500/10">
                    <h3 className="text-sm font-bold text-white uppercase mb-3 flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-green-400" /> Headline Optimizer
                    </h3>
                    <div className="flex items-end gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">92</span>
                        <span className="text-xs text-green-400 font-bold mb-1">Excellent</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                         <div className="w-[92%] bg-green-500 h-full rounded-full"></div>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Contains power words</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Perfect character length</li>
                    </ul>
                </Card>

                {/* Feature: Tone Analyzer */}
                <Card className="p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Tone Analyzer
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-1">
                                <Smile className="w-5 h-5" />
                            </div>
                            <p className="text-[10px] text-slate-400">Friendly</p>
                            <p className="text-xs font-bold text-white">65%</p>
                        </div>
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-1">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <p className="text-[10px] text-slate-400">Professional</p>
                            <p className="text-xs font-bold text-white">25%</p>
                        </div>
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto mb-1">
                                <Meh className="w-5 h-5" />
                            </div>
                            <p className="text-[10px] text-slate-400">Neutral</p>
                            <p className="text-xs font-bold text-white">10%</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 bg-white/5 p-2 rounded border border-white/5">
                        Suggestion: Try to use more authoritative language in the introduction.
                    </p>
                </Card>

                {/* Feature: Localization Hub */}
                <Card className="p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                        <Globe2 className="w-4 h-4" /> Localization Hub
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300">Spanish (ES)</span>
                            </div>
                            <span className="text-xs text-green-400 font-bold">Ready</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="w-full bg-green-500 h-full"></div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300">French (FR)</span>
                            </div>
                            <span className="text-xs text-yellow-400 font-bold">Translating...</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="w-[45%] bg-yellow-500 h-full animate-pulse"></div>
                        </div>
                    </div>
                </Card>

                {/* Feature: Audio Synthesis */}
                <Card className="p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                        <Mic className="w-4 h-4" /> Audio Version
                    </h3>
                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white">Generate Narration</p>
                                <p className="text-[10px] text-slate-500">AI Voice: "Sarah - Professional"</p>
                            </div>
                        </div>
                        <span className="text-xs text-blue-400 font-bold">PRO</span>
                    </div>
                </Card>

                {/* Feature: Plagiarism & Originality Checker */}
                <Card className="p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Quality Assurance
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                                <FileSearch className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-300">Plagiarism Check</span>
                            </div>
                            <span className="text-xs text-green-400">100% Unique</span>
                        </div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-300">AI Detection</span>
                            </div>
                            <span className="text-xs text-yellow-400">15% AI Score</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  );
};