import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import { Textarea } from '@/components/ui/FormControls'
import type { SavedReviewerDecision } from '@/features/review/types'
export function ReviewerDecisionCard({
  onSave,
}: {
  onSave: (decision: SavedReviewerDecision) => void
}) {
  const [selection, setSelection] = useState<'accept' | 'override'>('accept')
  const [reason, setReason] = useState('')
  const isOverride = selection === 'override'
  const canSave = !isOverride || reason.trim().length >= 10
  useEffect(() => {
    if (isOverride) document.getElementById('override-reason')?.focus()
  }, [isOverride])
  const save = () => {
    if (!canSave) {
      document.getElementById('override-reason')?.focus()
      return
    }
    onSave({
      decision: isOverride ? 'overridden' : 'accepted',
      reason: isOverride ? reason.trim() : undefined,
      savedAt: new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(
        new Date(),
      ),
    })
  }
  const cancel = () => {
    setSelection('accept')
    setReason('')
  }
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Reviewer Decision</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <fieldset className="space-y-3">
          <legend className="sr-only">Recommendation decision</legend>
          <label className="flex cursor-pointer items-center gap-3 text-body">
            <input
              type="radio"
              name="reviewer-decision"
              checked={selection === 'accept'}
              onChange={() => setSelection('accept')}
            />
            Accept AI Recommendation
          </label>
          <label className="flex cursor-pointer items-center gap-3 text-body">
            <input
              type="radio"
              name="reviewer-decision"
              checked={selection === 'override'}
              onChange={() => setSelection('override')}
            />
            Override Recommendation
          </label>
        </fieldset>
        {isOverride && (
          <div className="space-y-2">
            <label htmlFor="override-reason" className="text-label">
              Reason for Override
            </label>
            <Textarea
              id="override-reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              aria-describedby="override-help override-error"
              aria-required="true"
              aria-invalid={reason.length > 0 && reason.trim().length < 10}
            />
            <p id="override-help" className="text-body-sm text-muted-foreground">
              Minimum 10 characters.
            </p>
            {reason.length > 0 && reason.trim().length < 10 && (
              <p id="override-error" role="alert" className="text-body-sm text-error">
                Provide at least 10 characters to save an override.
              </p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="gap-2">
        <Button onClick={save} disabled={!canSave}>
          Save Decision
        </Button>
        <Button variant="ghost" onClick={cancel}>
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
