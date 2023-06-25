import { FC, useEffect } from 'react'
import { Layout, message } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Login } from './views/Login'
import { PrivateLayout } from './components/PrivateLayout'
import httpClient from './http-client'
import { SERVER_ADDRESS, STRAPI_ADDRESS } from './http-client/constants'
import appState from './store/appState'
import axios from 'axios'
import { Home } from './views/Home'
import { useQuery } from 'react-query'

const AppRouter: FC = () => {
  const { data, error: dataError } = useQuery(
    'data',
    async () => (await axios.get<any>(`${SERVER_ADDRESS}/data`)).data,
    { refetchInterval: 4000, refetchIntervalInBackground: true },
  )

  useEffect(() => {
    if (data) {
      appState.setData(data)
    }
  }, [data])

  useEffect(() => {
    if (dataError) {
      // message.error('Произошла ошибка при загрузке данных')
    }
  }, [dataError])

  useEffect(() => {
    ;(async () => {
      try {
        const userResponse = await httpClient.get(
          `${STRAPI_ADDRESS}/api/users/me/?populate=role`,
        )

        if (userResponse.status === 200) {
          appState.setUser(userResponse.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem('access_token')
          }
        }
      }

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
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default AppRouter
