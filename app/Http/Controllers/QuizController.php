<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;
use App\User;
use App\Round;
use App\QuizScore;
use App\Answer;
use App\QuizAnswer;
use App\QuizMaster;
use Carbon\Carbon;
use App\Question;
use App\Option;
use App\QuizUser;

class QuizController extends Controller
{
    public function index(Quiz $quiz, QuizMaster $quiz_master, Round $quiz_round){
        $round = Round::where('quiz_master_id', $quiz_master->id)->where('round', $quiz_round->id)->with('questions.options')->first();

        if($quiz_round->id == 1){
            QuizScore::create([
                "user_id" => auth()->user()->id,
                "quiz_master_id" => $quiz_master->id,
                "quiz_id" => $quiz->id,
                "score" => 0
            ]);
        }

        $score = QuizScore::where('quiz_master_id', $quiz_master->id)->where('quiz_id', $quiz->id)->where('user_id', auth()->user()->id)->first();

        return view('quiz.index', compact('round', 'quiz', 'quiz_master', 'score'));
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

    public function createQuiz(Quiz $quiz){
        return view('quiz.create', compact('quiz'));
    }

    public function storeQuiz(Quiz $quiz, Request $request){

        $quiz_master = QuizMaster::create([
            "quiz_id" => $quiz->id,
            "user_id" => auth()->user()->id,
            "quiz_date" => Carbon::now()
        ]);

        foreach($request->rounds as $key => $round){

            $created_round = Round::create([
                "quiz_master_id" => $quiz_master->id,
                "name" => $round['round'],
                "round" => $key + 1
            ]);

            foreach ($round['questions'] as $key => $question) {

                $created_question = Question::create([
                    "round_id" => $created_round->id,
                    "question" => $question['question']
                ]);

                foreach ($question['options'] as $key => $option) {
                    $option = Option::create([
                        "option" => $option,
                        "question_id" => $created_question->id
                    ]);

                    if($key == $question['answer']){
                        Answer::create([
                            "option_id" => $option->id,
                            "question_id" => $created_question->id
                        ]);
                    }
                }
            }
        }
    }

    public function show(Quiz $quiz){
        $quiz->load(['quizMasters.user', 'users' => function ($query) {
            $query->orderBy('pivot_score', 'desc');
        }, 'quizMasters.score' => function ($query) {
            $query->where('user_id', auth()->user()->id)->with('user');
        }]);
        return view('quiz.show', compact('quiz'));
    }

    public function showMaster(Quiz $quiz, QuizMaster $quiz_master){
        $master = $quiz_master->load(['user', 'first_round']);
        return view('quiz.show_master', compact('quiz', 'master'));
    }

    public function store(Quiz $quiz, QuizMaster $user, Round $round, Request $request){
        $quiz_score = QuizScore::where('user_id', auth()->user()->id)->where('quiz_id', $quiz->id)->where('quiz_master_id', $user->id)->first();

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

        if($round->round == 4){
            $quiz_user = QuizUser::where('user_id', auth()->user()->id)->where('quiz_id', $quiz->id)->first();
            $quiz_user->update([
                "score" => $quiz_user->score + $score,
            ]);

            $quiz_score->update([
                'completed_at' => Carbon::now()
            ]);
        }

        return;
    }

    public function leaderboard(QuizMaster $quiz_master){
        $quiz_master->load(['user', 'quiz', 'scores' => function ($query) {
            $query->with('user')->orderBy('score', 'desc');
        }]);
        return view('quiz.leaderboard', compact('quiz_master'));
    }
}
