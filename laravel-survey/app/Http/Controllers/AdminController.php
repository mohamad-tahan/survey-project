<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Survey;
use Illuminate\Http\Request;
use App\Models\Question;

class AdminController extends Controller
{
    public function addSurvey(Request $request)
    {
        $survey = new Survey();
        $survey->name = $request->name;
        $survey->save();

        return response()->json([
            "status" => "Survey Added"
        ], 200);
    }
    public function addQuestion(Request $request)
    {
        $question = new Question();
        $question->question = $request->question;
        $question->type = $request->type;
        $question->survey_id = $request->survey_id;
        $question->choices = $request->choices;
        $question->save();

        return response()->json([
            "status" => "Question Added"
        ], 200);
    }

    public function getSurveys($id = null)
    {
        if ($id != null) {
            $surveys = Survey::find($id);
        } else {
            $surveys = Survey::all();
        }

        return response()->json([
            "status" => "Success",
            "Surveys: " => $surveys
        ], 200);
    }
}
