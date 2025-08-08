import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  { name: 'Jan', revenue: 6500 },
  { name: 'Feb', revenue: 5900 },
  { name: 'Mar', revenue: 8000 },
  { name: 'Apr', revenue: 8100 },
  { name: 'May', revenue: 5600 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7200 },
];

export const EmployeeTable = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={chartData} margin={{ top: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
