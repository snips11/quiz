@extends('layouts.app')

@section('content')
<quiz-component :round="{{$round}}" quiz={{$quiz->id}} master={{$user->id}}></quiz-component>
@endsection