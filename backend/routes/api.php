<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Protected route
Route::middleware('auth:sanctum')->get('/user', [AuthController::class,'user']);

// Route::get('/user', function() {
//     return response()->json(['message' => 'API is working!']);
// });
Route::get('/test', function() {
    return response()->json(['message' => 'API is working!']);
});

