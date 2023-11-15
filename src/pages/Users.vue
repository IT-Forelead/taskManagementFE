<script setup>
import { computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user.store';
import UserService from '../services/user.service';
import moment from 'moment';

const users = computed(() => {
    return useUserStore().users
})

const makeRoleStatus = (status) => {
  switch (status) {
    case 'creator':
      return 'Сайт яратувчиси'
    case 'admin':
      return 'Администратор'
    case 'executor':
      return 'Ижрочи'
    case 'controller':
      return 'Назоратчи'
  }
}

const getUsers = () => {
    UserService.getUsers({}).then((result) => {
        useUserStore().clearUsers()
        useUserStore().setUsers(result)
    })
    .catch(() => {
        toast.error('Фойдаланувчиларни олишда хатолик юз берди')
    })
}

onMounted(() => {
    getUsers()
})

</script>

<template>
    <div class="container m-auto">
        <div class="space-y-8">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                    Фойдаланувчилар
                </h2>
                <p class="text-sm leading-6 text-gray-600">
                    Барча фойдаланувчилар рўйхати
                </p>
            </div>

            <div class="overflow-auto border border-gray-200 rounded shadow">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="font-medium bg-gray-50">
                        <tr>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                                #
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                ФИО
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Телефон рақам
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Роль
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Қўшилган вақти
                            </th>
                        </tr>
                    </thead>
                    <tbody class="font-medium bg-white divide-y divide-gray-200">
                        <tr v-for="(user, idx) in users" :key="idx">
                            <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                                {{ idx + 1 }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ user?.firstname + ' ' + user?.lastname }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ user?.phone }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ makeRoleStatus(user?.role) }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ moment(user?.createdAt).format('DD/MM/YYYY H:mm') }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>