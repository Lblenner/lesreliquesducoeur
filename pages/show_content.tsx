import Card from "@/components/card";
import Head from "next/head";


type Tem = {
  audioSource: string,
  imgSource: string,
  audioType: string
}

let tems: Tem[] = [
  {
    audioSource: "/audio/115.mp3",
    imgSource: "/img/115.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/147.mp3",
    imgSource: "/img/147.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/172.mp3",
    imgSource: "/img/172.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/253.m4a",
    imgSource: "/img/253.jpg",
    audioType: "audio/x-m4a"
  },
  {
    audioSource: "/audio/290.mp3",
    imgSource: "/img/290.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/306.m4a",
    imgSource: "/img/306.jpg",
    audioType: "audio/x-m4a"
  }, {
    audioSource: "/audio/324.m4a",
    imgSource: "/img/324.jpg",
    audioType: "audio/x-m4a"
  }, {
    audioSource: "/audio/361.m4a",
    imgSource: "/img/361.jpg",
    audioType: "audio/x-m4a"
  }, {
    audioSource: "/audio/420.mp3",
    imgSource: "/img/420.jpg",
    audioType: "audio/mpeg"
  }, {
    audioSource: "/audio/434.m4a",
    imgSource: "/img/484.jpg",
    audioType: "audio/x-m4a"
  }, {
    audioSource: "/audio/509.mp3", //////
    imgSource: "/img/509.jpg",
    audioType: "audio/mpeg"
  }, {
    audioSource: "/audio/542.m4a",
    imgSource: "/img/542.jpg",
    audioType: "audio/x-m4a"
  }, {
    audioSource: "/audio/610.mp3",
    imgSource: "/img/610.jpg",
    audioType: "audio/mpeg"
  }, {
    audioSource: "/audio/622.mp3",
    imgSource: "/img/622.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/687.mp3",
    imgSource: "/img/687.jpg",
    audioType: "audio/mpeg"
  }
  ,
  {
    audioSource: "/audio/734.mp3",
    imgSource: "/img/734.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/773.m4a",
    imgSource: "/img/773.jpg",
    audioType: "audio/x-m4a"
  },
  {
    audioSource: "/audio/854.m4a",
    imgSource: "/img/854.jpg",
    audioType: "audio/x-m4a"
  },
  {
    audioSource: "/audio/872.m4a",
    imgSource: "/img/872.jpg",
    audioType: "audio/x-m4a"
  },
  {
    audioSource: "/audio/918.mp3",
    imgSource: "/img/918.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/946.mp3",
    imgSource: "/img/946.jpg", ///
    audioType: "audio/mpeg"
  },
  {
    audioSource: "/audio/958.mp3",
    imgSource: "/img/958.jpg",
    audioType: "audio/mpeg"
  },
  {
    audioSource: "", //"/audio/1312.mp3",
    imgSource: "/img/1312.jpg",
    audioType: "", //"audio/mpeg"
  },

]


export default function ShowContent() {
  return <div>
    <Head>
      <title>Les reliques du coeur</title>
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
