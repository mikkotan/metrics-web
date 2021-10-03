import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'

import ErrorMessage from '../ErrorMessage'

const AddMetricFormModal = ({
  visible,
  onCancel,
  onSubmit,
  confirmLoading
}) => {
  const {
    handleSubmit,
    reset,
    clearErrors,
    control,
    formState: { errors }
  } = useForm()

  const handleSave = data => {
    onSubmit(data)
    reset() && clearErrors()
  }

  return (
    <Modal
      title="Add New Metric"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit(handleSave)}
      confirmLoading={confirmLoading}
      okText="Save"
    >
      <Form.Item label="Name">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              placeholder="eg. Retention Rate, Performance, etc."
              {...field}
            />
          )}
          rules={{ required: true }}
        />
        {errors?.name && (
          <ErrorMessage>* Name is required.</ErrorMessage>
        )}
      </Form.Item>
    </Modal>
  )
}

AddMetricFormModal.propTypes = {
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AddMetricFormModal.defaultProps = {
  visible: false
}

export default AddMetricFormModal