import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Space, Table, Row, Col } from 'antd'

import DeleteButton from '../DeleteButton'

const Container = styled.div`
  padding: 16px;
`

const EndColumn = styled(Col)`
  text-align: end;
`

const MetricValuesTable = ({ values, onDelete, actionButton }) => {
  const columns = [
    {
      title: 'Timestamp',
      dataIndex: 'formattedTimestamp',
      key: 'formattedTimestamp'
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <DeleteButton onDelete={() => onDelete(record.id)} />
        </Space>
      )
    }
  ]

  const dataSource = useMemo(
    () => (
      values.map(value => (
        {
          ...value,
          key: value.id
        }
      ))
    ),
    [values]
  )

  return (
    <Container>
      <Row>
        <Col span={16}>
          <Typography.Title level={5}>Metric Data</Typography.Title>
        </Col>
        <EndColumn span={8}>
          {actionButton}
        </EndColumn>
      </Row>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </Container>
  )
}

MetricValuesTable.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  actionButton: PropTypes.node
}

export default MetricValuesTable
