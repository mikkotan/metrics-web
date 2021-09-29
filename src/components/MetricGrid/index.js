import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

const MetricGrid = ({ children, columns }) => {
  const colSpan = 24 / columns

  return (
    <Row>
      {children.map((child, idx) => (
        <Col span={colSpan} key={idx}>
          {child}
        </Col>
      ))}
    </Row>
  )
}

MetricGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  columns: PropTypes.oneOf([2, 3, 4])
}

MetricGrid.defaultProps = {
  columns: 3
}

export default MetricGrid
