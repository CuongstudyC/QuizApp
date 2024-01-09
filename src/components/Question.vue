<script setup>
    import {defineProps,defineEmits} from 'vue';

    // defineEmits dùng để lắng nghe sự kiện từ hàm con ra hàm cha còn defineProps là từ cha sang con
    const {question} = defineProps(['question']);
    const emit = defineEmits(["SelectOption"]);

    const emitSelectedOption = (isCorrect) =>{
        // emit(tên sự kiện, giá trị);
        emit("SelectOption", isCorrect);
    }
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
      <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">{{ option.text }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .question-container{
        margin-top: 20px;
    }

    .question-container .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor:pointer;
    }

    .option .option-label{
        background-color: bisque;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .option .option-value {
        background-color: rgb(244,239,239);
        width:100%;
        font-size:30px;
        padding: 0 20px;
    }
</style>