import { CartesianGrid,  Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const chartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
];

const FilterControls = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              {/* add the background grid lines */}
                <CartesianGrid strokeDasharray="3 3" />  
                <XAxis dataKey="name" />
                <YAxis />
                {/* tooltip shows the data at the end and legend components */}
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="uv" stroke='#fff000' activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="pv" stroke='#ff00ff' activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="amt" stroke='#53a2eb' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FilterControls
