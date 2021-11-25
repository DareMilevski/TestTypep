import React from 'react'
import Buton from './Buton'

export default {
  title: 'Form/Buton',
  component: Buton,
  args: {
    children: 'Buton'
  }
}

export const Primary = () => <Buton variant='primary'>Primary</Buton>
export const Secondary = () => <Buton variant='secondary'>Secondary</Buton>
export const Success = () => <Buton variant='success'>Success</Buton>
export const Danger = () => <Buton variant='danger'>Danger</Buton>

const Template = args => <Buton {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  // children: 'Primary Args',
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
}