import { Link, useParams } from 'react-router-dom'
import { clients } from '@/data/clients'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { reviewQueueReturns } from '@/data/returns'
import { reviewWorkspaceRoute } from '@/utils/routes'
export function ClientDetailPage() {
  const { id } = useParams()
  const client = clients.find((item) => item.id === id) ?? clients[0]
  const rows = reviewQueueReturns.filter((row) => row.clientName === client.name)
  return (
    <div className="space-y-8">
      <header>
        <Link className="text-body text-primary hover:underline" to="/clients">
          Back to Clients
        </Link>
        <h1 className="mt-3 text-h1">{client.name}</h1>
      </header>
      <Card>
        <CardHeader>
          <h2 className="text-h3">Client Information</h2>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-body-sm text-muted-foreground">Industry</dt>
              <dd>{client.industry}</dd>
            </div>
            <div>
              <dt className="text-body-sm text-muted-foreground">Tax Year</dt>
              <dd>{client.taxYear}</dd>
            </div>
            <div>
              <dt className="text-body-sm text-muted-foreground">Assigned Reviewer</dt>
              <dd>{client.reviewer}</dd>
            </div>
            <div>
              <dt className="text-body-sm text-muted-foreground">Risk Level</dt>
              <dd>
                <Badge>{client.risk}</Badge>
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-h3">Returns</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th>Return ID</th>
                  <th>Status</th>
                  <th>AI Confidence</th>
                  <th>Last Reviewed</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="py-3">{row.id}</td>
                    <td>{row.status}</td>
                    <td>{row.aiConfidence}%</td>
                    <td>Today</td>
                    <td>
                      <Button asChild variant="link" size="sm">
                        <Link to={reviewWorkspaceRoute(row.id)}>Open Review</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
