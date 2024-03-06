// Importação do Zod
import { z } from "zod";

// Schema de página não encontrada
export const notFound = {
    page: 'Página não encontrada!',
    warning: 'Não foi possível encontrar a página solicitada.',
    buttonBack: 'Retornar para o início',
    path: '/'
}

// Schema de Links no header (superior direito)
export const linksHeader = {
    hrefLinkedin: 'https://www.linkedin.com/in/adriano-manfron/',
    textLinkedin: 'Linkedin',
    hrefGithub: 'https://github.com/AdrianoManfron',
    textGithub: 'Github'
}

// Schema de conteúdo do hero
export const contentHero = {
    p1: 'Olá, eu sou o',
    h1: '< Adriano Manfron />',
    p2: 'Desenvolvedor Frontend',
    p3: 'React/NextJS',
    p4: 'e Desenvolvedor de',
    p5: 'Temas Wordpress',
    path: 'about',
    text: 'Saiba Mais'
}

// Schema da sessão sobre mim
  // Título
export const titleAbout = {
    title: 'SobreMim'
}

  // Textarea sobre mim
export const componentAbout = {
    textarea: `Opa, aqui quem fala é o Adriano, sou Formado em Análise e Desenvolvimento de Sistemas pela UNISINOS.
        Sou desenvolvedor frontend ReactJs/NextJs e desenvolvedor de Temas Wordpress. Atuo como freelancer em desenvolvimento web/app,
        visando transmitir a essência de cada projeto e presando pela usabilidade e experiência do usuário. Utilizo o ReactJs/NextJs para projetos mais modernos e exigentes.
        E para projetos mais simples, utilizo o Wordpress e Woocommerce como principais ferramentas, ele é um CMS (Sistema de Gestão de Conteúdo),
        que é um dos mais utilizados no mundo atualmente para criação web. E por mais que o Wordpress seja realmente mais lento do que o ReactJs/NextJs, por exemplo,
        criando um tema mais fluído e configurando ele direito, o Wordpress se torna uma boa opção para quem quer ter um site moderno.`
}

// Schema da sessão habilidades
  // Título
export const titleSkill = {
    title: 'Habilidades'
}

// Schema da sessão Projetos
  // Título
export const titleProjects = {
  title: 'Projetos'
}

 // Informações dos Projetos
export const componentsProjects: { id: number; src: string; alt: string; with: number; height: number; hover: string }[] = [{
  id: 1,
  src: '/template-institucional.webp',
  alt: 'Site Institucional',
  with: 400,
  height: 1300,
  hover: 'md:-bottom-[544px]'
}, {
  id: 2,
  src: '/blogpro-manfron.webp',
  alt: 'Blog Profissional',
  with: 400,
  height: 1300,
  hover: 'md:-bottom-[120px]'
}, {
  id: 3,
  src: '/lollylacos.webp',
  alt: 'Loja Lolly Laços',
  with: 400,
  height: 1300,
  hover: 'md:-bottom-[616px]'
}, {
  id: 4,
  src: '/stickerbe.webp',
  alt: 'Loja StickerBe',
  with: 400,
  height: 1300,
  hover: 'md:-bottom-[550px]'
}, {
  id: 5,
  src: '/liquidsvape.webp',
  alt: 'Loja Liquids Vape',
  with: 400,
  height: 2024,
  hover: 'md:-bottom-[1040px]'
}]

// Schema da sessão blog
  // Título
export const titleBlog = {
    title: 'Blog'
}

  // Botões que leva para acessar o blog
export const textBlogPosts = {
    link: 'Leia Mais',
    href: 'https://manfron.com.br/blog/',
    button: 'Acessar o Blog'
}

// Schema da sessão contato
  //Título
export const titleContact = {
    title: 'Contato'
}

  // Validação do formulário de contato
export const schema = z.object({
    name: z.string().min(3, 'O nome precisa ter pelo menos 3 caracteres.'),
    phone: z.string().min(11, 'Número de telefone inválido! Por favor, verifique se o número digitado consta o DDD + 9 digitos.'),
    email: z.string().email('Formato de e-mail inválido! Por gentileza, utilize um e-mail válido.')
        .min(10,'Formato de e-mail inválido! Por gentileza, digite pelo menos 10 caracteres.')
        .max(50, 'Formato de e-mail inválido! Por gentileza, digite no máximo 50 caracteres.'),
    ass: z.string().min(3, 'O assunto precisa ter pelo menos 3 caracteres.'),
    message: z.string().min(15, 'A mensagem precisa ter pelo menos 15 caracteres.'),
    return: z.string()
}).transform((field) => ({
    name: field.name,
    phone: field.phone,
    email: field.email.toLowerCase(),
    ass: field.ass,
    message: field.message,
    return: field.return
}))

// Schema do rodapé
  // Título institucional
export const titleFooterInstitutional = {
    title: 'Institucional'
}

  // Título últimas postagens
export const titleFooterLastPosts = {
    title: 'Últimas Postagens'
}

  // Contatos
export const contactNetworks = {
    phone: '(51) 9 9796-0502',
    email: 'adriano@manfron.com.br'
}