import { Netmask } from "netmask";

const blockedIPs: string[] = [
    "180.211.113.238",
    "49.36.69.230",
];

const blockedRanges: string[] = [
    "18.196.0.0/15",
];

// =================== Rate Limiting ===================
const rateLimitStore = new Map<string, { count: number; last: number }>();

export function isRateLimited(ip: string, limit = 100, windowMs = 60_000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now - record.last > windowMs) {
    rateLimitStore.set(ip, { count: 1, last: now });
    return false;
  }

  record.count += 1;
  record.last = now;

  return record.count > limit;
}

// =================== IP Blocking ===================
export function isBlockedIP(ip: string): boolean {
  if (blockedIPs.includes(ip)) return true;
  for (const range of blockedRanges) {
    const block = new Netmask(range);
    if (block.contains(ip)) return true;
  }
  return false;
}

// =================== Ignored Paths ===================
export const ignoredPatterns: RegExp[] = [
  /^\/robots\.txt$/,
  /^\/sitemap.*\.xml$/,
  /^\/ads\.txt$/,
  /^\/favicon\.webp$/,
  /^\/apple-touch-icon.*\.png$/,
  /^\/manifest\.json$/,
  /^\/browserconfig\.xml$/,
  /^\/service-worker\.js$/,
  /^\/humans\.txt$/,
  /^\/security\.txt$/,
  /^\/crossdomain\.xml$/,
  /^\/static\//,
];
