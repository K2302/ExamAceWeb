import { motion } from "framer-motion";
import { useMemo } from "react";
import images from "../../constants/images";
import DataTable from "../../components/table";
import RankCard from "../../components/rank";

const LeaderBoardDashboard = () => {
    const PreviousData = useMemo(
        () => [
            {
                id: 2,
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
                participants: 1234
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
                <div className="px-1.5 py-0.5 w-32 bg-rose-300 rounded">
                    <div className="text-sm text-white font-extrabold text-center  p-1.5 bg-rose-500 rounded">Cracker 12</div>
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