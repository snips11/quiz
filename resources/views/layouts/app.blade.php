<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @if(auth()->user())
    <script>
        window.user = {
            id: {{ auth()->id() }},
            name: "{{ auth()->user()->name }}"
        };

        window.csrfToken = "{{ csrf_token() }}";
    </script>
    @endif
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <div>
            <nav class="bg-indigo-700">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <a href="/">
                                    <img class="h-12 w-12 rounded-full"
                                        src="https://www.socialshakeupshow.com/wp-content/uploads/2019/07/shutterstock_1135277165.jpg"
                                        alt="Quiz" />
                                </a>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline">

                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <div class="ml-3 relative">
                                    <div>
                                        <button
                                            class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                                            id="user-menu" aria-label="User menu" aria-haspopup="true">
                                            <img class="h-8 w-8 rounded-full" src="{{auth()->user()->avatar}}" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button
                                class="inline-flex items-center justify-center p-2 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 focus:text-white">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hidden md:hidden">
                    <div class="px-2 pt-2 pb-3 sm:px-3">

                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full" src="{{auth()->user()->avatar}}" alt="" />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium leading-none text-white">{{auth()->user()->name}}
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 px-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                        </div>
                    </div>
                </div>
            </nav>
            <header class="bg-white shadow">
                <div
                    class="max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 flex flex-row justify-between items-center lg:px-8">
                    <h1 class="text-3xl font-bold leading-tight text-gray-800">
                        Hey, {{auth()->user()->name}}!
                    </h1>
                    <a href="/create-quiz-league"
                        class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">Create
                        your own quiz league</a>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 mb-8 sm:px-6 lg:px-8">
                    <div class="px-4 py-4 sm:px-0">
                        @yield('content')
                    </div>
                </div>
                <div class="flex justify-center items-center flex-col py-8 bg-blue-100">
                    <a href="https://parsonsgreenmedia.com"><img src="http://parsonsgreenmedia.com/images/PGM_logo.png"
                            alt="Parsons Green Media Logo" class="h-16 w-16 mb-4"></a>
                    <p class="text-sm text-gray-500">Created for fun by <a href="https://parsonsgreenmedia.com">Parsons
                            Green Media.</a></p>
                </div>
            </main>
        </div>
    </div>
</body>

</html>