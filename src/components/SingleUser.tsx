import { UserDataType } from "./Home";

export default function SingleUser({
    name,
    email,
    score,
    behavioural,
    communication,
    situation_handling,
    about,
    experience,
    hobbies,
    introduction,
    image }: UserDataType) {
    return (
        <div className="w-full md:single-user bg-white shadow-[rgba(99,99,99,0.1)_0px_2px_8px_0px] rounded-xl">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-[60%] lg:w-[50%] p-4 pl-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={image} className="rounded-xl object-cover object-center w-[60px] h-[60px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px]" alt="" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#2d384a] text-base md:text-sm lg:text-base">{name}</h3>
                                <p className="font-medium text-[#79899e] text-sm md:text-xs lg:text-sm">{email}</p>
                            </div>
                        </div>
                        <p className={`font-bold ${score > 50 ? "text-[#00BD65]" : "text-[#ebb221]"} text-3xl md:text-2xl lg:text-3xl`}>{score}%</p>
                    </div>

                    <div className="my-8 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <p className="text-base md:text-xs font-semibold text-[#79899e]">Behavioural</p>
                            <div className="flex items-center gap-4">
                                <div className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block`}>
                                    <div style={{ width: `${behavioural * 10}%` }} className={`absolute ${behavioural > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"} h-[9px] rounded-lg`}></div>
                                </div>
                                <p className={`md:text-xs font-bold ${behavioural > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{behavioural}/10</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-base md:text-xs font-semibold text-[#79899e]">Communication</p>
                            <div className="flex items-center gap-4">
                                <div className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block overflow-hidden`}>
                                    <div style={{ width: `${communication * 10}%` }} className={`absolute ${communication > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"} h-[9px] rounded-lg`}></div>
                                </div>
                                <p className={`md:text-xs font-bold ${communication > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{communication}/10</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xs font-semibold text-[#79899e]">Situation handling</p>
                            <div className="flex items-center gap-4">
                                <div className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block overflow-hidden`}>
                                    <div style={{ width: `${situation_handling * 10}%` }} className={`absolute ${situation_handling > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"} h-[9px] rounded-lg`}></div>
                                </div>
                                <p className={`mdtext-xs font-bold ${situation_handling > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{situation_handling}/10</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-7">
                        <div>
                            <h3 className="font-bold text-[#2d384a] text-lg ">About</h3>
                            <p className="text-xs font-medium text-[#79899e] line-clamp-2">{about}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2d384a] text-lg ">Experience</h3>
                            <p className="text-xs font-medium text-[#79899e] line-clamp-2">{experience}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2d384a] text-lg ">Hobbies</h3>
                            <p className="text-xs font-medium text-[#79899e] line-clamp-2">{hobbies}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2d384a] text-lg ">Introduction</h3>
                            <p className="text-xs font-medium text-[#79899e] line-clamp-2">{introduction}</p>
                        </div>
                    </div>
                    <div className="my-5 text-center">
                        <button className="bg-[#1EC3B3] text-white w-[70%] p-1 rounded-lg font-medium">SHORTLIST</button>
                    </div>
                </div>
                <div className="sm:w-[40%] lg:w-[50%] p-2 self-center sm:self-start">
                    <img src={image} alt="" className="rounded-lg w-[400px] h-[600px] overflow-hidden object-cover object-center" />
                </div>
            </div>
        </div>
    )
}
