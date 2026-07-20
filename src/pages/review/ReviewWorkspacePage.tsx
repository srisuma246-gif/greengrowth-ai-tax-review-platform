import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReviewWorkspaceSkeleton } from '@/components/skeletons'
import {
  aiLimitations,
  alternativeRecommendation,
  confidenceFactors,
  documents,
  evidence,
  evidenceDetails,
  fieldMappings,
  recommendation,
  recommendationTimeline,
  reviewSummary,
} from '@/data/review'
import {
  AILimitationsCard,
  AIRecommendationPanel,
  AlternativeRecommendationCard,
  ConfidenceFactorsCard,
  DecisionBanner,
  EvidenceDrawer,
  FieldTraceabilityCard,
  RecommendationTimeline,
  ReturnSummaryCard,
  ReviewerDecisionCard,
  ReviewWorkspaceHeader,
  SourceDocumentsCard,
} from '@/features/review'
import type { SavedReviewerDecision } from '@/features/review/types'
import { fadeIn } from '@/utils/motion'
import { useLoading } from '@/hooks/useLoading'

export function ReviewWorkspacePage() {
  const reduceMotion = useReducedMotion()
  const { returnId } = useParams<{ returnId: string }>()
  const [evidenceId, setEvidenceId] = useState<string | undefined>()
  const [reviewerDecision, setReviewerDecision] = useState<SavedReviewerDecision | undefined>()
  const { isLoading: workspaceLoading } = useLoading(500)
  const { isLoading: evidenceLoading, run: loadEvidence } = useLoading()
  const displayId = returnId ?? reviewSummary.returnId
  const selectedEvidence = useMemo(
    () => evidenceDetails.find((detail) => detail.id === evidenceId),
    [evidenceId],
  )
  const handleViewEvidence = (id: string) => {
    setEvidenceId(id)
    void loadEvidence(
      () =>
        new Promise<void>((resolve) => {
          window.setTimeout(resolve, 450)
        }),
    )
  }
  return (
    <motion.div
      variants={fadeIn}
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'visible'}
      className="space-y-8"
    >
      {workspaceLoading ? (
        <ReviewWorkspaceSkeleton />
      ) : (
        <>
          <ReviewWorkspaceHeader summary={reviewSummary} returnId={displayId} />
          {reviewerDecision && <DecisionBanner decision={reviewerDecision} />}
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,65fr)_minmax(18rem,35fr)]">
            <section className="space-y-6">
              <ReturnSummaryCard summary={reviewSummary} />
              <SourceDocumentsCard documents={documents} />
              <FieldTraceabilityCard mappings={fieldMappings} onViewEvidence={handleViewEvidence} />
              <ReviewerDecisionCard onSave={setReviewerDecision} />
            </section>
            <aside className="space-y-6">
              <AIRecommendationPanel recommendation={recommendation} evidence={evidence} />
              <AlternativeRecommendationCard recommendation={alternativeRecommendation} />
              <ConfidenceFactorsCard
                factors={confidenceFactors}
                overallConfidence={recommendation.confidence}
              />
              <RecommendationTimeline events={recommendationTimeline} />
              <AILimitationsCard limitations={aiLimitations} />
            </aside>
          </div>
          <EvidenceDrawer
            open={Boolean(evidenceId)}
            onOpenChange={(open) => !open && setEvidenceId(undefined)}
            detail={selectedEvidence}
            loading={evidenceLoading}
          />
        </>
      )}
    </motion.div>
  )
}
