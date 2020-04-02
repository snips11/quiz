<template>
  <div>
    <div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6 mb-6">
      <div
        class="max-w-screen-xl mx-auto text-left py-4 px-4 sm:px-6 lg:py-4 lg:px-8"
        v-if="page == 1"
      >
        <h2
          class="text-xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Create your rounds</h2>

        <div
          class="my-4 relative rounded-md shadow-sm"
          v-for="(round, index) in rounds"
          :key="index"
        >
          <label
            for="name"
            class="block text-sm text-xl mb-2 font-medium leading-5 text-gray-800"
          >{{'Round '.concat(index + 1)}}</label>
          <input
            id="name"
            class="form-input block w-full sm:text-sm sm:leading-5"
            :placeholder="'Round '.concat(index + 1)"
            v-model="rounds[index].round"
            name="name"
          />
        </div>

        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <button
              @click="page ++"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >Next</button>
          </div>
        </div>
      </div>
      <div
        class="max-w-screen-xl mx-auto text-left py-4 px-4 sm:px-6 lg:py-4 lg:px-8"
        v-if="page == 2"
      >
        <h2
          class="text-xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Create questions</h2>

        <p
          class="text-gray-700 mt-4"
        >There are four rounds of six multiple choice questions, fill in each question, the options and select the correct answer.</p>

        <div
          class="my-4 relative rounded-md shadow-sm"
          v-for="(round, index) in rounds"
          :key="index"
        >
          <h3 class="text-lg text-gray-700 font-bold mb-6">Round: {{rounds[index].round}}</h3>
          <div v-for="(question, i) in rounds[index].questions" :key="i" class="mb-8 border-none">
            <label
              for="name"
              class="block text-sm text-xl mb-4 font-medium leading-5 text-gray-800 mt-4"
            >{{'Question '.concat(i + 1)}}</label>
            <input
              id="name"
              class="form-input block w-full sm:text-sm sm:leading-5"
              :placeholder="'Question '.concat(i + 1)"
              v-model="rounds[index].questions[i].question"
              name="name"
            />
            <div
              v-for="(option, o) in rounds[index].questions[i].options"
              :key="o"
              class="mt-4 flex flex-row items-center border-none"
            >
              <input
                id="name"
                class="form-input w-1/2 block sm:text-sm sm:leading-5 mr-4"
                :placeholder="'Option '.concat(i + 1)"
                v-model="rounds[index].questions[i].options[o]"
                name="name"
              />
              <input
                id="name"
                type="radio"
                :value="o"
                class="mr-2"
                :placeholder="'Question '.concat(o + 1)"
                v-model="rounds[index].questions[i].answer"
              />
              <p>Correct Answer</p>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <button
              @click="submit"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >Save Quiz</button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="open"
      class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
    >
      <div v-show="open" class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div
        v-show="open"
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
      >
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              class="h-6 w-6 text-green-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Quiz Created</h3>
            <div class="mt-2">
              <p
                class="text-sm leading-5 text-gray-500"
              >Your fellow quiz players in your quiz league can now play this quiz!</p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <span class="flex w-full rounded-md shadow-sm">
            <a
              :href="'/quiz/' + quiz"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Go home</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  props: ["quiz"],
  data: function() {
    return {
      rounds: [
        {
          round: "",
          questions: [
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" }
          ]
        },
        {
          round: "",
          questions: [
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" }
          ]
        },
        {
          round: "",
          questions: [
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" }
          ]
        },
        {
          round: "",
          questions: [
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" },
            { question: "", options: ["", "", "", ""], answer: "" }
          ]
        }
      ],
      page: 1,
      open: false
    };
  },
  methods: {
    submit() {
      axios({
        method: "post",
        url: "/quiz/" + this.quiz + "/create-quiz/",
        data: {
          rounds: this.rounds
        }
      })
        .then(response => {
          this.open = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
