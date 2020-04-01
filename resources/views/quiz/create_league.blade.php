@extends('layouts.app')

@section('content')
<h2 class="text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-6">
    Create a new quiz league
</h2>
<div class="bg-gray-100 rounded-lg px-4 py-6 border-gray-200 sm:px-6">
    <div class="max-w-screen-xl mx-auto">
        <form method="POST" action="/create-quiz-league">
            @csrf
            <label for="name" class="block text-sm text-xl font-medium leading-5 text-gray-800">Quiz League Name</label>
            <div class="my-4 relative rounded-md shadow-sm">
                <input id="name" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="Name"
                    name="name" />
            </div>
            <button type="submit"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Join Quiz League
            </button>
        </form>
    </div>
</div>
@endsection