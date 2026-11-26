import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        await pg.goto("http://127.0.0.1:8770/journey-home/#earth"); await pg.wait_for_timeout(3000)
        ys=[await pg.evaluate("scrollY")]
        await pg.mouse.move(800,400); await pg.mouse.wheel(0,100); await pg.wait_for_timeout(1500); ys.append(await pg.evaluate("scrollY"))
        # mac-like mouse click: a single small pixel delta after a pause
        await pg.evaluate("window.dispatchEvent(new WheelEvent('wheel',{deltaY:4,deltaMode:0,cancelable:true}))"); await pg.wait_for_timeout(1500); ys.append(await pg.evaluate("scrollY"))
        # trackpad-like stream: 30 events of 3px, 16 ms apart
        print(await pg.evaluate("(async()=>{const t=[];let p=performance.now();for(let i=0;i<30;i++){window.dispatchEvent(new WheelEvent(\"wheel\",{deltaY:3,deltaMode:0,cancelable:true}));await new Promise(r=>setTimeout(r,16));const n=performance.now();t.push(Math.round(n-p));p=n}return t})()")); await pg.wait_for_timeout(1500); ys.append(await pg.evaluate("scrollY"))
        print([round(y) for y in ys])
        await b.close()
asyncio.run(main())
