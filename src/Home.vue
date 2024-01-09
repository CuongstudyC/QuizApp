<script setup>
import q from "./data/quizes.json";
import { ref, watch } from "vue";
import Cart from "./components/Cart.vue";

const quizes = ref(q);
const searchValue = ref("");

// nếu thay đổi thì cập nhật hàm watch:
//trong đây t chọn thành phần là searchValue là đối tượng để cập nhật:

watch(searchValue, (newValue, oldValue) => {
  quizes.value = q.filter(quiz =>
    quiz.name.toLowerCase().includes(newValue.toLowerCase())
  );
});
</script>

<template>
 
    <div>
      <header>
        <h1>Quizes</h1>
        <input type="text" placeholder="Search..." v-model.trim="searchValue" />
      </header>

      <div class="options-container">
        <!-- <div class="card" v-for="quize in quizes" :key="quize.id">
          <img :src="quize.img" alt="">
          <div class="card-text">
            <h2>{{ quize.name }}</h2>
            <p>{{ quize.question.length }} questions</p>
          </div>
        </div>-->

        <!-- tạo props có tên là :quiz -->
        <Cart v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></Cart>
      </div>
    </div>

</template>


<style scoped>


header {
  margin: 10px 0 40px 0;
  display: flex;
  align-items: center;
  gap: 30px;
}

header {
  font-weight: bold;
}

header h1 {
  font-weight: bold;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
}
</style>