import Card from "@/components/card";
import Head from "next/head";


type Tem = {
  audioSource: string,
  imgSource: string,
  audioType: string
}
let tems: Tem[] = [
  {
    audioSource: "/audio/1.mp3",
    imgSource: "/img/1.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/2.mp3",
    imgSource: "/img/2.jpg",
    audioType: "audio/mpeg"
  }
]


export default function ShowContent() {
  return <div>
    <Head>
      <title>témoignages</title>
    </Head>
    <main className=' flex flex-col w-full items-center'>
      <div className='h-8'></div>
      {/* <div>Les témoignages</div>
      <div className='h-8'></div> */}
      <div className='grid w-full lg:grid-cols-3 grid-cols-1 place-items-center px-16'>
        {tems.map((e) => <Card key={e.audioSource} audioSource={e.audioSource} audioType={e.audioType} imgSource={e.imgSource} />)}
      </div>
    </main>
  </div>
}
