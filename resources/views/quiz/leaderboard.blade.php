@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    {{$quiz_master->user->name}}'s Quiz Scores
</h2>
<div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider text-right">
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($quiz_master->scores as $q)
                    <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
                            {{$q->user->name}}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right text-base leading-5 font-medium">
                            {{$q->score}}
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="w-full flex justify-center items-center">
            <div class="inline-flex mt-14 rounded-md shadow">
                <a href="/quiz/{{$quiz_master->quiz->id}}"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">View
                    Leaderboard</a>
            </div>
        </div>
    </div>
</div>

@endsection