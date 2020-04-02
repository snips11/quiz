<template>
  <div>
    <h1 class="text-xl text-gray-600 mb-4">
      <span class="font-bold text-2xl text-gray-700">Round:</span>
      {{ round.name }}
    </h1>
    <h3 class="text-xl text-gray-600 mb-4" v-if="this.question_number <= this.number_of_questions">
      <span class="font-bold text-xl text-gray-700">Question:</span>
      {{ question_number }}/{{ number_of_questions }}
    </h3>
    <div v-if="question_number > number_of_questions">
      <div
        class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6"
        v-if="this.round.id == 4"
      >
        <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2
            class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >We are complete!</h2>
          <p class="text-gray-600 font-medium mt-6 leading-loose">Lets go see the scores!!!</p>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <a
                :href="'/quiz/' + this.quiz + '/leaderboard/'"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >Scores</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6" v-else>
        <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2
            class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{round.name}} Round
            <br />Complete!
          </h2>
          <p class="text-gray-500 mt-6 leading-loose">
            <span class="text-xl text-gray-600 font-medium">Go and grab a drink... 🍻🍷🍹</span>
            <br />When everyone is ready click the button below to continue to the next round!
          </p>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <button
                @click="submitAnswers"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >Next Round</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="(question, index) in round.questions" :key="question.id">
        <div
          class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6"
          v-if="index + 1 == question_number"
        >
          <h3 class="text-lg leading-6 font-medium text-gray-800">{{ question.question }}</h3>
          <div
            class="flex items-center mr-4 my-4"
            v-for="option in question.options"
            :key="option.id"
          >
            <label for="radio1" class="flex items-center text-base text-gray-600">
              <input
                type="radio"
                id="one"
                :value="option.id"
                v-model="selected_answer"
                class="mr-2 mb-1"
              />
              {{ option.option }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div
      class="rounded-full h-20 w-20 bg-red-700 flex justify-center items-center text-white font-bold text-2xl mt-10"
      v-if="this.question_number <= this.number_of_questions"
    >{{ seconds }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.startCountdown();
    this.prepareAnswers();
  },
  props: ["round", "quiz", "master"],
  data: function() {
    return {
      number_of_questions: this.round.questions.length,
      question_number: 1,
      seconds: 15,
      selected_answer: null,
      next_round: parseInt(this.round.round) + 1,
      selected_answer: null,
      answers: []
    };
  },
  methods: {
    startCountdown() {
      if (this.question_number <= this.number_of_questions) {
        if (this.seconds > 0) {
          setTimeout(() => {
            this.seconds -= 1;
            this.startCountdown();
          }, 1000);
        } else {
          this.storeAnswer(this.question_number - 1, this.selected_answer);
          this.selected_answer = null;
          this.question_number++;
          this.seconds = 15;
          this.startCountdown();
        }
      }
    },
    storeAnswer(answerIndex, selectedAnswer) {
      this.answers[answerIndex].answer = selectedAnswer;
    },
    prepareAnswers() {
      this.round.questions.map(question => {
        this.answers.push({
          question: question.id,
          answer: 0
        });
      });
    },
    submitAnswers() {
      axios({
        method: "post",
        url:
          "/quiz/" +
          this.quiz +
          "/quiz-master/" +
          this.master +
          "/round/" +
          this.round.id,
        data: {
          answers: this.answers
        }
      })
        .then(response => {
          window.location.replace(
            "/quiz/" +
              this.quiz +
              "/quiz-master/" +
              this.master +
              "/round/" +
              this.next_round
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
