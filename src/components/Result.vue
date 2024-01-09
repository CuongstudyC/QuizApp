<script setup>
    import {defineProps} from 'vue';
    import {useRouter} from 'vue-router';
    const {numberOfCorrectAnswer, quizLength} = defineProps(['numberOfCorrectAnswer','quizLength']);

    const router = useRouter();

</script>

<template>
    <div class="results">
        <p>Your result...</p>
        <h1>
            {{ numberOfCorrectAnswer }} / {{ quizLength }}
        </h1>
        <p @click="router.push('/')" class="go-back">Go Back</p>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding:100px 0;
    }

    p{
        font-size: 25px;
    }
    
    h1{
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
    }

    .go-back{
        cursor: pointer;
        text-decoration: underline;
        color:blue;
    }
</style>