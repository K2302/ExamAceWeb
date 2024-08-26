import { useState } from "react"
import { useParams } from "react-router-dom"
import PracticeTopBar from "../../components/PracticeTopbar"
import PracticeBottomBar from "../../components/PracticeBottomBar"
import PracticeSideBar from "../../components/PracticeSidebar"

const Data = [
    {
        "chapter": "Hydrogen",
        "subject": "Chemistry",
        "class": "11",
        "questions": [
            {
                "id": 1,
                "question": "Which of the following is the most abundant isotope of hydrogen?",
                "options": {
                    "a": "Protium",
                    "b": "Deuterium",
                    "c": "Tritium",
                    "d": "None of the above"
                },
                "correct_answer": "a",
                "exam_type": "Mains",
                "date": "July 2023",
                "question_type": "MCQ"
            },
            {
                "id": 2,
                "question": "Calculate the mass of water (in grams) produced when 2 grams of hydrogen reacts completely with oxygen.",
                "correct_answer": "18",
                "exam_type": "Advanced",
                "date": "June 2022",
                "question_type": "Numerical"
            },
            {
                "id": 3,
                "question": "What is the oxidation state of hydrogen in H2O2?",
                "options": {
                    "a": "-1",
                    "b": "0",
                    "c": "+1",
                    "d": "-2"
                },
                "correct_answer": "a",
                "exam_type": "Mains",
                "date": "April 2021",
                "question_type": "MCQ"
            },
            {
                "id": 4,
                "question": "Calculate the bond dissociation energy of an H-H bond in eV, given that the energy required to dissociate 1 mole of H2 molecules into atoms is 436 kJ.",
                "correct_answer": "4.52",
                "exam_type": "Advanced",
                "date": "September 2020",
                "question_type": "Numerical"
            },
            {
                "id": 5,
                "question": "The pH of a 0.01 M solution of hydrochloric acid is:",
                "options": {
                    "a": "2",
                    "b": "1",
                    "c": "3",
                    "d": "4"
                },
                "correct_answer": "a",
                "exam_type": "Mains",
                "date": "January 2020",
                "question_type": "MCQ"
            },
            {
                "id": 6,
                "question": "Determine the number of moles of hydrogen gas produced when 10 grams of zinc reacts with excess hydrochloric acid. (Molar mass of Zn = 65 g/mol)",
                "correct_answer": "0.154",
                "exam_type": "Advanced",
                "date": "August 2021",
                "question_type": "Numerical"
            }
        ]
    }
]



const Practice = () => {
    const { id } = useParams()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentExamType, setCurrentExamType] = useState('Mains')
    const [currentQuestionType, setCurrentQuestionType] = useState('MCQ')
    const [answerStatus, setAnswerStatus] = useState(

    )
    return (
        <div className="flex flex-row w-[1280px] mx-auto">
            <div className="w-2/3 border-l-2 relative">
                <div className="w-full sticky top-0 right-0">
                    <PracticeTopBar currentQuestionIndex={currentQuestionIndex} />
                </div>
                <div>
                    <div>question</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full">
                    <PracticeBottomBar />
                </div>
            </div>
            <div className='w-1/3 sticky top-0 right-0 h-screen overflow-y-scroll border-l-2 border-r-2 hide-scrollbar'>
                <PracticeSideBar />
            </div>

        </div>
    )
}

export default Practice