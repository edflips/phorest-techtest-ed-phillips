<template>
  <section
    class="w-full text-white mb-6"
    :class="voucherPostSuccess ? 'bg-green-500' : 'bg-gray-800'"
  >
    <div class="p-4 text-center uppercase">
      <h2 class="text-2xl">
        {{ voucherPostSuccess ? 'Voucher created' : 'Create a voucher' }}
      </h2>
      <div class="flex flex-row justify-center">
        <span class="text-white text-2xl h-full pr-2">
          &pound;
        </span>
        <input
          class="voucher-value p-2 text-gray-900"
          type="number"
          placeholder="Value"
        />
        <button
          class="create-voucher bg-blue-500 text-white font-bold py-2 p-4 uppercase"
          @click="$emit('handle-add-voucher')"
        >
          Add
        </button>
      </div>
    </div>
    <p v-if="voucherError" class="voucher-error p-2 text-center">
      {{ voucherError }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'CreateVoucherForm',
  props: {
    voucherPostSuccess: {
      type: Boolean,
      required: true
    },
    voucherError: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
