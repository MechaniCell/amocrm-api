<template>
  <a-card title="Пример api amocrm" :bordered="false" :loading="loading">
    <template #extra>
      <a-input v-model:value="queryValue" placeholder="Найти...">
        <template #suffix>
          <svg viewBox="64 64 896 896" focusable="false" fill="currentColor"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg>
        </template>
      </a-input>
    </template>
    <a-table :dataSource="data" :columns="columns" :pagination=false :row-key="(record: TleadPropTypes) => record.uid">
      <template #expandedRowRender="{ record }">
        <p class="nested-contact" style="margin: 0">
          <svg viewBox="64 64 896 896" width="1em" focusable="false" fill="gray"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" /></svg>
          {{ record.contacts[0].name }}
          <svg viewBox="64 64 896 896" width="1em" focusable="false" fill="rgb(24, 144, 255)"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" /></svg>
          <svg viewBox="0 0 100 100" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="10" x2="50" y2="90" stroke="rgb(80, 79, 79)" /></svg>
          <svg viewBox="64 64 896 896" width="1em" focusable="false" fill="rgb(24, 144, 255)"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" /></svg>
        </p>
      </template>
      <template #expandColumnTitle>
        <span></span>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="tsx" setup>
import { ref, shallowRef, watch, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'

type TleadPropTypes = {
  account_id: number
  closed_at: number | null
  closest_task_at: number | null
  contacts?: any
  created_at: number
  created_at_?: string
  created_by: number
  custom_fields_values: any
  group_id: number
  id: number
  is_deleted: boolean
  labor_cost: number | null
  loss_reason_id: number | null
  name: string
  pipeline_id: number
  price: number
  responsible_user_id: number
  score: number | null
  status_id: number
  tags?: any
  uid?: string
  updated_at: number
  updated_by: number
  user?: string[]
  _embedded: any
  _links: any
}

// const clientId = ''
// const state = 'test'
// const mode = 'popup'
 const adress = ''

// PROXY https://github.com/Freeboard/thingproxy
const proxy = 'https://thingproxy.freeboard.io/fetch/'
const url = `${proxy}https://${adress}.amocrm.ru`
const accessToken = ''

const method = ref('leads')
const queryValue = ref('')

const loading = ref(false)
const data = shallowRef(await getData('/api/v4/', 'leads', '?with=contacts'))
const pipelines = shallowRef(await getData('/api/v4/leads/', 'pipelines', ''))
const users = shallowRef(await getData('/api/v4/', 'users', ''))
const contacts = shallowRef(await getData('/api/v4/', 'contacts', ''))

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'uid',
    width: '24%'
  },
  {
    title: 'Бюджет',
    dataIndex: 'price',
    key: 'uid',
    width: '11%'
  },
  {
    title: 'Статус',
    dataIndex: 'tags',
    key: 'uid',
    width: '26%',
    customRender: (record: { value: string[][] }) => <a-tag v-for="tag in record.tags" key="tag" color={record.value[0][1]}>{record.value[0][0]}</a-tag>
  },
  {
    title: 'Ответственный',
    dataIndex: 'user',
    key: 'uid',
    width: '21%',
    customRender: (text: { value: string }) => <p class='contact'><svg viewBox="64 64 896 896" width="1em" focusable="false" fill="rgb(24, 144, 255)"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" /></svg>{ text.value }</p>
  },
  {
    title: 'Дата создания',
    dataIndex: 'created_at_',
    key: 'uid',
    width: '18%'
  }
]

// var popup;

// getAuth()

// function getAuth() {
//   popup = window.open(`https://www.amocrm.ru/oauth?client_id=${clientId}&state=${state}&mode=${mode}`, 'Allow Access', 'scrollbars, status, resizable, width=750, height=580');
// }

// window.addEventListener('message', updateAuthInfo)

// function updateAuthInfo(e) {
//   if (e.data.error !== undefined) {
//     console.log('Error - ' + e.data.error)
//   } else {
//     console.log('Authorization completed')
//   }

//   popup.close();
// }

watchEffect(() => { data.value = data.value.map((item: TleadPropTypes) => { return { ...item, created_at_: date(item.created_at), tags: pipelines.value[0]._embedded.statuses.filter((pipeline: { id: any; }) => pipeline.id === item.status_id).map((pipeline: { name: any; color: any; }) => [pipeline.name, pipeline.color]), user: users.value.filter((user: { id: any; }) => user.id === item.responsible_user_id).map((user: { name: any; }) => user.name), contacts: item._embedded.contacts.length !== 0 ? item._embedded.contacts.map((contact: any) => contact.id).slice(0, 1).map((item: any) => contacts.value.filter((contact: { id: any; }) => contact.id === item)).flat() : [{ name: '-' }], uid: uuidv4() } }) })

function date (createdAt: number) {
  const date = new Date(createdAt * 1000)
  const dayMonthYear = date.toLocaleDateString('ru-RU')
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  return `${dayMonthYear} ${hour}:${min}:${sec}`
}

watch(queryValue, async () => {
  if (queryValue.value.length > 3 || queryValue.value === '') {
    loading.value = true
    try {
      const response = await fetch(`${url}/api/v4/${method.value}?with=contacts&query=${queryValue.value}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (!response.ok) {
        const code = response.status
        const errors: { [key: number]: string } = {
          301: 'Moved permanently.',
          400: 'Wrong structure of the array of transmitted data, or invalid identifiers of custom fields.',
          401: 'Not Authorized. There is no account information on the server. You need to make a request to another server on the transmitted IP.',
          403: 'The account is blocked, for repeatedly exceeding the number of requests per second.',
          404: 'Not found.',
          500: 'Internal server error.',
          502: 'Bad gateway.',
          503: 'Service unavailable.'
        }
        if (code < 200 || code > 204) throw new Error(`Error ${code}. ${errors[code] || 'Undefined error'}`)
      }
      data.value = (await response.json())._embedded[`${method.value}`]
    } catch (error: any) {
      console.error(error.message)
    } finally {
      loading.value = false
    }
  }
})

async function getData (path: string, method: string, queryParams: string) {
  loading.value = true
  try {
    const response = await fetch(`${url}${path}${method}${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (!response.ok) {
      const code = response.status
      const errors: { [key: number]: string } = {
        301: 'Moved permanently.',
        400: 'Wrong structure of the array of transmitted data, or invalid identifiers of custom fields.',
        401: 'Not Authorized. There is no account information on the server. You need to make a request to another server on the transmitted IP.',
        403: 'The account is blocked, for repeatedly exceeding the number of requests per second.',
        404: 'Not found.',
        500: 'Internal server error.',
        502: 'Bad gateway.',
        503: 'Service unavailable.'
      }
      if (code < 200 || code > 204) throw new Error(`Error ${code}. ${errors[code] || 'Undefined error'}`)
    }
    const data = (await response.json())._embedded[`${method}`]
    return data
  } catch (error: any) {
    console.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style>
.ant-card-head {
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  color:rgb(44, 44, 44);
}

.ant-table .ant-table-thead .ant-table-cell {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color:rgb(63, 63, 62);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
}

.ant-table-cell {
  font-family: 'Arial Narrow Bold', sans-serif, Arial, sans-serif;
  font-size: 14px;
  font-weight: 100;
  color:rgb(80, 79, 79);
  text-align: center;
}

.ant-card .ant-card-head-title{
  color:rgb(80, 79, 79);
}

.ant-input {
  width: 200px;
}

.ant-input-suffix {
  width: 14px;
  color:gray;
}

.ant-table-cell .ant-tag {
  color:rgb(63, 63, 62);
}

.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.nested-contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 26%;
}
</style>
