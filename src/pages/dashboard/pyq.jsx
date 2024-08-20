import { motion } from "framer-motion"
import images from "../../constants/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Years = [
    { year: '2000', id: '2000' },
    { year: '2001', id: '2001' },
    { year: '2002', id: '2002' },
    { year: '2003', id: '2003' },
    { year: '2004', id: '2004' },
    { year: '2005', id: '2005' },
    { year: '2006', id: '2006' },
    { year: '2007', id: '2007' },
    { year: '2008', id: '2008' },
    { year: '2009', id: '2009' },
    { year: '2010', id: '2010' },
    { year: '2011', id: '2011' },
    { year: '2012', id: '2012' },
    { year: '2013', id: '2013' },
    { year: '2014', id: '2014' },
    { year: '2015', id: '2015' },
    { year: '2016', id: '2016' },
    { year: '2017', id: '2017' },
    { year: '2018', id: '2018' },
    { year: '2019', id: '2019' },
    { year: '2020', id: '2020' },
    { year: '2021', id: '2021' },
    { year: '2022', id: '2022' },
    { year: '2023', id: '2023' },
    { year: '2024', id: '2024' }
];

const Attempt = [
    {
        number: 'Attempt 1',
        id: 1
    },
    {
        number: 'Attempt 2',
        id: 2
    },
    {
        number: 'Attempt 3',
        id: 3
    },
    {
        number: 'Attempt 4',
        id: 4
    },
];

const Data = [
    { date: '2024-01-24', shift: 'Shift 1', id: '2024-01-24-1', participants: 3567 },
    { date: '2024-01-24', shift: 'Shift 2', id: '2024-01-24-2', participants: 4123 },
    { date: '2024-01-25', shift: 'Shift 1', id: '2024-01-25-1', participants: 2789 },
    { date: '2024-01-25', shift: 'Shift 2', id: '2024-01-25-2', participants: 4892 },
    { date: '2024-01-26', shift: 'Shift 1', id: '2024-01-26-1', participants: 3045 },
    { date: '2024-01-26', shift: 'Shift 2', id: '2024-01-26-2', participants: 4721 },
    { date: '2024-01-27', shift: 'Shift 1', id: '2024-01-27-1', participants: 3998 },
    { date: '2024-01-27', shift: 'Shift 2', id: '2024-01-27-2', participants: 4210 },
    { date: '2024-01-28', shift: 'Shift 1', id: '2024-01-28-1', participants: 4502 },
]

const PYQ = () => {
    const navigate = useNavigate()

    const [selectedYear, setSelectedYear] = useState('2024')
    const [selectedAttempt, setSelectedAttempt] = useState(1)

    const FiteredData = Data.filter((item) => {
        const yearMatch = item.date.startsWith(selectedYear)
        // const attemptMatch = selectedAttempt === 1
        return yearMatch
    })


    const handleClick = (route) => {
        navigate(route)
    }

    return (
        <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-3">
                    <div className="text-md text-slate-500">course</div>
                    <div className="text-xl text-slate-300"> {`>`} </div>
                    <div className="text-md text-slate-500">pyq</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-3">
                    <div className="text-base text-slate-500 font-extrabold">Filter By : </div>
                    <div className="flex flex-row gap-3">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="p-1 w-32 bg-rose-50 focus:outline-none rounded text-sm text-slate-500">
                            {
                                Years.map((item) => (
                                    <option key={item.id} value={item.id}>{item.year}</option>
                                ))
                            }
                        </select>
                        <select
                            value={selectedAttempt}
                            onChange={(e) => setSelectedAttempt(e.target.value)}
                            className="p-1 w-32 bg-rose-50 focus:outline-none rounded text-sm text-slate-500">
                            {
                                Attempt.map((item) => (
                                    <option key={item.id} value={item.id}>{item.number}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3 mt-5">
                {
                    FiteredData.map((item) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
                            viewport={{ once: true }}
                            className="transition-transform duration-300 hover:scale-105 w-1/5 h-48 cursor-pointer flex flex-col gap-3 m-3"
                            key={item.id}
                            onClick={() => handleClick(`/test/${item.id}`)}
                        >
                            <img src={images.chemistry} alt="background" className="rounded w-full h-32" />
                            <div className="text-base font-bold text-slate-500">
                                {item.date}
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <div className="text-xs text-green-500 font-extrabold">{item.shift}</div>
                                    <img src={images.unlock} alt="free" className="w-3 h-3" />
                                </div>
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <img src={images.view} alt="views" className="w-3 h-3" />
                                    <div className="text-xs text-slate-500">{item.participants}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default PYQ