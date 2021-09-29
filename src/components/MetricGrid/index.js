import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

const MetricGrid = ({ children, columns }) => {
  const colSpan = 24 / columns

  const gridChildren = children.reduce((grid, item, index) => {
    if (index % columns === 0) {
      return [...grid, [item]]
    } else {
      const lastRow = grid[grid.length - 1]
      grid[grid.length - 1] = [...lastRow, item]
      return grid
    }
  }, [])

  return (
    <>
      {gridChildren.map((row, idx) => (
        <Row key={idx}>
          {row.map((child, idxx) => (
            <Col span={colSpan} key={idxx}>
              {child}
            </Col>
          ))}
        </Row>
      ))}
    </>
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
