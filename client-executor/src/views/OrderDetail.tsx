import { Content } from 'antd/lib/layout/layout'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { STRAPI_ADDRESS } from '../http-client/constants'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const OrderDetail: FC = () => {
  const params = useParams()
  const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      try {
        const orderRequest = await axios.get(
          `${STRAPI_ADDRESS}/api/orders/${params.id}/?populate=*`,
        )

        setOrder(orderRequest.data)
      } catch {
        navigate('/')
      }
    })()
  }, [params, navigate])

  return (
    <Content style={{ padding: '20px 50px' }}>
      <Link to={'/'}>
        <Button>
          <ArrowLeftOutlined />
          Назад
        </Button>
      </Link>
      <div>{JSON.stringify(order, null, 2)}</div>
    </Content>
  )
}
