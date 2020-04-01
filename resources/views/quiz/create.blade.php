@extends('layouts.app')

@section('content')
<quiz-create-component :quiz={{$quiz->id}}></quiz-create-component>
@endsection