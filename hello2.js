// 获取元素
const loginBtn = document.getElementById('login-btn');
const bindBtn = document.getElementById('bind-btn');
const oneKeyLoginBtn = document.getElementById('one-key-login-btn');
const forgetPwdBtn = document.getElementById('forget-pwd-btn');

// 模拟登录逻辑
loginBtn.addEventListener('click', function () {
  const account = document.getElementById('account').value;
  const password = document.getElementById('password').value;
  if (account && password) {
    alert('登录成功');
  } else {
    alert('请输入账号和密码');
  }
});

// 模拟绑定逻辑
bindBtn.addEventListener('click', function () {
  alert('绑定功能暂未实现');
});

// 模拟一键登录逻辑
oneKeyLoginBtn.addEventListener('click', function () {
  alert('一键登录成功');
});

// 模拟忘记密码逻辑
forgetPwdBtn.addEventListener('click', function () {
  alert('请联系管理员找回密码');
});