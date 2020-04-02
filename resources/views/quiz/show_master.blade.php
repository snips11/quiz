@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    {{$quiz->name}} League
</h2>
<div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6 mb-6">
    <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

        <h2 class="text-2xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Start {{$master->user->name}}'s Quiz
        </h2>

        <p class="text-gray-700 mt-4">If you are doing this quiz as a group, please wait for everyone as the quiz will
            start the moment you click
            start quiz.</p>

        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <a href="/quiz/{{$quiz->id}}/quiz-master/{{$master->id}}/round/1"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Start
                    Quiz</a>
            </div>
        </div>
    </div>
</div>
@endsection