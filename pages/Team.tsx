import React from 'react';
import { Card } from '../components/Card';
import { Mail, Shield, UserPlus, MoreHorizontal, Key, PenTool } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Team Management</h2>
                <p className="text-slate-400">Manage access, roles, and granular permissions.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20">
                <UserPlus className="w-4 h-4" /> Invite Member
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card className="p-0 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-slate-400 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Role</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm text-slate-300">
                            {[
                                { name: "Admin User", email: "admin@aurora.com", role: "Owner", status: "Active" },
                                { name: "Sarah Johnson", email: "sarah@aurora.com", role: "Editor", status: "Active" },
                                { name: "Mike Chen", email: "mike@aurora.com", role: "Viewer", status: "Pending" },
                                { name: "Alex Design", email: "alex@aurora.com", role: "Admin", status: "Active" },
                            ].map((user, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center font-bold text-white text-xs">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 text-xs font-medium border border-white/10 w-fit">
                                            <Shield className="w-3 h-3 text-blue-400" />
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            user.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                                        }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>

                {/* Feature 10 (New): Collaborative Whiteboard */}
                <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                         <h3 className="text-lg font-bold text-white flex items-center gap-2">
                             <PenTool className="w-5 h-5 text-purple-400" /> Team Whiteboard
                         </h3>
                         <button className="text-xs text-blue-400 hover:text-white">Open Canvas</button>
                    </div>
                    <div className="w-full h-48 bg-[#0F1623] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[length:16px_16px] opacity-20"></div>
                        {/* Fake Stickies */}
                        <div className="absolute top-8 left-12 w-24 h-24 bg-yellow-200 text-black p-2 text-[10px] font-handwriting shadow-lg transform -rotate-3 rounded">
                            Strategy for Q4 launch?
                        </div>
                        <div className="absolute bottom-8 right-24 w-24 h-24 bg-blue-200 text-black p-2 text-[10px] font-handwriting shadow-lg transform rotate-2 rounded">
                            Need new graphics for social
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                        <div className="absolute top-1/2 left-1/2 bg-purple-500 text-white text-[9px] px-1 rounded ml-4 mt-2">Mike is editing</div>
                    </div>
                </Card>
            </div>

            <div className="space-y-8">
                {/* Feature 15: Granular Permissions (RBAC) */}
                <Card className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Key className="w-4 h-4 text-purple-400" /> Granular Permissions
                    </h3>
                    <p className="text-xs text-slate-400 mb-6">Select a role to configure detailed access controls.</p>
                    
                    <div className="mb-6">
                        <select className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white outline-none">
                            <option>Editor</option>
                            <option>Viewer</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "Publish Posts", allowed: true },
                            { label: "Delete Content", allowed: false },
                            { label: "View Revenue", allowed: false },
                            { label: "Manage Team", allowed: false },
                            { label: "Edit Settings", allowed: true },
                        ].map((perm, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-sm text-slate-300">{perm.label}</span>
                                <div className={`w-8 h-4 rounded-full relative cursor-pointer ${perm.allowed ? 'bg-green-500/20' : 'bg-slate-700'}`}>
                                    <div className={`w-4 h-4 rounded-full absolute top-0 ${perm.allowed ? 'bg-green-500 right-0' : 'bg-slate-500 left-0'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    </div>
  );
};