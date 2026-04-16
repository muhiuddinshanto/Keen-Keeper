'use client'

import { useEffect, useState } from "react"; // useEffect যোগ করা হয়েছে
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const StatsPage = () => {
    // ডেটার জন্য স্টেট ব্যবহার
    const [data, setData] = useState([]);

    useEffect(() => {
        // উইন্ডো লোড হওয়ার পর ডেটা নিয়ে আসা
        const lodedData = JSON.parse(sessionStorage.getItem('interaction')) || [];
        const textLength = lodedData.filter(text => text.type == 'Text').length;
        const callLength = lodedData.filter(text => text.type == 'Call').length;
        const videoLength = lodedData.filter(text => text.type == 'Video').length;

        setData([
            { name: 'Text', value: textLength, fill: '#244d3f' },
            { name: 'Call', value: callLength, fill: '#7f37f5' },
            { name: 'Video', value: videoLength, fill: '#37a163' },
        ]);
    }, []);

    return (
        <div className='max-w-6xl w-full mx-auto py-10 md:py-20 px-4 sm:px-5'>
            <div> 
                <h2 className='text-3xl md:text-5xl font-bold mb-10'>Friendship Analytics</h2>
            </div>
            
            <div className="shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] bg-white rounded-xl p-6 md:p-10 space-y-5">
                <div>
                    <p className="text-xl font-medium">By Interaction Type</p>
                </div>
                
                {/* রেসপনসিভ হাইট */}
                <div className="flex justify-center h-[300px] md:h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="80%" 
                                outerRadius="100%"
                                cornerRadius={10}
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend verticalAlign="bottom" height={36}/>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;