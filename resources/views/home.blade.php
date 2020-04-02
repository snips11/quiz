@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Your Quizes
</h2>
<div class="my-8 flex justify-start">
    <div class="inline-flex rounded-md shadow">
        <a href="/create-quiz-league"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Create
            Quiz League</a>
    </div>
    <div class="ml-3 inline-flex">
        <a href="/join-quiz-league"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
            Join Quiz League
        </a>
    </div>
</div>
@foreach ($user->quizes as $quiz)
<div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6 mb-6">
    <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

        <h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {{$quiz->name}}
        </h2>

        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <a href="/quiz/{{$quiz->id}}"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Click
                    To Quiz</a>
            </div>
        </div>
    </div>
</div>
@endforeach
@endsection