import React from 'react'
import { html } from 'react-strict-dom'
import { styles } from './FieldError.styles'
import { ErrorFilled } from '../../icons'
import { FieldErrorProps } from './types'

export const FieldError = ({ children, id }: FieldErrorProps) => {
  return (
    <html.div style={styles.root}>
      <html.span style={[styles.icon]} aria-hidden={true}>
        <ErrorFilled />
      </html.span>
      <html.span id={id} style={styles.text}>
        {children}
      </html.span>
    </html.div>
  )
}

FieldError.displayName = 'FieldError'
