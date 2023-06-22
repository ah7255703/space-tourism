import Logo from "./_components/Logo";
import NavItem from "./_components/NavItem";

import { H1, H5 } from "./_components/typography";

export default function Home() {
  return (
    <main className="flex flex-col pt-9 min-h-screen justify-between w-full bg-[url(/home/background-home-desktop.jpg)] bg-right-top bg-no-repeat bg-cover">
      <header className="container ms-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-12">
            <Logo />
            <span className="min-w-[450px] h-px bg-secondary/50 inline-flex -me-3"></span>
          </div>
          <nav className="flex-1">
            <ul className="flex gap-7 items-center backdrop-blur-3xl flex-1 justify-center bg-primary/50 py-9">
              <NavItem href="/" number="00">
                home
              </NavItem>
              <NavItem href="/destination" number="01">
                DESTINATION
              </NavItem>

              <NavItem href="/crew" number="02">
                CREW
              </NavItem>

              <NavItem href="/technology" number="03">
                TECHNOLOGY
              </NavItem>
            </ul>
          </nav>
        </div>
      </header>
      <section className="container mb-10  mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between w-full">
          <div className="max-w-lg">
            <H5>SO, YOU WANT TO TRAVEL TO</H5>
            <H1>Space</H1>
            <p className="font-barlow_condensed tracking-wide text-base text-secondary">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <button className="rounded-full mt-auto font-bellefair uppercase text-3xl bg-white text-primary h-64 aspect-square flex items-center justify-center hover:shadow-[0_0_0_40px_rgba(255,255,255,0.2)] transition-all">
              <span>explore</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
