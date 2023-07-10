/**
 * common/atoms/PageTitle
 * Storybook
 * @package Components
 */

import type { Meta, StoryObj } from '@storybook/react'
import { PageTitle, PageTitleProps } from '@/components/common/atoms/PageTitle'

const meta: Meta<typeof PageTitle> = {
  component: PageTitle,
}

export default meta
type Story = StoryObj<typeof PageTitle>

/**
 * templates
 */
export const Primary: Story = {
  render: () => <PageTitle title="Node.js" />,
}
