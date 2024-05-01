var qna = document.getElementsByClassName('qna');
var ans = document.getElementsByClassName('ans');

qna[0].addEventListener('click', function(){
    ans[0].classList.toggle("active");  
    ans[1].classList.remove("active");  
    ans[2].classList.remove("active");  
    ans[3].classList.remove("active");  
    ans[4].classList.remove("active");  
    ans[5].classList.remove("active");  
    qnaPlus0.classList.toggle("active");
    qnaPlus1.classList.remove("active");
    qnaPlus2.classList.remove("active");
    qnaPlus3.classList.remove("active");
    qnaPlus4.classList.remove("active");
    qnaPlus5.classList.remove("active");    
})

qna[1].addEventListener('click', function(){
    ans[1].classList.toggle("active");  
    ans[0].classList.remove("active");  
    ans[2].classList.remove("active");  
    ans[3].classList.remove("active");  
    ans[4].classList.remove("active");  
    ans[5].classList.remove("active");  
    qnaPlus1.classList.toggle("active");
    qnaPlus0.classList.remove("active");
    qnaPlus2.classList.remove("active");
    qnaPlus3.classList.remove("active");
    qnaPlus4.classList.remove("active");
    qnaPlus5.classList.remove("active");
})

qna[2].addEventListener('click', function(){
    ans[2].classList.toggle("active");  
    ans[1].classList.remove("active");  
    ans[0].classList.remove("active");  
    ans[3].classList.remove("active");  
    ans[4].classList.remove("active");  
    ans[5].classList.remove("active");  
    qnaPlus2.classList.toggle("active");
    qnaPlus0.classList.remove("active");
    qnaPlus1.classList.remove("active");
    qnaPlus3.classList.remove("active");
    qnaPlus4.classList.remove("active");
    qnaPlus5.classList.remove("active");
})

qna[3].addEventListener('click', function(){
    ans[3].classList.toggle("active");  
    ans[1].classList.remove("active");  
    ans[2].classList.remove("active");  
    ans[0].classList.remove("active");  
    ans[4].classList.remove("active");  
    ans[5].classList.remove("active");  
    qnaPlus3.classList.toggle("active");
    qnaPlus0.classList.remove("active");
    qnaPlus2.classList.remove("active");
    qnaPlus1.classList.remove("active");
    qnaPlus4.classList.remove("active");
    qnaPlus5.classList.remove("active");
})

qna[4].addEventListener('click', function(){
    ans[4].classList.toggle("active");  
    ans[1].classList.remove("active");  
    ans[2].classList.remove("active");  
    ans[3].classList.remove("active");  
    ans[0].classList.remove("active");  
    ans[5].classList.remove("active");  
    qnaPlus4.classList.toggle("active");
    qnaPlus0.classList.remove("active");
    qnaPlus2.classList.remove("active");
    qnaPlus3.classList.remove("active");
    qnaPlus1.classList.remove("active");
    qnaPlus5.classList.remove("active");
})

qna[5].addEventListener('click', function(){
    ans[5].classList.toggle("active");  
    ans[1].classList.remove("active");  
    ans[2].classList.remove("active");  
    ans[3].classList.remove("active");  
    ans[4].classList.remove("active");  
    ans[0].classList.remove("active");  
    qnaPlus5.classList.toggle("active");
    qnaPlus0.classList.remove("active");
    qnaPlus2.classList.remove("active");
    qnaPlus3.classList.remove("active");
    qnaPlus4.classList.remove("active");
    qnaPlus1.classList.remove("active");
})