import { useNavigate, useParams } from "react-router-dom"
import TestTopbar from "../../components/TestTopbar"
import TestSidebar from "../../components/TestSidebar"
import Question from "../../components/question"
import TestBottombar from "../../components/TestBottombar";
import { useEffect, useState } from "react";

const Data = [
    {
        "id": 1,
        "subject": "Physics",
        "question": "A block of mass m is placed on a smooth inclined plane of inclination θ. The block is held by a horizontal string. What is the tension in the string?",
        "options": {
            "a": "mg",
            "b": "mg cos θ",
            "c": "mg sin θ",
            "d": "mg tan θ"
        },
        "correct_answer": "b"
    },
    {
        "id": 2,
        "subject": "Chemistry",
        "question": "Which of the following has the highest ionization energy?",
        "options": {
            "a": "Li",
            "b": "Na",
            "c": "K",
            "d": "Cs"
        },
        "correct_answer": "a"
    },
    {
        "id": 3,
        "subject": "Mathematics",
        "question": "The value of the integral ∫ (x^2 + 1) dx is:",
        "options": {
            "a": "(x^3/3) + C",
            "b": "x^3/3 + x + C",
            "c": "x^2 + C",
            "d": "2x + C"
        },
        "correct_answer": "b"
    },
    {
        "id": 4,
        "subject": "Physics",
        "question": "Which of the following is a scalar quantity?",
        "options": {
            "a": "Velocity",
            "b": "Acceleration",
            "c": "Force",
            "d": "Temperature"
        },
        "correct_answer": "d"
    },
    {
        "id": 5,
        "subject": "Chemistry",
        "question": "What is the pH of a solution with a hydrogen ion concentration of 10^-3 M?",
        "options": {
            "a": "1",
            "b": "3",
            "c": "7",
            "d": "10"
        },
        "correct_answer": "b"
    },
    {
        "id": 6,
        "subject": "Mathematics",
        "question": "If the determinant of a 2x2 matrix is zero, what can be said about the matrix?",
        "options": {
            "a": "It is invertible",
            "b": "It has no inverse",
            "c": "It has an infinite number of inverses",
            "d": "It is symmetric"
        },
        "correct_answer": "b"
    },
    {
        "id": 7,
        "subject": "Physics",
        "question": "Which of the following phenomena is associated with the dual nature of light?",
        "options": {
            "a": "Diffraction",
            "b": "Reflection",
            "c": "Interference",
            "d": "Photoelectric effect"
        },
        "correct_answer": "d"
    },
    {
        "id": 8,
        "subject": "Chemistry",
        "question": "Which of the following compounds is most acidic?",
        "options": {
            "a": "CH3COOH",
            "b": "C2H5OH",
            "c": "CH3OH",
            "d": "H2O"
        },
        "correct_answer": "a"
    },
    {
        "id": 9,
        "subject": "Mathematics",
        "question": "What is the sum of the roots of the quadratic equation ax^2 + bx + c = 0?",
        "options": {
            "a": "-b/a",
            "b": "b/a",
            "c": "-c/a",
            "d": "c/a"
        },
        "correct_answer": "a"
    },
    {
        "id": 10,
        "subject": "Physics",
        "question": "The electric field at a point due to a point charge is inversely proportional to:",
        "options": {
            "a": "Distance from the charge",
            "b": "Square of the distance from the charge",
            "c": "Cube of the distance from the charge",
            "d": "None of the above"
        },
        "correct_answer": "b"
    }
]


const Test = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(true)
    const [timeLeft, setTimeLeft] = useState(3600)
    const [isTestStarted, setIsTestStarted] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(
        Data.map(() => ({ answered: false, markedForReview: false, selectedOption: null }))
    )

    useEffect(() => {
        let interval;
        if (isTestStarted && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft == 0) {
            clearInterval(interval)
            handleClick('/dashboard/profile')
        }

        return () => clearInterval(interval)
    }, [isTestStarted, timeLeft])

    const handleStartTest = () => {
        setIsOpen(false)
        setIsTestStarted(true)
    }

    const handleClick = (route) => {
        navigate(route)
    }

    const handleOptionChange = (key) => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            selectedOption: key,
        }
        setAnswerStatus(updatedStatus)
    }

    const handleSave = () => {
        const updatedStatus = [...answerStatus]
        if (updatedStatus[currentQuestionIndex].selectedOption != null) {
            updatedStatus[currentQuestionIndex] = {
                ...updatedStatus[currentQuestionIndex],
                answered: true
            }
            setAnswerStatus(updatedStatus)
        }
    }

    const handleReview = () => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            markedForReview: true
        }
        setAnswerStatus(updatedStatus)
    }

    const handleClear = () => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            selectedOption: null,
            answered: false,
            markedForReview: false
        }
        setAnswerStatus(updatedStatus)
    }

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < Data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    return (
        <div className='w-[1280px] mx-auto flex flex-row relative'>
            {
                isOpen && (
                    <div className='fixed z-50 w-screen h-screen left-0 right-0 bg-slate-500/50 flex justify-center items-center'>
                        <div className="w-96 bg-white rounded flex flex-col justify-center items-center p-5 gap-5">
                            <div className="text-lg text-slate-700">All the Best 😀</div>
                            <div className="w-full flex flex-row justify-evenly items-center">
                                <div
                                    onClick={() => handleClick('/dashboard')}
                                    className="w-2/5 p-3 bg-slate-300 rounded text-center text-sm text-white font-extrabold cursor-pointer">exit</div>
                                <div
                                    className="w-2/5 p-3 bg-rose-400 rounded text-center text-sm text-white font-extrabold cursor-pointer"
                                    onClick={() => handleStartTest()}>start</div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='w-2/3 border-l-2 relative'>
                <div className='w-full sticky top-0 right-0'>
                    <TestTopbar currentQuestionIndex={currentQuestionIndex} timeLeft={timeLeft} />
                </div>
                <div>
                    <Question question={Data[currentQuestionIndex]} selectedOption={answerStatus[currentQuestionIndex].selectedOption} handleOptionChange={handleOptionChange} />
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <TestBottombar
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                        handleSave={handleSave}
                        handleReview={handleReview}
                        handleClear={handleClear}
                    />
                </div>
            </div>
            <div className='w-1/3 sticky top-0 right-0 h-screen border-l-2 border-r-2'>
                <TestSidebar
                    answerStatus={answerStatus}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                />
            </div>
        </div>
    )
}

export default Test