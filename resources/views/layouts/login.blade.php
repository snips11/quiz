<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

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
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v1.9.3/dist/alpine.js" defer></script>
</head>

<body>
    <div id="app">
        @yield('content')
    </div>
</body>

</html>