<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    public static function checkIfCorrect($answer){
        $question = Question::where('id', $answer['question'])->with('answer')->first();
        
        if($question->answer->option_id == $answer['answer']){
            return true;
        };

        return false;
    }
}
