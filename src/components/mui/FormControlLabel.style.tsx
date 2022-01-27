import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { useRadioGroup } from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

interface FormControlLabelStyleProps extends FormControlLabelProps {
  checked: boolean
}

const FormControlLabelStyle = styled(
  (props: FormControlLabelStyleProps) => <FormControlLabel {...props} />,
  { name: 'FormControlLabel', slot: 'style' }
)(({ theme, checked }) => ({
  paddingRight: theme.spacing(20),
  '&:last-child': {
    paddingRight: theme.spacing(0)
  },
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
    cursor: 'default'
  }
}))

export function FormControlLabelSx(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup()

  let checked = false

  if (radioGroup) {
    checked = radioGroup.value === props.value
  }

  return <FormControlLabelStyle checked={checked} {...props} />
}
