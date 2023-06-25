import { makeAutoObservable } from 'mobx'

export interface IUser {
  id: number
  username: string
  email: string
  role: {
    name: string
  }
}

class AppState {
  user: IUser | null = null
  isUserLoaded = false
  data = {
    currentCouriersTraffic: {
      percentage: 46,
      maxCount: 30,
      currentCount: 14,
    },
    orders: Array(30)
      .fill(null)
      .map((_, index) => ({
        id: index,
        status:
          index >= 0 && index < 4
            ? 0
            : index >= 4 && index < 10
            ? 1
            : index >= 10 && index < 19
            ? 2
            : 3,
        deliverTo: '13:30',
        totalCost: 5368,
        totalWeight: 1.2,
        customer: {
          name: 'Михаил Михаленко',
          phone: '+7 999 999 99 99',
        },
        executor: {
          name: 'Влад Вадим',
          phone: '+7 999 999 99 99',
        },
        timestamps: {
          created: '12:34',
          completed: '-',
        },
        addresses: {
          start: 'ул. Льва Толского 1-3',
          finish: 'ул. Пушкина, 47',
        },
        content: [
          {
            id: 1,
            name: 'Тушёный тунец под соусом дор-блю',
            count: 1,
            cost: 966,
            weight: 0.4,
          },
          {
            id: 2,
            name: 'Капучино на коровьем молоке',
            count: 3,
            cost: 299,
            weight: 0.4,
          },
          {
            id: 3,
            name: 'Вензеля с малиной',
            count: 2,
            cost: 175,
            weight: 0.4,
          },
        ],
      })),
    couriers: [
      {
        id: 0,
        name: 'Влад Вадимов',
        phone: '+7 999 389 79 74',
        status: 'на доставке',
        orderId: 0,
      },
      {
        id: 1,
        name: 'Степан Костыркин',
        phone: '+7 938 490 38 47',
        status: 'на доставке',
        orderId: 1,
      },
      {
        id: 2,
        name: 'Никита Нова',
        phone: '+7 920 849 48 38',
        status: 'на хабе',
        orderId: 2,
      },
      {
        id: 3,
        name: 'Виктор Рындин',
        phone: '+7 920 820 48 93',
        status: 'на доставке',
        orderId: 3,
      },
      {
        id: 4,
        name: 'Константин Лобанов',
        phone: '+7 928 848 84 39',
        status: 'на доставке',
        orderId: 4,
      },
      {
        id: 5,
        name: 'Женя Бондарь',
        phone: '+7 928 848 84 39',
        status: 'на доставке',
        orderId: 5,
      },
    ],
  }

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: IUser | null) {
    this.user = user
  }

  setIsUserLoaded(isUserLoaded: boolean) {
    this.isUserLoaded = isUserLoaded
  }

  setData(data: any) {
    this.data = data
  }
}

export default new AppState()
