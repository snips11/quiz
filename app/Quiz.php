<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $guarded = [];

    public function users()
    {
        return $this->belongsToMany('App\User', 'quiz_users')->withPivot('score');
    }

    public function scores()
    {
        return $this->hasMany('App\QuizScore');
    }

    public function quizMasters()
    {
        return $this->hasMany('App\QuizMaster');
    }
}
