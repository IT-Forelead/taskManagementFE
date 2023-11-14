<script setup>
import moment from 'moment';

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
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Хабар тури
                            </th>
                            <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                                Етказилганлик ҳолати
                            </th>
                        </tr>
                    </thead>
                    <tbody class="font-medium bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                                1
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                +998937475995
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                utg-urgench.iflead.uz
                                Сизга топшириқ берилди:
                                Топшириқ номи: ИЧТБваТБ бошлиғи Н.Жуманиязовга.
                                Муддат тугашига қолган вақт: 2 кун
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                {{ moment().format('DD/MM/YYYY H:mm') }}
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                Билдиришнома
                            </td>
                            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                    <span class="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                                    <span class="relative text-xs">Етказилди</span>
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