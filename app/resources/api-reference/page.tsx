"use client";

import { Copy } from "lucide-react";

export default function ApiReferencePage() {
    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 relative bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl font-bold mb-4 text-slate-900">API Reference</h1>
                <p className="text-xl text-slate-600">
                    Programmatically manage vehicles, agents, and posting schedules.
                </p>
                <div className="mt-6 flex items-center space-x-2 text-sm font-mono bg-slate-100 p-2 rounded-lg border border-slate-200 inline-block">
                    <span className="text-green-600 font-semibold">BASE_URL</span>
                    <span className="text-slate-600">https://api.flashfender.com/v1</span>
                </div>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
                {/* Endpoint 1 */}
                <div className="bg-white p-0 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center gap-4">
                            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-md font-mono text-sm font-bold border border-green-200">POST</span>
                            <code className="text-lg font-mono text-slate-900">/vehicles</code>
                        </div>
                        <span className="text-slate-600 text-sm">Create a new vehicle listing</span>
                    </div>
                    <div className="grid md:grid-cols-2">
                        <div className="p-6 border-r border-slate-200">
                            <h4 className="font-semibold mb-4 text-slate-900">Body Parameters</h4>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-blue-600">vin</span>
                                    <span className="text-slate-500">string (required)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-600">price</span>
                                    <span className="text-slate-500">integer</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-600">images</span>
                                    <span className="text-slate-500">array[string]</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-6 font-mono text-xs overflow-x-auto">
                            <div className="flex justify-between text-slate-400 mb-2">
                                <span>Example Request</span>
                                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
                            </div>
                            <pre className="text-gray-300">
                                {`{
  "vin": "1G1YC2D...",
  "price": 45000,
  "images": [
    "https://..."
  ]
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Endpoint 2 */}
                <div className="bg-white p-0 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center gap-4">
                            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md font-mono text-sm font-bold border border-blue-200">GET</span>
                            <code className="text-lg font-mono text-slate-900">/analytics/summary</code>
                        </div>
                        <span className="text-slate-600 text-sm">Retrieve posting performance</span>
                    </div>
                    <div className="grid md:grid-cols-2">
                        <div className="p-6 border-r border-slate-200">
                            <h4 className="font-semibold mb-4 text-slate-900">Query Parameters</h4>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-blue-600">startDate</span>
                                    <span className="text-slate-500">ISO8601</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-600">platform</span>
                                    <span className="text-slate-500">string (optional)</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-6 font-mono text-xs overflow-x-auto">
                            <div className="flex justify-between text-slate-400 mb-2">
                                <span>Example Response</span>
                                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
                            </div>
                            <pre className="text-gray-300">
                                {`{
  "total_views": 12503,
  "leads": 45,
  "ctr": "3.4%"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
