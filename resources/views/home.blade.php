@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Your Quizes
</h2>
@foreach ($user->quiz_scores as $quiz)

@endforeach
<div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6">
    <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

        <h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {{$quiz->quiz->name}}
        </h2>

        <p class="text-gray-600 font-medium mt-6 leading-loose">
            Current Score: {{$quiz->score}}
        </p>
        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <button href="/quiz/1/quiz-master/1/round/1" disabled
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Enter
                    Quiz</button>
            </div>
        </div>
    </div>
</div>
@endsection