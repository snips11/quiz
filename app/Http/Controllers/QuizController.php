<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;
use App\User;
use App\Round;
use App\QuizScore;
use App\Answer;
use App\QuizAnswer;

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
            QuizAnswer::create([
                'user_id' => auth()->user()->id,
                'option_id' => $answer['answer'],
                'question_id' => $answer['question']
            ]);     
        }

        $quiz_score->update([
            'score' => $score
        ]);

        return;
    }

    public function leaderboard(Quiz $quiz){
        $quiz = QuizScore::->orderBy('score', 'desc')->get();
        return view('quiz.leaderboard', compact('quiz'));
    }
}
