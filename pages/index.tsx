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
      <title>Les reliques du coeur</title>
    </Head>
    <main className='flex flex-col w-full items-center'>
      <div className='text-center max-w-prose text-black'>
        <h1 className={`${poppy.className} m-4 text-6xl md:text-7xl`}>Analogie(s) des reliques du coeur</h1>
        <p className={`${lovelo.className} m-4 text-xl`}>
          Parfois, on possède des objets et on ne sait même plus pourquoi. Puis on
          se souvient, et soudain on a besoin de l’écrire, de le dire, même si personne
          n’écoute.
        </p>

        <p className={`${lovelo.className} m-4 text-base`}>
        <span className="italic">Analogie(s) des reliques du cœur</span>  est un projet
          artistique de collecte de témoignages émotionnels en lien avec des objets. Il s’agit d’une collection
          audio et photographique d’objets portant une charge émotionnelle, affective, vulnérable.
        </p>

        {/* <div className='flex items-center justify-center'>

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
/> }
              </div>

            </div>
            <div className="w-[300px] h-[300px] flex items-center justify-center">
              <div className='bg-white w-[240px] h-[240px]'>
                {/* <Image
                  src={"/img/2.jpg"}
                  alt="Picture of the author"
                  width={240}
                  height={240}
/> }
              </div>
            </div>

          </Carousel>

        </div> */}
        <p className={`${poppy.className} m-4 text-xl`}>
          Les témoignages, qui ont fait l’objet d’échanges sont consultables sous forme audio.
        </p>

        <p className={`${lovelo.className} m-4 text-base`}>
          L’artiste de ce projet, MC, souhaite par ce travail créer un dialogue d’anthropologie poétique.
          Elle espère pouvoir offrir ainsi l’opportunité de partager anonymement nos expériences communes
          de vulnérabilité, à travers nos reliques personnelles. Mais aussi, l’occasion de les consulter et de
          s’y retrouver, de se sentir moins seul, et de trouver dans cette expérience, une empathie du nous, du
          moi, d’autrui.
        </p>

        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdkblEHRI9GQBweCj-m8NXW4YjL61IuSIbe-0FHKCOpgWgRWQ/viewform?usp=sf_link" rel="noopener noreferrer">
        <div 
          className={`${lovelo.className} text-white bg-orange-fonce hover:bg-orange-foncee 
             font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 
             focus:outline-none text-xl`}>
          Je souhaite envoyer une participation anonyme
        </div>
        </a>

      
        <div className='my-16'></div>

      </div>

    </main>
  </div>


}

