// A Organic Mean nasceu em 2010, desde então um dos seus principais objetivos consiste em proporcionar jóias únicas e diferentes, para ocasiões quotidianas enquanto é tido em conta o impacto positivo na sociedade portuguesa e global, na indústria e no planeta Terra.

// Rui Silva começou a vender as suas jóias em algumas feiras em Lisboa, tentando perceber o que as pessoas podiam gostar mais em termos de design. Todas as peças Organic Mean são desenhadas e produzidas por si.
// O joalheiro defende que as jóias são uma expressão de si próprio, e a forma como o ser humano se apresenta ao mundo não deve de ter limites e sim, ser a mais autêntica possível. É para isso também que, se dedica e inspira diariamente e transmite em cada peça da sua marca.
// Ao trabalhar com fornecedores de confiança de todo o mundo, garante a utilização de materiais de alta qualidade e de origem responsável para criar peças de joalharia únicas e destinadas a durar gerações.

// Do fundador:
// “Para mim, a expressão mais verdadeira da Organic Mean é sentirmo-nos com o poder de investir em nós próprios e na comunidade à nossa volta.

//   Ao longo dos anos, tenho aprendido muito e estou profundamente ligado ao mundo da joalharia. Contudo, quando decidi entrar na área, sabia e tinha a certeza que queria fazer as coisas de forma diferente. Com a Organic Mean, estou a construir uma forma de joalharia diferente dos arquétipos tradicionais do conceito e design.”

import { Link } from "react-router-dom";
import { PageTitle } from "./PageTitle";
import { Paragraph } from "./Paragraph";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { SubtitleCards } from "./SubtitleCards";
import { toLocalTranslation } from "../i18n/toLocalTranslation";
import { useEffect, useState } from "react";
import { SpinWheel } from "./SpinWheel";

interface PageProps {
  pageAbout: string;
}

export function DarkContainer({ pageAbout }: PageProps) {
  const [spin, setSpin] = useState<number>(0);

  function spinListener() {
    const spinWheel = window.scrollY;
    setSpin(spinWheel);
  }
  useEffect(() => {
    document.addEventListener("scroll", spinListener);
    return () => document.removeEventListener("scroll", spinListener);
  }, [spinListener]);

  return (
    <>
      {pageAbout === "aboutme" ? (
        <div className="flex flex-col items-center box-border">
          <div>
            <PageTitle title={toLocalTranslation(" ")} />
          </div>
          <div className="p-5 bg-darkTransparent w-[20rem] md:w-[60rem] font-bitterThin max-w-2xl text-center ">
            {pageAbout === "aboutme" && (
              <div className=" absolute h-14 -translate-x-[3rem] md:-translate-x-[4rem]">
                <SpinWheel imgUrl="/icons/rodaDentada1.png" spin={spin} />
              </div>
            )}
            <Paragraph text={toLocalTranslation("about_me_paragraph_1")} />
            {pageAbout === "aboutme" && (
              <div className=" absolute h-14 translate-x-[16.7rem] -translate-y-[2.5rem] md:translate-x-[39rem]">
                <SpinWheel imgUrl="/icons/rodaDentada2.png" spin={spin} />
              </div>
            )}
            <Paragraph text={toLocalTranslation("about_me_paragraph_2")} />
            <Paragraph text={toLocalTranslation("about_me_paragraph_3")} />
          </div>

          <div className="p-5 bg-darkTransparent w-[20rem] md:w-[60rem] font-bitterThinItalic max-w-2xl text-center">
            {pageAbout === "aboutme" && (
              <div className=" absolute h-14 -translate-x-[2rem] -translate-y-[2.5rem] md:-translate-x-[4rem]">
                <SpinWheel imgUrl="/icons/rodaDentada3.png" spin={spin} />
              </div>
            )}
            <SubtitleCards
              subtitle={toLocalTranslation("from_the_autor_title")}
            />
            <Paragraph
              text={toLocalTranslation("from_the_autor_paragraph_1")}
            />
            <Paragraph
              text={toLocalTranslation("from_the_autor_paragraph_2")}
            />
            <div className="text-white font-cinzel text-xs text-center md:text-base relative w-full block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
              <div className="flex justify-center w-full p-5">
                <Link to={"/products"}>
                  <Paragraph text={toLocalTranslation("about_me_link")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div>
            <PageTitle title={toLocalTranslation(" ")} />
          </div>
          <div className="p-8 mb-4 bg-darkTransparent w-full md:flex md:flex-row-reverse">
            <div className="w-60 m-auto mt-5 mb-5">
              <img src="/icons/ContactBookLogo.svg" />
            </div>
            <div className="flex flex-col items-center gap-4 p-3 md:justify-center">
              <div></div>
              <Paragraph text="organicmean@gmail.com" />
              <Paragraph text="(+351) 935-658-854" />
            </div>
            <div className="flex justify-between p-1 md:flex-col md:p-3 ">
              <a
                href="https://www.instagram.com/_organic._.mean_/"
                className="hover:scale-110"
              >
                <SocialMediaIcon link="/icons/InstagramLogo.svg" />
              </a>
              <a
                href="mailto:organic.mean@gmail.com"
                className="hover:scale-110"
              >
                <SocialMediaIcon link="/icons/EmailLogo.svg" />
              </a>
              <a
                href="https://wa.me/message/WGHLPXOG7GHKN1"
                className="hover:scale-110"
              >
                <SocialMediaIcon link="/icons/WhatsAppLogo.svg" />
              </a>
              <a
                href="https://organicmean.etsy.com"
                className="hover:scale-110"
              >
                <SocialMediaIcon link="/icons/EtsyLogo.svg" />
              </a>
            </div>
          </div>
          <div className="font-cinzel font-bold text-xs text-center md:text-lg relative w-full block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
            <div className="flex justify-center w-full p-5">
              <Link to={"/products"}>
                <Paragraph
                  color="black"
                  text={toLocalTranslation("about_me_link")}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
