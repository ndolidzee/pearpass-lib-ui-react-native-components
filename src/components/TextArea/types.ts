import React from 'react'
import { html } from 'react-strict-dom'

type HtmlTextareaProps = React.ComponentProps<typeof html.textarea>

export type TextAreaProps = Omit<HtmlTextareaProps, 'onChange' | 'style'> & {
  label?: string
  error?: string
  disabled?: boolean
  onChange?: (value: string) => void
  testID?: string
}
