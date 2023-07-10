/**
 * common/atoms/InputForm
 * Storybook
 * @package Components
 */
import type { Meta, StoryObj } from '@storybook/react'
import { InputForm, InputFormProps } from '@/components/common/atoms/InputForm'

const meta: Meta<typeof InputForm> = {
  component: InputForm,
}

export default meta
type Story = StoryObj<typeof InputForm>

/* templates */
export const Primary: Story = {
  render: () => <InputForm text="" placeholder="検索キーワード" />,
}
