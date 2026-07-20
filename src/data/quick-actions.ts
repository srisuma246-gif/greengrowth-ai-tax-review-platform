import type { QuickAction } from '@/features/dashboard/types'
export const quickActions: QuickAction[] = [
  {
    id: 'start-review',
    title: 'Start Review',
    description: 'Open a tax return for review',
    iconName: 'startReview',
  },
  {
    id: 'upload-documents',
    title: 'Upload Documents',
    description: 'Add files to the workspace',
    iconName: 'upload',
  },
  {
    id: 'view-clients',
    title: 'View Clients',
    description: 'Browse client records',
    iconName: 'clients',
  },
  {
    id: 'ai-assistant',
    title: 'Open AI Assistant',
    description: 'Get review guidance',
    iconName: 'aiAssistant',
  },
]
