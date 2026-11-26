# Frame captures at one stop: kore_stop.py STOP [variant ...]  (server on 8770 serving harness/; PNGs to shots/shots)
import asyncio, sys
from playwright.async_api import async_playwright
ARGS = ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
async def main(stop, variants):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width": 1280, "height": 760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        for v in variants:
            await pg.goto(f"http://127.0.0.1:8770/{v}/#journey"); await pg.wait_for_timeout(8000)
            y = await pg.evaluate(f"document.querySelector('[data-stop={stop}]').getBoundingClientRect().top+scrollY")
            await pg.evaluate(f"scrollTo({{top:{y}-100,behavior:'instant'}})"); await pg.wait_for_timeout(14000)
            for k in range(2):
                await pg.screenshot(path=f"shots/{v}-{stop}-{k}.png")
                await pg.wait_for_timeout(1700)
        await b.close()
asyncio.run(main(sys.argv[1], sys.argv[2:] or ["journey-home", "journey-kore"]))
