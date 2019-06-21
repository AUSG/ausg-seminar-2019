package com.example.firstandroidapp;

public class StringUtil {
    private static final char KOREAN_BEGIN_UNICODE = 44032;
    private static final char KOREAN_LAST_UNICODE = 55203;

    private static final char KOREAN_BASE_UNIT = 588;

    private static final char[] INITIAL_SOUND =
            {'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ'
                    , 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'};

    public static boolean isKorean(String str) {
        boolean result = true;

        for(int i = 0; i < str.length(); i++) {
            if (str.charAt(i) < KOREAN_BEGIN_UNICODE || str.charAt(i) > KOREAN_LAST_UNICODE) {
                result = false;
                break;
            }
        }

        return result;
    }

    public static char getInitialSound(char c){
        int hanBegin = (c - KOREAN_BEGIN_UNICODE);
        int index = hanBegin / KOREAN_BASE_UNIT;
        return INITIAL_SOUND[index];
    }


}
