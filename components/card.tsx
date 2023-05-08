
import Image from 'next/image'

type CardProps = { imgSource: string, audioSource: string, audioType: string }

export default function Card(props: CardProps) {
    return <div className=" w-[264px] h-[314px] bg-white m-[32px]">
        <div className=" w-[200px] h-[200px] bg-amber-200 mx-[32px] mt-[32px]" style={{position:"relative"}}>
            <Image
                // className="-z-10"
                src={props.imgSource}
                alt="Picture of the author"
                fill={true}
                style={{objectFit: "cover"}}
                priority={false}
            />
        </div>
        <div className=" w-[200px] h-[82px] mx-[32px] flex flex-row justify-center">
            <audio controls className=" w-[200px] m-auto ">
            {/* type={props.audioType} */}
                <source src={props.audioSource} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    </div >
}
