import { motion } from "framer-motion"
import images from "../constants/images"

const RecomendedTopics = [
    { category: "Chemistry", chapter: "Chemical Kinetics", totalEnrollment: 3456 },
    { category: "Math", chapter: "Functions", totalEnrollment: 2890 },
    { category: "Physics", chapter: "Electrostatics", totalEnrollment: 3124 },
    { category: "Chemistry", chapter: "Coordination Compounds", totalEnrollment: 2750 },
];

const Recomendation = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            {
                RecomendedTopics.map((item) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="transition-transform duration-300 hover:scale-105 w-5/6 h-48 cursor-pointer flex flex-col gap-3 m-3"
                        key={item.chapter}
                    >
                        <img src={images.chemistry} alt="background" className="rounded" />
                        <div className="text-base font-bold text-slate-500">
                            {item.chapter}
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-between items-center gap-1">
                                <div className="text-xs text-green-500 font-extrabold">free</div>
                                <img src={images.unlock} alt="free" className="w-3 h-3" />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-1">
                                <img src={images.view} alt="views" className="w-3 h-3" />
                                <div className="text-xs text-slate-500">{item.totalEnrollment}</div>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default Recomendation