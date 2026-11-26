import asyncio, sys
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        for h, f in [("beyond","g1"),("enceladus","g2")]:
            await pg.goto(f"http://127.0.0.1:8770/journey-home/#{h}"); await pg.wait_for_timeout(14000)
            await pg.screenshot(path=f"shots/{f}.png")
        await b.close()
asyncio.run(main())
