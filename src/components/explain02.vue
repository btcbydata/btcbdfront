<template>
    <body id="tinymce" class="mce-content-body " data-id="content" contenteditable="true" spellcheck="false"><div><h1 data-mce-style="text-align: center;" style="text-align: center;"><strong><span style="color: rgb(53, 152, 219);" data-mce-style="color: #3598db;">ELECTRA 감정분석 기반 추천 시스템 </span></strong></h1><h3 data-mce-style="text-align: center;" style="text-align: center;"><strong>동작과 원리</strong></h3><br><div class ="txtbox" style="text-align: center; padding:10px;" data-mce-style="text-align: center;">ELECTRA는, 구글에서 개발한 트랜스포머 모델 기반 범용 자연어 처리 딥 러닝 알고리즘입니다. 기존의 Word2Vec과 같은 자연어 처리 모델에 비해 문장의 맥락을 고려하는 분석으로 한층 더 진보했다는 평가를 들었던 BERT 모델을 개량한 것으로, 다양한 분야에서 보편적으로 사용되고 있습니다. 언어 모델링, 텍스트 분류, 지식 문답, 텍스트 생성, 요약, 기계 번역 등의 분야에서 실제로 적용되는 강력한 모델입니다. btcbydata에서는 ELECTRA 모델에 구어체, 신조어 위주 한국어를 학습시킨 KcELECTRA 모델을 사용했습니다. <br><br><br>이를 통해서 암호화폐 커뮤니티에 올라온 글을 월 단위로 감성분석 합니다. 감성분석이란, 사용자의 텍스트를 읽어들여 그것이 지닌 감정을 자동으로 분류하는 작업입니다. btcbydata의 경우, 디시인사이드 비트코인 갤러리, 알트 마이너 갤러리를 등 암호화폐 관련 커뮤니티의 글들을 ELECTRA 기반 자연어처리 모델을 통해 긍정/부정의 카테고리로 나누고, 긍정의 지수가 가장 높은 암호화폐를 월 단위로 추천합니다. <br><br><br>

    btc by data 사이트의 데이터를 가공하는데 쓰인 모델은, ELECTRA를 기반으로 한국어 뉴스 댓글 1억 8천만 개, 17GB 분량을 학습시킨 <a href='#' onclick="window.open('https://huggingface.co/beomi/KcELECTRA-base')" style="cursor:pointer">kcELECTRA</a> 모델입니다. 이를 <a href='#' onclick="window.open('https://github.com/e9t/nsmc')" style="cursor:pointer">네이버 영화평 감정분석 데이터셋</a>으로 미세 조정(fine tuning) 시켰으며, 2000여개의 글 제목으로 구성된 비트코인 갤러리의 데이터셋에 의한 성능 평가를 실시했습니다.

    <br><br><br></div></div></body>
</template>

<script>
    export default {
    name: "MyExplain02"
    }
</script>

<style scoped>

    .txtbox {
        width: 80%;
        max-width: 600px;
        margin: 0 auto;
    }

</style>