@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Quiz league created
</h2>
<div class="bg-gray-100 rounded-lg px-4 py-6 border-gray-200 sm:px-6">
    <div class="max-w-screen-xl mx-auto">
        <p class="text-gray-800 leading-lg text-lg">Next step is to ask everyone to create an account at <a
                href="https://quiz.parsonsgreenmedia.com/register"
                class="text-indigo-800 font-medium">quiz.parsonsgreenmedia.com/register</a> then join the
            {{$quiz->name}}
            quiz using the share code below.</p>
        <p class="font-bold text-2xl text-gray-800">Share code: <span
                class="text-indigo-800 font-bold text-2xl">{{$quiz->share_code}}</span></p>
        <a href="/home"
            class="inline-flex items-center justify-center px-4 py-2 mt-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Go to dashbaord
        </a>
    </div>
</div>
@endsection