import React from 'react'
import Project from './Project'

const Projects = () => {

  const projects = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We created a wesbite for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: false,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating Ul components and emerging technologies.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
  ];

  return (
    <div className='w-full bg-zinc-900 mx-auto relative'>
      {projects.map((item, index) => <Project val={item} />)}
      <div className='w-full h-full absolute top-0  pointer-events-none'>
        <div className='w-96 h-84 bg-zinc-100 absolute left-[48%] -translate-x-[50%] overflow-hidden'>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
          <div className='w-full h-full bg-zinc-100'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects