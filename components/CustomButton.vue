<template>
  <div>
    <button class="custom-button">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: 'Submit',
    },
  },
}
</script>
