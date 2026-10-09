Crypto Master Analyzer PRO 5.4 — Toobit + Global Top 300 Market Cap

INSTALL / UPDATE ON NETLIFY (Android phone)
1. Extract this ZIP.
2. Open the cma_toobit folder.
3. Upload the CONTENTS of cma_toobit to the existing Netlify site’s production deploy. Do not upload the ZIP itself as the site root.
4. Ensure index.html, crypto-dashboard.png, manifest.webmanifest, sw.js, and icons/ are all at the published site root.
5. Open the site and hard-refresh; if installed as a PWA, close/reopen it after the new deploy.

DATA FLOW
- CoinGecko public market API: requests top 250 + next 50 ranked by market cap.
- Toobit futures API: obtains USDT perpetual tickers and matches by base ticker symbol.
- Toobit WebSocket: streams ticker updates. Candles are fetched from Toobit.
- Background image is now actually used by the page and cached service worker.

LIMITATIONS / HONEST STATUS
- The page runs client-side and requires internet access and browser access to CoinGecko and Toobit APIs. Live connectivity must be verified on the deployed site.
- Symbol-only matching can collide for similarly named assets; the app reports the actual match count and does not invent 300 matches. Some top-300 coins may not have Toobit USDT perpetual contracts.
- This is a client-side PWA. It does not include a secure server-side admin login, cloud database, push-notification backend, external AI service, or automated order execution. Never put exchange API secrets in this front-end.
- Trading calculations are informational and are not guaranteed trading signals.
