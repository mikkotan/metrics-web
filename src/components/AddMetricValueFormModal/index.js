import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, InputNumber, DatePicker } from 'antd'
import { useForm, Controller } from 'react-hook-form'

import ErrorMessage from '../ErrorMessage'

const AddMetricValueFormModal = ({
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
  } = useForm({
    defaultValues: {
      value: 0,
      timestamp: ''
    }
  })

  const handleSave = data => {
    onSubmit(data)
    reset() && clearErrors()
  }

  return (
    <Modal
      title="Add Metric Value"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit(handleSave)}
      confirmLoading={confirmLoading}
      okText="Save"
    >
      <Form.Item label="Value">
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
            <InputNumber {...field} />
          )}
          rules={{ required: true }}
        />
        {errors?.value && (
          <ErrorMessage>* Value is required</ErrorMessage>
        )}
      </Form.Item>
      <Form.Item label="Timestamp">
        <Controller
          control={control}
          name="timestamp"
          render={({ field }) => (
            <DatePicker
              showTime
              value={field.value}
              onOk={value => field.onChange(value)}
            />
          )}
          rules={{ required: true }}
        />
        {errors?.timestamp && (
          <ErrorMessage>* Timestamp is required.</ErrorMessage>
        )}
      </Form.Item>
    </Modal>
  )
}

AddMetricValueFormModal.propTypes = {
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AddMetricValueFormModal.defaultProps = {
  visible: false
}

export default AddMetricValueFormModal
