<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuizScore extends Model
{
    protected $fillable = [
        'score',
    ];

    public function quiz(){
        return $this->belongsTo('App\Quiz');
     }

     public function user(){
        return $this->belongsTo('App\User');
     }
}
