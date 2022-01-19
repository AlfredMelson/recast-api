import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { useRadioGroup } from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'

interface FormControlLabelStyleProps extends FormControlLabelProps {
  checked: boolean
}

const FormControlLabelStyle = styled((props: FormControlLabelStyleProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.text.primary
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
