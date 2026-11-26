import asyncio, sys
from playwright.async_api import async_playwright
ARGS=["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]
W,H,tag=int(sys.argv[1]),int(sys.argv[2]),sys.argv[3]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=ARGS)
        pg = await (await b.new_context(viewport={"width":W,"height":H})).new_page()
        errs=[]; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8770/journey/"); await pg.wait_for_timeout(2500)
        async def go(frac):
            y = await pg.evaluate(f"""(()=>{{const all=[...document.querySelectorAll('[data-stop]')];const s=document.querySelector('[data-stop="jupiter"]');const n=all[all.indexOf(s)+1];const c=x=>x.offsetTop+x.offsetHeight/2-innerHeight/2;return c(s)+({frac})*(c(n)-c(s))}})()""")
            await pg.evaluate(f"scrollTo({{top:{y},behavior:'instant'}})")
        n=0
        async def shot(wait=3000):
            nonlocal n; await pg.wait_for_timeout(wait); await pg.screenshot(path=f"shots/{tag}{n}.png"); n+=1
        await go(0); await shot()
        await pg.click(".journey-tour-open"); await shot()
        for i in [0.9,2.0,5]:
            await pg.evaluate(f"(()=>{{const r=document.querySelector('.journey-tour-range');r.value=String(Number(r.max)*{i}/5);r.dispatchEvent(new Event('input'))}})()")
            await shot(3500)
        await pg.keyboard.press("Escape"); await shot(2500)
        sy=await pg.evaluate("scrollY")
        await go(0.3); await shot(); await go(0.7); await shot()
        print(errs[:3], sy); await b.close()
asyncio.run(main())
