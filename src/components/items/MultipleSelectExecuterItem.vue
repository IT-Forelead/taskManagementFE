<script setup>
import { onMounted, ref, toRefs } from 'vue'
import CheckCircleOutlineIcon from '../../assets/icons/CheckCircleOutlineIcon.vue'
import SearchIcon from '../../assets/icons/SearchIcon.vue'
import { useMultipleSelectStore } from '../../stores/multipleSelect.store'
import { useDropdownStore } from '../../stores/dropdown.store'
import { onClickOutside } from '@vueuse/core'

const multiselect = ref(null)

const props = defineProps({
    options: Object,
    id: String,
})

const searchService = ref('')
const searchResults = ref([])

const getSearchResult = (options) => {
    if (searchService.value) {
        searchResults.value = options.filter((user) => user?.firstname.toLowerCase().includes(searchService?.value.toLowerCase()))
    } else {
        searchResults.value = []
    }
}

onMounted(() => {
    useMultipleSelectStore().clearStore()
})

const { options, id } = toRefs(props)

onClickOutside(multiselect, () => {
    useDropdownStore().closeAssignExecutorDropdown()
})
</script>

<template>
    <div ref="multiselect" class="w-full my-2">
        <div class="relative">
            <SearchIcon class="absolute z-10 w-5 h-5 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 left-2.5" />
            <input type="text" v-model="searchService" v-on:keyup="getSearchResult(options)"
                class="block w-full py-1.5 px-2 text-gray-900 shadow border-b border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-10"
                placeholder="Ижрочи исмини киритинг..." />
        </div>

        <div class="w-full my-2 overflow-auto divide-y divide-gray-100 max-h-60" :id="id">
            <div v-if="!searchService" v-for="(option, idx) in options" :key="idx"
                @click="useMultipleSelectStore().setSelectExecuter(option)"
                class="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100">
                <div class="flex items-center justify-center space-x-2">
                    <div class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                        {{ option?.firstname.charAt(0) + option?.lastname.charAt(0) }}
                    </div>
                    <span class="text-base capitalize">
                        {{ option?.firstname + ' ' + option?.lastname }}
                    </span>
                </div>
                <CheckCircleOutlineIcon v-if="useMultipleSelectStore().selectedExecuters.includes(option)"
                    class="w-5 h-5 text-green-600" />
            </div>
            <div v-if="searchService" v-for="(option, idx) in options" :key="idx"
                @click="useMultipleSelectStore().setSelectExecuter(option)"
                class="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100">
                <div class="flex items-center justify-center space-x-2">
                    <div class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                        {{ option?.firstname.charAt(0) + option?.lastname.charAt(0) }}
                    </div>
                    <span class="text-base capitalize">
                        {{ option?.firstname + ' ' + option?.lastname }}
                    </span>
                </div>
                <CheckCircleOutlineIcon v-if="useMultipleSelectStore().selectedExecuters.includes(option)"
                    class="w-5 h-5 text-green-600" />
            </div>
            <div v-if="searchService && searchResults?.length === 0"
                class="flex items-center justify-center p-2 hover:bg-gray-100">
                <p class="text-red-500">Ижрочилар мавжуд эмас!</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
