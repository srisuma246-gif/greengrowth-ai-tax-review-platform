import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { memo } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { ReviewerWorkloadItem, RiskDistributionItem } from '@/features/dashboard/types'
const chartTokens = {
  error: 'hsl(var(--error))',
  warning: 'hsl(var(--warning))',
  success: 'hsl(var(--success))',
}
export const RiskDistributionCard = memo(function RiskDistributionCard({
  data,
}: {
  data: RiskDistributionItem[]
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Risk Distribution</h2>
      </CardHeader>
      <CardContent>
        <div className="h-64" role="img" aria-label="Risk distribution chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={84}
                paddingAngle={3}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={chartTokens[entry.tone]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
})
export const WorkloadOverview = memo(function WorkloadOverview({
  data,
}: {
  data: ReviewerWorkloadItem[]
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Reviewer Workload</h2>
      </CardHeader>
      <CardContent>
        <div className="h-64" role="img" aria-label="Reviewer workload chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="assigned"
                stackId="workload"
                fill="hsl(var(--primary))"
                radius={[3, 3, 0, 0]}
              />
              <Bar dataKey="completed" stackId="workload" fill="hsl(var(--success))" />
              <Bar
                dataKey="pending"
                stackId="workload"
                fill="hsl(var(--warning))"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
})
