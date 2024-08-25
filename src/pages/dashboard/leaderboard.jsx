import { motion } from "framer-motion";
import { useMemo } from "react";
import images from "../../constants/images";
import DataTable from "../../components/table";
import RankCard from "../../components/rank";

const LeaderBoardDashboard = () => {
    const PreviousData = useMemo(
        () => [
            {
                id: 20,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 12,
                    month: 12,
                    year: 12
                },
                participants: 2034
            },
            {
                id: 19,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 11,
                    month: 12,
                    year: 12
                },
                participants: 1934
            },
            {
                id: 18,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 10,
                    month: 12,
                    year: 12
                },
                participants: 1834
            },
            {
                id: 17,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 9,
                    month: 12,
                    year: 12
                },
                participants: 1734
            },
            {
                id: 16,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 8,
                    month: 12,
                    year: 12
                },
                participants: 1634
            },
            {
                id: 15,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 7,
                    month: 12,
                    year: 12
                },
                participants: 1534
            },
            {
                id: 14,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 6,
                    month: 12,
                    year: 12
                },
                participants: 1434
            },
            {
                id: 13,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 5,
                    month: 12,
                    year: 12
                },
                participants: 1334
            },
            {
                id: 12,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 4,
                    month: 12,
                    year: 12
                },
                participants: 1234
            },
            {
                id: 11,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 3,
                    month: 12,
                    year: 12
                },
                participants: 1134
            },
            {
                id: 10,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 2,
                    month: 12,
                    year: 12
                },
                participants: 1034
            },
            {
                id: 9,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 1,
                    month: 12,
                    year: 12
                },
                participants: 934
            },
            {
                id: 8,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 30,
                    month: 11,
                    year: 12
                },
                participants: 834
            },
            {
                id: 7,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 29,
                    month: 11,
                    year: 12
                },
                participants: 734
            },
            {
                id: 6,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 28,
                    month: 11,
                    year: 12
                },
                participants: 634
            },
            {
                id: 5,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 27,
                    month: 11,
                    year: 12
                },
                participants: 534
            },
            {
                id: 4,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 26,
                    month: 11,
                    year: 12
                },
                participants: 434
            },
            {
                id: 3,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 25,
                    month: 11,
                    year: 12
                },
                participants: 334
            },
            {
                id: 2,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 24,
                    month: 11,
                    year: 12
                },
                participants: 234
            },
            {
                id: 1,
                type: 'Mains',
                duration: {
                    hours: 1,
                    minutes: 30
                },
                questions: 65,
                date: {
                    day: 23,
                    month: 11,
                    year: 12
                },
                participants: 134
            }
        ],
        []
    );

    const PreviousColumn = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
                Cell: ({ value }) => `Cracker${value}`
            },
            { Header: 'Exam Type', accessor: 'type' },
            {
                Header: 'Duration',
                accessor: 'duration',
                Cell: ({ value }) => `${value.hours} hour${value.hours > 1 ? 's' : ''} ${value.minutes} minute${value.minutes > 1 ? 's' : ''}`
            },
            { Header: 'Questions', accessor: 'questions' },
            {
                Header: 'Date',
                accessor: 'date',
                Cell: ({ value }) => `${value.day}-${value.month}-${value.year}`
            },
            { Header: 'Participants', accessor: 'participants' },
        ],
        []
    );

    return (
        <div className="flex flex-col justify-center items-center py-5">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <div className="px-1.5 py-0.5 w-48 bg-rose-300 rounded">
                    <div className="text-sm text-white font-extrabold text-center  p-1.5 bg-rose-500 rounded">Cracker 20 Result</div>
                </div>
                <div className="w-full h-96 flex flex-row justify-center items-end">
                    <div className="w-1/4 h-5/6 rounded-l-lg bg-rose-100">
                        <RankCard />
                    </div>
                    <div className="w-1/4 h-full bg-rose-100 rounded-t-lg">
                        <RankCard />
                    </div>
                    <div className="w-1/4 h-4/6 bg-rose-100 rounded-r-lg">
                        <RankCard />
                    </div>
                </div>
                <div className="text-xs text-rose-100 font-extrabold rounded px-3 py-1.5 text-center bg-rose-500 flex flex-row justify-center items-center gap-1.5">
                    your rank was <span className="text-lg text-white">4</span> and ranked out of <span className="text-base text-white">1612</span> users
                </div>
            </div>
            <div className="w-full p-3">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold my-3">Upcoming...</div>
            </div>
            <div className="w-full p-3">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold my-3">Previous Live Mock Tests</div>
                <DataTable columns={PreviousColumn} data={PreviousData} rowClickPath="/user-details" />
            </div>
        </div>
    )
}

export default LeaderBoardDashboard