"use client"

import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "./modal/modal-context";
import { TransitionUp } from "../ui/transitions";

export const componentsProjects: { 
    id: number;
    src: string; 
    alt: string;
    description: string;
    tag: string[];
    with: number;
    height: number;
    image: string;
    site: string;
    path: string; 
    button: string;
    hover: string
  }[] = [{
    id: 1,
    src: '/template-institucional.webp',
    alt: 'Site Institucional',
    description: 'Tema WordPress totalmente desenvolvido do zero e personalizado para empresas que precisam de um site institucional.',
    tag: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    with: 400,
    height: 1300,
    image: '/site-institucional.webp',
    site: 'https://institucional.manfron.com.br',
    path: 'https://manfron.com.br',
    button: 'Saiba Mais',
    hover: 'md:-bottom-[544px]'
  }, {
    id: 2,
    src: '/blogpro-manfron.webp',
    alt: 'Blog Profissional',
    description: 'Tema WordPress totalmente desenvolvido do zero e personalizado para pessoas que queiram um blog profissional.',
    tag: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    with: 400,
    height: 1300,
    image: '/site-blogpro.webp',
    site: 'https://blogpro.manfron.com.br',
    path: 'https://manfron.com.br',
    button: 'Saiba Mais',
    hover: 'md:-bottom-[120px]'
  }, {
    id: 3,
    src: '/lollylacos.webp',
    alt: 'Loja Lolly Laços',
    description: 'Tema WordPress com Woocommerce baseado em cima do tema Astra, desenvolvido para empresa Lolly Laços.',
    tag: ['WordPress', 'WooCommerce', 'Tema Astra', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    with: 400,
    height: 1300,
    image: '/site-lollylacos.webp',
    site: 'https://lollylacos.com',
    path: 'https://manfron.com.br',
    button: 'Saiba Mais',
    hover: 'md:-bottom-[616px]'
  }, {
    id: 4,
    src: '/stickerbe.webp',
    alt: 'Loja StickerBe',
    description: 'Tema WordPress com Woocommerce baseado em cima do tema Astra, desenvolvido para empresa StickerBe.',
    tag: ['WordPress', 'WooCommerce', 'Tema Astra', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    with: 400,
    height: 1300,
    image: '/site-stickerbe.webp',
    site: 'https://stickerbe.com.br',
    path: 'https://manfron.com.br',
    button: 'Saiba Mais',
    hover: 'md:-bottom-[550px]'
  }, {
    id: 5,
    src: '/liquidsvape.webp',
    alt: 'Loja Liquids Vape',
    description: 'Tema WordPress com Woocommerce baseado em cima do tema Astra, desenvolvido para empresa Liquids Vape.',
    tag: ['WordPress', 'WooCommerce', 'Tema Astra', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    with: 400,
    height: 2024,
    image: '/site-liquidsvape.webp',
    site: 'https://liquidsvape.com',
    path: 'https://manfron.com.br',
    button: 'Saiba Mais',
    hover: 'md:-bottom-[1040px]'
}]

const ProjectContent = () => {
    const { setShow, setId } = useContext(ModalContext)

    return(
        <TransitionUp delay={0.4} className="relative flex flex-wrap justify-center gap-2 sm:gap-5 sm:p-10">
          {componentsProjects.map( (images) => (
              <button key={images.id} onClick={() => ( setShow(true), setId(images.id) )}>
                  <div className="block w-[300px] h-[350px] lg:h-[310px] xl:h-[350px] overflow-hidden relative
                      rounded-md border-2 sm:border-[16px] border-solid border-gray-400 dark:border-gray-300 mx-0 my-auto">
                      <Image
                          src={images.src}
                          alt={images.alt}
                          width={images.with}
                          height={images.height}
                          className={`${images.hover} relative md:absolute w-[100%] h-auto z-0 m-0 p-0 transition-all duration-5000
                          hover:bottom-0 hover:transition-all hover:duration-5000`}
                      />
                  </div>
              </button>
          ))}
        </TransitionUp>
    )
}

export default ProjectContent;