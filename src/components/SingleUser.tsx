//@ts-ignore
import NumberCounter from 'number-counter';
import { UserDataType } from "./Home";
import ProgressBar from "@ramonak/react-progress-bar";
import AnimatedNumbers from "react-animated-numbers"
import { useMemo } from 'react';
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
    const num = useMemo(() => score, [score])
    const behaviouralNum = useMemo(() => behavioural, [behavioural])
    const communicationNum = useMemo(() => communication, [communication])
    const situation_handlingNum = useMemo(() => situation_handling, [situation_handling])
    return (
        <div className="single-user bg-white shadow-[rgba(99,99,99,0.1)_0px_2px_8px_0px] rounded-xl">
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
                        <AnimatedNumbers
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                            })}
                            animateToNumber={num}
                            fontStyle={{
                                fontSize: 30,
                                fontWeight: 500,
                                color: score > 50 ? "#00BD65" : "#ebb221",
                            }}
                        />
                    </div>

                    <div className="my-8 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <p className="text-sm sm:text-base md:text-xs font-semibold text-[#79899e]">Behavioural</p>
                            <div className="flex items-center gap-4">
                                <ProgressBar
                                    completed={behavioural * 10}
                                    isLabelVisible={false}
                                    width='130px'
                                    height='8px'
                                    bgColor={`${behavioural > 6 ? "#00BD65" : "#ebb221"}`}
                                    animateOnRender={true}
                                    className='progressBar'
                                />
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 0.3,
                                    })}
                                    animateToNumber={behaviouralNum}
                                    fontStyle={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: behaviouralNum > 6 ? "#00BD65" : "#ebb221",
                                    }}
                                />
                                <span className={`text-sm md:text-xs font-bold ${behavioural > 6 ? "text-[#00BD65]" : "text-[#ebb221]"} -ml-3`}>/10</span>
                                {/* <NumberCounter end={behavioural} delay={0.3} postFix="/10" className={`text-sm md:text-xs font-bold ${behavioural > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`} /> */}
                                {/* <p className={`text-sm md:text-xs font-bold ${behavioural > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{behavioural}/10</p> */}

                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm sm:text-base md:text-xs font-semibold text-[#79899e]">Communication</p>
                            <div className="flex items-center gap-4">
                                <ProgressBar
                                    completed={communication * 10}
                                    isLabelVisible={false}
                                    width='130px'
                                    height='8px'
                                    bgColor={`${communication > 6 ? "#00BD65" : "#ebb221"}`}
                                    animateOnRender={true}
                                    className='progressBar'
                                />
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 0.3,
                                    })}
                                    animateToNumber={communicationNum}
                                    fontStyle={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: communicationNum > 6 ? "#00BD65" : "#ebb221",
                                    }}
                                />
                                <span className={`text-sm md:text-xs font-bold ${communication > 6 ? "text-[#00BD65]" : "text-[#ebb221]"} -ml-3`}>/10</span>
                                {/* <NumberCounter end={communication} delay={0.3} postFix="/10" className={`text-sm md:text-xs font-bold ${communication > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`} /> */}
                                {/* <p className={`text-sm md:text-xs font-bold ${communication > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{communication}/10</p> */}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm sm:text-base md:text-xs font-semibold text-[#79899e]">Situation handling</p>
                            <div className="flex items-center gap-4">
                                <ProgressBar
                                    completed={situation_handling * 10}
                                    isLabelVisible={false}
                                    width='130px'
                                    height='8px'
                                    bgColor={`${situation_handling > 6 ? "#00BD65" : "#ebb221"}`}
                                    animateOnRender={true}
                                    className='progressBar'
                                />
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 0.3,
                                    })}
                                    animateToNumber={situation_handlingNum}
                                    fontStyle={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: situation_handlingNum > 6 ? "#00BD65" : "#ebb221",
                                    }}
                                />
                                <span className={`text-sm md:text-xs font-bold ${situation_handling > 6 ? "text-[#00BD65]" : "text-[#ebb221]"} -ml-3`}>/10</span>
                                {/* <NumberCounter end={situation_handling} delay={0.3} postFix="/10" className={`text-sm md:text-xs font-bold ${situation_handling > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`} /> */}
                                {/* <p className={`text-sm md:text-xs font-bold ${situation_handling > 6 ? "text-[#00BD65]" : "text-[#ebb221]"}`}>{situation_handling}/10</p> */}
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
