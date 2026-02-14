import React from 'react';
import { Card } from '../components/Card';
import { Check, Plus, Server, Activity } from 'lucide-react';

export const Integrations: React.FC = () => {
  const integrations = [
      { name: "Google Analytics", desc: "Track traffic and visitor behavior.", connected: true, color: "bg-orange-500" },
      { name: "Slack", desc: "Get notifications in your team channel.", connected: true, color: "bg-purple-500" },
      { name: "WordPress", desc: "Sync posts directly from WP.", connected: false, color: "bg-blue-600" },
      { name: "Mailchimp", desc: "Automate newsletter campaigns.", connected: false, color: "bg-yellow-500" },
      { name: "Zapier", desc: "Connect with 5000+ other apps.", connected: false, color: "bg-orange-600" },
      { name: "Shopify", desc: "Track ecommerce revenue.", connected: false, color: "bg-green-500" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
        <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Integrations Marketplace</h2>
            <p className="text-slate-400">Supercharge your dashboard by connecting your favorite tools.</p>
        </div>
        
        {/* Feature 11 (New): API Health Monitor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <Card className="p-4 bg-slate-900/50 border border-white/5 md:col-span-3">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="text-sm font-bold text-white flex items-center gap-2">
                         <Server className="w-4 h-4 text-green-400" /> API Health Monitor
                     </h3>
                     <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-xs text-green-400">All Systems Normal</span>
                     </div>
                 </div>
                 <div className="grid grid-cols-4 gap-4">
                     {[
                         { name: "Google API", ms: "45ms", status: "ok" },
                         { name: "Slack Webhook", ms: "120ms", status: "ok" },
                         { name: "Stripe", ms: "210ms", status: "ok" },
                         { name: "OpenAI", ms: "340ms", status: "warn" },
                     ].map((api, i) => (
                         <div key={i} className="bg-white/5 rounded-lg p-2 flex items-center justify-between">
                             <span className="text-xs text-slate-300">{api.name}</span>
                             <div className="flex items-center gap-2">
                                 <span className="text-xs font-mono text-slate-500">{api.ms}</span>
                                 <Activity className={`w-3 h-3 ${api.status === 'ok' ? 'text-green-500' : 'text-yellow-500'}`} />
                             </div>
                         </div>
                     ))}
                 </div>
             </Card>

            {integrations.map((app, i) => (
                <Card key={i} className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg ${app.color}`}>
                            {app.name.charAt(0)}
                        </div>
                        {app.connected ? (
                            <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                                <Check className="w-3 h-3" /> Connected
                            </span>
                        ) : (
                            <button className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
                                Connect
                            </button>
                        )}
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">{app.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">{app.desc}</p>
                    <button className={`w-full py-2 rounded-xl text-sm font-medium transition-colors border ${
                        app.connected 
                        ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5' 
                        : 'bg-white text-black hover:bg-slate-200 border-transparent'
                    }`}>
                        {app.connected ? 'Configure' : 'Setup Integration'}
                    </button>
                </Card>
            ))}
            
            <Card className="p-6 flex flex-col items-center justify-center border-dashed border-2 border-slate-700 bg-transparent opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <Plus className="w-10 h-10 text-slate-500 mb-2" />
                <p className="text-slate-400 font-medium">Request Integration</p>
            </Card>
        </div>
    </div>
  );
};