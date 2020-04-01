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

    public function createLeague(){
        return view('quiz.create_league');
    }

    public function storeLeague(Request $request){
        $quiz = Quiz::create([
            'name' => $request->name,
            'share_code' => substr(md5(time()), 0, 6)
        ]);

        $quiz->users()->attach(auth()->user()->id);
        
        return view('quiz.create_league_confirm', compact('quiz'));
    }

    public function joinLeague(){
        return view('quiz.join');
    }
    
    public function storeJoinLeague(Request $request){
        $quiz = Quiz::where('share_code', $request->share_code)->first();

        if($quiz){
            $quiz->users()->attach(auth()->user()->id);
            return redirect('/quiz/' . $quiz->id);
        }

        return back();
    }

    public function show(Quiz $quiz){
        $quiz->load(['users' => function ($query) {
            $query->orderBy('pivot_score', 'desc');
        }, 'quizMasters.score' => function ($query) {
            $query->where('user_id', auth()->user()->id)->with('user');
        }]);
        return view('quiz.show', compact('quiz'));
    }

    public function showMaster(Quiz $quiz, User $user){
        return view('quiz.show_master', compact('quiz', 'user'));
    }

    public function store(Quiz $quiz, User $user, Round $round, Request $request){
        $quiz_score = QuizScore::where('user_id', auth()->user()->id)->where('quiz_id', $quiz->id)->first();

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
        $quiz = QuizScore::orderBy('score', 'desc')->get();
        return view('quiz.leaderboard', compact('quiz'));
    }
}
