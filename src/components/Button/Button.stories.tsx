import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button1, ButtonProps } from './Button'
import { Button } from '@material-ui/core'

export default {
  title: 'Button',
  component: Button1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

//to show controls in storybook
const Template: Story<ButtonProps> = (args) => <Button1 {...args} />

//2 states of button first deisgned by me second imported from materialui library
export const First = Template.bind({})
First.args = {
  label: 'Button',
  size:'large',
}

export const Second = () => (
  <Button variant="contained" color="primary">Button</Button>
)


