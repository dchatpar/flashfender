'use client';

import { useState } from 'react';

interface Click {
  timestamp: string;
  ip?: string;
  userAgent?: string;
  referrer?: string;
}

interface Code {
  code: string;
  description?: string;
  createdAt: string;
  clickCount: number;
  uniqueVisitors: number;
  lastClick: string | null;
  clicks: Click[];
}

export default function TrackingDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [codes, setCodes] = useState<Code[]>([]);
  const [newCodeDesc, setNewCodeDesc] = useState('');
  const [newCode, setNewCode] = useState<string | null>(null);
  const [setupMode, setSetupMode] = useState(false);
  const [setupPassword, setSetupPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    const res = await fetch('/api/tracking/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const data = await res.json();
    if (data.success) {
      setIsAuthenticated(true);
      setCodes(data.stats);
    } else {
      setError('Invalid password');
    }
  };

  const handleSetup = async () => {
    setError('');
    if (setupPassword.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }
    const res = await fetch('/api/tracking/setup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: setupPassword })
    });
    const data = await res.json();
    if (data.success) {
      setPassword(setupPassword);
      setSetupMode(false);
      handleLogin();
    } else {
      setError(data.error);
    }
  };

  const createCode = async () => {
    const res = await fetch('/api/tracking/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newCodeDesc })
    });
    const data = await res.json();
    if (data.success) {
      setNewCode(data.url);
      setNewCodeDesc('');
      handleLogin();
    }
  };

  if (setupMode) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6">Setup Dashboard Password</h1>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 bg-gray-700 text-white rounded mb-4"
            value={setupPassword}
            onChange={(e) => setSetupPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleSetup}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Set Password
          </button>
          <button
            onClick={() => setSetupMode(false)}
            className="w-full mt-4 text-gray-400 hover:text-white"
          >
            Back to login
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6">Tracking Dashboard</h1>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 bg-gray-700 text-white rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Access Dashboard
          </button>
          <button
            onClick={() => setSetupMode(true)}
            className="w-full mt-4 text-gray-400 hover:text-white"
          >
            First time setup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Link Tracking Dashboard</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Create New Tracking Link</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Description (optional)"
              className="flex-1 p-3 bg-gray-700 text-white rounded"
              value={newCodeDesc}
              onChange={(e) => setNewCodeDesc(e.target.value)}
            />
            <button
              onClick={createCode}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Generate Link
            </button>
          </div>
          {newCode && (
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <p className="text-gray-300 mb-2">Your tracking link:</p>
              <code className="text-green-400 text-lg">{newCode}</code>
            </div>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-4 text-left text-white font-semibold">Code</th>
                <th className="p-4 text-left text-white font-semibold">Description</th>
                <th className="p-4 text-left text-white font-semibold">Clicks</th>
                <th className="p-4 text-left text-white font-semibold">Unique</th>
                <th className="p-4 text-left text-white font-semibold">Created</th>
                <th className="p-4 text-left text-white font-semibold">Last Click</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((code) => (
                <tr key={code.code} className="border-b border-gray-700">
                  <td className="p-4 text-blue-400 font-mono">{code.code}</td>
                  <td className="p-4 text-white">{code.description || '-'}</td>
                  <td className="p-4 text-white">{code.clickCount}</td>
                  <td className="p-4 text-white">{code.uniqueVisitors}</td>
                  <td className="p-4 text-gray-400">
                    {new Date(code.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-gray-400">
                    {code.lastClick ? new Date(code.lastClick).toLocaleString() : 'Never'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {codes.length === 0 && (
            <p className="p-8 text-gray-400 text-center">No tracking codes yet. Create one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}
