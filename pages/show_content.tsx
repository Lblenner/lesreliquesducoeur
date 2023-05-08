import Card from "@/components/card";


type Tem = {
  audioSource: string,
  imgSource: string,
  audioType: string
}
let tems: Tem[] = [
  {
    audioSource: "",
    imgSource: "/uploads/1.png",
    audioType: ""
  },
  {
    audioSource: "",
    imgSource: "",
    audioType: ""
  }
]


export default function ShowContent() {
  return (
    <main className=' flex flex-col w-full items-center'>
      <div className='h-8'></div>
      <div>Les témoignages</div>
      <div className='h-8'></div>
      <div className='grid w-full lg:grid-cols-3 grid-cols-1 place-items-center px-16'>
        {tems.map((e) => <Card audioSource={e.audioSource} audioType={e.audioType} imgSource={e.imgSource} />)}
      </div>
    </main>
  )
}
