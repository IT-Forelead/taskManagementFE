<script setup>
import { computed, onMounted } from 'vue';
import { useSmsMessageStore } from '../stores/smsMessages.store';
import SmsMessageService from '../services/smsMessage.service';
import moment from 'moment';

const smsMessages = computed(() => {
    return useSmsMessageStore().smsMessages
})

const makeSmsStatus = (status) => {
  switch (status) {
    case 'sent':
      return 'Юборилган'
    case 'delivered':
      return 'Етказилган'
    case 'not_delivered':
      return 'Етказилмаган'
    case 'failed':
      return 'Муваффақиятсиз'
    case 'transmitted':
      return 'Узатилган'
    case 'undefined':
      return 'Аниқланмаган'
  }
}

const makeSmsColor = (status) => {
  switch (status) {
    case 'sent':
      return 'bg-orange-200 text-orange-900'
    case 'delivered':
      return 'bg-green-200 text-green-900'
    case 'not_delivered':
      return 'bg-red-200 text-red-900'
    case 'failed':
      return 'bg-red-200 text-red-900'
    case 'transmitted':
      return 'bg-cyan-200 text-cyan-900'
    case 'undefined':
      return 'bg-teal-200 text-teal-900'
  }
}

const getSmsMessages = () => {
    SmsMessageService.getSmsMessages({}).then((result) => {
        useSmsMessageStore().clearStore()
        useSmsMessageStore().setSmsMessages(result?.data)
    })
    .catch(() => {
        toast.error('Фойдаланувчиларни олишда хатолик юз берди')
    })
}

onMounted(() => {
    getSmsMessages()
})
</script>

<template>
    <div class="container m-auto">
        <div class="space-y-8">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                    SMS хабарлар
                </h2>
                <p class="text-sm leading-6 text-gray-600">
                    Барча юборилган SMS хабарлар ҳисоботи
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
                                Телефон рақам
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Хабар матни
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Юборилган вақти
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                                Етказилганлик ҳолати
                            </th>
                        </tr>
                    </thead>
                    <tbody class="font-medium bg-white divide-y divide-gray-200">
                        <tr v-for="(sms, idx) in smsMessages" :key="idx">
                            <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                                {{ idx + 1 }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ sms?.phone }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ sms?.text }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ moment(sms?.sentAt).format('DD/MM/YYYY H:mm') }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-center">
                                <span class="inline-block px-3 py-1 font-semibold leading-tight rounded-full" :class="makeSmsColor(sms?.status)">
                                    {{ makeSmsStatus(sms?.status) }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>