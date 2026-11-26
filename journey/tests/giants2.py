import asyncio
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        pg.on("pageerror", lambda e: print("ERR", e))
        await pg.goto("http://127.0.0.1:8770/journey-home/#enceladus"); await pg.wait_for_timeout(12000)
        a = await pg.evaluate("document.querySelector('[data-stop=enceladus-return]').getBoundingClientRect().top+scrollY")
        c = await pg.evaluate("document.querySelector('[data-stop=saturn-modes]').getBoundingClientRect().top+scrollY")
        await pg.evaluate(f"scrollTo({{top:{a}-100,behavior:'instant'}})"); await pg.wait_for_timeout(8000)
        for k in range(1,7):
            y = a + (c-a)*k/6 - 100
            await pg.evaluate(f"scrollTo({{top:{y},behavior:'instant'}})"); await pg.wait_for_timeout(5000)
            await pg.screenshot(path=f"shots/t{k}.png", clip={"x":384,"y":0,"width":896,"height":760})
        await b.close()
asyncio.run(main())
