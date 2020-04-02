@extends('layouts.app')

@section('content')
<quiz-component :round="{{$round}}" quiz={{$quiz->id}} master={{$quiz_master->id}}></quiz-component>
@endsection