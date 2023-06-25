import { FC, useEffect } from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Login } from './views/Login'
import { PrivateLayout } from './components/PrivateLayout'
import httpClient from './http-client'
import { STRAPI_ADDRESS } from './http-client/constants'
import appState from './store/appState'
import { OrdersList } from './views/OrdersList'
import { OrderDetail } from './views/OrderDetail'
import Homepage from './components/Homepage/Homepage'


const AppRouter: FC = () => {
  useEffect(() => {
    ;(async () => {
      try {
        const userResponse = await httpClient.get(
          `${STRAPI_ADDRESS}/api/users/me/?populate=role`,
        )

        if (userResponse.status === 200) {
          appState.setUser(userResponse.data)
        }

        if (userResponse.status === 401) {
          localStorage.removeItem('access_token')
        }
      } catch {}

      appState.setIsUserLoaded(true)
    })()
  }, [])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/" element={<OrdersList />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/homepage/" element={<Homepage />} /> */}
          
        </Route>
      </Routes>
    </Layout>
  )
}

export default AppRouter
