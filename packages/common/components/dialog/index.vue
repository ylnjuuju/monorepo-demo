<template>
  <van-dialog
    v-model="showDialog"
    class="common_dialog"
    :show-confirm-button="showConfirmButton"
    :show-cancel-button="showCancelButton"
    :confirm-button-text="confirmButtonText"
    :close-on-click-overlay="false"
    :cancel-button-text="cancelButtonText"
    :before-close="beforeClose"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
    @opened="$emit('opened')"
    @closed="$emit('closed')"
  >
    <slot name="content" />
  </van-dialog>
</template>
<script>
export default {
  name: 'MDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    beforeClose: { // 关闭前回调
      type: Function
    }
  },
  data() {
    return {
      showDialog: this.show
    }
  },
  watch: {
    show: function(nv, ov) {
      this.showDialog = nv
    }
  }
}
</script>
<style scoped>
 @media screen and (min-width: 800px) {
    .common_dialog {
      width: 90% !important;
      max-width: 800px;
    }
    .common_dialog >>> .van-button--large{
      height: 50px !important;
      line-height: 50px !important;
    }
}
.common_dialog {
  border-radius: 5px;
  top: 50%;
}
.common_dialog >>> .van-button--large {
  height: 35px;
  line-height: 33px;
}
.common_dialog >>> .van-dialog__cancel {
  background-color: #c4c4c4;
  color: #ffffff;
}
.common_dialog >>> .van-dialog__confirm {
  background-color: #ffe300;
  color: #333333;
}
</style>
