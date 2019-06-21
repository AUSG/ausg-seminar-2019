package com.example.firstandroidapp;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.HashMap;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class ResultActivity extends AppCompatActivity {

    final static String TAG = ResultActivity.class.getSimpleName();

    @BindView(R.id.resultTV)
    TextView resultTV;

    String nameStr;

    Map<String, String> quizMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);
        ButterKnife.bind(this);

        initQuizArr();
        getIntentData();
        setResult();
    }

    private void initQuizArr() {
        quizMap = new HashMap<>();
        quizMap.put("ㅁㅊ", "다이어트 성공 할 사람");
        quizMap.put("ㄷㅈ", "이쁨 받을 사람");
        quizMap.put("ㅅㅎ", "귀인 만날 사람");
        quizMap.put("ㄱㅎ", "로또 맞을 사람");
        quizMap.put("ㅈㅇ", "경품 당첨 될 사람");
        quizMap.put("ㅅㅁ", "땅값 오를 사람");
        quizMap.put("ㅈㄱ", "투시능력 얻을 사람");
        quizMap.put("ㄱㅅ", "아이돌 데뷔 할 사람");
        quizMap.put("ㄷㅇ", "전 재산을 기부 할 사람");
        quizMap.put("ㅅㅇ", "개그맨 시험 붙을 사람");
        quizMap.put("ㄱㅈ", "인기 터질 사람");
        quizMap.put("ㅇㄷ", "번호 따일 사람");
        quizMap.put("ㅁㅈ", "이상형 만날 사람");
    }

    private void getIntentData() {
        nameStr = getIntent().getStringExtra(MainActivity.EXTRA_NAME);
    }

    private void setResult() {
        String initialStr = "";

        for(int i = 0; i < nameStr.length(); i++) {
            initialStr += StringUtil.getInitialSound(nameStr.charAt(i));
        }
        Log.d(TAG, initialStr+"aaa");

        String result = quizMap.get(initialStr);

        if(result == null)
            resultTV.setText(getString(R.string.noResult));
        else
            resultTV.setText(result);
    }

    @OnClick(R.id.backBtn)
    public void onBackBtnClicked() {
        finish();
    }
}
