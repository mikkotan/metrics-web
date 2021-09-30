import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import AddMetricValueFormModal from '../../components/AddMetricValueFormModal'
import { useCreateMetricValue } from '../../hooks/useCreateMetricValue'

const AddMetricValue = ({ metricId }) => {
  const createMetricValue = useCreateMetricValue(metricId)
  const [visible, setVisible] = useState(false)

  const handleSubmit = ({ value, timestamp }) => {
    createMetricValue.mutate({
      value,
      timestamp: timestamp.format()
    })

    setVisible(false)
  }

  return (
    <>
      <AddMetricValueFormModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onSubmit={handleSubmit}
        confirmLoading={false}
      />
      <Button
        type="primary"
        size="small"
        onClick={() => setVisible(true)}
      >
        Add Metric Value
      </Button>
    </>
  )
}

AddMetricValue.propTypes = {
  metricId: PropTypes.string.isRequired,
}

export default AddMetricValue
