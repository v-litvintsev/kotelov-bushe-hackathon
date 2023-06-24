import { Button, Card, Radio, RadioChangeEvent, message } from 'antd'
import { FC, useEffect, useState } from 'react'
import appState from '../store/appState'
import { observer } from 'mobx-react-lite'
import { useMutation } from 'react-query'
import axios from 'axios'
import { SERVER_ADDRESS } from '../http-client/constants'

type TOrderState = 0 | 1 | 2 | 3

const CardItem: FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div>
      <span style={{ fontSize: 12 }}>{label}:</span>
      <div>{value}</div>
    </div>
  )
}

export const HomeOrdersList: FC = observer(() => {
  const [activeTab, setActiveTab] = useState<TOrderState>(0)
  const [, setPreviousReceivedOrdersCount] = useState(Infinity)

  const updateOrderMutation = useMutation(
    async (updatedOrder: any) =>
      (
        await axios.post(`${SERVER_ADDRESS}/order/update`, {
          ...updatedOrder,
        })
      ).data,
  )

  useEffect(() => {
    setPreviousReceivedOrdersCount((prevCount) => {
      const currentCount = appState.data.orders.filter(
        (item) => item.status === 0,
      ).length

      if (currentCount > prevCount) {
        message.info(`Новые заказы: +${currentCount - prevCount} `)
      }

      return currentCount
    })
    // eslint-disable-next-line
  }, [appState.data.orders.length])

  const handleTabChange = (e: RadioChangeEvent) => {
    setActiveTab(e.target.value)
  }

  useEffect(() => {
    if (updateOrderMutation.error) {
      message.error('Произошла ошибка при обновлении заказа')
    }
  }, [updateOrderMutation.error])

  return (
    <div>
      <div style={{ display: 'flex', gap: 40 }}>
        <h2>Заказы в работе</h2>
        <Radio.Group
          onChange={handleTabChange}
          value={activeTab}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value={0}>
            Ожидает сборки (
            {appState.data.orders.filter((item) => item.status === 0).length})
          </Radio.Button>
          <Radio.Button value={1}>
            Ожидает курьера (
            {appState.data.orders.filter((item) => item.status === 1).length})
          </Radio.Button>
          <Radio.Button value={2}>
            Ожидает доставки (
            {appState.data.orders.filter((item) => item.status === 2).length})
          </Radio.Button>
          <Radio.Button value={3}>
            Выполненный заказ (
            {appState.data.orders.filter((item) => item.status === 3).length})
          </Radio.Button>
        </Radio.Group>
        <Button disabled>Назначить вручную</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {appState.data.orders
          .filter((item) => item.status === activeTab)
          .map((item) => (
            <Card title={`Заказ № ${item.id}`} key={item.id}>
              <div style={{ width: '100%', display: 'flex', gap: 20 }}>
                <div style={{ width: '50%' }}>
                  <p>Доставить к {item.deliverTo}</p>
                  <div
                    style={{
                      width: '100%',
                      display: 'grid',
                      gridTemplate: 'repeat(2, 1fr) / repeat(4, 1fr)',
                      gap: 10,
                    }}
                  >
                    <CardItem label="Имя клиента" value={item.customer.name} />
                    <CardItem
                      label="Заказ создан"
                      value={item.timestamps.created}
                    />
                    <CardItem label="Имя курьера" value={item.executor.name} />
                    <CardItem label="Адрес хаба" value={item.addresses.start} />
                    <CardItem
                      label="Номер клиента"
                      value={item.customer.phone}
                    />
                    <CardItem
                      label="Заказ завершён"
                      value={item.timestamps.completed}
                    />
                    <CardItem
                      label="Номер курьера"
                      value={item.executor.phone}
                    />
                    <CardItem
                      label="Адрес доставки"
                      value={item.addresses.finish}
                    />
                  </div>
                </div>
                <div style={{ width: '50%' }}>
                  <table style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <th colSpan={2}>Состав</th>
                        <th>Сумма</th>
                        <th>Вес</th>
                      </tr>
                      {item.content.map((product, index) => (
                        <tr key={index}>
                          <td>x{product.count}</td>
                          <td>{product.name}</td>
                          <td>{product.cost}₽</td>
                          <td>{product.weight}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={2}>Итого:</td>
                        <td>{item.totalCost}₽</td>
                        <td>{item.totalWeight}₽</td>
                      </tr>
                    </tbody>
                  </table>
                  {item.status !== 3 && (
                    <Button
                      type="primary"
                      style={{ width: '100%' }}
                      onClick={() => {
                        updateOrderMutation.mutate({
                          ...item,
                          status: item.status + 1,
                        })
                      }}
                    >
                      Перевести на следующий этап
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  )
})
