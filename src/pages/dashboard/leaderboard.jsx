import { motion } from "framer-motion";
import { useMemo } from "react";
import images from "../../constants/images";
import DataTable from "../../components/table";

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
        <div className="flex flex-col justify-center items-center">
            <div>
                leaderboard
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