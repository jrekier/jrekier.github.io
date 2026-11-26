import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await (await b.new_context(viewport={"width":1280,"height":760})).new_page()
        await pg.goto("http://127.0.0.1:8770/journey-home/#mercury"); await pg.wait_for_timeout(1500)
        print(await pg.evaluate("[...document.querySelectorAll('.journey-card')].map(c=>[c.closest('section').dataset.stop, Math.round(c.getBoundingClientRect().height)]).filter(x=>x[1]>600).concat([[document.querySelector('[data-stop=saturn-modes] .journey-card').innerText.length]])"))
        await b.close()
asyncio.run(main())
