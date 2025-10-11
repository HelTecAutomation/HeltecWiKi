let inFlight = null;
let cache = { ts: 0, data: null };
const ENDPOINT = 'https://contest.heltec.org/api/contest/starshare';

// 单次真实请求
async function _fetchStarshare() {
    const res = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${t}`);
    }
    return res.json();
}

/**
 * 获取 star/share 汇总（全站/当前口径）
 * - single-flight：并发只发一次
 * - hold：请求完成后 hold 毫秒内不再发新请求
 * - ttlMs：缓存有效期（默认 1000ms）
 */
export const getStarshareOnce = async ({ hold = 1000, ttlMs = 1000 } )=> {
    const now = Date.now();

  
    if (cache.data && now - cache.ts < ttlMs) {
        return cache.data;
    }


    if (inFlight) return inFlight;

    
    inFlight = _fetchStarshare()
        .then((data) => {
            cache = { ts: Date.now(), data };
            return data;
        })
        .finally(() => {
           
            const doneAt = Date.now();
            setTimeout(() => {
    
                inFlight = null;
            }, Math.max(0, hold - (Date.now() - doneAt)));
        });

    return inFlight;
}
