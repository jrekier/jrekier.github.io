import asyncio
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        await pg.goto("http://127.0.0.1:8770/journey-home/"); await pg.wait_for_timeout(12000)
        await pg.screenshot(path="shots/w1.png")
        await b.close()
asyncio.run(main())
