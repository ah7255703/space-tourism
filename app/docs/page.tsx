import React, { ReactNode } from "react";
import logo from "../../public/shared/logo.svg";
import Image from "next/image";
import { H1, H2, H3, H4, H5 } from "../components/typography";

function TypographyPreview({
  children,
  heading,
}: {
  children: ReactNode;
  heading: string;
}) {
  return (
    <div className="flex items-start flex-col w-fit">
      <div className="text-secondary mb-3">{heading}</div>
      {children}
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="bg-primary h-screen w-screen overflow-y-auto">
      <div className="container max-w-screen-lg mx-auto">
        <header className="mt-16 flex items-center justify-between">
          <Image src={logo} alt="logo..." />
          <p className="uppercase font-barlow_condensed text-secondary text-2xl font-normal">
            design system
          </p>
        </header>
        <section className="my-12">
          <div>
            <h2 className="flex items-center text-xl uppercase gap-5 text-secondary mb-5">
              <span className="text-white">02</span>
              Colors
            </h2>
          </div>
          <div className="colors flex items-center justify-between gap-4">
            <div className="color">
              <div className="w-80 h-24 bg-primary border border-white relative text-white">
                <span className="absolute bottom-4 left-3 text-lg font-bellefair">
                  #0B0D17
                </span>
              </div>
            </div>
            <div className="color">
              <div className="w-80 h-24 bg-secondary border relative text-primary">
                <span className="absolute bottom-4 left-3 text-lg font-bellefair">
                  #D0D6F9
                </span>
              </div>
            </div>
            <div className="color">
              <div className="w-80 h-24 bg-white border relative text-primary">
                <span className="absolute bottom-4 left-3 text-lg font-bellefair">
                  #FFFFFF
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="my-12">
          <div>
            <h2 className="flex items-center text-xl uppercase gap-5 text-secondary mb-5">
              <span className="text-white">02</span>
              Typography
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start flex-col gap-4">
              <TypographyPreview heading="Heading1 - Bellefair Regular - 150px">
                <H1>EARTH</H1>
              </TypographyPreview>
              <TypographyPreview heading="Heading 2 - Bellefair Regular - 100px">
                <H2>VENUS</H2>
              </TypographyPreview>
              <TypographyPreview heading="Heading 3 - Bellefair Regular - 56px">
                <H3>JUPITER & SATURN</H3>
              </TypographyPreview>
              <TypographyPreview heading="Heading 4 - Bellefair Regular - 32px">
                <H4>URANUS, NEPTUNE, & PLUTO</H4>
              </TypographyPreview>
              <TypographyPreview heading="Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space">
                <H5>SO, YOU WANT TO TRAVEL TO SPACE</H5>
              </TypographyPreview>
            </div>
            <div className="flex items-start flex-col gap-4">
              <TypographyPreview heading="Subheading 1 - Bellefair Regular - 28px">
                <p className="font-bellefair text-2xl text-secondary">
                  384,400 km
                </p>
              </TypographyPreview>
              <TypographyPreview heading="Subheading 2 -   - 14px - 2.35 Character Space">
                <p className="font-barlow_condensed text-lg text-secondary tracking-[2.35px]">
                  AVG. DISTANCE
                </p>
              </TypographyPreview>
              <TypographyPreview heading="Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space">
                <p className="font-barlow_condensed text-base text-secondary tracking-[2.7px]">
                  EUROPA
                </p>
              </TypographyPreview>
              <TypographyPreview heading="Body Text">
                <p className="font-barlow_condensed tracking-wide text-base text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  ipsum dolore ipsam veniam saepe eveniet vero, impedit esse
                  cumque ex aliquid obcaecati officia, culpa nemo quasi numquam
                  delectus asperiores quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolore tempore harum doloremque
                  molestias mollitia cum consequatur laborum magnam, unde porro
                  adipisci iusto temporibus quaerat eos. Ipsa quas explicabo
                  blanditiis natus.
                </p>
              </TypographyPreview>
            </div>
          </div>
        </section>
        <section className="my-12">
          <div>
            <h2 className="flex items-center text-xl uppercase gap-5 text-secondary mb-5">
              <span className="text-white">03</span>
              INTERACTIVE ELEMENTS
            </h2>
          </div>
          <div className="">
            <nav>
              
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}
