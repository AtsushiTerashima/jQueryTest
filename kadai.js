// htmlからDOMの取得
var content = $("#mainContent");
var question = $("#question");
var choice = $("#choice");
var submit = $("#submit");

// 初期値
var turn = 0;
var score = 0;
var askingQuestion = true;
var setTimer = 6;

// 残り時間の表示
var timer = setInterval(function () {
    $("#time").html("残り: " + setTimer + "秒");
    setTimer--;
    if (setTimer === 0) {
        clearInterval(timer);
    $("#time").text("終了");
    alert("タイムアップ！");
    showResults();
    }
}, 1000);

// クイズデータの表示と選択肢の表示
function createQst() {
    var choices = quizData[turn].choices;
    var choicesHtml = "";
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + turn + "' id='choice" + (i + 1) + "' value='" + choices[i] + "'>" + " <label for='choice" + (i + 1) + "'>" +
        choices[i] + "</label><br>";
    }
    question.text("No." + (turn + 1) + " " + quizData[turn].question);
    choice.html(choicesHtml);
    if (turn === 0) {
        submit.text("Submit");
    }
}

// 正誤判定
function checking() {
    if (askingQuestion) {
        submit.text("Next");
        askingQuestion = false;
        var selectedAnsw;
        var correctIndex;
        var radios = $("[name='quiz" + turn + "']");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedAnsw = radios[i].value;
            }
            if (radios[i].value == quizData[turn].correct) {
                correctIndex = i;
            }
        }
        var label = $("label")[correctIndex];
        $(label).css("font-weight", "bold");
        if (selectedAnsw == quizData[turn].correct) {
            score++;
            $(label).css('color', 'green');
        } else {
            $(label).css('color', 'red');
        }
    } else {
        askingQuestion = true;
        submit.text("Submit");
        if (turn < quizData.length - 1) {
            turn++;
            createQst();
        } else {
            clearInterval(timer);
            showResults();
        }
    }
}

// 結果表示
function showResults() {
    if (score != 0) {
        content.html("<h2>お疲れ様でした！</h2>" +
        "<h2>以下結果になります、</h2>" +
        "<h2>" + quizData.length + "問中、" + score + "問正解、" +
        Math.round(score / quizData.length * 100) + "%<h2>");
    }  else {
        content.html("<h2>お疲れ様でした！</h2>" +
        "<h2>以下結果になります、</h2>" +
        "<h2 style='color:red'>全問不正解！<h2>");
    }
}

$(document).ready(function () {
    createQst();
});

submit.click(function () {
    checking();
});