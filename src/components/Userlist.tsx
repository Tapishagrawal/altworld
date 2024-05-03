//@ts-ignore
import NumberCounter from 'number-counter';
interface UserDataPropsType {
    id: number,
    name: string,
    email: string,
    score: number,
    behavioural: number,
    communication: number,
    situation_handling: number,
    about: string,
    experience: string,
    hobbies: string,
    introduction: string,
    image: string,
    handleSetSingleUser:(id:number)=>void
}
export default function Userlist({ id, name, email, score, image, handleSetSingleUser }: UserDataPropsType) {
    
    return (
        <div>
            <div onClick={() => handleSetSingleUser(id)} className="cursor-pointer flex items-center justify-between hover:bg-[#f0f0ed] sm:pr-28 md:pr-4 px-4 py-2 lg:pr-16">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={image} className="rounded-xl object-cover object-center w-[50px] h-[50px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]" alt="" />
                    </div>
                    <div className="leading-[5px]">
                        <h3 className="font-bold text-[#2d384a] text-base md:text-xs lg:text-sm">{name}</h3>
                        <p className="text-sm md:text-[8px] lg:text-xs font-medium text-[#79899e]">{email}</p>
                    </div>
                </div>
                <NumberCounter end={score} delay={0.5} postFix="%" className={`font-bold ${score > 50 ? "text-[#00a981]" : "text-[#EFBD4B]"} text-baselg:text-lg`}/>
            </div>
        </div>
    )
}
