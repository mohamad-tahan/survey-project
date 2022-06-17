<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addAnswer(Request $request){
        $answers = new Answer();
        $answers->answer = $request->answer;
        $answers->question_id = $request->question_id;
        $answers->user_id = $request->user_id;
       
        $answers->save();
        
        return response()->json([
            "status" => "Answers Added"
        ], 200);

    }
}
