import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DB_PATH = path.join(process.cwd(), 'tracking-db.json');

interface ClickData {
  timestamp: string;
  ip?: string;
  userAgent?: string;
  referrer?: string;
  country?: string;
  city?: string;
}

interface TrackingCode {
  code: string;
  createdAt: string;
  description?: string;
  clicks: ClickData[];
}

interface TrackingDB {
  codes: Record<string, TrackingCode>;
  passwordHash: string;
}

const defaultDB: TrackingDB = {
  codes: {},
  passwordHash: ''
};

function getDB(): TrackingDB {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultDB, null, 2));
  }
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

function saveDB(db: TrackingDB): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function generateCode(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function createCode(description?: string): TrackingCode {
  const db = getDB();
  let code = generateCode();
  while (db.codes[code]) {
    code = generateCode();
  }
  const newCode: TrackingCode = {
    code,
    createdAt: new Date().toISOString(),
    description,
    clicks: []
  };
  db.codes[code] = newCode;
  saveDB(db);
  return newCode;
}

export function recordClick(code: string, clickData: ClickData): boolean {
  const db = getDB();
  if (!db.codes[code]) return false;
  db.codes[code].clicks.push(clickData);
  saveDB(db);
  return true;
}

export function getAllCodes(): TrackingDB['codes'] {
  const db = getDB();
  return db.codes;
}

export function getCodeStats(code: string): TrackingCode | null {
  const db = getDB();
  return db.codes[code] || null;
}

export function setPassword(password: string): void {
  const db = getDB();
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  db.passwordHash = hash;
  saveDB(db);
}

export function verifyPassword(password: string): boolean {
  const db = getDB();
  if (!db.passwordHash) return false;
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  return hash === db.passwordHash;
}

export function deleteCode(code: string): boolean {
  const db = getDB();
  if (!db.codes[code]) return false;
  delete db.codes[code];
  saveDB(db);
  return true;
}
