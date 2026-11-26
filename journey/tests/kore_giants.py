# Frame captures of the giants stop (#giants) in two variants, a few seconds apart (the field oscillates).
# usage: python3 kore_giants.py [variant ...]   (server on 8770 serving harness/; PNGs to shots/shots)
import asyncio, sys
from playwright.async_api import async_playwright
ARGS = ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
async def main(variants):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width": 1280, "height": 760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        pg.on("console", lambda m: m.type == "error" and print("CONSOLE", m.text))
        for v in variants:
            await pg.goto(f"http://127.0.0.1:8770/{v}/#giants"); await pg.wait_for_timeout(16000)
            for k in range(2):
                await pg.screenshot(path=f"shots/{v}-giants-{k}.png")
                await pg.wait_for_timeout(1500)
        await b.close()
asyncio.run(main(sys.argv[1:] or ["journey-home", "journey-kore"]))
