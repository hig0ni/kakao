//로그인 여부 판단
exports.isLoggedIn = (req, res, next) => {
    //로그인 되어 있으면 다음 라우터 처리를 수행하고 그렇지 않으면 에러 발생
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
}
//로그인 하지 않은 경우를 판단
exports.isNotLoggedIn = (req, res, next) => {
    //로그인 되어 있지 않았다면 다음으로 넘어가고 그렇지 않으면 리다이렉트
    if (!req.isAuthenticated()) {
      next();
    } else {
        //메시지를 생성하는 query string(parameter)로
        //사용할 것이라서 encoding을 해주어야 한다.
        const message = encodeURIComponent('로그인한 상태입니다.');
        //이전 request 객체의 내용을 모두 삭제하고
        //새로운 요청 흐름을 만드는 것으로 새로 고침을 하면
        //결과 화면만 새로고침 된다.
        res.redirect(`/?error=${message}`);
    }
}

  