import React, { useState } from 'react'

import AddMetricButton from '../../components/AddMetricButton'
import AddMetricFormModal from '../../components/AddMetricFormModal'
import { useCreateMetric } from '../../hooks/useCreateMetric'

const AddMetric = () => {
  const createMetric = useCreateMetric()
  const [visible, setVisible] = useState(false)

  const handleSubmit = ({ name }) => {
    createMetric.mutate({ name })
    setVisible(false)
  }

  return (
    <>
      <AddMetricFormModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onSubmit={handleSubmit}
        confirmLoading={createMetric.isLoading}
      />
      <AddMetricButton onClick={() => setVisible(true)}/>
    </>
  )
}

export default AddMetric
