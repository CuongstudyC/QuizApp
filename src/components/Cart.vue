<script setup>
    // cách gọi props từ bên vue khác qua: dùng defineProps
    import {defineProps} from 'vue';

    import {useRouter} from 'vue-router';
    //nếu thuộc tính đưa qua thuộc array thì defineProps phải có [] và để tên cần props đó vào:

    // cách 1 dùng tên bt thì phải có thêm props.quiz:

    // const props = defineProps(['quiz']);  

    //Cách 2: dùng {} để gọi thì ko cần props.quiz mà trực tiếp quiz.img:

    const {quiz} = defineProps(['quiz']);
    const router = useRouter();
    // const hangleRoute = (e) =>{
    //    e.$router.push({ path: '/HelloWorld'  });
    // }

    const navigateToQuize = () =>{
    return router.push(`/quiz/${quiz.id}`);
    }
</script>


<template>
    <div>
        <div class="card" @click="navigateToQuize()">
       <img  alt="" :src="quiz.img">
          <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.question.length }} questions</p>
          </div>
        </div>
    </div>
</template>

<style scoped>
     .card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card:hover{
    box-shadow: 1px 1px 10px 5px rgb(139 139 139);
  }

  .card img {
    width: 100%;
    height: 190px;
    margin:0;
  }

  .card .card-text {
    text-indent: 5px;
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>