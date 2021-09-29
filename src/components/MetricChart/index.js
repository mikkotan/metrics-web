import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Row, Col, Empty } from 'antd'
import { Line } from '@ant-design/charts'

import Card from '../Card'

const LineWrapper = styled(Line)`
  margin-top: 24px;
`

const TextRightCol = styled(Col)`
  text-align: end;
`

const StyledEmpty = styled(Empty)`
  height: 354px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`

const MetricChart = ({ title, data, width, actionButtons }) => {
  const config = {
    data,
    width,
    xField: 'formattedTimestamp',
    yField: 'value'
  }

  return (
    <Card>
      <Row justify="space-between" align="middle">
        <Col span={20}>
          <Typography.Title level={5}>{title}</Typography.Title>
        </Col>
        <TextRightCol span={4}>
          {actionButtons}
        </TextRightCol>
      </Row>
      {data.length > 0 ? (
        <LineWrapper {...config} />
      ) : (
        <StyledEmpty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Card>
  )
}

MetricChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.number,
  actionButtons: PropTypes.node
}

MetricChart.defaultProps = {
  width: 240
}

export default MetricChart