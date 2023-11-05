<script setup>

const props = defineProps({
  customerTariffs: { type: Array, required: true },
})

const { customerTariffs } = toRefs(props)

</script>

<template>
    <tr v-for="(data, idx) in tasks" :key="idx" class="">
        <td class="px-6 py-3 whitespace-no-wrap rounded-l-md">
            <div class="flex items-center">
                <div class="text-sm leading-5 text-gray-800">{{ idx + 1 }}</div>
            </div>
        </td>
        <td class="px-6 py-3 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">{{ data?.title }}</div>
        </td>
        <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            -
        </td>
        <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            {{ data?.description }}
        </td>
        <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            {{ moment(data?.createdAt).format('DD/MM/YYYY H:mm') }}
        </td>
        <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            {{ moment(data?.dueDate).format('DD/MM/YYYY') }}
        </td>
        <td class="px-4 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                <span aria-hidden class="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                <span class="relative text-xs">{{ makePrettyStatus(data?.status) }}</span>
            </span>
        </td>
        <td class="px-6 py-3 text-center whitespace-no-wrap rounded-r-md">
            <div class="flex justify-center item-center">
                <div class="w-4 mr-3 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                    <EyeIcon class="w-6 h-6" />
                </div>
            </div>
        </td>
    </tr>
</template>

<style scoped></style>