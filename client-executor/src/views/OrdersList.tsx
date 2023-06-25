import { message } from 'antd'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import appState from '../store/appState'
import { STRAPI_ADDRESS } from '../http-client/constants'
import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export const OrdersList: FC = observer(() => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const userRole = appState.user?.role.name
    const userId = appState.user?.id

    ;(async () => {
      try {
        if (userRole === 'Executor' && userId) {
          const ordersRequest = await axios.get(
            `${STRAPI_ADDRESS}/api/orders/?populate=*&sort[0]=createdAt&filters[executor][id][$eq]=${userId}`,
          )

          setOrders(ordersRequest.data.data)
        }

        if (userRole === 'Admin') {
          const ordersRequest = await axios.get(
            `${STRAPI_ADDRESS}/api/orders/?populate=*&sort[0]=createdAt`,
          )

          setOrders(ordersRequest.data.data)
        }
      } catch {
        message.error('Произошла ошибка при загрузке данных', 3)
      }
    })()
    // eslint-disable-next-line
  }, [appState.user?.id, appState.user?.role.name])

  const handleRowClickClosure = (id: string) => () => {
    navigate(`/order/${id}`)
  }

  return (
    <Content style={{ padding: '20px 50px' }}>
      <div style={{ overflowX: 'scroll' }}>
        <table className="list-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Статус</th>
              {appState.user?.role.name === 'Admin' && <th>Исполнитель</th>}
              <th>Пункт отправления</th>
              <th>Пункт доставки</th>
            </tr>
            {orders.length > 0 &&
              orders.map(
                ({
                  id,
                  attributes: {
                    status,
                    executor: {
                      data: { id: executorId },
                    },
                    startAddress,
                    finishAddress,
                  },
                }) => (
                  <tr key={id} onClick={handleRowClickClosure(id)}>
                    <td>{id}</td>
                    <td>{status}</td>
                    {appState.user?.role.name === 'Admin' && (
                      <td>{executorId}</td>
                    )}
                    <td>{startAddress}</td>
                    <td>{finishAddress}</td>
                  </tr>
                ),
              )}
          </tbody>
        </table>
      </div>
    </Content>
  )
})
