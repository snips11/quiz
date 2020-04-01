@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-10">
    {{$quiz->name}} League
</h2>
<div class="bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6 mb-6">
    <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8">

        <h2 class="text-xl leading-loose font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Create a Quiz
        </h2>
        <p class="mt-2 text-gray-700">Your time to shine, become a quizmaster!</p>

        <div class="mt-4 flex justify-start">
            <div class="inline-flex rounded-md shadow">
                <a href="/quiz/{{$quiz->id}}"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Create
                    Quiz</a>
            </div>
        </div>
    </div>
</div>
<h3 class="text-2xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Quizes
</h3>
<div class="bg-white shadow mb-10 overflow-hidden sm:rounded-md">
    <ul>
        @forelse($quiz->quizmasters as $master)
        @if($master->user_id != auth()->user()->id)
        <li>
            <a @if(!$master->score->completed_at) href="/quiz/{{$quiz->id}}/quiz-master/{{$master->score->user->id}}"
                @else href="#" @endif
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                <div class="flex items-center px-4 py-4 sm:px-6">
                    <div class="min-w-0 flex-1 flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12 rounded-full" src="{{$master->score->user->avatar}}" alt="" />
                        </div>
                        <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div class="flex items-center">
                                <div class="text-base leading-5 font-medium text-indigo-600 truncate">
                                    {{$master->score->user->name}}</div>
                            </div>
                            <div class="hidden md:block">
                                <div>
                                    <div class="text-sm leading-5 text-gray-900">
                                        Created
                                        <time datetime="2020-01-07">{{$master->created_at->format('d/m/Y')}}</time>
                                    </div>
                                    @if($master->score->completed_at)
                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Completed quiz
                                    </div>
                                    @else
                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                        Start quiz
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </a>
        </li>
        @endif
        @empty
        <li class="border-none text-gray-800 shadow-none">No quizes have been added yet, won't be long!</li>
        @endforelse
    </ul>
</div>
<h3 class="text-2xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Leaderboard
</h3>
<div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-right">
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($quiz->users as $user)
                    <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {{$user->name}}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                            {{$user->pivot->score}}
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection