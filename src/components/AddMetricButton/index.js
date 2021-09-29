import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Card from '../Card'

const Container = styled(Card)`
  height: 498px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledIcon = styled(PlusOutlined)`
  color: grey;
  margin-right: 8px;
`

const StyledText = styled(Typography.Text)`
  color: grey;
`

const AddMetricButton = ({ onClick }) => {
  return (
    <Container onClick={onClick} >
      <StyledIcon />
      <StyledText>Add new Metric</StyledText>
    </Container>
  )
}

AddMetricButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddMetricButton
