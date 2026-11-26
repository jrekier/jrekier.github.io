import asyncio
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        await pg.goto("http://127.0.0.1:8770/journey-home/#beyond"); await pg.wait_for_timeout(12000)
        await pg.screenshot(path="shots/by4.png", clip={"x":384,"y":60,"width":896,"height":640})
        await b.close()
asyncio.run(main())
