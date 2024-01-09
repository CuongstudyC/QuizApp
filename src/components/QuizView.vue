<script setup>
import quizes from "../data/quizes.json";
import { useRoute } from "vue-router";
import Question from "./Question.vue";
import QuizHeader from "./QuizHeader.vue";
import { ref, watch, computed } from "vue";
import Result from "./Result.vue";
// dùng watch để re-render 1 đối tượng khi thay đổi
const route = useRoute();

const quiz = quizes.find(q => q.id.toString() === route.params.id);

const currentQuestionIndex = ref(0);

const correctAnswer = ref(0);

const hangleOptionSelected = isCorrect => {
  if (isCorrect) {
    correctAnswer.value++;
  }
  currentQuestionIndex.value += 1;
  if (currentQuestionIndex.value === quiz.question.length) {
    showResults.value = true;
  }
};

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.question.length}`);
// // hàm ref là 1 function nên phải có () => nếu muốn nghe .value
// //lưu ý nó chỉ thay đổi khi bên trong nó cũng là 1 ref;
// watch(() => currentQuestionIndex.value,(newQuestion,oldQuestion) =>{
//         questionStatus.value = `${newQuestion}/${quiz.question.length}`;
// })

//thay vì dùng watch kết hợp vs ref ta có thể dùng computed để re-render:

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.question.length}`;
});

const barPercentage = computed(
  () =>
    `${parseFloat(
      parseFloat(currentQuestionIndex.value) / quiz.question.length
    ) * 100}%`
);

const showResults = ref(false);
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"></QuizHeader>
    <!-- sử dụng sự kiện emit ở trong props của Question -->
    <Question
      :question="quiz.question[currentQuestionIndex]"
      @SelectOption="hangleOptionSelected"
      v-if="!showResults"
    ></Question>

    <Result :numberOfCorrectAnswer="correctAnswer" :quizLength="quiz.question.length" v-else></Result>
  </div>
</template>