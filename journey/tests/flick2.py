import asyncio
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        await pg.goto("http://127.0.0.1:8770/journey-home/#juice"); await pg.wait_for_timeout(9000)
        c="(s=>{const x=document.querySelector(`[data-stop=\"${s}\"]`);return x.offsetTop+x.offsetHeight/2-innerHeight/2})"
        for k,f in enumerate([0.0, 0.45, 0.52, 0.56, 0.7, 1.0]):
            await pg.evaluate(f"scrollTo({{top:{c}('ganymede')+{f}*({c}('ocean-worlds')-{c}('ganymede')),behavior:'instant'}})"); await pg.wait_for_timeout(9000)
            await pg.screenshot(path=f"shots/fz{k}.png", clip={"x":700,"y":180,"width":420,"height":420})
            pr=await pg.evaluate('__probe()'); print(k, round(pr['shown'],3), pr['qd'], pr['camUp'])
        await b.close()
asyncio.run(main())
