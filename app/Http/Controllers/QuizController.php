<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;
use App\User;
use App\Round;
use App\QuizScore;
use App\Answer;

class QuizController extends Controller
{
    public function index(Quiz $quiz, User $user, Round $round){
        $round = $round->load('questions.options');
        return view('quiz.index', compact('round', 'quiz', 'user'));
    }

    public function store(Quiz $quiz, User $user, Round $round, Request $request){
        $quiz_score = QuizScore::where('user_id', $user->id)->where('quiz_id', $quiz->id)->first();

        $score = $quiz_score->score;

        foreach($request->answers as $answer){
            if(Answer::checkIfCorrect($answer)){
                $score ++;
            }     
        }

        $quiz_score->update([
            'score' => $score
        ]);

        return;
    }
}
