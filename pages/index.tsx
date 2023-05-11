import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import localFont from 'next/font/local'

const lovelo = localFont({ src: '../public/fonts/Lovelo-Black.otf' });
const poppy = localFont({ src: '../public/fonts/Poppy-Handwriting.ttf' });


export default function Home() {
  return <div>
    <Head>
      <title>présentation</title>
    </Head>
    <main className='flex flex-col w-full items-center'>
      <div className='text-center max-w-prose text-white'>
        <h1 className={`${poppy.className} m-8 text-7xl md:text-9xl`}>deepby.mp3</h1>
        <p className={`${lovelo.className} m-8`}>
          Bienvenue à la présentation de mon projet artistique intitulé Métamorphose.
          Métamorphose est une installation artistique interactive qui explore le thème de la transformation.
          Cette installation se compose de plusieurs éléments artistiques, tels que des sculptures, des projections vidéo,
          des éléments sonores et des espaces interactifs. Le but de cette installation est de transporter
          les spectateurs dans un monde où la transformation est le fil conducteur.
        </p>

        <p className={`${lovelo.className} m-8`}>
          Les sculptures présentent des formes organiques qui évoluent au fil du temps, représentant la nature changeante de la vie.
          Les projections vidéo montrent des images de métamorphoses, telles que des papillons sortant de leur chrysalide ou des plantes en train de germer.
          Les éléments sonores, tels que des bruits de la nature ou des voix humaines,
          créent une ambiance immersive qui ajoute à lexpérience de transformation.
        </p>

        <div className='flex items-center justify-center'>

          <Carousel
            width={300}
          >
            <div className="w-[300px] h-[300px] flex items-center justify-center">
              <div className='bg-white w-[240px] h-[240px]'>

                {/* <Image
                  src={"/img/1.jpg"}
                  alt="Picture of the author"
                  width={240}
                  height={240}
/> */}
              </div>

            </div>
            <div className="w-[300px] h-[300px] flex items-center justify-center">
              <div className='bg-white w-[240px] h-[240px]'>
                {/* <Image
                  src={"/img/2.jpg"}
                  alt="Picture of the author"
                  width={240}
                  height={240}
/> */}
              </div>
            </div>

          </Carousel>

        </div>

        <p className={`${lovelo.className} m-8`}>
          Les sculptures présentent des formes organiques qui évoluent au fil du temps, représentant la nature changeante de la vie.
          Les projections vidéo montrent des images de métamorphoses, telles que des papillons sortant de leur chrysalide ou des plantes en train de germer.
          Les éléments sonores, tels que des bruits de la nature ou des voix humaines,
          créent une ambiance immersive qui ajoute à lexpérience de transformation.
        </p>

        <a target="_blank" href="https://www.google.com/" rel="noopener noreferrer"
          className='text-white bg-orange-fonce hover:bg-orange-foncee 
             font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
             focus:outline-none'>
          Participer !
        </a>

        <div className='my-16'></div>

      </div>

    </main>
  </div>


}

