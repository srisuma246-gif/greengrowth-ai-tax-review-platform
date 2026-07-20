import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { clients } from '@/data/clients'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Select } from '@/components/ui/FormControls'
import { SearchInput } from '@/components/ui/Input'
const riskStyle = {
  high: 'bg-error/15 text-error',
  medium: 'bg-warning/15 text-warning',
  low: 'bg-success/15 text-success',
}
export function ClientsPage() {
  const [search, setSearch] = useState('')
  const [risk, setRisk] = useState('all')
  const [reviewer, setReviewer] = useState('all')
  const [industry, setIndustry] = useState('all')
  const filtered = useMemo(
    () =>
      clients.filter((client) => {
        const q = search.toLowerCase()
        return (
          (!q ||
            [client.name, client.industry, client.reviewer].some((value) =>
              value.toLowerCase().includes(q),
            )) &&
          (risk === 'all' || client.risk === risk) &&
          (reviewer === 'all' || client.reviewer === reviewer) &&
          (industry === 'all' || client.industry === industry)
        )
      }),
    [search, risk, reviewer, industry],
  )
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-h1">Clients</h1>
        <p className="mt-1 text-body-lg text-muted-foreground">
          Manage client tax reviews and review assignments.
        </p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Active Clients', clients.length],
          ['Returns Under Review', 10],
          ['High Risk Clients', 1],
          ['Completed Reviews This Week', 31],
        ].map(([label, value]) => (
          <Card key={String(label)} variant="kpi">
            <CardContent>
              <p className="text-body-sm text-muted-foreground">{label}</p>
              <p className="mt-2 text-3xl font-semibold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-nowrap">
        <SearchInput
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search clients"
          placeholder="Search clients, industries, or reviewers"
          className="w-full sm:min-w-64 lg:flex-1"
        />
        {[
          [risk, setRisk, ['All risks', 'high', 'medium', 'low']],
          [reviewer, setReviewer, ['All reviewers', 'Sarah Chen', 'Marcus Lee', 'Priya Shah']],
          [
            industry,
            setIndustry,
            [
              'All industries',
              'Transportation',
              'Manufacturing',
              'Retail',
              'Healthcare',
              'Technology',
            ],
          ],
        ].map(([value, setter, options], index) => (
          <Select
            key={index}
            value={value as string}
            onChange={(event) => (setter as (value: string) => void)(event.target.value)}
            aria-label="Filter clients"
            className="w-full sm:w-44"
          >
            {(options as string[]).map((option) => (
              <option key={option} value={option.startsWith('All') ? 'all' : option}>
                {option}
              </option>
            ))}
          </Select>
        ))}
      </div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((client) => (
          <Card key={client.id} variant="interactive">
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-h3">{client.name}</h2>
                  <p className="text-body-sm text-muted-foreground">{client.industry}</p>
                </div>
                <Badge className={riskStyle[client.risk]}>{client.risk} risk</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Avatar fallback={client.reviewer} size="xs" />
                <span className="text-body">{client.reviewer}</span>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-body-sm">
                <div>
                  <dt className="text-muted-foreground">Returns</dt>
                  <dd className="font-medium">{client.returns}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pending</dt>
                  <dd className="font-medium">{client.pending}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Completed</dt>
                  <dd className="font-medium">{client.completed}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">AI Confidence</dt>
                  <dd className="font-medium">{client.confidence}%</dd>
                </div>
              </dl>
              <p className="text-body-sm text-muted-foreground">
                Last activity {client.lastActivity}
              </p>
              <Button asChild fullWidth>
                <Link to={`/clients/${client.id}`}>View Returns</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
