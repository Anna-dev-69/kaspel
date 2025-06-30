import { Button, DatePicker, Form, FormInstance, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";

interface ModalComponentProps {
  isModalOpen: boolean;
  onModalOpen: (value: boolean) => void;
  form: FormInstance;
  onFinish: (values: any) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  return (
    <Modal
      title="Добавить запись"
      open={props.isModalOpen}
      onCancel={() => props.onModalOpen(false)}
      footer={null}
    >
      <Form form={props.form} onFinish={props.onFinish}>
        <FormItem
          name="name"
          label="Имя"
          rules={[
            { required: true, message: "Введите имя" },
            { pattern: /^[A-Za-zА-Яа-яЁё\s-]+$/ },
          ]}
        >
          <Input type="text"></Input>
        </FormItem>
        <FormItem
          name="date"
          label="Дата"
          rules={[{ required: true, message: "Введите дату" }]}
        >
          <DatePicker format="DD.MM.YYYY" />
        </FormItem>
        <FormItem
          name="numberValue"
          label="Число"
          rules={[{ required: true, message: "Введите числовое значение" }]}
        >
          <Input type="number"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Сохранить данные
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default React.memo(ModalComponent);
