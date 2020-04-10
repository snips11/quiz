@extends('layouts.app')

@section('content')
<quiz-component :round="{{$round}}" quiz={{$quiz->id}} score={{$score->score}} master={{$quiz_master->id}}>
</quiz-component>
@endsection