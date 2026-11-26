import asyncio
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        await pg.goto("http://127.0.0.1:8770/journey-home/#beyond"); await pg.wait_for_timeout(12000)
        await pg.screenshot(path="shots/r1.png")
        for st in ["enceladus-resonance","saturn-modes","ocean-depth","mercury"]:
            y = await pg.evaluate(f"document.querySelector('[data-stop={st}]').getBoundingClientRect().top+scrollY")
            await pg.evaluate(f"scrollTo({{top:{y},behavior:'instant'}})"); await pg.wait_for_timeout(2500)
            print(st, await pg.evaluate("[...document.querySelectorAll('.journey-chapters a')].map(a=>a.textContent+(a.getAttribute('aria-current')||a.className||'')).join(' | ')"))
        await b.close()
asyncio.run(main())
