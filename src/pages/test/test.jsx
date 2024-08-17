import { useParams } from "react-router-dom"
import TestTopbar from "../../components/TestTopbar"
import TestSidebar from "../../components/TestSidebar"
import Question from "../../components/question"
import TestBottombar from "../../components/TestBottombar";

const Data = [
    {
        question: "The number of ways in which 21 identical apples can be distributed among three children such that each child gets at least 2 apples, is",
        options: ['406', '103', '901', '221'],
        answer: '103'
    }
];

const Test = () => {
    const { id } = useParams()

    return (
        <div className='w-[1280px] mx-auto flex flex-row'>
            <div className='w-2/3 border-l-2 relative'>
                <div className='w-full sticky top-0 right-0'>
                    <TestTopbar />
                </div>
                <div>
                    <Question />
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <TestBottombar />
                </div>
            </div>
            <div className='w-1/3 sticky top-0 right-0 h-screen border-l-2 border-r-2'>
                <TestSidebar />
            </div>
        </div>
    )
}

export default Test