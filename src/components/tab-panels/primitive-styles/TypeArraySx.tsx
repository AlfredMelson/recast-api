import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import React from 'react'
import { BrandSwatch } from '../../../style'
import { ArrowDownIcon, ArrowRightIcon } from '../../icons'
import { IconButtonSxDataIcon } from '../../mui'
import { ApiArrayAlias, ApiValueProp, getType } from '../data-types/typeAliases'
import { SortByType } from '.'

export const ArrayTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeArray',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

const ArraySpanStyle = styled('span', {
  name: 'ArraySpan',
  slot: 'style'
})(({ theme }) => ({
  ...theme.typography.code,
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[400] : BrandSwatch.Light.Grey[600]
}))

type ArraySpanSxAlias = {
  text: Array<ApiValueProp>
}
//
// FIX
export function ArraySpanSx({ text }: ArraySpanSxAlias) {
  return <ArraySpanStyle>&#47;&#47;&nbsp;{text}</ArraySpanStyle>
}

export default function TypeArraySx({ value, dataKey }: ApiArrayAlias) {
  const [childView, setChildView] = React.useState(true)

  const renderArrayContent = () => {
    return value.map((v: any, index: number) => {
      const type: string = getType(v)
      return <SortByType index={index} key={index} dataValue={v} dataType={type} dataKey={index} />
    })
  }

  const renderContent = () => {
    if (childView) {
      return (
        <Stack direction='row'>
          <IconButtonSxDataIcon
            onClick={() => {
              setChildView(!childView)
            }}>
            <ArrowRightIcon />
          </IconButtonSxDataIcon>
          <ArrayTypography>
            {dataKey}&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
            <span>
              &#47;&#47;&nbsp;
              {childView && value ? Object.keys(value).length : ''}&nbsp;
              {Object.keys(value).length === 1 ? 'item' : 'items'}
            </span>
          </ArrayTypography>
        </Stack>
      )
    }

    return (
      <Stack direction='row' alignItems='flex-start'>
        <IconButtonSxDataIcon
          onClick={() => {
            setChildView(!childView)
          }}>
          <ArrowDownIcon />
        </IconButtonSxDataIcon>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }

  return renderContent()
}
