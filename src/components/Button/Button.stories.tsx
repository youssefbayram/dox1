import React from 'react'
import { Button1} from './Button'
import { Button } from '@material-ui/core'

export default {
  title: 'Button',
  component: Button1,
}

//2 states of button first deisgned by me second imported from materialui library
export const First = () => (
  <Button1 label="Button">Button</Button1>
)

export const Second = () => (
  <Button variant="contained" color="primary">Button</Button>
)


